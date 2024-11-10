import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import "./chunk-YRJTWU7C.js";

// src/organigram/organigram.js
var Organigram = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.draw();
  }
  /**
   * Draws (renders) the organigram with the current nodes.
   * @private
   */
  draw() {
    this.source = this.jq.children("ul");
    this.target = this.jq.children("div");
    this.target.empty();
    this.drawNode(this.source.find("li:first").data("rowkey"), this.source.find("li:first"), this.target, 0, 0);
    this.setupSelection();
    this.setupDragAndDrop();
    this.setupControls();
  }
  /**
   * Sets up the event listeners for when a node is selected.
   * @private
   */
  setupSelection() {
    var widget = this;
    var selectableNodes = this.target.find(".ui-organigram-node.selectable");
    selectableNodes.on("click", function() {
      widget.selectNode(widget, $(this), "select");
    });
    if (this.cfg.autoScrollToSelection === true) {
      this.scrollToSelection();
    }
  }
  /**
   * Selects the given organigram node.
   * @private
   * @param {PrimeFaces.widget.Organigram} widget This widget instance.
   * @param {JQuery} node The node to select, with the class `.ui-organigram-node`.
   * @param {string} event Name of the event that triggered the selection, usually `select` or `contextmenu`.
   */
  selectNode(widget, node, event) {
    if (!node.hasClass("selected")) {
      widget.target.find(".ui-organigram-node.selected").removeClass("selected");
      node.addClass("selected");
      if (widget.hasBehavior(event)) {
        var options = {
          params: [
            { name: widget.id + "_selectNode", value: node.data("rowkey") }
          ]
        };
        widget.cfg.behaviors[event].call(widget, options);
      }
    }
  }
  /**
   * Sets up the event listeners for dragging and dropping nodes.
   * @private
   */
  setupDragAndDrop() {
    var widget = this;
    var nodes = this.target.find(".ui-organigram-node");
    var draggableNodes = nodes.filter(".draggable");
    var droppableNodes = nodes.filter(".droppable");
    var initialDragPosition = {
      x: 0,
      y: 0
    };
    draggableNodes.draggable({
      zIndex: 100,
      opacity: 0.7,
      cursor: "move",
      helper: "clone",
      distance: 60,
      revert: "invalid",
      revertDuration: 200,
      snapMode: "inner",
      // overwrite start/drag to support browser scaling/zooming
      start: function(event) {
        initialDragPosition.x = event.clientX;
        initialDragPosition.y = event.clientY;
      },
      drag: function(event, ui) {
        var original = ui.originalPosition;
        var zoomFactor = widget.zoomFactor || 1;
        ui.position = {
          left: (event.clientX - initialDragPosition.x + original.left) / zoomFactor,
          top: (event.clientY - initialDragPosition.y + original.top) / zoomFactor
        };
      }
    });
    droppableNodes.droppable({
      accept: ".ui-organigram-node.draggable",
      tolerance: "pointer",
      activeClass: "drag-active",
      hoverClass: "drop-hover",
      zoomFactor: function() {
        return widget.zoomFactor || 1;
      }
    });
    droppableNodes.on("drop", function(event, ui) {
      var targetId = $(this).data("rowkey");
      var targetLi = widget.source.find("li").filter(function() {
        return $(this).data("rowkey") === targetId;
      });
      var targetUl = targetLi.children("ul");
      var sourceId = ui.draggable.data("rowkey");
      var sourceLi = widget.source.find("li").filter(function() {
        return $(this).data("rowkey") === sourceId;
      });
      var sourceUl = sourceLi.parent("ul");
      var ignore = false;
      if (sourceLi.data("parent-rowkey") === targetId) {
        ignore = true;
      }
      if (targetLi.data("parent-rowkey") === sourceId) {
        ignore = true;
      }
      targetLi.parents().each(function() {
        if ($(this).data("parent-rowkey") === sourceId) {
          ignore = true;
          return false;
        }
      });
      if (ignore) {
        return false;
      }
      if (targetUl.length > 0) {
        targetUl.append(sourceLi);
      } else {
        targetLi.append("<ul></ul>");
        targetLi.children("ul").append(sourceLi);
      }
      if (sourceUl.children().length === 0) {
        sourceUl.remove();
      }
      var oldParent = widget.source.find("li").filter(function() {
        return $(this).data("rowkey") === sourceLi.data("parent-rowkey");
      });
      if (oldParent.children("ul").length === 0) {
        oldParent.addClass("leaf");
      }
      targetLi.removeClass("leaf");
      sourceLi.data("parent-rowkey", targetId);
      sourceLi.attr("data-parent-rowkey", targetId);
      if (widget.hasBehavior("dragdrop")) {
        var options = {
          params: [
            { name: widget.id + "_dragNode", value: sourceId },
            { name: widget.id + "_dropNode", value: targetId }
          ]
        };
        widget.cfg.behaviors["dragdrop"].call(widget, options);
      }
      widget.redraw = true;
    });
    draggableNodes.on("dragstop", function(event, ui) {
      if (widget.redraw) {
        widget.draw();
        widget.redraw = false;
      }
    });
  }
  /**
   * Sets up the buttons for the global controls, such as the buttons for zooming in and out.
   * @private
   */
  setupControls() {
    var widget = this;
    if (this.cfg.zoom) {
      this.jq.children(".controls").remove();
      var controls = $("<div class='controls'></div>").appendTo(this.jq);
      var controlsTable = $("<table></table>").appendTo(controls);
      if (!this.zoomFactor) {
        this.zoomFactor = 1;
      } else {
        this.zoom(this.zoomFactor);
      }
      var zoomIn = $("<tr><td><div class='control zoom-in' title='Zoom In'>&nbsp;</div></td></tr>").appendTo(controlsTable);
      zoomIn.on("click", function() {
        widget.zoomFactor += 0.1;
        widget.zoom(widget.zoomFactor);
      });
      var zoomOut = $("<tr><td><div class='control zoom-out' title='Zoom Out'>&nbsp;</div></td></tr>").appendTo(controlsTable);
      zoomOut.on("click", function() {
        widget.zoomFactor -= 0.1;
        widget.zoom(widget.zoomFactor);
      });
    }
  }
  /**
   * Applies the given zoom factor (scaling) to the organigram.
   *
   * @param {number} zoom The zoom factor. Must be a positive number. `1.0` means no zoom, `2.0` means zoomed-in,
   * `0.5` means zoomed-out.
   */
  zoom(zoom) {
    var element = this.target.find(">:first-child");
    element.css("-moz-transform", "scale(" + zoom + ")");
    element.css("-moz-transform-origin", "0 0");
    element.css("-o-transform", "scale(" + zoom + ")");
    element.css("-o-transform-origin", "0 0");
    element.css("-webkit-transform", "scale(" + zoom + ")");
    element.css("-webkit-transform-origin", "0 0");
    element.css("transform", "scale(" + zoom + ")");
    element.css("transform-origin", "0 0");
  }
  /**
   * Draws the given organigram node.
   * @private
   * @param {string} parentRowKey Row key of the node to draw.
   * @param {JQuery} nodeSource Element of the node to draw.
   * @param {JQuery} appendTo Element to which the node is appended.
   * @param {number} level Nesting level of the node.
   */
  drawNode(parentRowKey, nodeSource, appendTo, level) {
    var childNodes = nodeSource.children("ul:first").children("li");
    var isLastLevel = childNodes.length === 0;
    var nodeContent = nodeSource.clone().children("ul,li").remove().end().html();
    var node = $("<div>");
    node.attr("class", nodeSource.attr("class"));
    node.attr("style", nodeSource.attr("style"));
    node.addClass("ui-organigram-node");
    node.addClass("level-" + level);
    node.attr("data-level", level);
    node.attr("data-rowkey", nodeSource.data("rowkey"));
    node.attr("data-parent-rowkey", parentRowKey);
    var topIconContainer = $("<div class='ui-organigram-icon-container'></div>").appendTo(node);
    if (nodeSource.data("icon")) {
      var icon = $("<div class='ui-organigram-icon ui-icon'></div>").appendTo(topIconContainer);
      icon.addClass(nodeSource.data("icon"));
      var iconPos = nodeSource.data("icon-pos");
      if (iconPos && (iconPos === "left" || iconPos === "right")) {
        icon.addClass(nodeSource.data("icon-pos"));
      }
    }
    node.append(nodeContent);
    var bottomIconContainer = $("<div class='ui-organigram-icon-container'></div>").appendTo(node);
    if (isLastLevel) {
      appendTo.append(node);
    } else if (childNodes.length > 0) {
      var table = $("<table cellpadding='0' cellspacing='0' border='0'></table>").appendTo(appendTo);
      var row = $("<tr></tr>").appendTo(table);
      var leafChildNodes = childNodes.filter(".leaf:not(.skip-leaf)");
      var nonLeafChildNodes = childNodes.filter(":not(.leaf),.skip-leaf");
      var childNodeCount = nonLeafChildNodes.length;
      if (leafChildNodes && leafChildNodes.length > 0) {
        childNodeCount += 1;
      }
      var cell = $("<td colspan='" + childNodeCount * 2 + "'></td>").appendTo(row);
      cell.append(node);
      this.addExpander(nodeSource, node, bottomIconContainer);
      this.drawLines(childNodeCount, table);
      this.drawChildNodes(nodeSource.data("rowkey"), leafChildNodes, nonLeafChildNodes, table, level);
      if (nodeSource.hasClass("collapsed")) {
        var collapsedIcon = "ui-icon-plusthick";
        if (nodeSource.data("collapsed-icon")) {
          collapsedIcon = nodeSource.data("collapsed-icon");
        }
        var expandedIcon = "ui-icon-minusthick";
        if (nodeSource.data("expanded-icon")) {
          expandedIcon = nodeSource.data("expanded-icon");
        }
        row.nextAll("tr").hide();
        node.find(".expander").removeClass(expandedIcon).addClass(collapsedIcon);
      } else {
        if (!nodeSource.hasClass("expanded")) {
          node.addClass("expanded");
        }
      }
    }
  }
  /**
   * Adds an expander button for expanding or collapsing the given node.
   * @private
   * @param {JQuery} nodeSource Node to use as a source.
   * @param {JQuery} node Node to collapse and expand.
   * @param {JQuery} bottomIconContainer Container element to which the expander button is added.
   */
  addExpander(nodeSource, node, bottomIconContainer) {
    if (node.hasClass("collapsible")) {
      var collapsedIcon = nodeSource.data("collapsed-icon") ? nodeSource.data("collapsed-icon") : "ui-icon-plusthick";
      var expandedIcon = nodeSource.data("expanded-icon") ? nodeSource.data("expanded-icon") : "ui-icon-minusthick";
      var initialIcon = node.hasClass("collapsed") ? collapsedIcon : expandedIcon;
      var widget = this;
      var expander = $("<div class='expander ui-icon " + initialIcon + "'>&nbsp;</div>").appendTo(bottomIconContainer);
      expander.on("click", function(e) {
        var expander2 = $(this);
        var node2 = expander2.closest(".ui-organigram-node");
        var row = node2.closest("tr");
        if (node2.hasClass("collapsed")) {
          node2.removeClass("collapsed").addClass("expanded");
          expander2.removeClass(collapsedIcon).addClass(expandedIcon);
          row.nextAll("tr").show();
          nodeSource.removeClass("collapsed");
          if (widget.hasBehavior("expand")) {
            var options = {
              params: [
                { name: widget.id + "_expandNode", value: node2.data("rowkey") }
              ]
            };
            widget.cfg.behaviors["expand"].call(widget, options);
          }
        } else {
          node2.removeClass("expanded").addClass("collapsed");
          expander2.removeClass(expandedIcon).addClass(collapsedIcon);
          row.nextAll("tr").hide();
          nodeSource.addClass("collapsed");
          if (widget.hasBehavior("collapse")) {
            var options = {
              params: [
                { name: widget.id + "_collapseNode", value: node2.data("rowkey") }
              ]
            };
            widget.cfg.behaviors["collapse"].call(widget, options);
          }
        }
        e.stopPropagation();
      });
    }
  }
  /**
   * Draws the lines connecting the nodes.
   * @private
   * @param {number} childNodeCount Number of children in the sub table.
   * @param {JQuery} table The DOM element for the sub table for which to draw the children.
   */
  drawLines(childNodeCount, table) {
    var verticalColspan = childNodeCount * 2;
    var verticalRow = $("<tr></tr>").appendTo(table);
    var verticalCell = $("<td colspan='" + verticalColspan + "'></td>").appendTo(verticalRow);
    verticalCell.append($("<div class='line down'></div>"));
    var horizontalRow = $("<tr></tr>").appendTo(table);
    for (var i = 0; i < childNodeCount; i++) {
      horizontalRow.append($("<td class='line left top'></td>"));
      horizontalRow.append($("<td class='line right top'></td>"));
    }
    horizontalRow.find("td:first").removeClass("top");
    horizontalRow.find("td:last").removeClass("top");
  }
  /**
   * Draws the child nodes of the given parent node.
   * @private
   * @param {string} parentRowKey Row key of the parent node with children to draw.
   * @param {JQuery} leafChildNodes  Children of the parent that are leaf nodes, i.e. do no have any children.
   * @param {JQuery} nonLeafChildNodes Children of the parent that are not leaf nodes, i.e. do have at least one
   * child.
   * @param {JQuery} table The DOM element for the sub table for which to draw the children.
   * @param {number} level The nesting level of the parent node.
   */
  drawChildNodes(parentRowKey, leafChildNodes, nonLeafChildNodes, table, level) {
    var row = $("<tr></tr>").appendTo(table);
    if (leafChildNodes && leafChildNodes.length > 0) {
      var cell = $("<td colspan='2'></td>").appendTo(row);
      var leafTable = $("<table cellpadding='0' cellspacing='0' border='0'></table>").appendTo(cell);
      for (var j = 0; j < leafChildNodes.length; j++) {
        if (j !== 0 && this.cfg.leafNodeConnectorHeight > 0) {
          leafTable.append($("<tr><td><div class='line down' style='height:" + this.cfg.leafNodeConnectorHeight + "px'></div></td></tr>"));
        }
        var leafRow = $("<tr></tr>").appendTo(leafTable);
        var leafCell = $("<td></td>").appendTo(leafRow);
        var childNode = $(leafChildNodes[j]);
        this.drawNode(parentRowKey, childNode, leafCell, level + 1);
      }
    }
    for (var i = 0; i < nonLeafChildNodes.length; i++) {
      var cell = $("<td colspan='2'></td>").appendTo(row);
      var childNode = $(nonLeafChildNodes[i]);
      this.drawNode(parentRowKey, childNode, cell, level + 1);
    }
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.widget.ContextMenu} menuWidget
   * @param {PrimeFaces.widget.Organigram} targetWidget
   * @param {string} targetId
   * @param {PrimeFaces.widget.ContextMenuCfg} cfg
   */
  bindContextMenu(menuWidget, targetWidget, targetId, cfg) {
    var selector = targetId + " .ui-organigram-node.selectable", event = cfg.event + ".organigram" + this.id;
    if (cfg.nodeType) {
      selector += "." + cfg.nodeType;
    }
    $(document).off(event, selector).on(event, selector, null, function(e) {
      targetWidget.selectNode(targetWidget, $(this), "contextmenu");
      menuWidget.show(e);
    });
    this.addDestroyListener(function() {
      $(document).off(event);
    });
  }
  /**
   * Scrolls the organigram to the currently selected node, so that the node is in view.
   */
  scrollToSelection() {
    var selection = this.target.find(".ui-organigram-node.selected");
    if (selection.length > 0) {
      var offset = selection.offset();
      this.target.animate({
        scrollTop: offset.top,
        scrollLeft: offset.left
      }, {
        easing: "easeInCirc"
      }, 1e3);
    }
  }
};
export {
  Organigram
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL29yZ2FuaWdyYW0vb3JnYW5pZ3JhbS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQmFzZVdpZGdldCB9IGZyb20gXCIuLi9jb3JlL2NvcmUud2lkZ2V0LmpzXCI7XG5cbi8qKlxuICogX19QcmltZUZhY2VzIE9yZ2FuaWdyYW0gV2lkZ2V0X19cbiAqIFxuICogT3JnYW5pZ3JhbSBpcyBhIGRhdGEgY29tcG9uZW50IHRvIGRpc3BsYXkgYW4gb3JnYW5pemF0aW9uYWwgaGllcmFyY2h5LlxuICogXG4gKiBAaW1wbGVtZW50cyB7UHJpbWVGYWNlcy53aWRnZXQuQ29udGV4dE1lbnUuQ29udGV4dE1lbnVQcm92aWRlcjxQcmltZUZhY2VzLndpZGdldC5PcmdhbmlncmFtPn1cbiAqIFxuICogQHByb3Age2Jvb2xlYW59IHJlZHJhdyBXaGV0aGVyIHRoZSBvcmdhbmlncmFtIHJlcXVpcmVzIHJlZHJhd2luZy5cbiAqIEBwcm9wIHtKUXVlcnl9IHNvdXJjZSBUaGUgRE9NIGVsZW1lbnRzIGZvciB0aGUgc291cmNlIG5vZGVzIHdoZW4gZHJhd2luZyB0aGUgbGluZXMgY29ubmVjdGluZyB0d28gbm9kZXMuXG4gKiBAcHJvcCB7SlF1ZXJ5fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50cyBmb3IgdGhlIHRhcmdldCBub2RlcyB3aGVuIGRyYXdpbmcgdGhlIGxpbmVzIGNvbm5lY3RpbmcgdHdvIG5vZGVzLlxuICogQHByb3Age251bWJlcn0gem9vbUZhY3RvciBUaGUgY3VycmVudCB6b29tIGZhY3RvciBvZiB0aGUgb3JnYW5pZ3JhbS5cbiAqIFxuICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy53aWRnZXQuT3JnYW5pZ3JhbUNmZ30gY2ZnIFRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rICBPcmdhbmlncmFtfCBPcmdhbmlncmFtIHdpZGdldH0uXG4gKiBZb3UgY2FuIGFjY2VzcyB0aGlzIGNvbmZpZ3VyYXRpb24gdmlhIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmNmZ3xCYXNlV2lkZ2V0LmNmZ30uIFBsZWFzZSBub3RlIHRoYXQgdGhpc1xuICogY29uZmlndXJhdGlvbiBpcyB1c3VhbGx5IG1lYW50IHRvIGJlIHJlYWQtb25seSBhbmQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC5cbiAqIEBleHRlbmRzIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0Q2ZnfSBjZmdcbiAqIFxuICogQHByb3Age3N0cmluZ30gY2ZnLmV2ZW50IEJhc2UgbmFtZXNwYWNlIGZvciB0aGUgZXZlbnRzIHRyaWdnZXJlZCBieSB0aGlzIHdpZGdldC5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5sZWFmTm9kZUNvbm5lY3RvckhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBjb25uZWN0b3IgbGluZSBmb3IgbGVhZiBub2Rlcy5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuem9vbSBXaGV0aGVyIHpvb21pbmcgaXMgZW5hYmxlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIE9yZ2FuaWdyYW0gZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIGluaXQoY2ZnKSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyAocmVuZGVycykgdGhlIG9yZ2FuaWdyYW0gd2l0aCB0aGUgY3VycmVudCBub2Rlcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5qcS5jaGlsZHJlbigndWwnKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLmpxLmNoaWxkcmVuKCdkaXYnKTtcbiAgICAgICAgdGhpcy50YXJnZXQuZW1wdHkoKTtcblxuICAgICAgICB0aGlzLmRyYXdOb2RlKHRoaXMuc291cmNlLmZpbmQoJ2xpOmZpcnN0JykuZGF0YShcInJvd2tleVwiKSwgdGhpcy5zb3VyY2UuZmluZCgnbGk6Zmlyc3QnKSwgdGhpcy50YXJnZXQsIDAsIDApO1xuXG4gICAgICAgIHRoaXMuc2V0dXBTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5zZXR1cERyYWdBbmREcm9wKCk7XG4gICAgICAgIHRoaXMuc2V0dXBDb250cm9scygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGV2ZW50IGxpc3RlbmVycyBmb3Igd2hlbiBhIG5vZGUgaXMgc2VsZWN0ZWQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzZXR1cFNlbGVjdGlvbigpIHtcbiAgICAgICAgdmFyIHdpZGdldCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHNlbGVjdGFibGVOb2RlcyA9IHRoaXMudGFyZ2V0LmZpbmQoXCIudWktb3JnYW5pZ3JhbS1ub2RlLnNlbGVjdGFibGVcIik7XG4gICAgICAgIHNlbGVjdGFibGVOb2Rlcy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2lkZ2V0LnNlbGVjdE5vZGUod2lkZ2V0LCAkKHRoaXMpLCBcInNlbGVjdFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2ZnLmF1dG9TY3JvbGxUb1NlbGVjdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgZ2l2ZW4gb3JnYW5pZ3JhbSBub2RlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5PcmdhbmlncmFtfSB3aWRnZXQgVGhpcyB3aWRnZXQgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtKUXVlcnl9IG5vZGUgVGhlIG5vZGUgdG8gc2VsZWN0LCB3aXRoIHRoZSBjbGFzcyBgLnVpLW9yZ2FuaWdyYW0tbm9kZWAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSBzZWxlY3Rpb24sIHVzdWFsbHkgYHNlbGVjdGAgb3IgYGNvbnRleHRtZW51YC5cbiAgICAgKi9cbiAgICBzZWxlY3ROb2RlKHdpZGdldCwgbm9kZSwgZXZlbnQpIHtcbiAgICAgICAgaWYgKCFub2RlLmhhc0NsYXNzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgIHdpZGdldC50YXJnZXQuZmluZChcIi51aS1vcmdhbmlncmFtLW5vZGUuc2VsZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIG5vZGUuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgICAgICAgaWYgKHdpZGdldC5oYXNCZWhhdmlvcihldmVudCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogd2lkZ2V0LmlkICsgXCJfc2VsZWN0Tm9kZVwiLCB2YWx1ZTogbm9kZS5kYXRhKFwicm93a2V5XCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuY2ZnLmJlaGF2aW9yc1tldmVudF0uY2FsbCh3aWRnZXQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciBkcmFnZ2luZyBhbmQgZHJvcHBpbmcgbm9kZXMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzZXR1cERyYWdBbmREcm9wKCkge1xuICAgICAgICB2YXIgd2lkZ2V0ID0gdGhpcztcblxuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnRhcmdldC5maW5kKFwiLnVpLW9yZ2FuaWdyYW0tbm9kZVwiKTtcbiAgICAgICAgdmFyIGRyYWdnYWJsZU5vZGVzID0gbm9kZXMuZmlsdGVyKFwiLmRyYWdnYWJsZVwiKTtcbiAgICAgICAgdmFyIGRyb3BwYWJsZU5vZGVzID0gbm9kZXMuZmlsdGVyKFwiLmRyb3BwYWJsZVwiKTtcblxuICAgICAgICB2YXIgaW5pdGlhbERyYWdQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIGRyYWdnYWJsZU5vZGVzLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICB6SW5kZXg6IDEwMCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICAgICAgICAgIGN1cnNvcjogXCJtb3ZlXCIsXG4gICAgICAgICAgICBoZWxwZXI6IFwiY2xvbmVcIixcbiAgICAgICAgICAgIGRpc3RhbmNlOiA2MCxcbiAgICAgICAgICAgIHJldmVydDogXCJpbnZhbGlkXCIsXG4gICAgICAgICAgICByZXZlcnREdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgc25hcE1vZGU6IFwiaW5uZXJcIixcbiAgICAgICAgICAgIC8vIG92ZXJ3cml0ZSBzdGFydC9kcmFnIHRvIHN1cHBvcnQgYnJvd3NlciBzY2FsaW5nL3pvb21pbmdcbiAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGluaXRpYWxEcmFnUG9zaXRpb24ueCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICAgICAgaW5pdGlhbERyYWdQb3NpdGlvbi55ID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWwgPSB1aS5vcmlnaW5hbFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHZhciB6b29tRmFjdG9yID0gd2lkZ2V0Lnpvb21GYWN0b3IgfHwgMS4wO1xuICAgICAgICAgICAgICAgIHVpLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAoZXZlbnQuY2xpZW50WCAtIGluaXRpYWxEcmFnUG9zaXRpb24ueCArIG9yaWdpbmFsLmxlZnQpIC8gem9vbUZhY3RvcixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAgKGV2ZW50LmNsaWVudFkgLSBpbml0aWFsRHJhZ1Bvc2l0aW9uLnkgKyBvcmlnaW5hbC50b3AgKSAvIHpvb21GYWN0b3JcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkcm9wcGFibGVOb2Rlcy5kcm9wcGFibGUoe1xuICAgICAgICAgICAgYWNjZXB0OiBcIi51aS1vcmdhbmlncmFtLW5vZGUuZHJhZ2dhYmxlXCIsXG4gICAgICAgICAgICB0b2xlcmFuY2U6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M6IFwiZHJhZy1hY3RpdmVcIixcbiAgICAgICAgICAgIGhvdmVyQ2xhc3M6IFwiZHJvcC1ob3ZlclwiLFxuICAgICAgICAgICAgem9vbUZhY3RvcjogZnVuY3Rpb24oKSB7cmV0dXJuIHdpZGdldC56b29tRmFjdG9yIHx8IDEuMH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZHJvcCAmIGRyb3AgaGFwcGVucyBpbiB0aGUgdGFyZ2V0IGRvbVxuICAgICAgICAvLyBidXQgbW92aW5nIHRoZSBhY3R1YWwgbm9kZXMgaGFwcGVucyBpbiB0aGUgc291cmNlIGxpL3VsIGRvbVxuICAgICAgICAvLyBhZnRlciBkcm9wcGluZywgd2UgcmVkcmF3IHRoZSBvcmdhbmlncmFtIGZyb20gdGhlIHNvdXJjZVxuICAgICAgICBkcm9wcGFibGVOb2Rlcy5vbihcImRyb3BcIiwgZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuXG4gICAgICAgICAgICAvLyBsb29rdXAgdGFyZ2V0IG5vZGUgaW4gc291cmNlIERPTVxuICAgICAgICAgICAgdmFyIHRhcmdldElkID0gJCh0aGlzKS5kYXRhKFwicm93a2V5XCIpO1xuICAgICAgICAgICAgdmFyIHRhcmdldExpID0gd2lkZ2V0LnNvdXJjZS5maW5kKFwibGlcIikuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5kYXRhKFwicm93a2V5XCIpID09PSB0YXJnZXRJZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHRhcmdldFVsID0gdGFyZ2V0TGkuY2hpbGRyZW4oXCJ1bFwiKTtcblxuICAgICAgICAgICAgLy8gbG9va3VwIHNvdXJjZSBub2RlIGluIHNvdXJjZSBET01cbiAgICAgICAgICAgIHZhciBzb3VyY2VJZCA9IHVpLmRyYWdnYWJsZS5kYXRhKFwicm93a2V5XCIpO1xuICAgICAgICAgICAgdmFyIHNvdXJjZUxpID0gd2lkZ2V0LnNvdXJjZS5maW5kKFwibGlcIikuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5kYXRhKFwicm93a2V5XCIpID09PSBzb3VyY2VJZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHNvdXJjZVVsID0gc291cmNlTGkucGFyZW50KFwidWxcIik7XG5cbiAgICAgICAgICAgIC8vIGlnbm9yZSB0aGUgY3VycmVudCBkcm9wP1xuICAgICAgICAgICAgdmFyIGlnbm9yZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBpZ25vcmUgbW92aW5nIHRvIHRoZSBjdXJyZW50IHBhcmVudFxuICAgICAgICAgICAgaWYgKHNvdXJjZUxpLmRhdGEoXCJwYXJlbnQtcm93a2V5XCIpID09PSB0YXJnZXRJZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZ25vcmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZ25vcmUgbW92aW5nIHRvIHRoZSBkaXJlY3QgY2hpbGRcbiAgICAgICAgICAgIGlmICh0YXJnZXRMaS5kYXRhKFwicGFyZW50LXJvd2tleVwiKSA9PT0gc291cmNlSWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWdub3JlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWdub3JlIG1vdmluZyB0byBjaGlsZHNcbiAgICAgICAgICAgIHRhcmdldExpLnBhcmVudHMoKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmRhdGEoXCJwYXJlbnQtcm93a2V5XCIpID09PSBzb3VyY2VJZCkge1xuICAgICAgICAgICAgICAgICAgICBpZ25vcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBuZXcgY2hpbGRyZW5cbiAgICAgICAgICAgIGlmICh0YXJnZXRVbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VWwuYXBwZW5kKHNvdXJjZUxpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldExpLmFwcGVuZChcIjx1bD48L3VsPlwiKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMaS5jaGlsZHJlbihcInVsXCIpLmFwcGVuZChzb3VyY2VMaSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBlbXB0eVxuICAgICAgICAgICAgaWYgKHNvdXJjZVVsLmNoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc291cmNlVWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBcImxlYWZcIiBjbGFzcyBpZiB0aGUgbGFzdCBpdGVtIHdhcyByZW1vdmVkIGZyb20gdGhlIHBhcmVudFxuICAgICAgICAgICAgdmFyIG9sZFBhcmVudCA9IHdpZGdldC5zb3VyY2UuZmluZChcImxpXCIpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykuZGF0YShcInJvd2tleVwiKSA9PT0gc291cmNlTGkuZGF0YShcInBhcmVudC1yb3drZXlcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnQuY2hpbGRyZW4oXCJ1bFwiKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBvbGRQYXJlbnQuYWRkQ2xhc3MoXCJsZWFmXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgbGVhdmUgY2xhc3MgaWYgYSBub2RlIHdhcyBhZGRlZCB0byBhIGxlYWYgbm9kZVxuICAgICAgICAgICAgdGFyZ2V0TGkucmVtb3ZlQ2xhc3MoXCJsZWFmXCIpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgcGFyZW50XG4gICAgICAgICAgICBzb3VyY2VMaS5kYXRhKFwicGFyZW50LXJvd2tleVwiLCB0YXJnZXRJZCk7XG4gICAgICAgICAgICBzb3VyY2VMaS5hdHRyKFwiZGF0YS1wYXJlbnQtcm93a2V5XCIsIHRhcmdldElkKTtcblxuICAgICAgICAgICAgLy8gY2FsbCBiZWhhdmlvclxuICAgICAgICAgICAgaWYgKHdpZGdldC5oYXNCZWhhdmlvcihcImRyYWdkcm9wXCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IHdpZGdldC5pZCArIFwiX2RyYWdOb2RlXCIsIHZhbHVlOiBzb3VyY2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IHdpZGdldC5pZCArIFwiX2Ryb3BOb2RlXCIsIHZhbHVlOiB0YXJnZXRJZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmNmZy5iZWhhdmlvcnNbXCJkcmFnZHJvcFwiXS5jYWxsKHdpZGdldCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpZGdldC5yZWRyYXcgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZWRyYXcgZnJvbSBzb3VyY2UgYWZ0ZXIgZHJvcFxuICAgICAgICBkcmFnZ2FibGVOb2Rlcy5vbihcImRyYWdzdG9wXCIsIGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgIC8vIHJlZHJhdyBvbmx5IGlmIHRoZSBpdGVtIHdhcyBkcm9wcGVkIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgICAgaWYgKHdpZGdldC5yZWRyYXcpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuZHJhdygpO1xuXG4gICAgICAgICAgICAgICAgd2lkZ2V0LnJlZHJhdyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBidXR0b25zIGZvciB0aGUgZ2xvYmFsIGNvbnRyb2xzLCBzdWNoIGFzIHRoZSBidXR0b25zIGZvciB6b29taW5nIGluIGFuZCBvdXQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzZXR1cENvbnRyb2xzKCkge1xuICAgICAgICB2YXIgd2lkZ2V0ID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jZmcuem9vbSkge1xuXG4gICAgICAgICAgICB0aGlzLmpxLmNoaWxkcmVuKFwiLmNvbnRyb2xzXCIpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICB2YXIgY29udHJvbHMgPSAkKFwiPGRpdiBjbGFzcz0nY29udHJvbHMnPjwvZGl2PlwiKS5hcHBlbmRUbyh0aGlzLmpxKTtcbiAgICAgICAgICAgIHZhciBjb250cm9sc1RhYmxlID0gJChcIjx0YWJsZT48L3RhYmxlPlwiKS5hcHBlbmRUbyhjb250cm9scyk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy56b29tRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b29tRmFjdG9yID0gMS4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b29tKHRoaXMuem9vbUZhY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB6b29tSW4gPSAkKFwiPHRyPjx0ZD48ZGl2IGNsYXNzPSdjb250cm9sIHpvb20taW4nIHRpdGxlPSdab29tIEluJz4mbmJzcDs8L2Rpdj48L3RkPjwvdHI+XCIpLmFwcGVuZFRvKGNvbnRyb2xzVGFibGUpO1xuICAgICAgICAgICAgem9vbUluLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0Lnpvb21GYWN0b3IgKz0gMC4xO1xuICAgICAgICAgICAgICAgIHdpZGdldC56b29tKHdpZGdldC56b29tRmFjdG9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgem9vbU91dCA9ICQoXCI8dHI+PHRkPjxkaXYgY2xhc3M9J2NvbnRyb2wgem9vbS1vdXQnIHRpdGxlPSdab29tIE91dCc+Jm5ic3A7PC9kaXY+PC90ZD48L3RyPlwiKS5hcHBlbmRUbyhjb250cm9sc1RhYmxlKTtcbiAgICAgICAgICAgIHpvb21PdXQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuem9vbUZhY3RvciAtPSAwLjE7XG4gICAgICAgICAgICAgICAgd2lkZ2V0Lnpvb20od2lkZ2V0Lnpvb21GYWN0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBnaXZlbiB6b29tIGZhY3RvciAoc2NhbGluZykgdG8gdGhlIG9yZ2FuaWdyYW0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gem9vbSBUaGUgem9vbSBmYWN0b3IuIE11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIuIGAxLjBgIG1lYW5zIG5vIHpvb20sIGAyLjBgIG1lYW5zIHpvb21lZC1pbixcbiAgICAgKiBgMC41YCBtZWFucyB6b29tZWQtb3V0LlxuICAgICAqL1xuICAgIHpvb20oem9vbSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMudGFyZ2V0LmZpbmQoXCI+OmZpcnN0LWNoaWxkXCIpO1xuICAgICAgICBlbGVtZW50LmNzcyhcIi1tb3otdHJhbnNmb3JtXCIsIFwic2NhbGUoXCIgKyB6b29tICsgXCIpXCIpO1xuICAgICAgICBlbGVtZW50LmNzcyhcIi1tb3otdHJhbnNmb3JtLW9yaWdpblwiLCBcIjAgMFwiKTtcbiAgICAgICAgZWxlbWVudC5jc3MoXCItby10cmFuc2Zvcm1cIiwgXCJzY2FsZShcIiArIHpvb20gKyBcIilcIik7XG4gICAgICAgIGVsZW1lbnQuY3NzKFwiLW8tdHJhbnNmb3JtLW9yaWdpblwiLCBcIjAgMFwiKTtcbiAgICAgICAgZWxlbWVudC5jc3MoXCItd2Via2l0LXRyYW5zZm9ybVwiLCBcInNjYWxlKFwiICsgem9vbSArIFwiKVwiKTtcbiAgICAgICAgZWxlbWVudC5jc3MoXCItd2Via2l0LXRyYW5zZm9ybS1vcmlnaW5cIiwgXCIwIDBcIik7XG4gICAgICAgIGVsZW1lbnQuY3NzKFwidHJhbnNmb3JtXCIsIFwic2NhbGUoXCIgKyB6b29tICsgXCIpXCIpO1xuICAgICAgICBlbGVtZW50LmNzcyhcInRyYW5zZm9ybS1vcmlnaW5cIiwgXCIwIDBcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhd3MgdGhlIGdpdmVuIG9yZ2FuaWdyYW0gbm9kZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRSb3dLZXkgUm93IGtleSBvZiB0aGUgbm9kZSB0byBkcmF3LlxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBub2RlU291cmNlIEVsZW1lbnQgb2YgdGhlIG5vZGUgdG8gZHJhdy5cbiAgICAgKiBAcGFyYW0ge0pRdWVyeX0gYXBwZW5kVG8gRWxlbWVudCB0byB3aGljaCB0aGUgbm9kZSBpcyBhcHBlbmRlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgTmVzdGluZyBsZXZlbCBvZiB0aGUgbm9kZS5cbiAgICAgKi9cbiAgICBkcmF3Tm9kZShwYXJlbnRSb3dLZXksIG5vZGVTb3VyY2UsIGFwcGVuZFRvLCBsZXZlbCkge1xuXG4gICAgICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZVNvdXJjZS5jaGlsZHJlbihcInVsOmZpcnN0XCIpLmNoaWxkcmVuKFwibGlcIik7XG4gICAgICAgIHZhciBpc0xhc3RMZXZlbCA9IGNoaWxkTm9kZXMubGVuZ3RoID09PSAwO1xuXG4gICAgICAgIC8vIGNsb25lIG5vZGUgY29udGVudCAtIGlnbm9yZSBzdWJub2Rlc1xuICAgICAgICB2YXIgbm9kZUNvbnRlbnQgPSBub2RlU291cmNlLmNsb25lKClcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCJ1bCxsaVwiKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIC5lbmQoKVxuICAgICAgICAgICAgICAgIC5odG1sKCk7XG5cbiAgICAgICAgdmFyIG5vZGUgPSAkKFwiPGRpdj5cIik7XG5cbiAgICAgICAgLy8gY29weSBjbGFzcyBhbmQgc3R5bGUgZnJvbSBzb3VyY2VcbiAgICAgICAgbm9kZS5hdHRyKFwiY2xhc3NcIiwgbm9kZVNvdXJjZS5hdHRyKFwiY2xhc3NcIikpO1xuICAgICAgICBub2RlLmF0dHIoXCJzdHlsZVwiLCBub2RlU291cmNlLmF0dHIoXCJzdHlsZVwiKSk7XG5cbiAgICAgICAgLy8gc3R5bGluZ1xuICAgICAgICBub2RlLmFkZENsYXNzKFwidWktb3JnYW5pZ3JhbS1ub2RlXCIpO1xuICAgICAgICBub2RlLmFkZENsYXNzKFwibGV2ZWwtXCIgKyBsZXZlbCk7XG5cbiAgICAgICAgLy8gc2V0IG1ldGFkYXRhXG4gICAgICAgIG5vZGUuYXR0cihcImRhdGEtbGV2ZWxcIiwgbGV2ZWwpO1xuICAgICAgICBub2RlLmF0dHIoXCJkYXRhLXJvd2tleVwiLCBub2RlU291cmNlLmRhdGEoXCJyb3drZXlcIikpO1xuICAgICAgICBub2RlLmF0dHIoXCJkYXRhLXBhcmVudC1yb3drZXlcIiwgcGFyZW50Um93S2V5KTtcblxuICAgICAgICAvLyB0b3AgaWNvbnNcbiAgICAgICAgdmFyIHRvcEljb25Db250YWluZXIgPSAkKFwiPGRpdiBjbGFzcz0ndWktb3JnYW5pZ3JhbS1pY29uLWNvbnRhaW5lcic+PC9kaXY+XCIpLmFwcGVuZFRvKG5vZGUpO1xuICAgICAgICBpZiAobm9kZVNvdXJjZS5kYXRhKFwiaWNvblwiKSkge1xuICAgICAgICAgICAgdmFyIGljb24gPSAkKFwiPGRpdiBjbGFzcz0ndWktb3JnYW5pZ3JhbS1pY29uIHVpLWljb24nPjwvZGl2PlwiKS5hcHBlbmRUbyh0b3BJY29uQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3Mobm9kZVNvdXJjZS5kYXRhKFwiaWNvblwiKSk7XG5cbiAgICAgICAgICAgIHZhciBpY29uUG9zID0gbm9kZVNvdXJjZS5kYXRhKFwiaWNvbi1wb3NcIik7XG4gICAgICAgICAgICBpZiAoaWNvblBvcyAmJiAoaWNvblBvcyA9PT0gXCJsZWZ0XCIgfHwgaWNvblBvcyA9PT0gXCJyaWdodFwiKSkge1xuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3Mobm9kZVNvdXJjZS5kYXRhKFwiaWNvbi1wb3NcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29udGVudFxuICAgICAgICBub2RlLmFwcGVuZChub2RlQ29udGVudCk7XG5cbiAgICAgICAgLy8gYm90dG9tIGljb25zXG4gICAgICAgIHZhciBib3R0b21JY29uQ29udGFpbmVyID0gJChcIjxkaXYgY2xhc3M9J3VpLW9yZ2FuaWdyYW0taWNvbi1jb250YWluZXInPjwvZGl2PlwiKS5hcHBlbmRUbyhub2RlKTtcblxuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHJlbmRlciBhIHRhYmxlIGluIHRoZSBsYXN0IGxldmVsIGFzIGl0IGNhbid0IGhhdmUgZnVydGhlciBjaGlsZHNcbiAgICAgICAgaWYgKGlzTGFzdExldmVsKSB7XG4gICAgICAgICAgICBhcHBlbmRUby5hcHBlbmQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgdGFibGUgPSAkKFwiPHRhYmxlIGNlbGxwYWRkaW5nPScwJyBjZWxsc3BhY2luZz0nMCcgYm9yZGVyPScwJz48L3RhYmxlPlwiKS5hcHBlbmRUbyhhcHBlbmRUbyk7XG4gICAgICAgICAgICB2YXIgcm93ID0gJChcIjx0cj48L3RyPlwiKS5hcHBlbmRUbyh0YWJsZSk7XG5cbiAgICAgICAgICAgIHZhciBsZWFmQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuZmlsdGVyKFwiLmxlYWY6bm90KC5za2lwLWxlYWYpXCIpO1xuICAgICAgICAgICAgdmFyIG5vbkxlYWZDaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5maWx0ZXIoXCI6bm90KC5sZWFmKSwuc2tpcC1sZWFmXCIpO1xuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZUNvdW50ID0gbm9uTGVhZkNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlYWZDaGlsZE5vZGVzICYmIGxlYWZDaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVDb3VudCArPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2VsbCA9ICQoXCI8dGQgY29sc3Bhbj0nXCIgKyAoY2hpbGROb2RlQ291bnQgKiAyKSArIFwiJz48L3RkPlwiKS5hcHBlbmRUbyhyb3cpO1xuICAgICAgICAgICAgY2VsbC5hcHBlbmQobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRXhwYW5kZXIobm9kZVNvdXJjZSwgbm9kZSwgYm90dG9tSWNvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmRyYXdMaW5lcyhjaGlsZE5vZGVDb3VudCwgdGFibGUpO1xuICAgICAgICAgICAgdGhpcy5kcmF3Q2hpbGROb2Rlcyhub2RlU291cmNlLmRhdGEoXCJyb3drZXlcIiksIGxlYWZDaGlsZE5vZGVzLCBub25MZWFmQ2hpbGROb2RlcywgdGFibGUsIGxldmVsKTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGluaXRpYWwgY29sbGFwc2VkIHN0YXRlXG4gICAgICAgICAgICBpZiAobm9kZVNvdXJjZS5oYXNDbGFzcyhcImNvbGxhcHNlZFwiKSkge1xuICAgICAgICAgICAgICAgIHZhciBjb2xsYXBzZWRJY29uID0gXCJ1aS1pY29uLXBsdXN0aGlja1wiO1xuICAgICAgICAgICAgICAgIGlmIChub2RlU291cmNlLmRhdGEoXCJjb2xsYXBzZWQtaWNvblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWRJY29uID0gbm9kZVNvdXJjZS5kYXRhKFwiY29sbGFwc2VkLWljb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBleHBhbmRlZEljb24gPSBcInVpLWljb24tbWludXN0aGlja1wiO1xuICAgICAgICAgICAgICAgIGlmIChub2RlU291cmNlLmRhdGEoXCJleHBhbmRlZC1pY29uXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkSWNvbiA9IG5vZGVTb3VyY2UuZGF0YShcImV4cGFuZGVkLWljb25cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaGlkZSBjaGlsZHNcbiAgICAgICAgICAgICAgICByb3cubmV4dEFsbChcInRyXCIpLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIHN3aXRjaCBleHBhbmRlciBpY29uc1xuICAgICAgICAgICAgICAgIG5vZGUuZmluZChcIi5leHBhbmRlclwiKS5yZW1vdmVDbGFzcyhleHBhbmRlZEljb24pLmFkZENsYXNzKGNvbGxhcHNlZEljb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlU291cmNlLmhhc0NsYXNzKFwiZXhwYW5kZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRDbGFzcyhcImV4cGFuZGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXhwYW5kZXIgYnV0dG9uIGZvciBleHBhbmRpbmcgb3IgY29sbGFwc2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBub2RlU291cmNlIE5vZGUgdG8gdXNlIGFzIGEgc291cmNlLlxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBub2RlIE5vZGUgdG8gY29sbGFwc2UgYW5kIGV4cGFuZC5cbiAgICAgKiBAcGFyYW0ge0pRdWVyeX0gYm90dG9tSWNvbkNvbnRhaW5lciBDb250YWluZXIgZWxlbWVudCB0byB3aGljaCB0aGUgZXhwYW5kZXIgYnV0dG9uIGlzIGFkZGVkLlxuICAgICAqL1xuICAgIGFkZEV4cGFuZGVyKG5vZGVTb3VyY2UsIG5vZGUsIGJvdHRvbUljb25Db250YWluZXIpIHtcblxuICAgICAgICBpZiAobm9kZS5oYXNDbGFzcyhcImNvbGxhcHNpYmxlXCIpKSB7XG5cbiAgICAgICAgICAgIHZhciBjb2xsYXBzZWRJY29uID0gbm9kZVNvdXJjZS5kYXRhKFwiY29sbGFwc2VkLWljb25cIikgPyBub2RlU291cmNlLmRhdGEoXCJjb2xsYXBzZWQtaWNvblwiKSA6IFwidWktaWNvbi1wbHVzdGhpY2tcIjtcbiAgICAgICAgICAgIHZhciBleHBhbmRlZEljb24gPSBub2RlU291cmNlLmRhdGEoXCJleHBhbmRlZC1pY29uXCIpID8gbm9kZVNvdXJjZS5kYXRhKFwiZXhwYW5kZWQtaWNvblwiKSA6IFwidWktaWNvbi1taW51c3RoaWNrXCI7XG4gICAgICAgICAgICB2YXIgaW5pdGlhbEljb24gPSBub2RlLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpID8gY29sbGFwc2VkSWNvbiA6IGV4cGFuZGVkSWNvbjtcblxuICAgICAgICAgICAgdmFyIHdpZGdldCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZXhwYW5kZXIgPSAkKFwiPGRpdiBjbGFzcz0nZXhwYW5kZXIgdWktaWNvbiBcIiArIGluaXRpYWxJY29uICsgXCInPiZuYnNwOzwvZGl2PlwiKS5hcHBlbmRUbyhib3R0b21JY29uQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgZXhwYW5kZXIub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIC8vIHJlaW5pdCBkb20gcmVmZXJlbmNlcyAtIHRoZXkgYXJlIGxvc3Qgc29tZXRpbWVzXG4gICAgICAgICAgICAgICAgdmFyIGV4cGFuZGVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGV4cGFuZGVyLmNsb3Nlc3QoXCIudWktb3JnYW5pZ3JhbS1ub2RlXCIpO1xuICAgICAgICAgICAgICAgIHZhciByb3cgPSBub2RlLmNsb3Nlc3QoXCJ0clwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIikuYWRkQ2xhc3MoXCJleHBhbmRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZXIucmVtb3ZlQ2xhc3MoY29sbGFwc2VkSWNvbikuYWRkQ2xhc3MoZXhwYW5kZWRJY29uKTtcblxuICAgICAgICAgICAgICAgICAgICByb3cubmV4dEFsbChcInRyXCIpLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBtYWludGFpbiBzdGF0ZSBpbiBzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgbm9kZVNvdXJjZS5yZW1vdmVDbGFzcyhcImNvbGxhcHNlZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsIGJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuaGFzQmVoYXZpb3IoXCJleHBhbmRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogd2lkZ2V0LmlkICsgXCJfZXhwYW5kTm9kZVwiLCB2YWx1ZTogbm9kZS5kYXRhKFwicm93a2V5XCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuY2ZnLmJlaGF2aW9yc1tcImV4cGFuZFwiXS5jYWxsKHdpZGdldCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2xhc3MoXCJleHBhbmRlZFwiKS5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZXIucmVtb3ZlQ2xhc3MoZXhwYW5kZWRJY29uKS5hZGRDbGFzcyhjb2xsYXBzZWRJY29uKTtcblxuICAgICAgICAgICAgICAgICAgICByb3cubmV4dEFsbChcInRyXCIpLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBtYWludGFpbiBzdGF0ZSBpbiBzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgbm9kZVNvdXJjZS5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsIGJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuaGFzQmVoYXZpb3IoXCJjb2xsYXBzZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiB3aWRnZXQuaWQgKyAnX2NvbGxhcHNlTm9kZScsIHZhbHVlOiBub2RlLmRhdGEoXCJyb3drZXlcIikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5jZmcuYmVoYXZpb3JzW1wiY29sbGFwc2VcIl0uY2FsbCh3aWRnZXQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYXZvaWQgYnViYmxpbmcgdG8gdGhlIHBhcmVudCBzZWxlY3QgY2xpY2sgaGFuZGxlclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXdzIHRoZSBsaW5lcyBjb25uZWN0aW5nIHRoZSBub2Rlcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjaGlsZE5vZGVDb3VudCBOdW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhlIHN1YiB0YWJsZS5cbiAgICAgKiBAcGFyYW0ge0pRdWVyeX0gdGFibGUgVGhlIERPTSBlbGVtZW50IGZvciB0aGUgc3ViIHRhYmxlIGZvciB3aGljaCB0byBkcmF3IHRoZSBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBkcmF3TGluZXMoY2hpbGROb2RlQ291bnQsIHRhYmxlKSB7XG5cbiAgICAgICAgLy8gZHJhdyB2ZXJ0aWNhbCByb3dcbiAgICAgICAgdmFyIHZlcnRpY2FsQ29sc3BhbiA9IGNoaWxkTm9kZUNvdW50ICogMjtcbiAgICAgICAgdmFyIHZlcnRpY2FsUm93ID0gJChcIjx0cj48L3RyPlwiKS5hcHBlbmRUbyh0YWJsZSk7XG4gICAgICAgIHZhciB2ZXJ0aWNhbENlbGwgPSAkKFwiPHRkIGNvbHNwYW49J1wiICsgdmVydGljYWxDb2xzcGFuICsgXCInPjwvdGQ+XCIpLmFwcGVuZFRvKHZlcnRpY2FsUm93KTtcbiAgICAgICAgdmVydGljYWxDZWxsLmFwcGVuZCgkKFwiPGRpdiBjbGFzcz0nbGluZSBkb3duJz48L2Rpdj5cIikpO1xuXG5cbiAgICAgICAgLy8gZHJhdyBob3Jpem9udGFsIHJvdy9jZWxsc1xuICAgICAgICB2YXIgaG9yaXpvbnRhbFJvdyA9ICQoXCI8dHI+PC90cj5cIikuYXBwZW5kVG8odGFibGUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGhvcml6b250YWxSb3cuYXBwZW5kKCQoXCI8dGQgY2xhc3M9J2xpbmUgbGVmdCB0b3AnPjwvdGQ+XCIpKTtcbiAgICAgICAgICAgIGhvcml6b250YWxSb3cuYXBwZW5kKCQoXCI8dGQgY2xhc3M9J2xpbmUgcmlnaHQgdG9wJz48L3RkPlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgdGhlIGxpbmUgZnJvbSB0aGUgZmlyc3QgYW5kIGxhc3QgY2VsbFxuICAgICAgICBob3Jpem9udGFsUm93LmZpbmQoXCJ0ZDpmaXJzdFwiKS5yZW1vdmVDbGFzcyhcInRvcFwiKTtcbiAgICAgICAgaG9yaXpvbnRhbFJvdy5maW5kKFwidGQ6bGFzdFwiKS5yZW1vdmVDbGFzcyhcInRvcFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyB0aGUgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHBhcmVudCBub2RlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudFJvd0tleSBSb3cga2V5IG9mIHRoZSBwYXJlbnQgbm9kZSB3aXRoIGNoaWxkcmVuIHRvIGRyYXcuXG4gICAgICogQHBhcmFtIHtKUXVlcnl9IGxlYWZDaGlsZE5vZGVzICBDaGlsZHJlbiBvZiB0aGUgcGFyZW50IHRoYXQgYXJlIGxlYWYgbm9kZXMsIGkuZS4gZG8gbm8gaGF2ZSBhbnkgY2hpbGRyZW4uXG4gICAgICogQHBhcmFtIHtKUXVlcnl9IG5vbkxlYWZDaGlsZE5vZGVzIENoaWxkcmVuIG9mIHRoZSBwYXJlbnQgdGhhdCBhcmUgbm90IGxlYWYgbm9kZXMsIGkuZS4gZG8gaGF2ZSBhdCBsZWFzdCBvbmVcbiAgICAgKiBjaGlsZC5cbiAgICAgKiBAcGFyYW0ge0pRdWVyeX0gdGFibGUgVGhlIERPTSBlbGVtZW50IGZvciB0aGUgc3ViIHRhYmxlIGZvciB3aGljaCB0byBkcmF3IHRoZSBjaGlsZHJlbi5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgVGhlIG5lc3RpbmcgbGV2ZWwgb2YgdGhlIHBhcmVudCBub2RlLlxuICAgICAqL1xuICAgIGRyYXdDaGlsZE5vZGVzKHBhcmVudFJvd0tleSwgbGVhZkNoaWxkTm9kZXMsIG5vbkxlYWZDaGlsZE5vZGVzLCB0YWJsZSwgbGV2ZWwpIHtcbiAgICAgICAgdmFyIHJvdyA9ICQoXCI8dHI+PC90cj5cIikuYXBwZW5kVG8odGFibGUpO1xuXG4gICAgICAgIC8vIGRyYXcgbGVhZiBub2RlcyBpbiBhIGRpZmZlcmVudCB3YXlcbiAgICAgICAgaWYgKGxlYWZDaGlsZE5vZGVzICYmIGxlYWZDaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBjZWxsID0gJChcIjx0ZCBjb2xzcGFuPScyJz48L3RkPlwiKS5hcHBlbmRUbyhyb3cpO1xuXG4gICAgICAgICAgICB2YXIgbGVhZlRhYmxlID0gJChcIjx0YWJsZSBjZWxscGFkZGluZz0nMCcgY2VsbHNwYWNpbmc9JzAnIGJvcmRlcj0nMCc+PC90YWJsZT5cIikuYXBwZW5kVG8oY2VsbCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGVhZkNoaWxkTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgY29ubmVjdG9yIGxpbmVcbiAgICAgICAgICAgICAgICBpZiAoaiAhPT0gMCAmJiB0aGlzLmNmZy5sZWFmTm9kZUNvbm5lY3RvckhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGVhZlRhYmxlLmFwcGVuZCgkKFwiPHRyPjx0ZD48ZGl2IGNsYXNzPSdsaW5lIGRvd24nIHN0eWxlPSdoZWlnaHQ6XCIgKyB0aGlzLmNmZy5sZWFmTm9kZUNvbm5lY3RvckhlaWdodCArIFwicHgnPjwvZGl2PjwvdGQ+PC90cj5cIikpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBsZWFmUm93ID0gJChcIjx0cj48L3RyPlwiKS5hcHBlbmRUbyhsZWFmVGFibGUpO1xuICAgICAgICAgICAgICAgIHZhciBsZWFmQ2VsbCA9ICQoXCI8dGQ+PC90ZD5cIikuYXBwZW5kVG8obGVhZlJvdyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gJChsZWFmQ2hpbGROb2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3Tm9kZShwYXJlbnRSb3dLZXksIGNoaWxkTm9kZSwgbGVhZkNlbGwsIGxldmVsICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkcmF3IG5vcm1hbCBub2Rlc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vbkxlYWZDaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2VsbCA9ICQoXCI8dGQgY29sc3Bhbj0nMic+PC90ZD5cIikuYXBwZW5kVG8ocm93KTtcblxuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZSA9ICQobm9uTGVhZkNoaWxkTm9kZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy5kcmF3Tm9kZShwYXJlbnRSb3dLZXksIGNoaWxkTm9kZSwgY2VsbCwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5Db250ZXh0TWVudX0gbWVudVdpZGdldFxuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuT3JnYW5pZ3JhbX0gdGFyZ2V0V2lkZ2V0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldElkXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5Db250ZXh0TWVudUNmZ30gY2ZnXG4gICAgICovXG4gICAgYmluZENvbnRleHRNZW51KG1lbnVXaWRnZXQsIHRhcmdldFdpZGdldCwgdGFyZ2V0SWQsIGNmZykge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSB0YXJnZXRJZCArIFwiIC51aS1vcmdhbmlncmFtLW5vZGUuc2VsZWN0YWJsZVwiLFxuICAgICAgICBldmVudCA9IGNmZy5ldmVudCArIFwiLm9yZ2FuaWdyYW1cIiArIHRoaXMuaWQ7XG5cbiAgICAgICAgaWYgKGNmZy5ub2RlVHlwZSkge1xuICAgICAgICAgICAgc2VsZWN0b3IgKz0gXCIuXCIgKyBjZmcubm9kZVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoZXZlbnQsIHNlbGVjdG9yKS5vbihldmVudCwgc2VsZWN0b3IsIG51bGwsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHRhcmdldFdpZGdldC5zZWxlY3ROb2RlKHRhcmdldFdpZGdldCwgJCh0aGlzKSwgXCJjb250ZXh0bWVudVwiKTtcbiAgICAgICAgICAgIG1lbnVXaWRnZXQuc2hvdyhlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRGVzdHJveUxpc3RlbmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0aGUgb3JnYW5pZ3JhbSB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG5vZGUsIHNvIHRoYXQgdGhlIG5vZGUgaXMgaW4gdmlldy5cbiAgICAgKi9cbiAgICBzY3JvbGxUb1NlbGVjdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHRoaXMudGFyZ2V0LmZpbmQoXCIudWktb3JnYW5pZ3JhbS1ub2RlLnNlbGVjdGVkXCIpO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBzZWxlY3Rpb24ub2Zmc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldC50b3AgLFxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IG9mZnNldC5sZWZ0XG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5DaXJjJ1xuICAgICAgICAgICAgfSwxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUF1Qk8sSUFBTSxhQUFOLGNBQXlCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPdkMsS0FBSyxLQUFLO0FBQ04sVUFBTSxLQUFLLEdBQUc7QUFFZCxTQUFLLEtBQUs7QUFBQSxFQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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
