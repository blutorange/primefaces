import Cropper, { type SelectionChangeEventDetails } from "cropperjs";

interface CropperConfig {
    /**
     * Maximum height for the crop box, in pixels.
     */
    maxCropBoxHeight: number;

    /**
     * Maximum width for the crop box, in pixels.
    */
    maxCropBoxWidth: number;

    minCropBoxWidth: number;

    minCropBoxHeight: number;

    width: number;

    height: number;
}

/**
 * The configuration for the {@link ImageCropper} widget.
 * 
 * You can access this configuration via {@link ImageCropper.cfg | cfg}. Please note that this
 * configuration is usually meant to be read-only and should not be modified.
 */
export interface ImageCropperCfg extends PrimeType.widget.DeferredWidgetCfg {
    /**
     * Aspect ratio of the cropper area. Omit to not restrict the ratio.
     */
    aspectRatio: number;

    /**
     * Show the dashed lines in the crop box.
     */
    guides: boolean;

    /**
     * ID of the IMAGE element.
     */
    image: string;

    /**
     * Initial coordinates of the cropper area (x, y, width,
     * height).
     */
    initialCoords: [
        number,
        number,
        number,
        number
    ];

    /**
     * Re-render the cropper when resizing the window.
     */
    responsive: boolean;

    /**
     * Maximum size of the cropper area (width,height).
     */
    maxSize: [number, number];

    /**
     * Minimum size of the cropper area (width,height).
     */
    minSize: [number, number];

    /**
     * The view mode of the cropper. 
     * @default 1
     */
    viewMode: PrimeType.widget.ImageCropper.ViewMode;

    /**
     * Enable to zoom the image by dragging touch.
     * @default true.
     */
    zoomOnTouch: boolean;

    /**
     * Enable to zoom the image by wheeling mouse. Default is true.
     * @default true
     */
    zoomOnWheel: boolean;
}

/**
 * __PrimeFaces ImageCropper Widget__
 * 
 * ImageCropper allows cropping a certain region of an image. A new image is created containing the cropped area and
 * assigned to a `CroppedImage` instanced on the server side. Uses CropperJS - to interact with the image cropper
 * programmatically, use the Cropper JQuery plugin. For example:
 * 
 * ```javascript
 * PF("myImageCropperWidget").image.cropper("rotate", 90);
 * ```
 */
export class ImageCropper<Cfg extends ImageCropperCfg = ImageCropperCfg> extends PrimeFaces.widget.DeferredWidget<Cfg> {
    /**
     * The cropper.js instance controlling the crop process.
     */
    cropper: Cropper.default | undefined;

    private image: HTMLImageElement = document.createElement("img");

    /**
     * Hidden DOM input element storing the selected crop box. Used to transmit
     * the crop box to the server.
     */
    private jqCoords: JQuery = $();

    private cropConfig: CropperConfig = {
        height: 0,
        maxCropBoxHeight: 9999,
        maxCropBoxWidth: 9999,
        minCropBoxHeight: 0,
        minCropBoxWidth: 0,
        width: 0,
    };

    override init(cfg: PrimeType.widget.PartialWidgetCfg<Cfg>): void {
        super.init(cfg);

        const image = $(PrimeFaces.escapeClientId(this.cfg.image ?? ""))[0];
        if (image instanceof HTMLImageElement) {
            this.image = image;
        } else {
            PrimeFaces.warn(`ImageCropper requires an HTMLImage element, but got: ${image?.tagName}`);
        }

        this.jqCoords = $(this.jqId + '_coords');
        this.cropConfig = createCropperConfig(this.image, this.cfg);

        this.renderDeferred();
    }

