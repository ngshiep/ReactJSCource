class BaseClass {
    constructor (name, discription) {
        this._name = name
        this._discription = discription
    }

    caculate (number = 1) {
        return number * 3
    }
}

class HinhHoc extends BaseClass {
    constructor (name, discription, length) {
        super(name, discription)
        this._length = length;
    }
}

const hinhHocObj = new HinhHoc('HCN', 'class cua hinh chu nhat', 2)
hinhHocObj.caculate(5)