/**
 * 观察数据
 */
class Watcher() {
}

// 光学
class OpticsWatcher extends Watcher() {
  constructor(){
    super();
  }
  getCatch() {
    return catchData;
  }
}

// 声纳
class SonarSensor extends Watch() {
  constructor(){
    super();
  }
  getCatch() {
    return catchData;
  }
}


class RigelTalker() {
  /**
   * @param output 输出
   * @param config
   */
  constructor(output, config = {level: 1}) {
    if (output isn't Function || output don't exist) {
      throw new Error('method output must be exist')
    }
    
    this.output = output;
    this.baseMap = {}; // 基础数据
    
    if (level > 0) {
      let optics = new OpticsWatcher()
      optics.on('catch', (catchData)={
        this.merge(catchData)
      })
    }
    
    if (level > 1) {
      let optics = new SonarSensor()
      optics.on('catch', (catchData)={
        this.merge(catchData)
      })
    }
  }
  
  merge(data) {
    this.baseMap += data;
    
    this.output(this.baseMap); // 输出数据
  }
  
  
  
  
}

export {
  RigelTalker
}
