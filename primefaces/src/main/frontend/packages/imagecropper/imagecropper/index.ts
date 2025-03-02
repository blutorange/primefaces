/// <reference path="./src/cropperjs-extensions.ts" preserve="true" />

import _Cropper from "cropperjs";
import { ImageCropper } from "./src/imagecropper.widget.js";

// Expose Cropper as a global variable
Object.assign(window, { Cropper: _Cropper });

// Expose widgets to the global scope
PrimeFaces.widget.ImageCropper = ImageCropper;

// Global types
declare global {
    const Cropper: typeof _Cropper;
    namespace PrimeType {
        export interface WidgetRegistry {
            ImageCropper: typeof ImageCropper;
        }
        export interface WindowExtensions {
            Cropper: typeof _Cropper;
        }
    }

    namespace PrimeType.widget {
        /**
         * The configuration for the {@link ImageCropper} widget.
         * 
         * You can access this configuration via {@link ImageCropper.cfg | cfg}. Please note that this
         * configuration is usually meant to be read-only and should not be modified.
         */
        export type ImageCropperCfg = import("./src/imagecropper.widget.js").ImageCropperCfg;
    }

    namespace PrimeType.widget.ImageCropper {
        /**
         * Define the view mode of the cropper. If you set viewMode to 0, the
         * crop box can extend outside the canvas, while a value of 1, 2 or 3
         * will restrict the crop box to the size of the canvas. A viewMode of
         * 2 or 3 will additionally restrict the canvas to the container. Note
         * that if the proportions of the canvas and the container are the same,
         * there is no difference between 2 and 3.
         */
        export type ViewMode = 0 | 1 | 2 | 3;
    }
}
