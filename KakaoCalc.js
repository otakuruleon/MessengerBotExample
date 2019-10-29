String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

factorial = function(input) {
    var temp = 1;
    var output = 1;
    while (temp <= input) {
        output = output * temp;
        temp = temp + 1;
    }
    return output;
}

exp = function(input) {
    var temp = 0;
    var output = 0;
    while (temp <= 20) {
        output = (java.lang.Math.pow(input, temp) / factorial(temp)) + output;
        temp = temp + 1;
    }
    return output;
}

cos = function(input){
    var temp = 0;
    var output = 0;
    while (temp <= 20) {
        output = (java.lang.Math.pow(-1, temp)*java.lang.Math.pow(input, 2*temp) / factorial(2*temp)) + output;
        temp = temp + 1;
    }
    return output;
}

sin = function(input){
    var temp = 0;
    var output = 0;
    while (temp <= 20) {
        output = (java.lang.Math.pow(-1, temp)*java.lang.Math.pow(input, 2*temp+1) / factorial(2*temp+1)) + output;
        temp = temp + 1;
    }
    return output;
}

eta = function(input){
    var temp = 1;
    var output = 0;
    while (temp <= 20) {
        output = output + java.lang.Math.pow(-1, temp-1)/java.lang.Math.pow(temp, input);
        temp = temp + 1;
    }
    return output
}

zeta = function(input){
    return eta(input)/(1-java.lang.Math.pow(2, 1-input));
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    if (msg.charAt(0) == "계" && msg.charAt(1) == "산") {
        var calc = 0;
        if (msg.indexOf("\'") == -1 && msg.indexOf("\"") == -1 &&
            msg.indexOf("Api") == -1 && msg.indexOf("Utils") == -1 &&
            msg.indexOf("Log") == -1 && msg.indexOf("Appdata") == -1 &&
            msg.indexOf("Data") == -1 && msg.indexOf("Bridge") == -1 &&
            msg.indexOf("Device") == -1 && msg.indexOf("File") == -1 &&
            msg.indexOf("var") == -1 && msg.indexOf("?") == -1 &&
            msg.indexOf("java") == -1) {
            var input = msg;
            input = input.split(" ", 2)[1];
            input = input.replace('η', 'eta');
            input = input.replace('Γ', 'gamma');
            input = input.replace('ζ', 'zeta');
            replier.reply(eval(input));
        } else {
            replier.reply("Exploit Detect");
        }
    }
}