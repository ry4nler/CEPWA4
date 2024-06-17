class CameraManager {
    constructor(camera) {
        this.camera = camera;
        this.DRIFT_FACTOR = 15;
        this.true_scroll = createVector(0, 0);
        this.target = null;
    }

    setTarget(entity) {
        this.target = entity;
    }

    update() {
        this.true_scroll.x +=
            (this.target.x - this.true_scroll.x) / this.DRIFT_FACTOR;
        this.true_scroll.y +=
            (this.target.y - this.true_scroll.y) / this.DRIFT_FACTOR;
        this.camera.x = constrain(this.true_scroll.x, 100, 500);
        this.camera.y = constrain(this.true_scroll.y, 0, 500);
        this.camera.zoom = 2
    }
}