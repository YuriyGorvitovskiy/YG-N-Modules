# 3D models for N Scale Model Railroad

## Folder *prototype*
The folder to keep prototype information found on the web:
- blueprints
- templates
- photos

## Folder *source*
The folder to keep developing files:
- [OpenJSCad](https://openjscad.com/) **jscad** files, to represent CAD model in N-scale, and mm units.
- [Monodraw](https://monodraw.helftone.com/) **monopic** files, to draw comments for text files
- [Photon WorkShop](https://www.anycubic.com/blogs/videos/photon-workshop) **scene** files, 3D Slicer files
for Photon Mono X 3D printer.

## Folder *build*
The folder is ignored by git.

Used to store generated files:
- generated **stl** 3D surface files
- generated **pwmx** slicer files for Photon Mono X 3D printer

## Flow
1. Define model files in [OpenJSCAD format](https://en.wikibooks.org/wiki/OpenJSCAD_User_Guide)
1. Convert model to **stl** 3D surface files, using [OpenJSCad](https://openjscad.com/) UI
1. Load model into **Photon WorkShop**, add supports, slice it, and save into **pwmx** slicer files
1. Put files **pwmx** slicer files on the usb drive
1. Print files from usb drive on Photon Mono X 3D printer.
