/*
 * DroidScript API
 * File System
 */


//----------
//   LEER
//----------
// @ReadFile() ~ leer archivo
droid.ReadFile = function(file, encoding) { 
  return this.task("ReadFile", file, encoding); 
}

// @ReadFileData() ~ leer información de archivo
droid.ReadFileData = function(file, mode) { 
  let data = this.task("ReadFileData", file, mode);
  return JSON.parse(data);
}

// @ListFolder() ~ leer carpeta
droid.ListFolder = function (folder, filter, limit, opt) {
  let list = this.task("ListFolder", folder, filter, limit, opt);
  return JSON.parse(list);
}



//-----------
//   CREAR
//-----------
// @WriteFile() ~ escribir|crear archivo
droid.WriteFile = function(file, text, mode, encoding) { 
  this.task("WriteFile", file, text, mode, encoding);
}

// @MakeFolder() ~ crear carpeta
droid.MakeFolder = function(folder) {
  this.task("MakeFolder", folder);
}



//------------
// RENOMBRAR
//------------
// @RenameFile() ~ renombrar archivo
droid.RenameFile = function(src, dest) { 
  this.task("RenameFile", src, dest);
}

// @RenameFolder() ~ renombrar carpeta
droid.RenameFolder = function(src, dest) { 
  this.task("RenameFile", src, dest); 
}


//------------
//  COPIAR
//------------
// @CopyFile() ~ copiar archivo
droid.CopyFile = function(src, dest) { 
  this.task("CopyFile", src, dest);
}

// @CopyFolder() ~ copiar carpeta
droid.CopyFolder = function( src, dest, overwrite, filter) { 
  this.task("CopyFolder", src, dest, overwrite, filter); 
}


//-------------
//  ELIMINAR
//-------------
// @DeleteFile() ~ eliminar archivo
droid.DeleteFile = function (file) {
  this.task("DeleteFile", file);
}

// @DeleteFolder() ~ eliminar carpeta
droid.DeleteFolder = function( folder ) { 
  this.task( "DeleteFolder", folder);
}



//-----------------------
//  SELECCION DE USUARIO
//-----------------------
// @ChooseFile() ~ seleccionar archivo por OS
droid.ChooseFile = function(msg, type, callback, fldr, opt) {
  this.task("ChooseFile", msg, type, this.getCbName(callback), fldr, opt); 
}

// @ChoosePhoto() ~ seleccionar foto 
droid.ChoosePhoto = function(opt, callback) {
  this.task("ChoosePhoto", opt, this.getCbName(callback));
}

// @ChooseFolder() ~ seleccionar carpeta
droid.ChooseFolder = function(callback) {
  this.task("GetPermission", "extsdcard", this.getCbName(callback));
}