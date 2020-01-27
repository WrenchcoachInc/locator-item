let cross;
class LocatorItem extends ZeaEngine.GeomItem {
  
  constructor(name, size=0.2, material=null) {
    if (!cross) {
      cross = new ZeaEngine.Cross();
    }
    if (!material) 
      material = new ZeaEngine.Material('LocatorMaterial', 'LinesShader');
    super(name, cross, material)

    const sizeParam = this.addParameter(new ZeaEngine.NumberParameter('Size', size))
    const resize = () => {
      const size = sizeParam.getValue();
      const geomOffsetXfoParam = this.getParameter('GeomOffsetXfo')
      const geomOffsetXfo = geomOffsetXfoParam.getValue()
      geomOffsetXfo.sc.set(size, size, size)
      geomOffsetXfoParam.setValue(geomOffsetXfo)
    }
    sizeParam.valueChanged.connect(resize)
    resize();
  }
}