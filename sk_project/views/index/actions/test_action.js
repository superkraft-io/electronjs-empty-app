module.exports = class SK_Action extends SK_RootAction {
    async exec(opt, res, view, _v, srcOpt, validationRes){
        //"opt" contains the data you send to the action
        //"res" contains a resolver and a rejector
        //"view" is the SK view
        //"srcOpt" is the web data for the request. Remember, an action is just an abstracted POST request
        //"validationRes" contains information about the authenticity of the action

        console.log(opt)

        res.resolve({
            responseData: "Hello frontend!"
        })
    }
}
