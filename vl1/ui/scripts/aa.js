function OnParamChange(node, param, value) {
}

function controlChange(ctrlTag, value) {
}

function sendAttack(value) {
    parent.sendMsg(1, 0, 0, map(value, 0, 9, 0.001, 0.5))
}

function sendDecay(value) {
    parent.sendMsg(1, 0, 1, map(value, 0.0, 9.0, 0.001, 2.0))
}

function sendPitchMod(value) {
    parent.sendMsg(1, 0, 2, value)
}

function sendRelease(value) {
    parent.sendMsg(1, 0, 3, map(value, 0.0, 9.0, 0.001, 2.0))
}

function sendSustain(value) {
    parent.sendMsg(1, 0, 4, map(value, 0, 9, 0.1, 1.0))
}

function sendTremelo(value) {
    parent.sendMsg(1, 0, 5, value)
}

function sendVibrato(value) {
    parent.sendMsg(1, 0, 6, value)
}

function sendWaveform(value) {
    parent.sendMsg(1, 0, 7, value)
}

function map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}