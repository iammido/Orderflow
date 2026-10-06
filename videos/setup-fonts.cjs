const fs=require('node:fs');const path=require('node:path');
const project=path.resolve(process.argv[2]||process.cwd());const destination=path.join(project,'public');fs.mkdirSync(destination,{recursive:true});
const fontRoot=process.env.ORDERFLOW_FONT_DIR||(process.platform==='win32'?path.join(process.env.WINDIR||'C:\\Windows','Fonts'):null);
if(!fontRoot){console.error('Set ORDERFLOW_FONT_DIR to a licensed font directory containing segoeui.ttf, seguibl.ttf, and consola.ttf.');process.exit(1);}
for(const name of ['segoeui.ttf','seguibl.ttf','consola.ttf']){const source=path.join(fontRoot,name),target=path.join(destination,name);if(fs.existsSync(target))continue;if(!fs.existsSync(source))throw new Error('Missing local font: '+source);fs.copyFileSync(source,target);}
console.log('Local video fonts are ready.');
