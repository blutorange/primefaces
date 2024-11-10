import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import "./chunk-YRJTWU7C.js";

// src/stack/stack.js
var Stack = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.cfg.expanded = this.cfg.expanded || false;
    var $this = this;
    $(this.jqId + ".ui-stack > img").on("click.stack", function() {
      if ($this.cfg.expanded)
        $this.collapse($(this));
      else
        $this.open($(this));
    });
    var item = this.jq.children("img");
    if (this.cfg.expanded) {
      this.open(item);
    } else {
      var nextItem = item.next();
      item.css({ paddingTop: "35px" });
      nextItem.css({ top: "-50px", left: "10px" }).children("li").css({ top: "55px", left: "-10px" });
      nextItem.find("li a>img").css({ width: "79px", marginLeft: "0" });
    }
  }
  /**
   * Expands the given menu item of this stack.
   * @param {JQuery} item A menu item to expand, usually the root IMG element that is an immediate child of
   * `.ui-stack`.
   */
  open(item) {
    var vertical = 0, horizontal = 0, $this = this;
    item.next().children().each(function() {
      $(this).animate({ top: "-" + vertical + "px", left: horizontal + "px" }, $this.cfg.openSpeed);
      vertical = vertical + 55;
      horizontal = (horizontal + 0.75) * 2;
    });
    item.next().animate({ top: "-50px", left: "10px" }, this.cfg.openSpeed).addClass("openStack").find("li a>img").animate({ width: "50px", marginLeft: "9px" }, this.cfg.openSpeed);
    item.animate({ paddingTop: "0" });
    this.cfg.expanded = true;
  }
  /**
   * Collapses the given menu item of this stack.
   * @param {JQuery} item A menu item to collapse, usually the root IMG element that is an immediate child of
   * `.ui-stack`.
   */
  collapse(item) {
    item.next().removeClass("openStack").children("li").animate({ top: "55px", left: "-10px" }, this.cfg.closeSpeed);
    item.next().find("li a>img").animate({ width: "79px", marginLeft: "0" }, this.cfg.closeSpeed);
    item.animate({ paddingTop: "35" });
    this.cfg.expanded = false;
  }
};
export {
  Stack
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3N0YWNrL3N0YWNrLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBCYXNlV2lkZ2V0IH0gZnJvbSBcIi4uL2NvcmUvY29yZS53aWRnZXQuanNcIjtcblxuLyoqXG4gKiBfX1ByaW1lRmFjZXMgU3RhY2sgV2lkZ2V0X19cbiAqIFxuICogU3RhY2sgaXMgYSBuYXZpZ2F0aW9uIGNvbXBvbmVudCB0aGF0IG1pbWljcyB0aGUgc3RhY2tzIGZlYXR1cmUgaW4gTWFjIE9TIFguXG4gKiBcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LlN0YWNrQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIFN0YWNrfCBTdGFjayB3aWRnZXR9LlxuICogWW91IGNhbiBhY2Nlc3MgdGhpcyBjb25maWd1cmF0aW9uIHZpYSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldC5jZmd8QmFzZVdpZGdldC5jZmd9LiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBtZWFudCB0byBiZSByZWFkLW9ubHkgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG4gKiBAZXh0ZW5kcyB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnXG4gKiBcbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5jbG9zZVNwZWVkIER1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyBpdCB0YWtlcyB0aGUgc3RhY2sgdG8gY2xvc2UuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmV4cGFuZGVkIFdoZXRoZXIgdGhlIHN0YWNrIGlzIGN1cnJlbnRseSBjbG9zZWQgb3Igb3BlbmVkLlxuICogQHByb3Age251bWJlcn0gY2ZnLm9wZW5TcGVlZCBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgaXQgdGFrZXMgdGhlIHN0YWNrIHRvIG9wZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGFjayBleHRlbmRzIEJhc2VXaWRnZXQge1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgaW5pdChjZmcpIHtcbiAgICAgICAgc3VwZXIuaW5pdChjZmcpO1xuICAgICAgICB0aGlzLmNmZy5leHBhbmRlZCA9IHRoaXMuY2ZnLmV4cGFuZGVkfHxmYWxzZTtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICAkKHRoaXMuanFJZCArICcudWktc3RhY2sgPiBpbWcnKS5vbignY2xpY2suc3RhY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCR0aGlzLmNmZy5leHBhbmRlZClcbiAgICAgICAgICAgICAgICAkdGhpcy5jb2xsYXBzZSgkKHRoaXMpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAkdGhpcy5vcGVuKCQodGhpcykpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuanEuY2hpbGRyZW4oJ2ltZycpO1xuICAgICAgICBpZih0aGlzLmNmZy5leHBhbmRlZCkge1xuICAgICAgICAgICAgdGhpcy5vcGVuKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5leHRJdGVtID0gaXRlbS5uZXh0KCk7XG4gICAgICAgIFxuICAgICAgICAgICAgaXRlbS5jc3Moe3BhZGRpbmdUb3A6ICczNXB4J30pO1xuICAgICAgICAgICAgbmV4dEl0ZW0uY3NzKHt0b3A6ICctNTBweCcsIGxlZnQ6ICcxMHB4J30pLmNoaWxkcmVuKCdsaScpLmNzcyh7dG9wOiAnNTVweCcsIGxlZnQ6ICctMTBweCd9KTtcbiAgICAgICAgICAgIG5leHRJdGVtLmZpbmQoJ2xpIGE+aW1nJykuY3NzKHt3aWR0aDogJzc5cHgnLCBtYXJnaW5MZWZ0OiAnMCd9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBnaXZlbiBtZW51IGl0ZW0gb2YgdGhpcyBzdGFjay5cbiAgICAgKiBAcGFyYW0ge0pRdWVyeX0gaXRlbSBBIG1lbnUgaXRlbSB0byBleHBhbmQsIHVzdWFsbHkgdGhlIHJvb3QgSU1HIGVsZW1lbnQgdGhhdCBpcyBhbiBpbW1lZGlhdGUgY2hpbGQgb2ZcbiAgICAgKiBgLnVpLXN0YWNrYC5cbiAgICAgKi9cbiAgICBvcGVuKGl0ZW0pIHtcbiAgICAgICAgdmFyIHZlcnRpY2FsID0gMCxcbiAgICAgICAgaG9yaXpvbnRhbCA9IDAsXG4gICAgICAgICR0aGlzID0gdGhpcztcblxuICAgICAgICBpdGVtLm5leHQoKS5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykuYW5pbWF0ZSh7dG9wOiAnLScgKyB2ZXJ0aWNhbCArICdweCcsIGxlZnQ6IGhvcml6b250YWwgKyAncHgnfSwgJHRoaXMuY2ZnLm9wZW5TcGVlZCk7XG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IHZlcnRpY2FsICsgNTU7XG4gICAgICAgICAgICBob3Jpem9udGFsID0gKGhvcml6b250YWwrLjc1KSoyO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm5leHQoKS5hbmltYXRlKHt0b3A6ICctNTBweCcsIGxlZnQ6ICcxMHB4J30sIHRoaXMuY2ZnLm9wZW5TcGVlZCkuYWRkQ2xhc3MoJ29wZW5TdGFjaycpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpIGE+aW1nJykuYW5pbWF0ZSh7d2lkdGg6ICc1MHB4JywgbWFyZ2luTGVmdDogJzlweCd9LCB0aGlzLmNmZy5vcGVuU3BlZWQpO1xuICAgICAgICBpdGVtLmFuaW1hdGUoe3BhZGRpbmdUb3A6ICcwJ30pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jZmcuZXhwYW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgICAgICAgICAgIFxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlcyB0aGUgZ2l2ZW4gbWVudSBpdGVtIG9mIHRoaXMgc3RhY2suXG4gICAgICogQHBhcmFtIHtKUXVlcnl9IGl0ZW0gQSBtZW51IGl0ZW0gdG8gY29sbGFwc2UsIHVzdWFsbHkgdGhlIHJvb3QgSU1HIGVsZW1lbnQgdGhhdCBpcyBhbiBpbW1lZGlhdGUgY2hpbGQgb2ZcbiAgICAgKiBgLnVpLXN0YWNrYC5cbiAgICAgKi9cbiAgICBjb2xsYXBzZShpdGVtKSB7XG4gICAgICAgIGl0ZW0ubmV4dCgpLnJlbW92ZUNsYXNzKCdvcGVuU3RhY2snKS5jaGlsZHJlbignbGknKS5hbmltYXRlKHt0b3A6ICc1NXB4JywgbGVmdDogJy0xMHB4J30sIHRoaXMuY2ZnLmNsb3NlU3BlZWQpO1xuICAgICAgICBpdGVtLm5leHQoKS5maW5kKCdsaSBhPmltZycpLmFuaW1hdGUoe3dpZHRoOiAnNzlweCcsIG1hcmdpbkxlZnQ6ICcwJ30sIHRoaXMuY2ZnLmNsb3NlU3BlZWQpO1xuICAgICAgICBpdGVtLmFuaW1hdGUoe3BhZGRpbmdUb3A6ICczNSd9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2ZnLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztBQWdCTyxJQUFNLFFBQU4sY0FBb0IsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9sQyxLQUFLLEtBQUs7QUFDTixVQUFNLEtBQUssR0FBRztBQUNkLFNBQUssSUFBSSxXQUFXLEtBQUssSUFBSSxZQUFVO0FBQ3ZDLFFBQUksUUFBUTtBQUVaLE1BQUUsS0FBSyxPQUFPLGlCQUFpQixFQUFFLEdBQUcsZUFBZSxXQUFXO0FBQzFELFVBQUcsTUFBTSxJQUFJO0FBQ1QsY0FBTSxTQUFTLEVBQUUsSUFBSSxDQUFDO0FBQUE7QUFFdEIsY0FBTSxLQUFLLEVBQUUsSUFBSSxDQUFDO0FBQUEsSUFDMUIsQ0FBQztBQUVELFFBQUksT0FBTyxLQUFLLEdBQUcsU0FBUyxLQUFLO0FBQ2pDLFFBQUcsS0FBSyxJQUFJLFVBQVU7QUFDbEIsV0FBSyxLQUFLLElBQUk7QUFBQSxJQUNsQixPQUNLO0FBQ0QsVUFBSSxXQUFXLEtBQUssS0FBSztBQUV6QixXQUFLLElBQUksRUFBQyxZQUFZLE9BQU0sQ0FBQztBQUM3QixlQUFTLElBQUksRUFBQyxLQUFLLFNBQVMsTUFBTSxPQUFNLENBQUMsRUFBRSxTQUFTLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxRQUFRLE1BQU0sUUFBTyxDQUFDO0FBQzFGLGVBQVMsS0FBSyxVQUFVLEVBQUUsSUFBSSxFQUFDLE9BQU8sUUFBUSxZQUFZLElBQUcsQ0FBQztBQUFBLElBQ2xFO0FBQUEsRUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLEtBQUssTUFBTTtBQUNQLFFBQUksV0FBVyxHQUNmLGFBQWEsR0FDYixRQUFRO0FBRVIsU0FBSyxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssV0FBVTtBQUNsQyxRQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLGFBQWEsS0FBSSxHQUFHLE1BQU0sSUFBSSxTQUFTO0FBQzFGLGlCQUFXLFdBQVc7QUFDdEIsb0JBQWMsYUFBVyxRQUFLO0FBQUEsSUFDbEMsQ0FBQztBQUVELFNBQUssS0FBSyxFQUFFLFFBQVEsRUFBQyxLQUFLLFNBQVMsTUFBTSxPQUFNLEdBQUcsS0FBSyxJQUFJLFNBQVMsRUFBRSxTQUFTLFdBQVcsRUFDakYsS0FBSyxVQUFVLEVBQUUsUUFBUSxFQUFDLE9BQU8sUUFBUSxZQUFZLE1BQUssR0FBRyxLQUFLLElBQUksU0FBUztBQUN4RixTQUFLLFFBQVEsRUFBQyxZQUFZLElBQUcsQ0FBQztBQUU5QixTQUFLLElBQUksV0FBVztBQUFBLEVBQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsU0FBUyxNQUFNO0FBQ1gsU0FBSyxLQUFLLEVBQUUsWUFBWSxXQUFXLEVBQUUsU0FBUyxJQUFJLEVBQUUsUUFBUSxFQUFDLEtBQUssUUFBUSxNQUFNLFFBQU8sR0FBRyxLQUFLLElBQUksVUFBVTtBQUM3RyxTQUFLLEtBQUssRUFBRSxLQUFLLFVBQVUsRUFBRSxRQUFRLEVBQUMsT0FBTyxRQUFRLFlBQVksSUFBRyxHQUFHLEtBQUssSUFBSSxVQUFVO0FBQzFGLFNBQUssUUFBUSxFQUFDLFlBQVksS0FBSSxDQUFDO0FBRS9CLFNBQUssSUFBSSxXQUFXO0FBQUEsRUFDeEI7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
