module.exports = class SK_View extends SK_RootView {
    constructor(opt){
        super(opt)


        //This is where you'd populate the ElectronJS BrowserWindow options
        this.info = {
            show: true
        }
    }

    onPreLoad(){
    }
}