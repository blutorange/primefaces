import {
  DeferredWidget
} from "./chunk-HGD6GSK5.js";
import "./chunk-YRJTWU7C.js";

// src/gmap/gmap.js
var GMap = class extends DeferredWidget {
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
    this.map = new google.maps.Map(document.getElementById(this.id), this.cfg);
    this.cfg.fitBounds = !(this.cfg.fitBounds === false);
    this.viewport = this.map.getBounds();
    if (this.cfg.markers) {
      this.configureMarkers();
    }
    if (this.cfg.polylines) {
      this.configurePolylines();
    }
    if (this.cfg.polygons) {
      this.configurePolygons();
    }
    if (this.cfg.circles) {
      this.configureCircles();
    }
    if (this.cfg.rectangles) {
      this.configureRectangles();
    }
    this.configureEventListeners();
    if (this.cfg.fitBounds && this.viewport)
      this.map.fitBounds(this.viewport);
    if (this.cfg.infoWindow) {
      var _self = this;
      google.maps.event.addListener(this.cfg.infoWindow, "domready", function() {
        _self.loadWindow(_self.cfg.infoWindowContent);
      });
    }
  }
  /**
   * Returns the current google maps instance.
   * @return {google.maps.Map} The current map instance.
   */
  getMap() {
    return this.map;
  }
  /**
   * The info window that can be displayed to provide detailed information when a marker is selected.
   * @return {google.maps.InfoWindow | undefined} The current info window instance, if any exists.
   */
  getInfoWindow() {
    return this.cfg.infoWindow;
  }
  /**
   * Writes the given HTML content into the info window.
   * @private
   * @param {string} content HTML content for the info window. 
   */
  loadWindow(content) {
    this.jq.find(PrimeFaces.escapeClientId(this.getInfoWindow().id + "_content")).html(content || "");
  }
  /**
   * Loads the contents of the info window from the server and open the info window.
   * @private
   * @param {XMLDocument} responseXML The XML that was returned by the AJAX request made to fetch the contents of the
   * info window. 
   * @return {boolean} `true` if the info window load was initiated successfully, or `false` otherwise.
   */
  openWindow(responseXML) {
    var infoWindow = this.getInfoWindow();
    var $this = this;
    PrimeFaces.ajax.Response.handle(responseXML, null, null, {
      widget: infoWindow,
      handle: function(content) {
        $this.cfg.infoWindowContent = content;
        infoWindow.setContent('<div id="' + infoWindow.id + '_content">' + content + "</div>");
        infoWindow.open($this.getMap(), $this.selectedOverlay);
      }
    });
    return true;
  }
  /**
   * Adds and sets up all configured markers for the gmap.
   * @private
   */
  configureMarkers() {
    var _self = this;
    for (var i = 0; i < this.cfg.markers.length; i++) {
      var marker = this.cfg.markers[i];
      marker.setMap(this.map);
      if (this.cfg.fitBounds)
        this.extendView(marker);
      google.maps.event.addListener(marker, "click", function(event) {
        _self.fireOverlaySelectEvent(event, this, 1);
      });
      google.maps.event.addListener(marker, "dblclick", function(event) {
        _self.fireOverlaySelectEvent(event, this, 2);
      });
      google.maps.event.addListener(marker, "dragend", function(event) {
        _self.fireMarkerDragEvent(event, this);
      });
    }
  }
  /**
   * Calls the behavior for when a marker was dragged.
   * @private
   * @param {google.maps.MapMouseEvent | google.maps.IconMouseEvent} event Event that occurred.
   * @param {google.maps.MarkerOptions} marker The marker that was dragged.
   */
  fireMarkerDragEvent(event, marker) {
    if (this.hasBehavior("markerDrag")) {
      var ext = {
        params: [
          { name: this.id + "_markerId", value: marker.id },
          { name: this.id + "_lat", value: event.latLng.lat() },
          { name: this.id + "_lng", value: event.latLng.lng() }
        ]
      };
      this.callBehavior("markerDrag", ext);
    }
  }
  /**
   * Finds the geocode for the given address and calls the server-side `geocode` behavior, if such a behavior exists.
   * Use `<p:ajax event="geocode" listener="#{geocodeView.onGeocode}" update="@this" />` on the component to define a
   * behavior.
   * @param {string} address Address for which to find a geocode.
   */
  geocode(address) {
    var $this = this;
    if (this.hasBehavior("geocode")) {
      var geocoder = new google.maps.Geocoder(), lats = [], lngs = [], addresses = [];
      geocoder.geocode({ "address": address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var location = results[i].geometry.location;
            lats.push(location.lat());
            lngs.push(location.lng());
            addresses.push(results[i].formatted_address);
          }
          if (results.length) {
            var ext = {
              params: [
                { name: $this.id + "_query", value: address },
                { name: $this.id + "_addresses", value: addresses.join("_primefaces_") },
                { name: $this.id + "_lat", value: lats.join() },
                { name: $this.id + "_lng", value: lngs.join() }
              ]
            };
            $this.callBehavior("geocode", ext);
          }
        } else {
          PrimeFaces.error("Geocode was not found");
        }
      });
    }
  }
  /**
   * Attempts to find an address for the given lattitude and longitude, and calls the `reverseGeocode` behavior with
   * the result. Use `<p:ajax event="reverseGeocode" listener="#{geocodeView.onReverseGeocode}" update="@this" />` on
   * the component to define a behavior.
   * @param {number} lat Latitude to look up, specified in degrees within the range `[-90, 90]`.
   * @param {number} lng Longitude to look up, specified in degrees within the range `[-180, 180]`.
   */
  reverseGeocode(lat, lng) {
    var $this = this;
    if (this.hasBehavior("reverseGeocode")) {
      var geocoder = new google.maps.Geocoder(), latlng = new google.maps.LatLng(lat, lng), addresses = [];
      geocoder.geocode({ "latLng": latlng }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            if (results[i]) {
              addresses[i] = results[i].formatted_address;
            }
          }
          if (0 < addresses.length) {
            var ext = {
              params: [
                { name: $this.id + "_address", value: addresses.join("_primefaces_") },
                { name: $this.id + "_lat", value: lat },
                { name: $this.id + "_lng", value: lng }
              ]
            };
            $this.callBehavior("reverseGeocode", ext);
          } else {
            PrimeFaces.error("No results found");
          }
        } else {
          PrimeFaces.error("Geocoder failed");
        }
      });
    }
  }
  /**
   * Adds the overlay for a polyline shape.
   * @private
   */
  configurePolylines() {
    this.addOverlays(this.cfg.polylines);
  }
  /**
   * Adds the overlay for a circle shape.
   * @private
   */
  configureCircles() {
    this.addOverlays(this.cfg.circles);
  }
  /**
   * Adds the overlay for a rectangular shape.
   * @private
   */
  configureRectangles() {
    this.addOverlays(this.cfg.rectangles);
  }
  /**
   * Adds the overlay for a polygonal shape.
   * @private
   */
  configurePolygons() {
    this.addOverlays(this.cfg.polygons);
  }
  /**
   * Triggers the behavior for when an overlay shape was selected.
   * @private
   * @param {google.maps.MapMouseEvent | google.maps.IconMouseEvent} event The event that occurred.
   * @param {PrimeFaces.widget.GMap.Overlay} overlay The shape that was selected.
   * @param {number} clickCount whether it was single or double click
   */
  fireOverlaySelectEvent(event, overlay, clickCount) {
    this.selectedOverlay = overlay;
    var ext = {
      params: [
        { name: this.id + "_overlayId", value: overlay.id }
      ]
    };
    if (clickCount === 1 && this.hasBehavior("overlaySelect")) {
      this.callBehavior("overlaySelect", ext);
    }
    if (clickCount === 2 && this.hasBehavior("overlayDblSelect")) {
      this.callBehavior("overlayDblSelect", ext);
    }
  }
  /**
   * Adds some event listeners for click events and sets up some behaviors.
   * @private
   */
  configureEventListeners() {
    var _self = this;
    this.cfg.formId = $(PrimeFaces.escapeClientId(this.id)).parents("form:first").attr("id");
    if (this.cfg.onPointClick) {
      google.maps.event.addListener(this.map, "click", function(event) {
        _self.cfg.onPointClick(event);
      });
    }
    this.configureStateChangeListener();
    this.configurePointSelectListener();
  }
  /**
   * Sets up the event listeners for when the state of this map has changed.
   * @private
   */
  configureStateChangeListener() {
    var _self = this, onStateChange = function(event) {
      _self.fireStateChangeEvent(event);
    };
    google.maps.event.addListener(this.map, "zoom_changed", onStateChange);
    google.maps.event.addListener(this.map, "dragend", onStateChange);
  }
  /**
   * Triggers the behavior for when the state of this map has changed.
   * @private
   * @param {never} event The event that triggered the state change.
   */
  fireStateChangeEvent(event) {
    if (this.hasBehavior("stateChange")) {
      var bounds = this.map.getBounds();
      var ext = {
        params: [
          { name: this.id + "_northeast", value: bounds.getNorthEast().lat() + "," + bounds.getNorthEast().lng() },
          { name: this.id + "_southwest", value: bounds.getSouthWest().lat() + "," + bounds.getSouthWest().lng() },
          { name: this.id + "_center", value: bounds.getCenter().lat() + "," + bounds.getCenter().lng() },
          { name: this.id + "_zoom", value: this.map.getZoom() }
        ]
      };
      this.callBehavior("stateChange", ext);
    }
  }
  /**
   * Sets up the event listeners for when a point on the map was selected.
   * @private
   */
  configurePointSelectListener() {
    var _self = this;
    google.maps.event.addListener(this.map, "click", function(event) {
      _self.firePointSelectEvent(event, 1);
    });
    google.maps.event.addListener(this.map, "dblclick", function(event) {
      _self.firePointSelectEvent(event, 2);
    });
  }
  /**
   * Triggers the behavior for when a point on the map was selected.
   * @private
   * @param {google.maps.MapMouseEvent | google.maps.IconMouseEvent} event The event that triggered the point selection.
   * @param {number} clickCount whether it was single or double click
   */
  firePointSelectEvent(event, clickCount) {
    var ext = {
      params: [
        { name: this.id + "_pointLatLng", value: event.latLng.lat() + "," + event.latLng.lng() }
      ]
    };
    if (clickCount === 1 && this.hasBehavior("pointSelect")) {
      this.callBehavior("pointSelect", ext);
    }
    if (clickCount === 2 && this.hasBehavior("pointDblSelect")) {
      this.callBehavior("pointDblSelect", ext);
    }
  }
  /**
   * Adds an overlay shape (circle, polyline, or polygon) to this map.
   * @private
   * @param {PrimeFaces.widget.GMap.Overlay} overlay Overlay shape to add to this map.
   */
  addOverlay(overlay) {
    overlay.setMap(this.map);
  }
  /**
   * Adds all overlay shapes (circle, polyline, or polygon) to this map.
   * @param {PrimeFaces.widget.GMap.Overlay[]} overlays A list of overlay shapes to add to this map.
   */
  addOverlays(overlays) {
    var _self = this;
    $.each(overlays, function(index, item) {
      item.setMap(_self.map);
      _self.extendView(item);
      google.maps.event.addListener(item, "click", function(event) {
        _self.fireOverlaySelectEvent(event, item, 1);
      });
      google.maps.event.addListener(item, "dblclick", function(event) {
        _self.fireOverlaySelectEvent(event, item, 2);
      });
    });
  }
  /**
   * Adjusts (zooms out) the viewport of this map so that it fully shows the given shape.
   * @private
   * @param {PrimeFaces.widget.GMap.Overlay} overlay A shape for which to adjust the viewport.
   */
  extendView(overlay) {
    if (this.cfg.fitBounds && overlay) {
      var _self = this;
      this.viewport = this.viewport || new google.maps.LatLngBounds();
      if (overlay instanceof google.maps.Marker)
        this.viewport.extend(overlay.getPosition());
      else if (overlay instanceof google.maps.Circle || overlay instanceof google.maps.Rectangle)
        this.viewport.union(overlay.getBounds());
      else if (overlay instanceof google.maps.Polyline || overlay instanceof google.maps.Polygon)
        overlay.getPath().forEach(function(item, index) {
          _self.viewport.extend(item);
        });
    }
  }
  /**
   * Triggers a resize event and reapplies the current zoom level, redrawing the map. Useful when the browser viewport
   * was resized etc.
   */
  checkResize() {
    google.maps.event.trigger(this.map, "resize");
    this.map.setZoom(this.map.getZoom());
  }
  /**
   * Sets the map viewport to contain the given bounds.
   * 
   * @see https://developers.google.com/maps/documentation/javascript/reference/map?hl=uk#Map.fitBounds
   * 
   * @param {google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral} bounds The new bounds
   * @param {number | google.maps.Padding} [padding] Optional padding around the bounds. 
   */
  fitBounds(bounds, padding) {
    var original = this.map.fitBounds;
    this.map.fitBounds = google.maps.Map.prototype.fitBounds;
    this.map.fitBounds(bounds, padding);
    this.map.fitBounds = original;
  }
};
export {
  GMap
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2dtYXAvZ21hcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRGVmZXJyZWRXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBHb29nbGUgTWFwcyBXaWRnZXRfX1xuICogXG4gKiBHTWFwIGlzIGEgbWFwIGNvbXBvbmVudCBpbnRlZ3JhdGVkIHdpdGggR29vZ2xlIE1hcHMgQVBJIFYzLlxuICogXG4gKiBAdHlwZWRlZiB7KGdvb2dsZS5tYXBzLk1hcmtlciB8IGdvb2dsZS5tYXBzLkNpcmNsZSB8IGdvb2dsZS5tYXBzLlBvbHlsaW5lIHwgZ29vZ2xlLm1hcHMuUG9seWdvbiB8IGdvb2dsZS5tYXBzLlJlY3RhbmdsZSkgJiBQcmltZUZhY2VzLndpZGdldC5HTWFwLklkUHJvdmlkaW5nfSBQcmltZUZhY2VzLndpZGdldC5HTWFwLk92ZXJsYXlcbiAqIEFuIG92ZXJsYXkgc2hhcGUgdGhhdCBleHRlbmRzIHRoZSBzaGFwZXMgYW5kIG1hcmtlcnMgYXMgZGVmaW5lZCBieSB0aGUgbWFwcyBBUEkuIEFkZHMgYW4gSUQgcHJvcGVydHkgZm9yIGlkZW50aWZ5aW5nXG4gKiB0aGUgc2hhcGUgb3IgbWFya2VyLlxuICogXG4gKiBAdHlwZWRlZiBQcmltZUZhY2VzLndpZGdldC5HTWFwLk9uUG9pbnRDbGlja0NhbGxiYWNrIEphdmFzY3JpcHQgY2FsbGJhY2sgdG8gZXhlY3V0ZSB3aGVuIGEgcG9pbnQgb24gbWFwIGlzIGNsaWNrZWQuXG4gKiBTZWUgYWxzbyB7QGxpbmsgR01hcENmZy5vblBvaW50Q2xpY2t9LlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5NYXBNb3VzZUV2ZW50IHwgZ29vZ2xlLm1hcHMuSWNvbk1vdXNlRXZlbnR9IFByaW1lRmFjZXMud2lkZ2V0LkdNYXAuT25Qb2ludENsaWNrQ2FsbGJhY2suZXZlbnQgVGhlXG4gKiBtb3VzZSBvciBjbGljayBldmVudCB0aGF0IG9jY3VycmVkLlxuICogXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5HTWFwLklkUHJvdmlkaW5nfSBJZFByb3ZpZGluZyBJbnRlcmZhY2UgZm9yIG9iamVjdHMgdGhhdCBwcm92aWRlIGFuIElEIHRoYXQgdW5pcXVlbHlcbiAqIGlkZW50aWZpZXMgdGhlIG9iamVjdC5cbiAqIEBwcm9wIHtzdHJpbmd9IElkUHJvdmlkaW5nLmlkIFRoZSBJRCB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhpcyBvYmplY3QuXG4gKiBcbiAqIEBwcm9wIHtnb29nbGUubWFwcy5NYXB9IG1hcCBUaGUgY3VycmVudCBnb29nbGUgbWFwcyBpbnN0YW5jZS5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5HTWFwLk92ZXJsYXl9IHNlbGVjdGVkT3ZlcmxheSBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGFuZCBhY3RpdmUgb3ZlcmxheSBzaGFwZS5cbiAqIEBwcm9wIHtnb29nbGUubWFwcy5MYXRMbmdCb3VuZHN9IHZpZXdwb3J0IFRoZSBzcGhlcmljYWwgcG9ydGlvbiBvZiB0aGUgZWFydGgncyBzdXJmYWNlIHRoYXQgaXMgY3VycmVudGx5IHNob3duIGluIHRoZSBtYXBcbiAqIHZpZXdwb3J0LlxuICogXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5HTWFwQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIEdNYXB8IEdNYXAgd2lkZ2V0fS5cbiAqIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWEge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQuY2ZnfEJhc2VXaWRnZXQuY2ZnfS4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzXG4gKiBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmUgcmVhZC1vbmx5IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuICogQGV4dGVuZHMge1ByaW1lRmFjZXMud2lkZ2V0LkRlZmVycmVkV2lkZ2V0Q2ZnfSBjZmdcbiAqIEBleHRlbmRzIHtnb29nbGUubWFwcy5NYXBPcHRpb25zfSBjZmdcbiAqIFxuICogQHByb3Ageyhnb29nbGUubWFwcy5DaXJjbGUgJiBQcmltZUZhY2VzLndpZGdldC5HTWFwLklkUHJvdmlkaW5nKVtdfSBjZmcuY2lyY2xlcyBMaXN0IG9mIG92ZXJsYXkgY2lyY3VsYXIgc2hhcGVzIGFkZGVkXG4gKiB0byB0aGlzIG1hcC5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuZml0Qm91bmRzIERlZmluZXMgaWYgY2VudGVyIGFuZCB6b29tIHNob3VsZCBiZSBjYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgdG8gY29udGFpbiBhbGwgbWFya2VycyBvblxuICogdGhlIG1hcC5cbiAqIEBwcm9wIHtnb29nbGUubWFwcy5JbmZvV2luZG93fSBjZmcuaW5mb1dpbmRvdyBUaGUgY3VycmVudCBpbmZvIHdpbmRvdyBpbnN0YW5jZSwgaWYgYW55IGluZm8gd2luZG93IHdhcyBjcmVhdGVkIHlldC5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5pbmZvV2luZG93Q29udGVudCBIVE1MIHN0cmluZyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgaW5mbyB3aW5kb3csIGFzIGZldGNoZWQgZnJvbSB0aGUgc2VydmVyLlxuICogQHByb3Ageyhnb29nbGUubWFwcy5NYXJrZXIgJiBQcmltZUZhY2VzLndpZGdldC5HTWFwLklkUHJvdmlkaW5nKVtdfSBjZmcubWFya2VycyBBIGxpc3Qgb2YgbWFya2VycyB0byBkaXNwbGF5IG9uIHRoZVxuICogbWFwLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkdNYXAuT25Qb2ludENsaWNrQ2FsbGJhY2t9IGNmZy5vblBvaW50Q2xpY2sgSmF2YXNjcmlwdCBjYWxsYmFjayB0byBleGVjdXRlIHdoZW4gYSBwb2ludCBvblxuICogbWFwIGlzIGNsaWNrZWQuXG4gKiBAcHJvcCB7KGdvb2dsZS5tYXBzLlBvbHlnb24gJiBQcmltZUZhY2VzLndpZGdldC5HTWFwLklkUHJvdmlkaW5nKVtdfSBjZmcucG9seWdvbnMgTGlzdCBvZiBvdmVybGF5IHBvbHlnb25hbCBzaGFwZXNcbiAqIGFkZGVkIHRvIHRoaXMgbWFwLlxuICogQHByb3Ageyhnb29nbGUubWFwcy5Qb2x5bGluZSAmIFByaW1lRmFjZXMud2lkZ2V0LkdNYXAuSWRQcm92aWRpbmcpW119IGNmZy5wb2x5bGluZXMgTGlzdCBvZiBvdmVybGF5IHBvbHlsaW5lIHNoYXBlc1xuICogYWRkZWQgdG8gdGhpcyBtYXAuXG4gKiBAcHJvcCB7KGdvb2dsZS5tYXBzLlJlY3RhbmdsZSAmIFByaW1lRmFjZXMud2lkZ2V0LkdNYXAuSWRQcm92aWRpbmcpW119IGNmZy5yZWN0YW5nbGVzIExpc3Qgb2Ygb3ZlcmxheSByZWN0YW5ndWxhclxuICogc2hhcGVzIGFkZGVkIHRvIHRoaXMgbWFwLlxuICovXG5leHBvcnQgY2xhc3MgR01hcCBleHRlbmRzIERlZmVycmVkV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIGluaXQoY2ZnKSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcblxuICAgICAgICB0aGlzLnJlbmRlckRlZmVycmVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluY2x1ZGVcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBfcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCksIHRoaXMuY2ZnKTtcbiAgICAgICAgdGhpcy5jZmcuZml0Qm91bmRzID0gISh0aGlzLmNmZy5maXRCb3VuZHMgPT09IGZhbHNlKTtcbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IHRoaXMubWFwLmdldEJvdW5kcygpO1xuXG4gICAgICAgIC8vY29uZiBtYXJrZXJzXG4gICAgICAgIGlmKHRoaXMuY2ZnLm1hcmtlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlTWFya2VycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9hZGQgcG9seWxpbmVzXG4gICAgICAgIGlmKHRoaXMuY2ZnLnBvbHlsaW5lcykge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVQb2x5bGluZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWRkIHBvbHlnb25zXG4gICAgICAgIGlmKHRoaXMuY2ZnLnBvbHlnb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZVBvbHlnb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2FkZCBjaXJjbGVzXG4gICAgICAgIGlmKHRoaXMuY2ZnLmNpcmNsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlQ2lyY2xlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9hZGQgcmVjdGFuZ2xlc1xuICAgICAgICBpZih0aGlzLmNmZy5yZWN0YW5nbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZVJlY3RhbmdsZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZ2VuZXJhbCBtYXAgZXZlbnRzXG4gICAgICAgIHRoaXMuY29uZmlndXJlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICAvL2ZpdCBhdXRvIGJvdW5kc1xuICAgICAgICBpZih0aGlzLmNmZy5maXRCb3VuZHMgJiYgdGhpcy52aWV3cG9ydClcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLnZpZXdwb3J0KTtcblxuICAgICAgICAvL2JpbmQgaW5mb3dpbmRvdyBkb21yZWFkeSBmb3IgZHluYW1pYyBjb250ZW50LlxuICAgICAgICBpZih0aGlzLmNmZy5pbmZvV2luZG93KXtcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLmNmZy5pbmZvV2luZG93LCAnZG9tcmVhZHknLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfc2VsZi5sb2FkV2luZG93KF9zZWxmLmNmZy5pbmZvV2luZG93Q29udGVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZ29vZ2xlIG1hcHMgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7Z29vZ2xlLm1hcHMuTWFwfSBUaGUgY3VycmVudCBtYXAgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZ2V0TWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGluZm8gd2luZG93IHRoYXQgY2FuIGJlIGRpc3BsYXllZCB0byBwcm92aWRlIGRldGFpbGVkIGluZm9ybWF0aW9uIHdoZW4gYSBtYXJrZXIgaXMgc2VsZWN0ZWQuXG4gICAgICogQHJldHVybiB7Z29vZ2xlLm1hcHMuSW5mb1dpbmRvdyB8IHVuZGVmaW5lZH0gVGhlIGN1cnJlbnQgaW5mbyB3aW5kb3cgaW5zdGFuY2UsIGlmIGFueSBleGlzdHMuXG4gICAgICovXG4gICAgZ2V0SW5mb1dpbmRvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2ZnLmluZm9XaW5kb3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBnaXZlbiBIVE1MIGNvbnRlbnQgaW50byB0aGUgaW5mbyB3aW5kb3cuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCBIVE1MIGNvbnRlbnQgZm9yIHRoZSBpbmZvIHdpbmRvdy4gXG4gICAgICovXG4gICAgbG9hZFdpbmRvdyhjb250ZW50KXtcbiAgICAgICAgdGhpcy5qcS5maW5kKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQodGhpcy5nZXRJbmZvV2luZG93KCkuaWQgKyAnX2NvbnRlbnQnKSkuaHRtbChjb250ZW50fHwnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIGNvbnRlbnRzIG9mIHRoZSBpbmZvIHdpbmRvdyBmcm9tIHRoZSBzZXJ2ZXIgYW5kIG9wZW4gdGhlIGluZm8gd2luZG93LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtYTUxEb2N1bWVudH0gcmVzcG9uc2VYTUwgVGhlIFhNTCB0aGF0IHdhcyByZXR1cm5lZCBieSB0aGUgQUpBWCByZXF1ZXN0IG1hZGUgdG8gZmV0Y2ggdGhlIGNvbnRlbnRzIG9mIHRoZVxuICAgICAqIGluZm8gd2luZG93LiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGluZm8gd2luZG93IGxvYWQgd2FzIGluaXRpYXRlZCBzdWNjZXNzZnVsbHksIG9yIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIG9wZW5XaW5kb3cocmVzcG9uc2VYTUwpIHtcbiAgICAgICAgdmFyIGluZm9XaW5kb3cgPSB0aGlzLmdldEluZm9XaW5kb3coKTtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVzcG9uc2UuaGFuZGxlKHJlc3BvbnNlWE1MLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICB3aWRnZXQ6IGluZm9XaW5kb3csXG4gICAgICAgICAgICBoYW5kbGU6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5jZmcuaW5mb1dpbmRvd0NvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIGluZm9XaW5kb3cuc2V0Q29udGVudCgnPGRpdiBpZD1cIicgKyBpbmZvV2luZG93LmlkICsgJ19jb250ZW50XCI+JyArIGNvbnRlbnQgKyAnPC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICAgICBpbmZvV2luZG93Lm9wZW4oJHRoaXMuZ2V0TWFwKCksICR0aGlzLnNlbGVjdGVkT3ZlcmxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5kIHNldHMgdXAgYWxsIGNvbmZpZ3VyZWQgbWFya2VycyBmb3IgdGhlIGdtYXAuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjb25maWd1cmVNYXJrZXJzKCkge1xuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuXG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgdGhpcy5jZmcubWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG1hcmtlciA9IHRoaXMuY2ZnLm1hcmtlcnNbaV07XG4gICAgICAgICAgICBtYXJrZXIuc2V0TWFwKHRoaXMubWFwKTtcblxuICAgICAgICAgICAgLy9leHRlbmQgdmlld3BvcnRcbiAgICAgICAgICAgIGlmKHRoaXMuY2ZnLmZpdEJvdW5kcylcbiAgICAgICAgICAgICAgICB0aGlzLmV4dGVuZFZpZXcobWFya2VyKTtcblxuICAgICAgICAgICAgLy9vdmVybGF5IHNlbGVjdFxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIF9zZWxmLmZpcmVPdmVybGF5U2VsZWN0RXZlbnQoZXZlbnQsIHRoaXMsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdkYmxjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuZmlyZU92ZXJsYXlTZWxlY3RFdmVudChldmVudCwgdGhpcywgMik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9tYXJrZXIgZHJhZ1xuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnZHJhZ2VuZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuZmlyZU1hcmtlckRyYWdFdmVudChldmVudCwgdGhpcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBiZWhhdmlvciBmb3Igd2hlbiBhIG1hcmtlciB3YXMgZHJhZ2dlZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTWFwTW91c2VFdmVudCB8IGdvb2dsZS5tYXBzLkljb25Nb3VzZUV2ZW50fSBldmVudCBFdmVudCB0aGF0IG9jY3VycmVkLlxuICAgICAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTWFya2VyT3B0aW9uc30gbWFya2VyIFRoZSBtYXJrZXIgdGhhdCB3YXMgZHJhZ2dlZC5cbiAgICAgKi9cbiAgICBmaXJlTWFya2VyRHJhZ0V2ZW50KGV2ZW50LCBtYXJrZXIpIHtcbiAgICAgICAgaWYodGhpcy5oYXNCZWhhdmlvcignbWFya2VyRHJhZycpKSB7XG4gICAgICAgICAgICB2YXIgZXh0ID0ge1xuICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICB7bmFtZTogdGhpcy5pZCArICdfbWFya2VySWQnLCB2YWx1ZTogbWFya2VyLmlkfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IHRoaXMuaWQgKyAnX2xhdCcsIHZhbHVlOiBldmVudC5sYXRMbmcubGF0KCl9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogdGhpcy5pZCArICdfbG5nJywgdmFsdWU6IGV2ZW50LmxhdExuZy5sbmcoKX1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxCZWhhdmlvcignbWFya2VyRHJhZycsIGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgZ2VvY29kZSBmb3IgdGhlIGdpdmVuIGFkZHJlc3MgYW5kIGNhbGxzIHRoZSBzZXJ2ZXItc2lkZSBgZ2VvY29kZWAgYmVoYXZpb3IsIGlmIHN1Y2ggYSBiZWhhdmlvciBleGlzdHMuXG4gICAgICogVXNlIGA8cDphamF4IGV2ZW50PVwiZ2VvY29kZVwiIGxpc3RlbmVyPVwiI3tnZW9jb2RlVmlldy5vbkdlb2NvZGV9XCIgdXBkYXRlPVwiQHRoaXNcIiAvPmAgb24gdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYVxuICAgICAqIGJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIEFkZHJlc3MgZm9yIHdoaWNoIHRvIGZpbmQgYSBnZW9jb2RlLlxuICAgICAqL1xuICAgIGdlb2NvZGUoYWRkcmVzcykge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmKHRoaXMuaGFzQmVoYXZpb3IoJ2dlb2NvZGUnKSkge1xuICAgICAgICAgICAgdmFyIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCksXG4gICAgICAgICAgICAgICAgbGF0cyA9IFtdLFxuICAgICAgICAgICAgICAgIGxuZ3MgPSBbXSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzZXMgPSBbXTtcblxuICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7J2FkZHJlc3MnOiBhZGRyZXNzfSwgZnVuY3Rpb24ocmVzdWx0cywgc3RhdHVzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSByZXN1bHRzW2ldLmdlb21ldHJ5LmxvY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0cy5wdXNoKGxvY2F0aW9uLmxhdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZ3MucHVzaChsb2NhdGlvbi5sbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaChyZXN1bHRzW2ldLmZvcm1hdHRlZF9hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJHRoaXMuaWQgKyAnX3F1ZXJ5JywgdmFsdWU6IGFkZHJlc3N9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJHRoaXMuaWQgKyAnX2FkZHJlc3NlcycsIHZhbHVlOiBhZGRyZXNzZXMuam9pbignX3ByaW1lZmFjZXNfJyl9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJHRoaXMuaWQgKyAnX2xhdCcsIHZhbHVlOiBsYXRzLmpvaW4oKX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAkdGhpcy5pZCArICdfbG5nJywgdmFsdWU6IGxuZ3Muam9pbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmNhbGxCZWhhdmlvcignZ2VvY29kZScsIGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZXJyb3IoJ0dlb2NvZGUgd2FzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBmaW5kIGFuIGFkZHJlc3MgZm9yIHRoZSBnaXZlbiBsYXR0aXR1ZGUgYW5kIGxvbmdpdHVkZSwgYW5kIGNhbGxzIHRoZSBgcmV2ZXJzZUdlb2NvZGVgIGJlaGF2aW9yIHdpdGhcbiAgICAgKiB0aGUgcmVzdWx0LiBVc2UgYDxwOmFqYXggZXZlbnQ9XCJyZXZlcnNlR2VvY29kZVwiIGxpc3RlbmVyPVwiI3tnZW9jb2RlVmlldy5vblJldmVyc2VHZW9jb2RlfVwiIHVwZGF0ZT1cIkB0aGlzXCIgLz5gIG9uXG4gICAgICogdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBiZWhhdmlvci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGF0IExhdGl0dWRlIHRvIGxvb2sgdXAsIHNwZWNpZmllZCBpbiBkZWdyZWVzIHdpdGhpbiB0aGUgcmFuZ2UgYFstOTAsIDkwXWAuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxuZyBMb25naXR1ZGUgdG8gbG9vayB1cCwgc3BlY2lmaWVkIGluIGRlZ3JlZXMgd2l0aGluIHRoZSByYW5nZSBgWy0xODAsIDE4MF1gLlxuICAgICAqL1xuICAgIHJldmVyc2VHZW9jb2RlKGxhdCwgbG5nKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYodGhpcy5oYXNCZWhhdmlvcigncmV2ZXJzZUdlb2NvZGUnKSkge1xuICAgICAgICAgICAgdmFyIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCksXG4gICAgICAgICAgICAgICAgbGF0bG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICAgICAgICAgICAgYWRkcmVzc2VzID0gW107XG5cbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeydsYXRMbmcnOiBsYXRsbmd9LCBmdW5jdGlvbihyZXN1bHRzLCBzdGF0dXMpIHtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzW2ldID0gcmVzdWx0c1tpXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKDAgPCBhZGRyZXNzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJHRoaXMuaWQgKyAnX2FkZHJlc3MnLCB2YWx1ZTogYWRkcmVzc2VzLmpvaW4oJ19wcmltZWZhY2VzXycpfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6ICR0aGlzLmlkICsgJ19sYXQnLCB2YWx1ZTogbGF0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6ICR0aGlzLmlkICsgJ19sbmcnLCB2YWx1ZTogbG5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmNhbGxCZWhhdmlvcigncmV2ZXJzZUdlb2NvZGUnLCBleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5lcnJvcignTm8gcmVzdWx0cyBmb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmVycm9yKCdHZW9jb2RlciBmYWlsZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBvdmVybGF5IGZvciBhIHBvbHlsaW5lIHNoYXBlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY29uZmlndXJlUG9seWxpbmVzKCkge1xuICAgICAgICB0aGlzLmFkZE92ZXJsYXlzKHRoaXMuY2ZnLnBvbHlsaW5lcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgb3ZlcmxheSBmb3IgYSBjaXJjbGUgc2hhcGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjb25maWd1cmVDaXJjbGVzKCkge1xuICAgICAgICB0aGlzLmFkZE92ZXJsYXlzKHRoaXMuY2ZnLmNpcmNsZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG92ZXJsYXkgZm9yIGEgcmVjdGFuZ3VsYXIgc2hhcGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjb25maWd1cmVSZWN0YW5nbGVzKCkge1xuICAgICAgICB0aGlzLmFkZE92ZXJsYXlzKHRoaXMuY2ZnLnJlY3RhbmdsZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG92ZXJsYXkgZm9yIGEgcG9seWdvbmFsIHNoYXBlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY29uZmlndXJlUG9seWdvbnMoKSB7XG4gICAgICAgIHRoaXMuYWRkT3ZlcmxheXModGhpcy5jZmcucG9seWdvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIHRoZSBiZWhhdmlvciBmb3Igd2hlbiBhbiBvdmVybGF5IHNoYXBlIHdhcyBzZWxlY3RlZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTWFwTW91c2VFdmVudCB8IGdvb2dsZS5tYXBzLkljb25Nb3VzZUV2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBvY2N1cnJlZC5cbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkdNYXAuT3ZlcmxheX0gb3ZlcmxheSBUaGUgc2hhcGUgdGhhdCB3YXMgc2VsZWN0ZWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNsaWNrQ291bnQgd2hldGhlciBpdCB3YXMgc2luZ2xlIG9yIGRvdWJsZSBjbGlja1xuICAgICAqL1xuICAgIGZpcmVPdmVybGF5U2VsZWN0RXZlbnQoZXZlbnQsIG92ZXJsYXksIGNsaWNrQ291bnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE92ZXJsYXkgPSBvdmVybGF5O1xuICAgICAgICBcbiAgICAgICAgdmFyIGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IHRoaXMuaWQgKyAnX292ZXJsYXlJZCcsIHZhbHVlOiBvdmVybGF5LmlkfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNsaWNrQ291bnQgPT09IDEgJiYgdGhpcy5oYXNCZWhhdmlvcignb3ZlcmxheVNlbGVjdCcpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxCZWhhdmlvcignb3ZlcmxheVNlbGVjdCcsIGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsaWNrQ291bnQgPT09IDIgJiYgdGhpcy5oYXNCZWhhdmlvcignb3ZlcmxheURibFNlbGVjdCcpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxCZWhhdmlvcignb3ZlcmxheURibFNlbGVjdCcsIGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHNvbWUgZXZlbnQgbGlzdGVuZXJzIGZvciBjbGljayBldmVudHMgYW5kIHNldHMgdXAgc29tZSBiZWhhdmlvcnMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjb25maWd1cmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmNmZy5mb3JtSWQgPSAkKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQodGhpcy5pZCkpLnBhcmVudHMoJ2Zvcm06Zmlyc3QnKS5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vY2xpZW50IHNpZGUgZXZlbnRzXG4gICAgICAgIGlmKHRoaXMuY2ZnLm9uUG9pbnRDbGljaykge1xuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuY2ZnLm9uUG9pbnRDbGljayhldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vYmVoYXZpb3JzXG4gICAgICAgIHRoaXMuY29uZmlndXJlU3RhdGVDaGFuZ2VMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZVBvaW50U2VsZWN0TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgZm9yIHdoZW4gdGhlIHN0YXRlIG9mIHRoaXMgbWFwIGhhcyBjaGFuZ2VkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY29uZmlndXJlU3RhdGVDaGFuZ2VMaXN0ZW5lcigpIHtcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcyxcbiAgICAgICAgb25TdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBfc2VsZi5maXJlU3RhdGVDaGFuZ2VFdmVudChldmVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsICd6b29tX2NoYW5nZWQnLCBvblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsICdkcmFnZW5kJywgb25TdGF0ZUNoYW5nZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGJlaGF2aW9yIGZvciB3aGVuIHRoZSBzdGF0ZSBvZiB0aGlzIG1hcCBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7bmV2ZXJ9IGV2ZW50IFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgc3RhdGUgY2hhbmdlLlxuICAgICAqL1xuICAgIGZpcmVTdGF0ZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmKHRoaXMuaGFzQmVoYXZpb3IoJ3N0YXRlQ2hhbmdlJykpIHtcbiAgICAgICAgICAgIHZhciBib3VuZHMgPSB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcblxuICAgICAgICAgICAgdmFyIGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IHRoaXMuaWQgKyAnX25vcnRoZWFzdCcsIHZhbHVlOiBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkubGF0KCkgKyAnLCcgKyBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkubG5nKCl9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogdGhpcy5pZCArICdfc291dGh3ZXN0JywgdmFsdWU6IGJvdW5kcy5nZXRTb3V0aFdlc3QoKS5sYXQoKSArICcsJyArIGJvdW5kcy5nZXRTb3V0aFdlc3QoKS5sbmcoKX0sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiB0aGlzLmlkICsgJ19jZW50ZXInLCB2YWx1ZTogYm91bmRzLmdldENlbnRlcigpLmxhdCgpICsgJywnICsgYm91bmRzLmdldENlbnRlcigpLmxuZygpfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6IHRoaXMuaWQgKyAnX3pvb20nLCB2YWx1ZTogdGhpcy5tYXAuZ2V0Wm9vbSgpfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEJlaGF2aW9yKCdzdGF0ZUNoYW5nZScsIGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgZm9yIHdoZW4gYSBwb2ludCBvbiB0aGUgbWFwIHdhcyBzZWxlY3RlZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNvbmZpZ3VyZVBvaW50U2VsZWN0TGlzdGVuZXIoKSB7XG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBfc2VsZi5maXJlUG9pbnRTZWxlY3RFdmVudChldmVudCwgMSk7XG4gICAgICAgIH0pO1xuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcCwgJ2RibGNsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIF9zZWxmLmZpcmVQb2ludFNlbGVjdEV2ZW50KGV2ZW50LCAyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGJlaGF2aW9yIGZvciB3aGVuIGEgcG9pbnQgb24gdGhlIG1hcCB3YXMgc2VsZWN0ZWQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2dvb2dsZS5tYXBzLk1hcE1vdXNlRXZlbnQgfCBnb29nbGUubWFwcy5JY29uTW91c2VFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSBwb2ludCBzZWxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNsaWNrQ291bnQgd2hldGhlciBpdCB3YXMgc2luZ2xlIG9yIGRvdWJsZSBjbGlja1xuICAgICAqL1xuICAgIGZpcmVQb2ludFNlbGVjdEV2ZW50KGV2ZW50LCBjbGlja0NvdW50KSB7XG4gICAgICAgIHZhciBleHQgPSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiB0aGlzLmlkICsgJ19wb2ludExhdExuZycsIHZhbHVlOiBldmVudC5sYXRMbmcubGF0KCkgKyAnLCcgKyBldmVudC5sYXRMbmcubG5nKCl9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjbGlja0NvdW50ID09PSAxICYmIHRoaXMuaGFzQmVoYXZpb3IoJ3BvaW50U2VsZWN0JykpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbEJlaGF2aW9yKCdwb2ludFNlbGVjdCcsIGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsaWNrQ291bnQgPT09IDIgJiYgdGhpcy5oYXNCZWhhdmlvcigncG9pbnREYmxTZWxlY3QnKSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsQmVoYXZpb3IoJ3BvaW50RGJsU2VsZWN0JywgZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gb3ZlcmxheSBzaGFwZSAoY2lyY2xlLCBwb2x5bGluZSwgb3IgcG9seWdvbikgdG8gdGhpcyBtYXAuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkdNYXAuT3ZlcmxheX0gb3ZlcmxheSBPdmVybGF5IHNoYXBlIHRvIGFkZCB0byB0aGlzIG1hcC5cbiAgICAgKi9cbiAgICBhZGRPdmVybGF5KG92ZXJsYXkpIHtcbiAgICAgICAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYWxsIG92ZXJsYXkgc2hhcGVzIChjaXJjbGUsIHBvbHlsaW5lLCBvciBwb2x5Z29uKSB0byB0aGlzIG1hcC5cbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkdNYXAuT3ZlcmxheVtdfSBvdmVybGF5cyBBIGxpc3Qgb2Ygb3ZlcmxheSBzaGFwZXMgdG8gYWRkIHRvIHRoaXMgbWFwLlxuICAgICAqL1xuICAgIGFkZE92ZXJsYXlzKG92ZXJsYXlzKSB7XG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgJC5lYWNoKG92ZXJsYXlzLCBmdW5jdGlvbihpbmRleCwgaXRlbSl7XG4gICAgICAgICAgICBpdGVtLnNldE1hcChfc2VsZi5tYXApO1xuXG4gICAgICAgICAgICBfc2VsZi5leHRlbmRWaWV3KGl0ZW0pO1xuXG4gICAgICAgICAgICAvL2JpbmQgb3ZlcmxheSBjbGljayBldmVudFxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaXRlbSwgJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfc2VsZi5maXJlT3ZlcmxheVNlbGVjdEV2ZW50KGV2ZW50LCBpdGVtLCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihpdGVtLCAnZGJsY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIF9zZWxmLmZpcmVPdmVybGF5U2VsZWN0RXZlbnQoZXZlbnQsIGl0ZW0sIDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRqdXN0cyAoem9vbXMgb3V0KSB0aGUgdmlld3BvcnQgb2YgdGhpcyBtYXAgc28gdGhhdCBpdCBmdWxseSBzaG93cyB0aGUgZ2l2ZW4gc2hhcGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkdNYXAuT3ZlcmxheX0gb3ZlcmxheSBBIHNoYXBlIGZvciB3aGljaCB0byBhZGp1c3QgdGhlIHZpZXdwb3J0LlxuICAgICAqL1xuICAgIGV4dGVuZFZpZXcob3ZlcmxheSl7XG4gICAgICAgIGlmKCB0aGlzLmNmZy5maXRCb3VuZHMgJiYgb3ZlcmxheSl7XG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy52aWV3cG9ydCA9IHRoaXMudmlld3BvcnQgfHwgbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgICAgICAgICAgaWYob3ZlcmxheSBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLk1hcmtlcilcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0LmV4dGVuZChvdmVybGF5LmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgICAgICBlbHNlIGlmKG92ZXJsYXkgaW5zdGFuY2VvZiBnb29nbGUubWFwcy5DaXJjbGUgfHwgb3ZlcmxheSBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLlJlY3RhbmdsZSlcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0LnVuaW9uKG92ZXJsYXkuZ2V0Qm91bmRzKCkpO1xuXG4gICAgICAgICAgICBlbHNlIGlmKG92ZXJsYXkgaW5zdGFuY2VvZiBnb29nbGUubWFwcy5Qb2x5bGluZSB8fCBvdmVybGF5IGluc3RhbmNlb2YgZ29vZ2xlLm1hcHMuUG9seWdvbilcbiAgICAgICAgICAgICAgICBvdmVybGF5LmdldFBhdGgoKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYudmlld3BvcnQuZXh0ZW5kKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgYSByZXNpemUgZXZlbnQgYW5kIHJlYXBwbGllcyB0aGUgY3VycmVudCB6b29tIGxldmVsLCByZWRyYXdpbmcgdGhlIG1hcC4gVXNlZnVsIHdoZW4gdGhlIGJyb3dzZXIgdmlld3BvcnRcbiAgICAgKiB3YXMgcmVzaXplZCBldGMuXG4gICAgICovXG4gICAgY2hlY2tSZXNpemUoKSB7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5tYXAsICdyZXNpemUnKTtcbiAgICAgICAgdGhpcy5tYXAuc2V0Wm9vbSh0aGlzLm1hcC5nZXRab29tKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1hcCB2aWV3cG9ydCB0byBjb250YWluIHRoZSBnaXZlbiBib3VuZHMuXG4gICAgICogXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UvbWFwP2hsPXVrI01hcC5maXRCb3VuZHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyB8IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc0xpdGVyYWx9IGJvdW5kcyBUaGUgbmV3IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyIHwgZ29vZ2xlLm1hcHMuUGFkZGluZ30gW3BhZGRpbmddIE9wdGlvbmFsIHBhZGRpbmcgYXJvdW5kIHRoZSBib3VuZHMuIFxuICAgICAqL1xuICAgIGZpdEJvdW5kcyhib3VuZHMsIHBhZGRpbmcpIHtcbiAgICAgICAgLy9yZW1lbWJlciB0aGUgcHJvcGVydHkgc2V0IGJ5IFByaW1lRmFjZXNcbiAgICAgICAgdmFyIG9yaWdpbmFsID0gdGhpcy5tYXAuZml0Qm91bmRzO1xuXG4gICAgICAgIC8vcmVwbGFjZSB0aGUgY29kZSBieSB0aGUgb25lIHByb3ZpZGVkIGJ5IGdvb2dsZSBtYXBzIGFwaVxuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMgPSBnb29nbGUubWFwcy5NYXAucHJvdG90eXBlLmZpdEJvdW5kcztcblxuICAgICAgICAvL2V4ZWN1dGUgZml0Qm91bmRzIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMsIHBhZGRpbmcpO1xuXG4gICAgICAgIC8vcmVzdG9yZSBQcmltZUZhY2VzIHByb3BlcnR5XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyA9IG9yaWdpbmFsO1xuICAgIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFnRE8sSUFBTSxPQUFOLGNBQW1CLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPckMsS0FBSyxLQUFLO0FBQ04sVUFBTSxLQUFLLEdBQUc7QUFFZCxTQUFLLGVBQWU7QUFBQSxFQUN4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsVUFBVTtBQUNOLFNBQUssTUFBTSxJQUFJLE9BQU8sS0FBSyxJQUFJLFNBQVMsZUFBZSxLQUFLLEVBQUUsR0FBRyxLQUFLLEdBQUc7QUFDekUsU0FBSyxJQUFJLFlBQVksRUFBRSxLQUFLLElBQUksY0FBYztBQUM5QyxTQUFLLFdBQVcsS0FBSyxJQUFJLFVBQVU7QUFHbkMsUUFBRyxLQUFLLElBQUksU0FBUztBQUNqQixXQUFLLGlCQUFpQjtBQUFBLElBQzFCO0FBR0EsUUFBRyxLQUFLLElBQUksV0FBVztBQUNuQixXQUFLLG1CQUFtQjtBQUFBLElBQzVCO0FBR0EsUUFBRyxLQUFLLElBQUksVUFBVTtBQUNsQixXQUFLLGtCQUFrQjtBQUFBLElBQzNCO0FBR0EsUUFBRyxLQUFLLElBQUksU0FBUztBQUNqQixXQUFLLGlCQUFpQjtBQUFBLElBQzFCO0FBR0EsUUFBRyxLQUFLLElBQUksWUFBWTtBQUNwQixXQUFLLG9CQUFvQjtBQUFBLElBQzdCO0FBR0EsU0FBSyx3QkFBd0I7QUFHN0IsUUFBRyxLQUFLLElBQUksYUFBYSxLQUFLO0FBQzFCLFdBQUssSUFBSSxVQUFVLEtBQUssUUFBUTtBQUdwQyxRQUFHLEtBQUssSUFBSSxZQUFXO0FBQ25CLFVBQUksUUFBUTtBQUNaLGFBQU8sS0FBSyxNQUFNLFlBQVksS0FBSyxJQUFJLFlBQVksWUFBWSxXQUFXO0FBQ3RFLGNBQU0sV0FBVyxNQUFNLElBQUksaUJBQWlCO0FBQUEs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
