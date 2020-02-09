# Material UI Guide

To get started, make sure you have all the files installed using the command ``npm install``.

Material is a component library for Angular maintained and use by Google. Material is use to generate pre-styled and consistent components. 

The official documentation containing a list of all available components can be seen [here](https://material.angular.io/components/categories).

# How to generate a Material button

1. In order to use a Material button, a module must first be imported into the project.

Go into ``src/app/app.module.ts`` and add those lines:

```javascript
import { MatButtonModule } from '@angular/material/button'; /* 1. Import the module from the Material source files */

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    MatButtonModule /* 2. Declare the module in NgModule so that all of our components get access to it */
  ],
  ...
});
```

2. Then, go into any component's ``.html`` file and you can use the Material button with the attribute ``mat-button`` like so:

```html
<button mat-button>
  This is a material button!
</button>
```

That's it!

Different Material components will require different modules to be imported in the NgModule list, and you might have to restart ``ng serve`` if you want the modules to load properly.

If you need help with anything, you can always send me (Tommy Josépovic) a message and I'll try to see what I can do to help.

