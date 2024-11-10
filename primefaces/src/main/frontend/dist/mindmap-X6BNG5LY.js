import {
  require_raphael_min
} from "./chunk-FCA5FDVA.js";
import {
  DeferredWidget
} from "./chunk-HGD6GSK5.js";
import {
  __toESM
} from "./chunk-YRJTWU7C.js";

// src/mindmap/mindmap.js
var import_raphael = __toESM(require_raphael_min());
var Mindmap = class extends DeferredWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.renderDeferred();
  }
  /**
   * @include
   * @override
   * @protected
   * @inheritdoc
   */
  _render() {
    this.cfg.width = this.jq.width();
    this.cfg.height = this.jq.height();
    this.cfg.centerX = this.cfg.width / 2;
    this.cfg.centerY = this.cfg.height / 2;
    this.raphael = (0, import_raphael.default)(this.id, this.cfg.width, this.cfg.height);
    this.nodes = [];
    if (this.cfg.model) {
      this.root = this.createNode(this.cfg.centerX, this.cfg.centerY, this.cfg.model);
      if (this.cfg.model.children) {
        this.createSubNodes(this.root);
      }
    }
    this.tooltip = $('<div class="ui-tooltip ui-mindmap-tooltip ui-widget ui-widget-content ui-corner-all"></div>').appendTo(document.body);
  }
  /**
   * Creates a mindmap node at the given position for the given model.
   * @param {number} x Horizontal coordinate where the node is drawn.
   * @param {number} y Vertical coordinate where the node is drawn.
   * @param {PrimeFaces.widget.Mindmap.MindmapNode} model Model with the data describing the node to be created.
   * @return {import("raphael").RaphaelElement} The created node.
   * @private
   */
  createNode(x, y, model) {
    var node = this.raphael.ellipse(x, y, 40, 25).attr("opacity", 0).data("model", model).data("connections", []).data("widget", this.cfg.widgetVar);
    var label = model.label, nodeWidth = node.getBBox().width, title = null;
    var text = this.raphael.text(x, y, label).attr("opacity", 0);
    if (nodeWidth <= text.getBBox().width) {
      title = label;
      label = label.substring(0, 12);
      text.attr("text", label + "...");
    }
    text.data("node", node);
    node.data("text", text);
    if (model.fill) {
      node.attr({ fill: "#" + model.fill });
    }
    if (title) {
      node.data("title", title);
      node.mouseover(this.mouseoverNode);
      node.mouseout(this.mouseoutNode);
      text.mouseover(this.mouseoverText);
      text.mouseout(this.mouseoutText);
    }
    node.animate({ opacity: 1 }, this.cfg.effectSpeed);
    text.animate({ opacity: 1 }, this.cfg.effectSpeed);
    node.drag(this.nodeDrag, this.nodeDragStart, this.nodeDragEnd);
    text.drag(this.textDrag, this.textDragStart, this.textDragEnd);
    if (model.selectable) {
      node.click(this.clickNode);
      text.click(this.clickNodeText);
      node.attr({ cursor: "pointer" });
      text.attr({ cursor: "pointer" });
    }
    this.nodes.push(node);
    return node;
  }
  /**
   * Callback that is invoked when the mouse cursor was moved over a mindmap node.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  mouseoverNode() {
    var _self = PF(this.data("widget"));
    _self.showTooltip(this);
  }
  /**
   * Callback that is invoked when the mouse cursor was moved away from a mindmap node.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  mouseoutNode() {
    var _self = PF(this.data("widget"));
    _self.hideTooltip(this);
  }
  /**
   * Callback that is invoked when the mouse cursor was moved over a text label.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  mouseoverText() {
    var node = this.data("node"), _self = PF(node.data("widget"));
    _self.showTooltip(node);
  }
  /**
   * Callback that is invoked when the mouse cursor was moved away from a text label.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  mouseoutText() {
    var node = this.data("node"), _self = PF(node.data("widget"));
    _self.hideTooltip(node);
  }
  /**
   * Brings up the tooltip for the given node, it it is not shown already.
   * @param {import("raphael").RaphaelElement} node A node for which to show the tooltip. 
   */
  showTooltip(node) {
    var title = node.data("title");
    if (title) {
      var _self = PF(node.data("widget")), offset = _self.jq.offset();
      _self.tooltip.text(title).css(
        {
          "left": offset.left + node.attr("cx") + 20 + "px",
          "top": offset.top + node.attr("cy") + 10 + "px",
          "z-index": PrimeFaces.nextZindex()
        }
      ).show();
    }
  }
  /**
   * Hides the tooltip for the given node, it it is shown.
   * @param {import("raphael").RaphaelElement} node A node for which to hide the tooltip. 
   */
  hideTooltip(node) {
    var title = node.data("title");
    if (title) {
      var _self = PF(node.data("widget"));
      _self.tooltip.hide();
    }
  }
  /**
   * Centers the given node so that it is positioned near the center of the mindmap viewport.
   * @param {import("raphael").RaphaelElement} node A node to center. 
   */
  centerNode(node) {
    var _self = this, text = node.data("text");
    text.animate({ x: this.cfg.centerX, y: this.cfg.centerY }, this.cfg.effectSpeed, "<>");
    node.animate(
      { cx: this.cfg.centerX, cy: this.cfg.centerY },
      this.cfg.effectSpeed,
      "<>",
      function() {
        _self.createSubNodes(node);
      }
    );
    node.unclick(this.clickNode);
    text.unclick(this.clickNodeText);
    node.attr({ cursor: "default" });
    text.attr({ cursor: "default" });
  }
  /**
   * Creates the mindmap nodes for all immediate children of the given node.
   * @param {import("raphael").RaphaelElement} node A node with children.
   * @private
   */
  createSubNodes(node) {
    var nodeModel = node.data("model");
    if (nodeModel.children) {
      var size = nodeModel.children.length, radius = 150, capacity = parseInt(radius * 2 / 25), angleFactor = 360 / Math.min(size, capacity), capacityCounter = 0;
      for (var i = 0; i < size; i++) {
        var childModel = nodeModel.children[i];
        capacityCounter++;
        var angle = angleFactor * (i + 1) / 180 * Math.PI, x = node.attr("cx") + radius * Math.cos(angle), y = node.attr("cy") + radius * Math.sin(angle);
        var childNode = this.createNode(x, y, childModel);
        var connection = this.raphael.connection(node, childNode, "#000", null, this.cfg.effectSpeed);
        node.data("connections").push(connection);
        childNode.data("connections").push(connection);
        if (capacityCounter === capacity) {
          radius = radius + 125;
          capacity = parseInt(radius * 2 / 25);
          angleFactor = 360 / Math.min(capacity, size - (i + 1));
          capacityCounter = 0;
        }
      }
    }
    var parentModel = nodeModel.parent;
    if (parentModel) {
      parentModel.selectable = true;
      var parentNode = this.createNode(60, 40, parentModel);
      var parentConnection = this.raphael.connection(node, parentNode, "#000", null, this.cfg.effectSpeed);
      node.data("connections").push(parentConnection);
      parentNode.data("connections").push(parentConnection);
    }
  }
  /**
   * Callback that is invoked when a click was performed on a mindmap node.
   * @private
   * @param {import("raphael").RaphaelElement} node The node that received the click.
   */
  handleNodeClick(node) {
    if (node.dragged) {
      node.dragged = false;
      return;
    }
    var _self = this, clickTimeout = node.data("clicktimeout");
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      node.removeData("clicktimeout");
      _self.handleDblclickNode(node);
    } else {
      var timeout = PrimeFaces.queueTask(function() {
        _self.expandNode(node);
      }, 300);
      node.data("clicktimeout", timeout);
    }
  }
  /**
   * Callback that is invoked when a click was performed on a mindmap node.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  clickNode() {
    var _self = PF(this.data("widget"));
    _self.handleNodeClick(this);
  }
  /**
   * Callback that is invoked when a click was performed on a text label.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  clickNodeText() {
    var node = this.data("node"), _self = PF(node.data("widget"));
    _self.handleNodeClick(node);
  }
  /**
   * Callback that is invoked when a double click was performed on a mindmap node.
   * @param {import("raphael").RaphaelElement} node Node that received the double click.
   * @private
   */
  handleDblclickNode(node) {
    if (this.hasBehavior("dblselect")) {
      var key = node.data("model").key;
      var ext = {
        params: [
          { name: this.id + "_nodeKey", value: key }
        ]
      };
      this.callBehavior("dblselect", ext);
    }
  }
  /**
   * Expands the given mindmap node, showing it and its children.
   * @param {import("raphael").RaphaelElement} node A node to expand. 
   */
  expandNode(node) {
    var $this = this, key = node.data("model").key, ext = {
      update: this.id,
      params: [
        { name: this.id + "_nodeKey", value: key }
      ],
      onsuccess: function(responseXML, status, xhr) {
        PrimeFaces.ajax.Response.handle(responseXML, status, xhr, {
          widget: $this,
          handle: function(content) {
            var nodeModel = JSON.parse(content);
            node.data("model", nodeModel);
            node.data("connections", []);
            for (var j = 0; j < this.nodes.length; j++) {
              var otherNode = this.nodes[j], nodeKey = otherNode.data("model").key;
              if (nodeKey !== key) {
                this.removeNode(otherNode);
              }
            }
            this.nodes = [];
            this.nodes.push(node);
            this.centerNode(node);
          }
        });
        return true;
      }
    };
    this.callBehavior("select", ext);
  }
  /**
   * Removes the given node and all of its connections from this mindmap.
   * @param {import("raphael").RaphaelElement} node Mindmap node to delete.
   */
  removeNode(node) {
    node.data("text").remove();
    var connections = node.data("connections");
    for (var i = 0; i < connections.length; i++) {
      connections[i].line.remove();
    }
    node.removeData();
    node.animate({ opacity: 0 }, this.cfg.effectSpeed, null, function() {
      this.remove();
    });
  }
  /**
   * Callback that is invoked once at the start when a node is dragged.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  nodeDragStart() {
    this.ox = this.attr("cx");
    this.oy = this.attr("cy");
  }
  /**
   * Callback that is invoked while a node is being dragged. Updates the UI.
   * @private
   * @this {import("raphael").RaphaelElement}
   * @param {number} dx Amount the node was dragged horizontally since the last call of this callback 
   * @param {number} dy Amount the node was dragged vertically since the last call of this callback
   */
  nodeDrag(dx, dy) {
    this.attr({ cx: this.ox + dx, cy: this.oy + dy });
    this.data("text").attr({ x: this.attr("cx"), y: this.attr("cy") });
    var _self = PF(this.data("widget"));
    _self.updateConnections(this);
    this.dragged = true;
  }
  /**
   * Callback invoked after a node was dragged.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  nodeDragEnd() {
  }
  /**
   * Callback that is invoked once at the start when a text label is dragged.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  textDragStart() {
    this.ox = this.attr("x");
    this.oy = this.attr("y");
  }
  /**
   * Callback that is invoked while a text label is being dragged. Updates the UI.
   * @private
   * @this {import("raphael").RaphaelElement}
   * @param {number} dx Amount the text was dragged horizontally since the last call of this callback 
   * @param {number} dy Amount the text was dragged vertically since the last call of this callback
   */
  textDrag(dx, dy) {
    var node = this.data("node");
    this.attr({ x: this.ox + dx, y: this.oy + dy });
    node.attr({ cx: this.attr("x"), cy: this.attr("y") });
    var _self = PF(node.data("widget"));
    _self.updateConnections(node);
    node.dragged = true;
  }
  /**
   * Callback invoked after a text label was dragged.
   * @private
   * @this {import("raphael").RaphaelElement}
   */
  textDragEnd() {
  }
  /**
   * Updates the connections for the given mindmap node.
   * @param {import("raphael").RaphaelElement} node The node for which to update the connections.
   * @private
   */
  updateConnections(node) {
    var connections = node.data("connections");
    for (var i = 0; i < connections.length; i++) {
      this.raphael.connection(connections[i]);
    }
  }
};
import_raphael.default.fn.connection = function(obj1, obj2, line, bg, effectSpeed) {
  if (obj1.line && obj1.from && obj1.to) {
    line = obj1;
    obj1 = line.from;
    obj2 = line.to;
  }
  var bb1 = obj1.getBBox(), bb2 = obj2.getBBox(), p = [
    { x: bb1.x + bb1.width / 2, y: bb1.y - 1 },
    { x: bb1.x + bb1.width / 2, y: bb1.y + bb1.height + 1 },
    { x: bb1.x - 1, y: bb1.y + bb1.height / 2 },
    { x: bb1.x + bb1.width + 1, y: bb1.y + bb1.height / 2 },
    { x: bb2.x + bb2.width / 2, y: bb2.y - 1 },
    { x: bb2.x + bb2.width / 2, y: bb2.y + bb2.height + 1 },
    { x: bb2.x - 1, y: bb2.y + bb2.height / 2 },
    { x: bb2.x + bb2.width + 1, y: bb2.y + bb2.height / 2 }
  ], d = {}, dis = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 4; j < 8; j++) {
      var dx = Math.abs(p[i].x - p[j].x), dy = Math.abs(p[i].y - p[j].y);
      if (i == j - 4 || (i != 3 && j != 6 || p[i].x < p[j].x) && (i != 2 && j != 7 || p[i].x > p[j].x) && (i != 0 && j != 5 || p[i].y > p[j].y) && (i != 1 && j != 4 || p[i].y < p[j].y)) {
        dis.push(dx + dy);
        d[dis[dis.length - 1]] = [i, j];
      }
    }
  }
  if (dis.length == 0) {
    var res = [0, 4];
  } else {
    res = d[Math.min.apply(Math, dis)];
  }
  var x1 = p[res[0]].x, y1 = p[res[0]].y, x4 = p[res[1]].x, y4 = p[res[1]].y;
  dx = Math.max(Math.abs(x1 - x4) / 2, 10);
  dy = Math.max(Math.abs(y1 - y4) / 2, 10);
  var x2 = [x1, x1, x1 - dx, x1 + dx][res[0]].toFixed(3), y2 = [y1 - dy, y1 + dy, y1, y1][res[0]].toFixed(3), x3 = [0, 0, 0, 0, x4, x4, x4 - dx, x4 + dx][res[1]].toFixed(3), y3 = [0, 0, 0, 0, y1 + dy, y1 - dy, y4, y4][res[1]].toFixed(3);
  var path = ["M", x1.toFixed(3), y1.toFixed(3), "C", x2, y2, x3, y3, x4.toFixed(3), y4.toFixed(3)].join(",");
  if (line && line.line) {
    line.bg && line.bg.attr({ path });
    line.line.attr({ path });
  } else {
    var color = typeof line == "string" ? line : "#000", path = this.path(path).attr({ stroke: color, fill: "none" }).attr("opacity", 0).animate({ opacity: 1 }, effectSpeed);
    path.toBack();
    return {
      bg: bg && bg.split && this.path(path).attr({ stroke: bg.split("|")[0], fill: "none", "stroke-width": bg.split("|")[1] || 3 }),
      line: path,
      from: obj1,
      to: obj2
    };
  }
};
export {
  Mindmap
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL21pbmRtYXAvbWluZG1hcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJhcGhhZWwgZnJvbSBcInJhcGhhZWxcIjtcblxuaW1wb3J0IHsgRGVmZXJyZWRXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBNaW5kbWFwIFdpZGdldF9fXG4gKiBcbiAqIE1pbmRtYXAgaXMgYW4gaW50ZXJhY3RpdmUgdG9vbCB0byB2aXN1YWxpemUgbWluZG1hcCBkYXRhIGZlYXR1cmluZyBsYXp5IGxvYWRpbmcsIGNhbGxiYWNrcywgYW5pbWF0aW9ucyBhbmQgbW9yZS5cbiAqIFxuICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy53aWRnZXQuTWluZG1hcC5NaW5kbWFwTm9kZX0gTWluZG1hcE5vZGUgTW9kZWwgdGhhdCBkZXNjcmliZXMgYSBub2RlIG9mIHRoZSBtaW5kbWFwLCBzdWNoIGFzXG4gKiBpdHMgcGFyZW50IGFuZCBjaGlsZHJlbiwgaXRzIGxhYmVsLCBpdHMgZ2VvbWV0cnkgZXRjLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0Lk1pbmRtYXAuTWluZG1hcE5vZGVbXX0gTWluZG1hcE5vZGUuY2hpbGRyZW4gVGhlIGNoaWxkcmVuIG9mIHRoaXMgbm9kZS5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5NaW5kbWFwLk1pbmRtYXBOb2RlIHwgbnVsbH0gTWluZG1hcE5vZGUucGFyZW50IFRoZSBwYXJlbnQgb2YgdGhpcyBub2RlLCBvciBgbnVsbGAgaWYgaXQgaGFzXG4gKiBnb3Qgbm8gcGFyZW50LlxuICogQHByb3Age3N0cmluZ30gTWluZG1hcE5vZGUubGFiZWwgVGhlIGxhYmVsIHRleHQgb2YgdGhpcyBub2RlLlxuICogQHByb3Age3N0cmluZ30gW01pbmRtYXBOb2RlLmtleV0gVGhlIHVuaXF1ZSBJRCBvZiB0aGlzIG5vZGUuXG4gKiBAcHJvcCB7c3RyaW5nfSBbTWluZG1hcE5vZGUuZmlsbF0gVGhlIGZpbGwgY29sb3Igb2YgdGhpcyBub2RlLlxuICogQHByb3Age2Jvb2xlYW59IFtNaW5kbWFwTm9kZS5zZWxlY3RhYmxlXSBgdHJ1ZWAgaWYgdGhpcyBub2RlIGNhbiBiZSBzZWxlY3RlZCwgb3IgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBcbiAqIEBwcm9wIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50W119IG5vZGVzIEEgbGlzdCBvZiBhbGwgZHJhd24gbWluZG1hcCBub2Rlcy5cbiAqIEBwcm9wIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxQYXBlcn0gcmFwaGFlbCBUaGUgY2FudmFzIG9uIHdoaWNoIHRoZSBtaW5kbWFwIGlzIGRyYXduLlxuICogQHByb3Age2ltcG9ydChcInJhcGhhZWxcIikuUmFwaGFlbEVsZW1lbnR9IHJvb3QgVGhlIGRyYXduIHJvb3Qgbm9kZSBmb3IgdGhlIG1pbmRtYXAuIFxuICogQHByb3Age0pRdWVyeX0gdG9vbHRpcCBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSB0b29sdGlwIG9mIGEgbWluZG1hcCBub2RlLlxuICogXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5NaW5kbWFwQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIE1pbmRtYXB8IE1pbmRtYXAgd2lkZ2V0fS5cbiAqIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWEge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQuY2ZnfEJhc2VXaWRnZXQuY2ZnfS4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzXG4gKiBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmUgcmVhZC1vbmx5IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuICogQGV4dGVuZHMge1ByaW1lRmFjZXMud2lkZ2V0LkRlZmVycmVkV2lkZ2V0Q2ZnfSBjZmdcbiAqIFxuICogQHByb3Age251bWJlcn0gY2ZnLmVmZmVjdFNwZWVkIER1cmF0aW9uIGZvciBhbGwgYW5pbWF0aW9ucyB3aXRoIG5vZGVzLCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcuY2VudGVyWCBIb3Jpem9udGFsIGNvb3JkaW5hdGUgZm9yIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhcy5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5jZW50ZXJZIFZlcnRpY2FsIGNvb3JkaW5hdGUgZm9yIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhcy5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5oZWlnaHQgVG90YWwgaGVpZ2h0IG9mIHRoZSBjYW52YXMuIFxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0Lk1pbmRtYXAuTWluZG1hcE5vZGV9IGNmZy5tb2RlbCBSb290IG5vZGUgc2hvd24gYnkgdGhlIG1pbmRtYXAuXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcud2lkdGggVG90YWwgd2lkdGggb2YgdGhlIGNhbnZhcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1pbmRtYXAgZXh0ZW5kcyBEZWZlcnJlZFdpZGdldCB7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5QYXJ0aWFsV2lkZ2V0Q2ZnPFRDZmc+fSBjZmdcbiAgICAgKi9cbiAgICBpbml0KGNmZykge1xuICAgICAgICBzdXBlci5pbml0KGNmZyk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJEZWZlcnJlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmNsdWRlXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgX3JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jZmcud2lkdGggPSB0aGlzLmpxLndpZHRoKCk7XG4gICAgICAgIHRoaXMuY2ZnLmhlaWdodCA9IHRoaXMuanEuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuY2ZnLmNlbnRlclggPSB0aGlzLmNmZy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuY2ZnLmNlbnRlclkgPSB0aGlzLmNmZy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnJhcGhhZWwgPSBSYXBoYWVsKHRoaXMuaWQsIHRoaXMuY2ZnLndpZHRoLCB0aGlzLmNmZy5oZWlnaHQpO1xuICAgICAgICB0aGlzLm5vZGVzID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuY2ZnLm1vZGVsKSB7XG4gICAgICAgICAgICAvL3Jvb3RcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlTm9kZSh0aGlzLmNmZy5jZW50ZXJYLCB0aGlzLmNmZy5jZW50ZXJZLCB0aGlzLmNmZy5tb2RlbCk7XG5cbiAgICAgICAgICAgIC8vY2hpbGRyZW5cbiAgICAgICAgICAgIGlmICh0aGlzLmNmZy5tb2RlbC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3ViTm9kZXModGhpcy5yb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9vbHRpcCA9ICQoJzxkaXYgY2xhc3M9XCJ1aS10b29sdGlwIHVpLW1pbmRtYXAtdG9vbHRpcCB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbFwiPjwvZGl2PicpLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBtaW5kbWFwIG5vZGUgYXQgdGhlIGdpdmVuIHBvc2l0aW9uIGZvciB0aGUgZ2l2ZW4gbW9kZWwuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggSG9yaXpvbnRhbCBjb29yZGluYXRlIHdoZXJlIHRoZSBub2RlIGlzIGRyYXduLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFZlcnRpY2FsIGNvb3JkaW5hdGUgd2hlcmUgdGhlIG5vZGUgaXMgZHJhd24uXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5NaW5kbWFwLk1pbmRtYXBOb2RlfSBtb2RlbCBNb2RlbCB3aXRoIHRoZSBkYXRhIGRlc2NyaWJpbmcgdGhlIG5vZGUgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJuIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fSBUaGUgY3JlYXRlZCBub2RlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY3JlYXRlTm9kZSh4LCB5LCBtb2RlbCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMucmFwaGFlbC5lbGxpcHNlKHgsIHksIDQwLCAyNSkuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAgICAgICAuZGF0YSgnbW9kZWwnLCBtb2RlbClcbiAgICAgICAgICAgIC5kYXRhKCdjb25uZWN0aW9ucycsIFtdKVxuICAgICAgICAgICAgLmRhdGEoJ3dpZGdldCcsIHRoaXMuY2ZnLndpZGdldFZhcik7XG5cbiAgICAgICAgdmFyIGxhYmVsID0gbW9kZWwubGFiZWwsXG4gICAgICAgICAgICBub2RlV2lkdGggPSBub2RlLmdldEJCb3goKS53aWR0aCxcbiAgICAgICAgICAgIHRpdGxlID0gbnVsbDtcblxuICAgICAgICB2YXIgdGV4dCA9IHRoaXMucmFwaGFlbC50ZXh0KHgsIHksIGxhYmVsKS5hdHRyKCdvcGFjaXR5JywgMCk7XG5cbiAgICAgICAgaWYgKG5vZGVXaWR0aCA8PSB0ZXh0LmdldEJCb3goKS53aWR0aCkge1xuICAgICAgICAgICAgdGl0bGUgPSBsYWJlbDtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc3Vic3RyaW5nKDAsIDEyKTtcbiAgICAgICAgICAgIHRleHQuYXR0cigndGV4dCcsIGxhYmVsICsgJy4uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dC5kYXRhKCdub2RlJywgbm9kZSk7XG4gICAgICAgIG5vZGUuZGF0YSgndGV4dCcsIHRleHQpO1xuXG4gICAgICAgIC8vbm9kZSBvcHRpb25zXG4gICAgICAgIGlmIChtb2RlbC5maWxsKSB7XG4gICAgICAgICAgICBub2RlLmF0dHIoeyBmaWxsOiAnIycgKyBtb2RlbC5maWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90aXRsZVxuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSgndGl0bGUnLCB0aXRsZSk7XG5cbiAgICAgICAgICAgIG5vZGUubW91c2VvdmVyKHRoaXMubW91c2VvdmVyTm9kZSk7XG4gICAgICAgICAgICBub2RlLm1vdXNlb3V0KHRoaXMubW91c2VvdXROb2RlKTtcblxuICAgICAgICAgICAgdGV4dC5tb3VzZW92ZXIodGhpcy5tb3VzZW92ZXJUZXh0KTtcbiAgICAgICAgICAgIHRleHQubW91c2VvdXQodGhpcy5tb3VzZW91dFRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zaG93XG4gICAgICAgIG5vZGUuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgdGhpcy5jZmcuZWZmZWN0U3BlZWQpO1xuICAgICAgICB0ZXh0LmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIHRoaXMuY2ZnLmVmZmVjdFNwZWVkKTtcblxuICAgICAgICAvL21ha2UgZHJhZ2dhYmxlXG4gICAgICAgIG5vZGUuZHJhZyh0aGlzLm5vZGVEcmFnLCB0aGlzLm5vZGVEcmFnU3RhcnQsIHRoaXMubm9kZURyYWdFbmQpO1xuICAgICAgICB0ZXh0LmRyYWcodGhpcy50ZXh0RHJhZywgdGhpcy50ZXh0RHJhZ1N0YXJ0LCB0aGlzLnRleHREcmFnRW5kKTtcblxuICAgICAgICAvL2V2ZW50c1xuICAgICAgICBpZiAobW9kZWwuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgbm9kZS5jbGljayh0aGlzLmNsaWNrTm9kZSk7XG4gICAgICAgICAgICB0ZXh0LmNsaWNrKHRoaXMuY2xpY2tOb2RlVGV4dCk7XG5cbiAgICAgICAgICAgIG5vZGUuYXR0cih7IGN1cnNvcjogJ3BvaW50ZXInIH0pO1xuICAgICAgICAgICAgdGV4dC5hdHRyKHsgY3Vyc29yOiAncG9pbnRlcicgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2FkZCB0byBub2Rlc1xuICAgICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIG1vdXNlIGN1cnNvciB3YXMgbW92ZWQgb3ZlciBhIG1pbmRtYXAgbm9kZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0aGlzIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fVxuICAgICAqL1xuICAgIG1vdXNlb3Zlck5vZGUoKSB7XG4gICAgICAgIHZhciBfc2VsZiA9IFBGKHRoaXMuZGF0YSgnd2lkZ2V0JykpO1xuXG4gICAgICAgIF9zZWxmLnNob3dUb29sdGlwKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSBtb3VzZSBjdXJzb3Igd2FzIG1vdmVkIGF3YXkgZnJvbSBhIG1pbmRtYXAgbm9kZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0aGlzIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fVxuICAgICAqL1xuICAgIG1vdXNlb3V0Tm9kZSgpIHtcbiAgICAgICAgdmFyIF9zZWxmID0gUEYodGhpcy5kYXRhKCd3aWRnZXQnKSk7XG5cbiAgICAgICAgX3NlbGYuaGlkZVRvb2x0aXAodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIG1vdXNlIGN1cnNvciB3YXMgbW92ZWQgb3ZlciBhIHRleHQgbGFiZWwuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdGhpcyB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudH1cbiAgICAgKi9cbiAgICBtb3VzZW92ZXJUZXh0KCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZGF0YSgnbm9kZScpLFxuICAgICAgICAgICAgX3NlbGYgPSBQRihub2RlLmRhdGEoJ3dpZGdldCcpKTtcblxuICAgICAgICBfc2VsZi5zaG93VG9vbHRpcChub2RlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgbW91c2UgY3Vyc29yIHdhcyBtb3ZlZCBhd2F5IGZyb20gYSB0ZXh0IGxhYmVsLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHRoaXMge2ltcG9ydChcInJhcGhhZWxcIikuUmFwaGFlbEVsZW1lbnR9XG4gICAgICovXG4gICAgbW91c2VvdXRUZXh0KCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZGF0YSgnbm9kZScpLFxuICAgICAgICAgICAgX3NlbGYgPSBQRihub2RlLmRhdGEoJ3dpZGdldCcpKTtcblxuICAgICAgICBfc2VsZi5oaWRlVG9vbHRpcChub2RlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmluZ3MgdXAgdGhlIHRvb2x0aXAgZm9yIHRoZSBnaXZlbiBub2RlLCBpdCBpdCBpcyBub3Qgc2hvd24gYWxyZWFkeS5cbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcInJhcGhhZWxcIikuUmFwaGFlbEVsZW1lbnR9IG5vZGUgQSBub2RlIGZvciB3aGljaCB0byBzaG93IHRoZSB0b29sdGlwLiBcbiAgICAgKi9cbiAgICBzaG93VG9vbHRpcChub2RlKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IG5vZGUuZGF0YSgndGl0bGUnKTtcblxuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IFBGKG5vZGUuZGF0YSgnd2lkZ2V0JykpLFxuICAgICAgICAgICAgICAgIG9mZnNldCA9IF9zZWxmLmpxLm9mZnNldCgpO1xuXG4gICAgICAgICAgICBfc2VsZi50b29sdGlwLnRleHQodGl0bGUpXG4gICAgICAgICAgICAgICAgLmNzcyhcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAob2Zmc2V0LmxlZnQgKyBub2RlLmF0dHIoJ2N4JykgKyAyMCkgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IChvZmZzZXQudG9wICsgbm9kZS5hdHRyKCdjeScpICsgMTApICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogUHJpbWVGYWNlcy5uZXh0WmluZGV4KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2hvdygpO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSB0b29sdGlwIGZvciB0aGUgZ2l2ZW4gbm9kZSwgaXQgaXQgaXMgc2hvd24uXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fSBub2RlIEEgbm9kZSBmb3Igd2hpY2ggdG8gaGlkZSB0aGUgdG9vbHRpcC4gXG4gICAgICovXG4gICAgaGlkZVRvb2x0aXAobm9kZSkge1xuICAgICAgICB2YXIgdGl0bGUgPSBub2RlLmRhdGEoJ3RpdGxlJyk7XG5cbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICB2YXIgX3NlbGYgPSBQRihub2RlLmRhdGEoJ3dpZGdldCcpKTtcblxuICAgICAgICAgICAgX3NlbGYudG9vbHRpcC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDZW50ZXJzIHRoZSBnaXZlbiBub2RlIHNvIHRoYXQgaXQgaXMgcG9zaXRpb25lZCBuZWFyIHRoZSBjZW50ZXIgb2YgdGhlIG1pbmRtYXAgdmlld3BvcnQuXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fSBub2RlIEEgbm9kZSB0byBjZW50ZXIuIFxuICAgICAqL1xuICAgIGNlbnRlck5vZGUobm9kZSkge1xuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzLFxuICAgICAgICAgICAgdGV4dCA9IG5vZGUuZGF0YSgndGV4dCcpO1xuXG4gICAgICAgIHRleHQuYW5pbWF0ZSh7IHg6IHRoaXMuY2ZnLmNlbnRlclgsIHk6IHRoaXMuY2ZnLmNlbnRlclkgfSwgdGhpcy5jZmcuZWZmZWN0U3BlZWQsICc8PicpO1xuXG4gICAgICAgIG5vZGUuYW5pbWF0ZSh7IGN4OiB0aGlzLmNmZy5jZW50ZXJYLCBjeTogdGhpcy5jZmcuY2VudGVyWSB9LCB0aGlzLmNmZy5lZmZlY3RTcGVlZCwgJzw+JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF9zZWxmLmNyZWF0ZVN1Yk5vZGVzKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy9yZW1vdmUgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgbm9kZS51bmNsaWNrKHRoaXMuY2xpY2tOb2RlKTtcbiAgICAgICAgdGV4dC51bmNsaWNrKHRoaXMuY2xpY2tOb2RlVGV4dCk7XG4gICAgICAgIG5vZGUuYXR0cih7IGN1cnNvcjogJ2RlZmF1bHQnIH0pO1xuICAgICAgICB0ZXh0LmF0dHIoeyBjdXJzb3I6ICdkZWZhdWx0JyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBtaW5kbWFwIG5vZGVzIGZvciBhbGwgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoZSBnaXZlbiBub2RlLlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudH0gbm9kZSBBIG5vZGUgd2l0aCBjaGlsZHJlbi5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNyZWF0ZVN1Yk5vZGVzKG5vZGUpIHtcbiAgICAgICAgdmFyIG5vZGVNb2RlbCA9IG5vZGUuZGF0YSgnbW9kZWwnKTtcblxuICAgICAgICBpZiAobm9kZU1vZGVsLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IG5vZGVNb2RlbC5jaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgICAgICAgcmFkaXVzID0gMTUwLFxuICAgICAgICAgICAgICAgIGNhcGFjaXR5ID0gcGFyc2VJbnQoKHJhZGl1cyAqIDIpIC8gMjUpLFxuICAgICAgICAgICAgICAgIGFuZ2xlRmFjdG9yID0gKDM2MCAvIE1hdGgubWluKHNpemUsIGNhcGFjaXR5KSksXG4gICAgICAgICAgICAgICAgY2FwYWNpdHlDb3VudGVyID0gMDtcblxuICAgICAgICAgICAgLy9jaGlsZHJlblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRNb2RlbCA9IG5vZGVNb2RlbC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjYXBhY2l0eUNvdW50ZXIrKztcblxuICAgICAgICAgICAgICAgIC8vY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgICB2YXIgYW5nbGUgPSAoKGFuZ2xlRmFjdG9yICogKGkgKyAxKSkgLyAxODApICogTWF0aC5QSSxcbiAgICAgICAgICAgICAgICAgICAgeCA9IG5vZGUuYXR0cignY3gnKSArIHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgICAgICAgICAgeSA9IG5vZGUuYXR0cignY3knKSArIHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKTtcblxuICAgICAgICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUoeCwgeSwgY2hpbGRNb2RlbCk7XG5cbiAgICAgICAgICAgICAgICAvL2Nvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMucmFwaGFlbC5jb25uZWN0aW9uKG5vZGUsIGNoaWxkTm9kZSwgXCIjMDAwXCIsIG51bGwsIHRoaXMuY2ZnLmVmZmVjdFNwZWVkKTtcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEoJ2Nvbm5lY3Rpb25zJykucHVzaChjb25uZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUuZGF0YSgnY29ubmVjdGlvbnMnKS5wdXNoKGNvbm5lY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgLy9uZXcgcmluZ1xuICAgICAgICAgICAgICAgIGlmIChjYXBhY2l0eUNvdW50ZXIgPT09IGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJhZGl1cyA9IHJhZGl1cyArIDEyNTtcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHkgPSBwYXJzZUludCgocmFkaXVzICogMikgLyAyNSk7XG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRmFjdG9yID0gKDM2MCAvIE1hdGgubWluKGNhcGFjaXR5LCAoc2l6ZSAtIChpICsgMSkpKSk7XG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9wYXJlbnRcbiAgICAgICAgdmFyIHBhcmVudE1vZGVsID0gbm9kZU1vZGVsLnBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudE1vZGVsKSB7XG4gICAgICAgICAgICBwYXJlbnRNb2RlbC5zZWxlY3RhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUoNjAsIDQwLCBwYXJlbnRNb2RlbCk7XG5cbiAgICAgICAgICAgIC8vY29ubmVjdGlvblxuICAgICAgICAgICAgdmFyIHBhcmVudENvbm5lY3Rpb24gPSB0aGlzLnJhcGhhZWwuY29ubmVjdGlvbihub2RlLCBwYXJlbnROb2RlLCBcIiMwMDBcIiwgbnVsbCwgdGhpcy5jZmcuZWZmZWN0U3BlZWQpO1xuICAgICAgICAgICAgbm9kZS5kYXRhKCdjb25uZWN0aW9ucycpLnB1c2gocGFyZW50Q29ubmVjdGlvbik7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmRhdGEoJ2Nvbm5lY3Rpb25zJykucHVzaChwYXJlbnRDb25uZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gYSBjbGljayB3YXMgcGVyZm9ybWVkIG9uIGEgbWluZG1hcCBub2RlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fSBub2RlIFRoZSBub2RlIHRoYXQgcmVjZWl2ZWQgdGhlIGNsaWNrLlxuICAgICAqL1xuICAgIGhhbmRsZU5vZGVDbGljayhub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmRyYWdnZWQpIHtcbiAgICAgICAgICAgIG5vZGUuZHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGNsaWNrVGltZW91dCA9IG5vZGUuZGF0YSgnY2xpY2t0aW1lb3V0Jyk7XG5cbiAgICAgICAgaWYgKGNsaWNrVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNsaWNrVGltZW91dCk7XG4gICAgICAgICAgICBub2RlLnJlbW92ZURhdGEoJ2NsaWNrdGltZW91dCcpO1xuXG4gICAgICAgICAgICBfc2VsZi5oYW5kbGVEYmxjbGlja05vZGUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGltZW91dCA9IFByaW1lRmFjZXMucXVldWVUYXNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF9zZWxmLmV4cGFuZE5vZGUobm9kZSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgICAgICBub2RlLmRhdGEoJ2NsaWNrdGltZW91dCcsIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gYSBjbGljayB3YXMgcGVyZm9ybWVkIG9uIGEgbWluZG1hcCBub2RlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHRoaXMge2ltcG9ydChcInJhcGhhZWxcIikuUmFwaGFlbEVsZW1lbnR9XG4gICAgICovXG4gICAgY2xpY2tOb2RlKCkge1xuICAgICAgICB2YXIgX3NlbGYgPSBQRih0aGlzLmRhdGEoJ3dpZGdldCcpKTtcblxuICAgICAgICBfc2VsZi5oYW5kbGVOb2RlQ2xpY2sodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gYSBjbGljayB3YXMgcGVyZm9ybWVkIG9uIGEgdGV4dCBsYWJlbC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0aGlzIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fVxuICAgICAqL1xuICAgIGNsaWNrTm9kZVRleHQoKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5kYXRhKCdub2RlJyksXG4gICAgICAgICAgICBfc2VsZiA9IFBGKG5vZGUuZGF0YSgnd2lkZ2V0JykpO1xuXG4gICAgICAgIF9zZWxmLmhhbmRsZU5vZGVDbGljayhub2RlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBhIGRvdWJsZSBjbGljayB3YXMgcGVyZm9ybWVkIG9uIGEgbWluZG1hcCBub2RlLlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudH0gbm9kZSBOb2RlIHRoYXQgcmVjZWl2ZWQgdGhlIGRvdWJsZSBjbGljay5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGhhbmRsZURibGNsaWNrTm9kZShub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0JlaGF2aW9yKCdkYmxzZWxlY3QnKSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IG5vZGUuZGF0YSgnbW9kZWwnKS5rZXk7XG5cbiAgICAgICAgICAgIHZhciBleHQgPSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogdGhpcy5pZCArICdfbm9kZUtleScsIHZhbHVlOiBrZXkgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEJlaGF2aW9yKCdkYmxzZWxlY3QnLCBleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwYW5kcyB0aGUgZ2l2ZW4gbWluZG1hcCBub2RlLCBzaG93aW5nIGl0IGFuZCBpdHMgY2hpbGRyZW4uXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fSBub2RlIEEgbm9kZSB0byBleHBhbmQuIFxuICAgICAqL1xuICAgIGV4cGFuZE5vZGUobm9kZSkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzLFxuICAgICAgICAgICAga2V5ID0gbm9kZS5kYXRhKCdtb2RlbCcpLmtleSxcbiAgICAgICAgICAgIGV4dCA9IHtcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogdGhpcy5pZCArICdfbm9kZUtleScsIHZhbHVlOiBrZXkgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb25zdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZVhNTCwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlLmhhbmRsZShyZXNwb25zZVhNTCwgc3RhdHVzLCB4aHIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldDogJHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZU1vZGVsID0gSlNPTi5wYXJzZShjb250ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdXBkYXRlIG1vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kYXRhKCdtb2RlbCcsIG5vZGVNb2RlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRhdGEoJ2Nvbm5lY3Rpb25zJywgW10pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgb3RoZXIgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG90aGVyTm9kZSA9IHRoaXMubm9kZXNbal0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlS2V5ID0gb3RoZXJOb2RlLmRhdGEoJ21vZGVsJykua2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTm9kZShvdGhlck5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNhbGxCZWhhdmlvcignc2VsZWN0JywgZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBub2RlIGFuZCBhbGwgb2YgaXRzIGNvbm5lY3Rpb25zIGZyb20gdGhpcyBtaW5kbWFwLlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudH0gbm9kZSBNaW5kbWFwIG5vZGUgdG8gZGVsZXRlLlxuICAgICAqL1xuICAgIHJlbW92ZU5vZGUobm9kZSkge1xuICAgICAgICAvL3Rlc3RcbiAgICAgICAgbm9kZS5kYXRhKCd0ZXh0JykucmVtb3ZlKCk7XG5cbiAgICAgICAgLy9jb25uZWN0aW9uc1xuICAgICAgICB2YXIgY29ubmVjdGlvbnMgPSBub2RlLmRhdGEoJ2Nvbm5lY3Rpb25zJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25zW2ldLmxpbmUucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RhdGFcbiAgICAgICAgbm9kZS5yZW1vdmVEYXRhKCk7XG5cbiAgICAgICAgLy9lbGxpcHNlXG4gICAgICAgIG5vZGUuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgdGhpcy5jZmcuZWZmZWN0U3BlZWQsIG51bGwsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIG9uY2UgYXQgdGhlIHN0YXJ0IHdoZW4gYSBub2RlIGlzIGRyYWdnZWQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdGhpcyB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudH1cbiAgICAgKi9cbiAgICBub2RlRHJhZ1N0YXJ0KCkge1xuICAgICAgICB0aGlzLm94ID0gdGhpcy5hdHRyKFwiY3hcIik7XG4gICAgICAgIHRoaXMub3kgPSB0aGlzLmF0dHIoXCJjeVwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hpbGUgYSBub2RlIGlzIGJlaW5nIGRyYWdnZWQuIFVwZGF0ZXMgdGhlIFVJLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHRoaXMge2ltcG9ydChcInJhcGhhZWxcIikuUmFwaGFlbEVsZW1lbnR9XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGR4IEFtb3VudCB0aGUgbm9kZSB3YXMgZHJhZ2dlZCBob3Jpem9udGFsbHkgc2luY2UgdGhlIGxhc3QgY2FsbCBvZiB0aGlzIGNhbGxiYWNrIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkeSBBbW91bnQgdGhlIG5vZGUgd2FzIGRyYWdnZWQgdmVydGljYWxseSBzaW5jZSB0aGUgbGFzdCBjYWxsIG9mIHRoaXMgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBub2RlRHJhZyhkeCwgZHkpIHtcbiAgICAgICAgLy91cGRhdGUgbG9jYXRpb25cbiAgICAgICAgdGhpcy5hdHRyKHsgY3g6IHRoaXMub3ggKyBkeCwgY3k6IHRoaXMub3kgKyBkeSB9KTtcblxuICAgICAgICAvL2RyYWcgdGV4dFxuICAgICAgICB0aGlzLmRhdGEoJ3RleHQnKS5hdHRyKHsgeDogdGhpcy5hdHRyKCdjeCcpLCB5OiB0aGlzLmF0dHIoJ2N5JykgfSk7XG5cbiAgICAgICAgLy91cGRhdGUgY29ubmVjdGlvbnNcbiAgICAgICAgdmFyIF9zZWxmID0gUEYodGhpcy5kYXRhKCd3aWRnZXQnKSk7XG4gICAgICAgIF9zZWxmLnVwZGF0ZUNvbm5lY3Rpb25zKHRoaXMpO1xuXG4gICAgICAgIC8vZmxhZyB0byBwcmV2ZW50IGRyYWcgdG8gaW52b2tlIG5vZGVDbGlja1xuICAgICAgICB0aGlzLmRyYWdnZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgYWZ0ZXIgYSBub2RlIHdhcyBkcmFnZ2VkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHRoaXMge2ltcG9ydChcInJhcGhhZWxcIikuUmFwaGFlbEVsZW1lbnR9XG4gICAgICovXG4gICAgbm9kZURyYWdFbmQoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIG9uY2UgYXQgdGhlIHN0YXJ0IHdoZW4gYSB0ZXh0IGxhYmVsIGlzIGRyYWdnZWQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdGhpcyB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudH1cbiAgICAgKi9cbiAgICB0ZXh0RHJhZ1N0YXJ0KCkge1xuICAgICAgICB0aGlzLm94ID0gdGhpcy5hdHRyKFwieFwiKTtcbiAgICAgICAgdGhpcy5veSA9IHRoaXMuYXR0cihcInlcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoaWxlIGEgdGV4dCBsYWJlbCBpcyBiZWluZyBkcmFnZ2VkLiBVcGRhdGVzIHRoZSBVSS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0aGlzIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkeCBBbW91bnQgdGhlIHRleHQgd2FzIGRyYWdnZWQgaG9yaXpvbnRhbGx5IHNpbmNlIHRoZSBsYXN0IGNhbGwgb2YgdGhpcyBjYWxsYmFjayBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZHkgQW1vdW50IHRoZSB0ZXh0IHdhcyBkcmFnZ2VkIHZlcnRpY2FsbHkgc2luY2UgdGhlIGxhc3QgY2FsbCBvZiB0aGlzIGNhbGxiYWNrXG4gICAgICovXG4gICAgdGV4dERyYWcoZHgsIGR5KSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5kYXRhKCdub2RlJyk7XG5cbiAgICAgICAgLy91cGRhdGUgbG9jYXRpb25cbiAgICAgICAgdGhpcy5hdHRyKHsgeDogdGhpcy5veCArIGR4LCB5OiB0aGlzLm95ICsgZHkgfSk7XG5cbiAgICAgICAgLy9kcmFnIG5vZGVcbiAgICAgICAgbm9kZS5hdHRyKHsgY3g6IHRoaXMuYXR0cigneCcpLCBjeTogdGhpcy5hdHRyKCd5JykgfSk7XG5cbiAgICAgICAgLy91cGRhdGUgY29ubmVjdGlvbnNcbiAgICAgICAgdmFyIF9zZWxmID0gUEYobm9kZS5kYXRhKCd3aWRnZXQnKSk7XG4gICAgICAgIF9zZWxmLnVwZGF0ZUNvbm5lY3Rpb25zKG5vZGUpO1xuXG4gICAgICAgIC8vZmxhZyB0byBwcmV2ZW50IGRyYWcgdG8gaW52b2tlIG5vZGVDbGlja1xuICAgICAgICBub2RlLmRyYWdnZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgYWZ0ZXIgYSB0ZXh0IGxhYmVsIHdhcyBkcmFnZ2VkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHRoaXMge2ltcG9ydChcInJhcGhhZWxcIikuUmFwaGFlbEVsZW1lbnR9XG4gICAgICovXG4gICAgdGV4dERyYWdFbmQoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY29ubmVjdGlvbnMgZm9yIHRoZSBnaXZlbiBtaW5kbWFwIG5vZGUuXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxFbGVtZW50fSBub2RlIFRoZSBub2RlIGZvciB3aGljaCB0byB1cGRhdGUgdGhlIGNvbm5lY3Rpb25zLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdXBkYXRlQ29ubmVjdGlvbnMobm9kZSkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbnMgPSBub2RlLmRhdGEoJ2Nvbm5lY3Rpb25zJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yYXBoYWVsLmNvbm5lY3Rpb24oY29ubmVjdGlvbnNbaV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBEb2N1bWVudGVkIGluIG1pbmRtYXAuZC50c1xuUmFwaGFlbC5mbi5jb25uZWN0aW9uID0gZnVuY3Rpb24ob2JqMSwgb2JqMiwgbGluZSwgYmcsIGVmZmVjdFNwZWVkKSB7XG4gICAgaWYgKG9iajEubGluZSAmJiBvYmoxLmZyb20gJiYgb2JqMS50bykge1xuICAgICAgICBsaW5lID0gb2JqMTtcbiAgICAgICAgb2JqMSA9IGxpbmUuZnJvbTtcbiAgICAgICAgb2JqMiA9IGxpbmUudG87XG4gICAgfVxuICAgIHZhciBiYjEgPSBvYmoxLmdldEJCb3goKSxcbiAgICAgICAgYmIyID0gb2JqMi5nZXRCQm94KCksXG4gICAgICAgIHAgPSBbeyB4OiBiYjEueCArIGJiMS53aWR0aCAvIDIsIHk6IGJiMS55IC0gMSB9LFxuICAgICAgICB7IHg6IGJiMS54ICsgYmIxLndpZHRoIC8gMiwgeTogYmIxLnkgKyBiYjEuaGVpZ2h0ICsgMSB9LFxuICAgICAgICB7IHg6IGJiMS54IC0gMSwgeTogYmIxLnkgKyBiYjEuaGVpZ2h0IC8gMiB9LFxuICAgICAgICB7IHg6IGJiMS54ICsgYmIxLndpZHRoICsgMSwgeTogYmIxLnkgKyBiYjEuaGVpZ2h0IC8gMiB9LFxuICAgICAgICB7IHg6IGJiMi54ICsgYmIyLndpZHRoIC8gMiwgeTogYmIyLnkgLSAxIH0sXG4gICAgICAgIHsgeDogYmIyLnggKyBiYjIud2lkdGggLyAyLCB5OiBiYjIueSArIGJiMi5oZWlnaHQgKyAxIH0sXG4gICAgICAgIHsgeDogYmIyLnggLSAxLCB5OiBiYjIueSArIGJiMi5oZWlnaHQgLyAyIH0sXG4gICAgICAgIHsgeDogYmIyLnggKyBiYjIud2lkdGggKyAxLCB5OiBiYjIueSArIGJiMi5oZWlnaHQgLyAyIH1dLFxuICAgICAgICBkID0ge30sIGRpcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGogPSA0OyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICB2YXIgZHggPSBNYXRoLmFicyhwW2ldLnggLSBwW2pdLngpLFxuICAgICAgICAgICAgICAgIGR5ID0gTWF0aC5hYnMocFtpXS55IC0gcFtqXS55KTtcbiAgICAgICAgICAgIGlmICgoaSA9PSBqIC0gNCkgfHwgKCgoaSAhPSAzICYmIGogIT0gNikgfHwgcFtpXS54IDwgcFtqXS54KSAmJiAoKGkgIT0gMiAmJiBqICE9IDcpIHx8IHBbaV0ueCA+IHBbal0ueCkgJiYgKChpICE9IDAgJiYgaiAhPSA1KSB8fCBwW2ldLnkgPiBwW2pdLnkpICYmICgoaSAhPSAxICYmIGogIT0gNCkgfHwgcFtpXS55IDwgcFtqXS55KSkpIHtcbiAgICAgICAgICAgICAgICBkaXMucHVzaChkeCArIGR5KTtcbiAgICAgICAgICAgICAgICBkW2Rpc1tkaXMubGVuZ3RoIC0gMV1dID0gW2ksIGpdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkaXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdmFyIHJlcyA9IFswLCA0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMgPSBkW01hdGgubWluLmFwcGx5KE1hdGgsIGRpcyldO1xuICAgIH1cbiAgICB2YXIgeDEgPSBwW3Jlc1swXV0ueCxcbiAgICAgICAgeTEgPSBwW3Jlc1swXV0ueSxcbiAgICAgICAgeDQgPSBwW3Jlc1sxXV0ueCxcbiAgICAgICAgeTQgPSBwW3Jlc1sxXV0ueTtcbiAgICBkeCA9IE1hdGgubWF4KE1hdGguYWJzKHgxIC0geDQpIC8gMiwgMTApO1xuICAgIGR5ID0gTWF0aC5tYXgoTWF0aC5hYnMoeTEgLSB5NCkgLyAyLCAxMCk7XG4gICAgdmFyIHgyID0gW3gxLCB4MSwgeDEgLSBkeCwgeDEgKyBkeF1bcmVzWzBdXS50b0ZpeGVkKDMpLFxuICAgICAgICB5MiA9IFt5MSAtIGR5LCB5MSArIGR5LCB5MSwgeTFdW3Jlc1swXV0udG9GaXhlZCgzKSxcbiAgICAgICAgeDMgPSBbMCwgMCwgMCwgMCwgeDQsIHg0LCB4NCAtIGR4LCB4NCArIGR4XVtyZXNbMV1dLnRvRml4ZWQoMyksXG4gICAgICAgIHkzID0gWzAsIDAsIDAsIDAsIHkxICsgZHksIHkxIC0gZHksIHk0LCB5NF1bcmVzWzFdXS50b0ZpeGVkKDMpO1xuICAgIHZhciBwYXRoID0gW1wiTVwiLCB4MS50b0ZpeGVkKDMpLCB5MS50b0ZpeGVkKDMpLCBcIkNcIiwgeDIsIHkyLCB4MywgeTMsIHg0LnRvRml4ZWQoMyksIHk0LnRvRml4ZWQoMyldLmpvaW4oXCIsXCIpO1xuICAgIGlmIChsaW5lICYmIGxpbmUubGluZSkge1xuICAgICAgICBsaW5lLmJnICYmIGxpbmUuYmcuYXR0cih7IHBhdGg6IHBhdGggfSk7XG4gICAgICAgIGxpbmUubGluZS5hdHRyKHsgcGF0aDogcGF0aCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29sb3IgPSB0eXBlb2YgbGluZSA9PSBcInN0cmluZ1wiID8gbGluZSA6IFwiIzAwMFwiLFxuICAgICAgICAgICAgcGF0aCA9IHRoaXMucGF0aChwYXRoKS5hdHRyKHsgc3Ryb2tlOiBjb2xvciwgZmlsbDogXCJub25lXCIgfSkuYXR0cignb3BhY2l0eScsIDApLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIGVmZmVjdFNwZWVkKTtcbiAgICAgICAgcGF0aC50b0JhY2soKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmc6IGJnICYmIGJnLnNwbGl0ICYmIHRoaXMucGF0aChwYXRoKS5hdHRyKHsgc3Ryb2tlOiBiZy5zcGxpdChcInxcIilbMF0sIGZpbGw6IFwibm9uZVwiLCBcInN0cm9rZS13aWR0aFwiOiBiZy5zcGxpdChcInxcIilbMV0gfHwgMyB9KSxcbiAgICAgICAgICAgIGxpbmU6IHBhdGgsXG4gICAgICAgICAgICBmcm9tOiBvYmoxLFxuICAgICAgICAgICAgdG86IG9iajJcbiAgICAgICAgfTtcbiAgICB9XG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7O0FBQUEscUJBQW9CO0FBb0NiLElBQU0sVUFB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LEtBQUssSUFBSSxLQUFLLEVBQUUsSUFBSSxHQUFHLEVBQUU7QUFDdkMsT0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRSxJQUFJLEdBQUcsRUFBRTtBQUN2QyxNQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQ2pELEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQ2pELEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsR0FDN0QsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQztBQUNqRSxNQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHO0FBQzFHLE1BQUksUUFBUSxLQUFLLE1BQU07QUFDbkIsU0FBSyxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBVyxDQUFDO0FBQ3RDLFNBQUssS0FBSyxLQUFLLEVBQUUsS0FBVyxDQUFDO0FBQUEsRUFDakMsT0FBTztBQUNILFFBQUksUUFBUSxPQUFPLFFBQVEsV0FBVyxPQUFPLFFBQ3pDLE9BQU8sS0FBSyxLQUFLLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxPQUFPLE1BQU0sT0FBTyxDQUFDLEVBQUUsS0FBSyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsV0FBVztBQUN2SCxTQUFLLE9BQU87QUFFWixXQUFPO0FBQUEsTUFDSCxJQUFJLE1BQU0sR0FBRyxTQUFTLEtBQUssS0FBSyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxRQUFRLGdCQUFnQixHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFBQSxNQUM1SCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixJQUFJO0FBQUEsSUFDUjtBQUFBLEVBQ0o7QUFDSjsiLAogICJuYW1lcyI6IFsiUmFwaGFlbCJdCn0K
