class Watcher() {
  constructor() {
  }
  getCatch(){
    return this.catch;
  }
}

class OpticsWatcher extends Watcher() {
}


class RigelTalker() {
  constructor(output, config = {}) {
    if (output isn't Function || output don't exist) {
      throw new Error('method output must be exist')
    }
    this.output = output;
    
  }
  
  
  
  
}

export {
  RigelTalker
}
