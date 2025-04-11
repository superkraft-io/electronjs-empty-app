# Superkraft Empty ElectronJS App

## How to install

- Open terminal
- Navigate to a folder of your choice and run: `git clone https://github.com/superkraft-io/electronjs-empty-app.git`
- Navigate to the cloned rep: `cd electronjs-empty-app`
- Clone Superkraft: `git clone https://github.com/superkraft-io/superkraft.git`
- Install packages: `npm install`
- Run app: `npm run start` or in VSCode `Run SK ElectronJS App`

Enjoy!

# Development

You'll find the content of the index page inside at this relative path `electronjs-empty-app/sk_project/views/frontend/view.js`.

To add a comnponent inside the view, just type `this.add.<component>()`, and replace the `<component>` with a valid SK component name (continue reading below).

You can find all available stock components in this relative path: `electronjs-empty-app/superkraft/ui/frontend/core/`.

## Examples

### Adding a button with a text and and a checkmark icon and an on-click event
```javascript
this.add.button(_c => {
    _c.text = 'My button'
    _c.icon = 'checkmark'

    _c.onClick = ()=>{
        alert('Clicked!')
    }
})
```


