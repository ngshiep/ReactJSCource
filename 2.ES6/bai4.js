class Person {
    get name() {
        return this._name 
    }

    set name (value) {
        this._name = value
    }

    Walk (direction) 
    {
        console.log('Waliking ' + direction);
    }
}

class Programmer extends Person {
    get language () {
        return this._language  
    }

    set language(value) {
        this._language = value
    }

    writeCode () {
        console.log('coding');
    }
}
