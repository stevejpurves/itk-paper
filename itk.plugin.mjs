// src/directives.ts
var itkView2d = {
  name: 'itk:view2d',
  doc: 'Embed an ITK 2d view widget in the document',
  arg: {
    type: String,
    required: true,
    doc: 'Addressable URL to a ZARR file.',
  },
  validate(data, vfile) {
    return data;
  },
  run(data, vfile, opts) {
    return [
      {
        type: 'itkView2d',
        imagePath: data.arg,
        ...data.options,
      },
    ];
  },
};

// src/itk.plugin.ts
var plugin = {
  name: 'ITK Plugins',
  directives: [itkView2d],
  roles: [],
  transforms: [],
};
var itk_plugin_default = plugin;
export { itk_plugin_default as default };
//# sourceMappingURL=itk.plugin.mjs.map