    protected override _render(): void {
        // initialize the cropper
        // https://github.com/fengyuanchen/cropperjs/issues/1228
        this.cropper = new (Cropper as unknown as typeof Cropper.default)(this.image);

        // TODO apply settings
        // this.image.cropper(this.cfg);
        const selection = this.cropper.getCropperSelection();

        if (selection && this.cfg.aspectRatio) {
            selection.aspectRatio = this.cfg.aspectRatio;
        }

        // Store selected crop box in the hidden input field
        this.cropper.getCropperSelection()?.addEventListener("change", e => this.onCrop(e));

        // Set the initial size of hte crop box
        this.cropper.getCropperImage()?.$ready(() => {
            // set the initial coordinates
            const selection = this.cropper?.getCropperSelection();
            if (this.cfg.initialCoords && selection) {
                selection.x = this.cfg.initialCoords[0];
                selection.y = this.cfg.initialCoords[1];
                selection.width = this.cfg.initialCoords[2];
                selection.height = this.cfg.initialCoords[3];
            }
        });
    }

    override destroy(): void {
        super.destroy();

        // clean up memory
        if (this.cropper) {
            this.cropper.getCropperCanvas()?.remove();
            this.cropper.element.style.display = "";
            this.cropper = undefined;
        }
    }

    /**
     * Callback for when a crop was performed.
     * @param {JQueryCropper.CropEvent} event The crop event that occurred.
     */
    private onCrop(event: CustomEvent<SelectionChangeEventDetails>): void {
        let width = event.detail.width;
        let height = event.detail.height;

        // TODO Make limiting the box work
        // constrain the box if necessary
        if (width < this.cropConfig.minCropBoxWidth
            || height < this.cropConfig.minCropBoxHeight) {
            // We need to grow the box??
            // event.preventDefault();
        }
        if (width > this.cropConfig.maxCropBoxWidth || height > this.cropConfig.maxCropBoxHeight) {
            event.preventDefault();
        }

        // width = Math.max(this.cfg.minCropBoxWidth, Math.min(this.cfg.maxCropBoxWidth, width));
        // height = Math.max(this.cfg.minCropBoxHeight, Math.min(this.cfg.maxCropBoxHeight, height));
        // this.cropper.setCropBoxData({
        //     width : width,
        //     height : height
        // });

        // set the new box coordinates
        const cropCoords = event.detail.x + "_" + event.detail.y + "_" + width + "_" + height;
        this.jqCoords.val(cropCoords);
    }

    /**
     * Reset the image and crop box to their initial states.
     */
    reset(): void {
        this.cropper?.getCropperImage()?.$resetTransform();
        this.cropper?.getCropperSelection()?.$reset();
    }

    /**
     * Clears the crop box.
     */
    clear(): void {
        const selection = this.cropper?.getCropperSelection();
        if (selection) {
            selection.hidden = false;
            selection.$reset();
        }
    }

    /**
     * Enables (unfreezes) the cropper.
     */
    override enable(): void {
        const canvas = this.cropper?.getCropperCanvas();
        if (canvas) {
            canvas.disabled = false;
        }
    }

    /**
     * Disables (freezes) the cropper.
     */
    override disable(): void {
        const canvas = this.cropper?.getCropperCanvas();
        if (canvas) {
            canvas.disabled = true;
        }
    }
}

function createCropperConfig(image: HTMLImageElement, cfg: Partial<ImageCropperCfg>): CropperConfig {
    // calculate the min and max of the cropper box
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;

    // cfg.minCropBoxWidth
    const minCropBoxWidth = cfg.minSize ? cfg.minSize[0] : 0;
    const minCropBoxHeight = cfg.minSize ? cfg.minSize[1] : 0;
    const maxCropBoxWidth = Math.min(imageWidth, cfg.maxSize ? cfg.maxSize[0] : imageWidth);
    const maxCropBoxHeight = Math.min(imageHeight, cfg.maxSize ? cfg.maxSize[1] : imageHeight);

    // cfg.data.width
    const width = (minCropBoxWidth + maxCropBoxWidth) / 2;
    const height = (minCropBoxHeight + maxCropBoxHeight) / 2;

    return { minCropBoxHeight, minCropBoxWidth, maxCropBoxHeight, maxCropBoxWidth, width, height };
}
