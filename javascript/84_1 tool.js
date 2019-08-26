//获取对象样式
function getStyle(obj, name) {
    if(window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    }else {
        return obj.currentStyle[name];
    }
}

//move动画
function move(obj, target, speed, attr, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if(current > target) {
        speed = -speed;
    }
    obj.timer = setInterval(function() {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if(newValue > target && speed > 0) {
            newValue = target;
        }else if(newValue < target && speed < 0) {
            newValue = target;
        }
        obj.style[attr] = newValue + 'px';
        if(newValue == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}

//检查对象中是否有指定class
function hasClass(obj, cn) {
    var reg = new RegExp('\\b' + cn + '\\b');
    return reg.test(obj.className);
}

//向对象中添加指定class
function addClass(obj, cn) {
    if(!hasClass(obj, 'style')) {
        obj.className += ' ' + cn;
    }
}

//从对象中移除指定class
function removeClass(obj, cn) {
    if(hasClass(obj, cn)) {
        var reg = new RegExp('\\b' + cn + '\\b');
        obj.className = obj.className.replace(reg, '');
    }
}

//切换对象class
function toggleClass(obj, cn) {
    hasClass(obj, cn) ? removeClass(obj, cn) : addClass(obj, cn);
}