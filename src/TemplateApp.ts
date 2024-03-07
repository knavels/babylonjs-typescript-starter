import { Engine, FreeCamera, HemisphericLight, Scene, Vector3 } from 'babylonjs';
import 'babylonjs-loaders';

export class TemplateApp {
    engine: Engine;
    scene: Scene;

    constructor(readonly canvas: HTMLCanvasElement) {
        // create BabylonJS engine with anti-aliasing activated
        this.engine = new Engine(canvas, true)

        window.addEventListener('resize', () => {
            this.engine.resize();
        });

        // create the scene
        this.scene = createScene(this.engine, this.canvas)
    }

    debug(debugOn: boolean = true) {
        if (debugOn) {
            this.scene.debugLayer.show({ overlay: true });
        } else {
            this.scene.debugLayer.hide();
        }
    }

    run() {
        this.debug(true);

        // running render loop
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }
}

const createCamera = function (scene: Scene) {
    const camera = new FreeCamera('camera', Vector3.Zero(), scene);
    return camera;
}

const createLight = function (scene: Scene) {
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
    return light;
}


const createScene = function (engine: Engine, canvas: HTMLCanvasElement) {
    // This creates a basic Babylon Scene object (non-mesh)
    const scene = new Scene(engine);

    createCamera(scene);

    createLight(scene);

    return scene;
};
