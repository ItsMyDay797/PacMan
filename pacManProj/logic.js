var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var height = 576;
var width = 448;
var block = 16;
var P = block * 2;
var debag_ = 1;
document.getElementById("canvas").style.marginLeft = window.screen.availWidth / 2 - width / 2 + "px";

function debag() {
    for (var i = 0; i <= function () {
        if (height > width)
            return height;
        else
            return width;
    }() / block; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 1; // толщина линии
        ctx.moveTo(0, i * block); //передвигаем перо
        ctx.lineTo(width, i * block); //рисуем линию
        if (i <= width / block) {
            ctx.moveTo(i * block, 0); //передвигаем перо
            ctx.lineTo(i * block, height); //рисуем линию
        }
        ctx.stroke();
    }
};

/*
ctx.beginPath();
ctx.lineWidth = 10; // толщина линии
ctx.moveTo(50, 50); //передвигаем перо
ctx.lineTo(200, 100); //рисуем линию
ctx.stroke();
*/
function drawP(x, y) {
    if (direction == "right") {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "black";
        ctx.arc(x, y, P / 2 - 2, Math.PI / 4, 2 * Math.PI - Math.PI / 4);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 10; // толщина линии
        ctx.moveTo(x + 1, y + 3); //передвигаем перо
        ctx.lineTo(x + 12, y - 8); //рисуем линию
        ctx.moveTo(x + 5, y); //передвигаем перо
        ctx.lineTo(x + 12, y + 9); //рисуем линию
        ctx.stroke();
    } else if (direction == "left") {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "black";
        ctx.arc(x, y, P / 2 - 2, Math.PI - Math.PI / 4, Math.PI + Math.PI / 4, true);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 10; // толщина линии
        ctx.moveTo(x - 1, y + 3); //передвигаем перо
        ctx.lineTo(x - 12, y - 8); //рисуем линию
        ctx.moveTo(x - 5, y); //передвигаем перо
        ctx.lineTo(x - 12, y + 9); //рисуем линию
        ctx.stroke();
    } else if (direction == "up") {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "black";
        ctx.arc(x, y, P / 2 - 2, Math.PI + Math.PI / 4, Math.PI + Math.PI - Math.PI / 4, true);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 10; // толщина линии
        ctx.moveTo(x + 4, y - 1); //передвигаем перо
        ctx.lineTo(x - 7, y - 12); //рисуем линию
        ctx.moveTo(x - 4, y); //передвигаем перо
        ctx.lineTo(x + 10, y - 12); //рисуем линию
        ctx.stroke();
    } else if (direction == "down") {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "black";
        ctx.arc(x, y, P / 2 - 2, Math.PI / 4, Math.PI - Math.PI / 4, true);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 10; // толщина линии
        ctx.moveTo(x + 4, y + 1); //передвигаем перо
        ctx.lineTo(x - 7, y + 12); //рисуем линию
        ctx.moveTo(x - 4, y); //передвигаем перо
        ctx.lineTo(x + 10, y + 12); //рисуем линию
        ctx.stroke();
    }
};

function drawG(x, y) {
    if (D == "right") {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.strokeStyle = "red";
        ctx.arc(x, y, P / 2 - 2, Math.PI / 2 - Math.PI / 4, Math.PI / 2 + Math.PI / 4, true);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 4; // толщина линии
        ctx.moveTo(x - 12, y); //передвигаем перо
        ctx.lineTo(x - 12, y + 14); //рисуем линию
        ctx.moveTo(x - 4, y); //передвигаем перо
        ctx.lineTo(x - 4, y + 14); //рисуем линию
        ctx.moveTo(x + 4, y); //передвигаем перо
        ctx.lineTo(x + 4, y + 14); //рисуем линию
        ctx.moveTo(x + 12, y); //передвигаем перо
        ctx.lineTo(x + 12, y + 14); //рисуем линию
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x + 8, y - 4, 4, 0, 2 * Math.PI);
        ctx.arc(x - 6, y - 4, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(x + 10, y - 4, 2, 0, 2 * Math.PI);
        ctx.arc(x - 4, y - 4, 2, 0, 2 * Math.PI);
        ctx.fill();
    } else if (D == "left") {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.strokeStyle = "red";
        ctx.arc(x, y, P / 2 - 2, Math.PI / 2 - Math.PI / 4, Math.PI / 2 + Math.PI / 4, true);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 4; // толщина линии
        ctx.moveTo(x - 12, y); //передвигаем перо
        ctx.lineTo(x - 12, y + 14); //рисуем линию
        ctx.moveTo(x - 4, y); //передвигаем перо
        ctx.lineTo(x - 4, y + 14); //рисуем линию
        ctx.moveTo(x + 4, y); //передвигаем перо
        ctx.lineTo(x + 4, y + 14); //рисуем линию
        ctx.moveTo(x + 12, y); //передвигаем перо
        ctx.lineTo(x + 12, y + 14); //рисуем линию
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x + 6, y - 4, 4, 0, 2 * Math.PI);
        ctx.arc(x - 8, y - 4, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(x - 10, y - 4, 2, 0, 2 * Math.PI);
        ctx.arc(x + 4, y - 4, 2, 0, 2 * Math.PI);
        ctx.fill();
    } else if (D == "up") {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.strokeStyle = "red";
        ctx.arc(x, y, P / 2 - 2, Math.PI / 2 - Math.PI / 4, Math.PI / 2 + Math.PI / 4, true);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 4; // толщина линии
        ctx.moveTo(x - 12, y); //передвигаем перо
        ctx.lineTo(x - 12, y + 14); //рисуем линию
        ctx.moveTo(x - 4, y); //передвигаем перо
        ctx.lineTo(x - 4, y + 14); //рисуем линию
        ctx.moveTo(x + 4, y); //передвигаем перо
        ctx.lineTo(x + 4, y + 14); //рисуем линию
        ctx.moveTo(x + 12, y); //передвигаем перо
        ctx.lineTo(x + 12, y + 14); //рисуем линию
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x + 7, y - 4, 4, 0, 2 * Math.PI);
        ctx.arc(x - 7, y - 4, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(x - 7, y - 6, 2, 0, 2 * Math.PI);
        ctx.arc(x + 7, y - 6, 2, 0, 2 * Math.PI);
        ctx.fill();
    } else if (D == "down") {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.strokeStyle = "red";
        ctx.arc(x, y, P / 2 - 2, Math.PI / 2 - Math.PI / 4, Math.PI / 2 + Math.PI / 4, true);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 4; // толщина линии
        ctx.moveTo(x - 12, y); //передвигаем перо
        ctx.lineTo(x - 12, y + 14); //рисуем линию
        ctx.moveTo(x - 4, y); //передвигаем перо
        ctx.lineTo(x - 4, y + 14); //рисуем линию
        ctx.moveTo(x + 4, y); //передвигаем перо
        ctx.lineTo(x + 4, y + 14); //рисуем линию
        ctx.moveTo(x + 12, y); //передвигаем перо
        ctx.lineTo(x + 12, y + 14); //рисуем линию
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x + 7, y - 4, 4, 0, 2 * Math.PI);
        ctx.arc(x - 7, y - 4, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(x - 7, y - 2, 2, 0, 2 * Math.PI);
        ctx.arc(x + 7, y - 2, 2, 0, 2 * Math.PI);
        ctx.fill();
    }
};

function drawField() {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "blue";

    ctx.moveTo(0 + debag_, block * 3 + debag_); //передвигаем перо
    ctx.lineTo(width - debag_, block * 3 + debag_); //рисуем линию
    ctx.lineTo(width - debag_, block * 13 - debag_); //рисуем линию
    ctx.lineTo(width - 5 * block - debag_, block * 13 - debag_); //рисуем линию
    ctx.lineTo(width - 5 * block - debag_, block * 16 + debag_); //рисуем линию
    ctx.lineTo(width - debag_ + 2, block * 16 + debag_); //рисуем линию
    ctx.lineTo(width - debag_ + 2, block * 19 - debag_); //рисуем линию
    ctx.lineTo(width - 5 * block - debag_, block * 19 - debag_); //рисуем линию
    ctx.lineTo(width - 5 * block - debag_, block * 22 + debag_); //рисуем линию
    ctx.lineTo(width - debag_, block * 22 + debag_); //рисуем линию
    ctx.lineTo(width - debag_, height - 2 * block - debag_); //рисуем линию

    ctx.lineTo(0 + debag_, height - block * 2 - debag_); //рисуем линию
    ctx.lineTo(0 + debag_, height - block * 14 + debag_); //рисуем линию
    ctx.lineTo(0 + 5 * block + debag_, height - block * 14 + debag_); //рисуем линию
    ctx.lineTo(0 + 5 * block + debag_, height - block * 17 - debag_); //рисуем линию
    ctx.lineTo(0, height - block * 17 - debag_); //рисуем линию
    ctx.moveTo(0, height - block * 20 + debag_); //передвигаем перо
    ctx.lineTo(0 + 5 * block + debag_, height - block * 20 + debag_); //рисуем линию
    ctx.lineTo(0 + 5 * block + debag_, height - block * 23 - debag_); //рисуем линию
    ctx.lineTo(0 + debag_, height - block * 23 - debag_); //рисуем линию
    ctx.lineTo(0 + debag_, block * 3 + debag_ - 1); //рисуем линию


    ctx.moveTo(0 + block / 2, block * 3 + block / 2); //передвигаем перо
    ctx.lineTo(width / 2 - block / 2, block * 3 + block / 2); //рисуем линию
    ctx.lineTo(width / 2 - block / 2, block * 7 + block / 2); //рисуем линию
    ctx.lineTo(width / 2 - block / 2 + block, block * 7 + block / 2); //рисуем линию
    ctx.lineTo(width / 2 - block / 2 + block, block * 3 + block / 2); //рисуем линию
    ctx.lineTo(width - block / 2, block * 3 + block / 2); //рисуем линию
    ctx.lineTo(width - block / 2, block * 13 - block / 2); //рисуем линию
    ctx.lineTo(width - 5 * block - block / 2, block * 13 - block / 2); //рисуем линию
    ctx.lineTo(width - 5 * block - block / 2, block * 16 + block / 2); //рисуем линию
    ctx.lineTo(width - debag_ + 2, block * 16 + block / 2); //рисуем линию
    ctx.lineTo(width - debag_ + 2, block * 19 - block / 2); //рисуем линию
    ctx.lineTo(width - 5 * block - block / 2, block * 19 - block / 2); //рисуем линию
    ctx.lineTo(width - 5 * block - block / 2, block * 22 + block / 2); //рисуем линию
    ctx.lineTo(width - block / 2, block * 22 + block / 2); //рисуем линию
    ctx.lineTo(width - block / 2, block * 27 + block / 2); //рисуем линию
    ctx.lineTo(width - block / 2 - 2 * block, block * 27 + block / 2); //рисуем линию
    ctx.lineTo(width - block / 2 - 2 * block, block * 28 + block / 2); //рисуем линию
    ctx.lineTo(width - block / 2, block * 28 + block / 2); //рисуем линию
    ctx.lineTo(width - block / 2, height - 2 * block - block / 2); //рисуем линию

    ctx.lineTo(0 + block / 2, height - block * 2 - block / 2); //рисуем линию
    ctx.lineTo(0 + block / 2, height - block * 7 - block / 2); //рисуем линию
    ctx.lineTo(0 + block / 2 + 2 * block, height - block * 7 - block / 2); //рисуем линию
    ctx.lineTo(0 + block / 2 + 2 * block, height - block * 8 - block / 2); //рисуем линию
    ctx.lineTo(0 + block / 2, height - block * 8 - block / 2); //рисуем линию
    ctx.lineTo(0 + block / 2, height - block * 14 + block / 2); //рисуем линию
    ctx.lineTo(0 + 5 * block + block / 2, height - block * 14 + block / 2); //рисуем линию
    ctx.lineTo(0 + 5 * block + block / 2, height - block * 17 - block / 2); //рисуем линию
    ctx.lineTo(0, height - block * 17 - block / 2); //рисуем линию
    ctx.moveTo(0, block * 17 - block / 2); //передвигаем перо
    ctx.lineTo(0 + 5 * block + block / 2, height - block * 20 + block / 2); //рисуем линию
    ctx.lineTo(0 + 5 * block + block / 2, height - block * 23 - block / 2); //рисуем линию
    ctx.lineTo(0 + block / 2, height - block * 23 - block / 2); //рисуем линию
    ctx.lineTo(0 + block / 2, block * 3 + block / 2 - 1); //рисуем линию


    ctx.moveTo(2 * block + block / 2, 5 * block + block / 2); //передвигаем перо
    ctx.lineTo(5 * block + block / 2, 5 * block + block / 2); //рисуем линию
    ctx.lineTo(5 * block + block / 2, 7 * block + block / 2); //рисуем линию
    ctx.lineTo(2 * block + block / 2, 7 * block + block / 2); //рисуем линию
    ctx.lineTo(2 * block + block / 2, 5 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(7 * block + block / 2, 5 * block + block / 2); //передвигаем перо
    ctx.lineTo(11 * block + block / 2, 5 * block + block / 2); //рисуем линию
    ctx.lineTo(11 * block + block / 2, 7 * block + block / 2); //рисуем линию
    ctx.lineTo(7 * block + block / 2, 7 * block + block / 2); //рисуем линию
    ctx.lineTo(7 * block + block / 2, 5 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(width - 5 * block - block / 2, 5 * block + block / 2); //передвигаем перо
    ctx.lineTo(width - 2 * block - block / 2, 5 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 2 * block - block / 2, 7 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 5 * block - block / 2, 7 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 5 * block - block / 2, 5 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(width - 11 * block - block / 2, 5 * block + block / 2); //передвигаем перо
    ctx.lineTo(width - 7 * block - block / 2, 5 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 7 * block - block / 2, 7 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 11 * block - block / 2, 7 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 11 * block - block / 2, 5 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(2 * block + block / 2, 9 * block + block / 2); //передвигаем перо
    ctx.lineTo(5 * block + block / 2, 9 * block + block / 2); //рисуем линию
    ctx.lineTo(5 * block + block / 2, 10 * block + block / 2); //рисуем линию
    ctx.lineTo(2 * block + block / 2, 10 * block + block / 2); //рисуем линию
    ctx.lineTo(2 * block + block / 2, 9 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(width - 5 * block - block / 2, 9 * block + block / 2); //передвигаем перо
    ctx.lineTo(width - 2 * block - block / 2, 9 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 2 * block - block / 2, 10 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 5 * block - block / 2, 10 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 5 * block - block / 2, 9 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(7 * block + block / 2, 9 * block + block / 2); //передвигаем перо
    ctx.lineTo(8 * block + block / 2, 9 * block + block / 2); //рисуем линию
    ctx.lineTo(8 * block + block / 2, 12 * block + block / 2); //рисуем линию
    ctx.lineTo(11 * block + block / 2, 12 * block + block / 2); //рисуем линию
    ctx.lineTo(11 * block + block / 2, 13 * block + block / 2); //рисуем линию
    ctx.lineTo(8 * block + block / 2, 13 * block + block / 2); //рисуем линию
    ctx.lineTo(8 * block + block / 2, 16 * block + block / 2); //рисуем линию
    ctx.lineTo(7 * block + block / 2, 16 * block + block / 2); //рисуем линию
    ctx.lineTo(7 * block + block / 2, 9 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(width - 7 * block - block / 2, 9 * block + block / 2); //передвигаем перо
    ctx.lineTo(width - 8 * block - block / 2, 9 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 8 * block - block / 2, 12 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 11 * block - block / 2, 12 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 11 * block - block / 2, 13 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 8 * block - block / 2, 13 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 8 * block - block / 2, 16 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 7 * block - block / 2, 16 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 7 * block - block / 2, 9 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(10 * block + block / 2, 9 * block + block / 2); //передвигаем перо
    ctx.lineTo(17 * block + block / 2, 9 * block + block / 2); //рисуем линию
    ctx.lineTo(17 * block + block / 2, 10 * block + block / 2); //рисуем линию
    ctx.lineTo(14 * block + block / 2, 10 * block + block / 2); //рисуем линию
    ctx.lineTo(14 * block + block / 2, 13 * block + block / 2); //рисуем линию
    ctx.lineTo(13 * block + block / 2, 13 * block + block / 2); //рисуем линию
    ctx.lineTo(13 * block + block / 2, 10 * block + block / 2); //рисуем линию
    ctx.lineTo(10 * block + block / 2, 10 * block + block / 2); //рисуем линию
    ctx.lineTo(10 * block + block / 2, 9 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(10 * block + block / 2, 15 * block + block / 2); //передвигаем перо
    ctx.lineTo(13 * block - debag_, 15 * block + block / 2); //рисуем линию
    ctx.lineTo(13 * block - debag_, 16 * block - debag_); //рисуем линию
    ctx.lineTo(11 * block - debag_, 16 * block - debag_); //рисуем линию
    ctx.lineTo(11 * block - debag_, 19 * block + debag_); //рисуем линию
    ctx.lineTo(17 * block + debag_, 19 * block + debag_); //рисуем линию
    ctx.lineTo(17 * block + debag_, 16 * block - debag_); //рисуем линию
    ctx.lineTo(15 * block + debag_, 16 * block - debag_); //рисуем линию
    ctx.lineTo(15 * block + debag_, 16 * block - block / 2); //рисуем линию
    ctx.lineTo(17 * block + block / 2, 16 * block - block / 2); //рисуем линию
    ctx.lineTo(17 * block + block / 2, 20 * block - block / 2); //рисуем линию
    ctx.lineTo(10 * block + block / 2, 20 * block - block / 2); //рисуем линию
    ctx.lineTo(10 * block + block / 2, 15 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(7 * block + block / 2, 18 * block + block / 2); //передвигаем перо
    ctx.lineTo(8 * block + block / 2, 18 * block + block / 2); //рисуем линию
    ctx.lineTo(8 * block + block / 2, 22 * block + block / 2); //рисуем линию
    ctx.lineTo(7 * block + block / 2, 22 * block + block / 2); //рисуем линию
    ctx.lineTo(7 * block + block / 2, 18 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(width - 8 * block - block / 2, 18 * block + block / 2); //передвигаем перо
    ctx.lineTo(width - 7 * block - block / 2, 18 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 7 * block - block / 2, 22 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 8 * block - block / 2, 22 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 8 * block - block / 2, 18 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(10 * block + block / 2, 21 * block + block / 2); //передвигаем перо
    ctx.lineTo(17 * block + block / 2, 21 * block + block / 2); //рисуем линию
    ctx.lineTo(17 * block + block / 2, 22 * block + block / 2); //рисуем линию
    ctx.lineTo(14 * block + block / 2, 22 * block + block / 2); //рисуем линию
    ctx.lineTo(14 * block + block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(13 * block + block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(13 * block + block / 2, 22 * block + block / 2); //рисуем линию
    ctx.lineTo(10 * block + block / 2, 22 * block + block / 2); //рисуем линию
    ctx.lineTo(10 * block + block / 2, 21 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(10 * block + block / 2, 27 * block + block / 2); //передвигаем перо
    ctx.lineTo(17 * block + block / 2, 27 * block + block / 2); //рисуем линию
    ctx.lineTo(17 * block + block / 2, 28 * block + block / 2); //рисуем линию
    ctx.lineTo(14 * block + block / 2, 28 * block + block / 2); //рисуем линию
    ctx.lineTo(14 * block + block / 2, 31 * block + block / 2); //рисуем линию
    ctx.lineTo(13 * block + block / 2, 31 * block + block / 2); //рисуем линию
    ctx.lineTo(13 * block + block / 2, 28 * block + block / 2); //рисуем линию
    ctx.lineTo(10 * block + block / 2, 28 * block + block / 2); //рисуем линию
    ctx.lineTo(10 * block + block / 2, 27 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(7 * block + block / 2, 24 * block + block / 2); //передвигаем перо
    ctx.lineTo(11 * block + block / 2, 24 * block + block / 2); //рисуем линию
    ctx.lineTo(11 * block + block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(7 * block + block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(7 * block + block / 2, 24 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(width - 11 * block - block / 2, 24 * block + block / 2); //передвигаем перо
    ctx.lineTo(width - 7 * block - block / 2, 24 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 7 * block - block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 11 * block - block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 11 * block - block / 2, 24 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(2 * block + block / 2, 24 * block + block / 2); //передвигаем перо
    ctx.lineTo(5 * block + block / 2, 24 * block + block / 2); //рисуем линию
    ctx.lineTo(5 * block + block / 2, 28 * block + block / 2); //рисуем линию
    ctx.lineTo(4 * block + block / 2, 28 * block + block / 2); //рисуем линию
    ctx.lineTo(4 * block + block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(2 * block + block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(2 * block + block / 2, 24 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(width - 2 * block - block / 2, 24 * block + block / 2); //передвигаем перо
    ctx.lineTo(width - 5 * block - block / 2, 24 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 5 * block - block / 2, 28 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 4 * block - block / 2, 28 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 4 * block - block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 2 * block - block / 2, 25 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 2 * block - block / 2, 24 * block + block / 2 - 1); //рисуем линию

    ctx.moveTo(2 * block + block / 2, 30 * block + block / 2); //передвигаем перо
    ctx.lineTo(7 * block + block / 2, 30 * block + block / 2); //рисуем линию
    ctx.lineTo(7 * block + block / 2, 27 * block + block / 2); //рисуем линию
    ctx.lineTo(8 * block + block / 2, 27 * block + block / 2); //рисуем линию
    ctx.lineTo(8 * block + block / 2, 30 * block + block / 2); //рисуем линию
    ctx.lineTo(11 * block + block / 2, 30 * block + block / 2); //рисуем линию
    ctx.lineTo(11 * block + block / 2, 31 * block + block / 2); //рисуем линию
    ctx.lineTo(2 * block + block / 2, 31 * block + block / 2); //рисуем линию
    ctx.lineTo(2 * block + block / 2, 30 * block + block / 2 - 1); //рисуем линиюэ

    ctx.moveTo(width - 2 * block - block / 2, 30 * block + block / 2); //передвигаем перо
    ctx.lineTo(width - 7 * block - block / 2, 30 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 7 * block - block / 2, 27 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 8 * block - block / 2, 27 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 8 * block - block / 2, 30 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 11 * block - block / 2, 30 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 11 * block - block / 2, 31 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 2 * block - block / 2, 31 * block + block / 2); //рисуем линию
    ctx.lineTo(width - 2 * block - block / 2, 30 * block + block / 2 - 1); //рисуем линию
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "white";
    ctx.moveTo(13 * block, 16 * block - block / 4); //передвигаем перо
    ctx.lineTo(15 * block, 16 * block - block / 4); //рисуем линию
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.font = 20 + 'px ' + 'TimesNewRoman';
    ctx.strokeText("H I G H   S C O R E", 9 * block + debag_, block - debag_);

    ctx.strokeText(function () {
        var result = "";
        for (var i = 0; i < String(score).length; i++) {
            result += String(score)[i] + " ";
        }
        return result;
    }(), (7 - String(score).length) * block + debag_, 2 * block - debag_);
    ctx.stroke();
    ctx.fillStyle = "#ffdfc4";
    for (var i = 0; i < 245; i++) {
        if ((point[i] == true) && (x == pointX[i]) && (y == pointY[i])) {
            score += 10;
            point[i] = false;
        } else if (point[i] == true) {
            ctx.beginPath();
            ctx.arc(pointX[i], pointY[i], 2, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
};

function wait() {
    if (wait_ != "") {
        if (wait_ == "left" && (!(ctx.getImageData(x - 16, y - 14, x - 16, y - 14).data[2] == 255 || ctx.getImageData(x - 16, y + 14, x - 16, y + 14).data[2] == 255 || ctx.getImageData(x - 16, y, x - 16, y).data[2] == 255))) {
            direction = "left";
            wait_ = "";
        } else if (wait_ == "up" && (!(ctx.getImageData(x + 14, y - 16, x + 14, y - 16).data[2] == 255 || ctx.getImageData(x - 14, y - 16, x - 14, y - 16).data[2] == 255 || ctx.getImageData(x, y - 16, x, y - 16).data[2] == 255))) {
            direction = "up";
            wait_ = "";
        } else if (wait_ == "right" && (!(ctx.getImageData(x + 16, y - 14, x + 16, y - 14).data[2] == 255 || ctx.getImageData(x + 16, y + 14, x + 16, y + 14).data[2] == 255 || ctx.getImageData(x + 16, y, x + 16, y).data[2] == 255))) {
            direction = "right";
            wait_ = "";
        } else if (wait_ == "down" && (!(ctx.getImageData(x + 14, y + 16, x + 14, y + 16).data[2] == 255 || ctx.getImageData(x - 14, y + 16, x - 14, y + 16).data[2] == 255 || ctx.getImageData(x, y + 16, x, y + 16).data[2] == 255)) && !(x == 14 * block && y == 14 * block + block / 2)) {
            direction = "down";
            wait_ = "";
        }
    }
};

function G() {
    var yG = this.yG;
    var xG = this.xG;
    var Y = "0";
    var X = "0";
    var temp = false;
    if (y - yG > 0)
        Y = "down";
    else if (y - yG < 0)
        Y = "up";
    if (x - xG > 0)
        X = "right";
    else if (x - xG < 0)
        X = "left";
    if (Y == "down" && (!(ctx.getImageData(xG + 14, yG + 16, xG + 14, yG + 16).data[2] == 255 || ctx.getImageData(xG - 14, yG + 16, xG - 14, yG + 16).data[2] == 255 || ctx.getImageData(xG, yG + 16, xG, yG + 16).data[2] == 255) && !((yG == 14 * block + block / 2 && xG == 14 * block)))) {
        var tY = yG + 3 * block;
        var tX = xG;
        if ((directionG != "left" && tY > 0 && tY < 576 && X == "right" && (ctx.getImageData(tX + 14, tY + 16, tX + 14, tY + 16).data[2] == 255 && ctx.getImageData(tX - 14, tY + 16, tX - 14, tY + 16).data[2] == 255 && ctx.getImageData(tX, tY + 16, tX, tY + 16).data[2] == 255) && ((ctx.getImageData(tX + 16, tY - 14, tX + 16, tY - 14).data[2] == 255 && ctx.getImageData(tX + 16, tY + 14, tX + 16, tY + 14).data[2] == 255 && ctx.getImageData(tX + 16, tY, tX + 16, tY).data[2] == 255)) && ((ctx.getImageData(tX + 16, tY - block - 14, tX + 16, tY - block - 14).data[2] == 255 && ctx.getImageData(tX + 16, tY - block + 14, tX + 16, tY - block + 14).data[2] == 255 && ctx.getImageData(tX + 16, tY - block, tX + 16, tY - block).data[2] == 255)))) {
            directionG = "right";
            D = "right";
        } else if ((directionG != "right" && tY > 0 && tY < 576 && X == "left" && (ctx.getImageData(tX + 14, tY + 16, tX + 14, tY + 16).data[2] == 255 && ctx.getImageData(tX - 14, tY + 16, tX - 14, tY + 16).data[2] == 255 && ctx.getImageData(tX, tY + 16, tX, tY + 16).data[2] == 255) && ((ctx.getImageData(tX - 16, tY - 14, tX - 16, tX - 14).data[2] == 255 && ctx.getImageData(tX - 16, tY + 14, tX - 16, tY + 14).data[2] == 255 && ctx.getImageData(tX - 16, tY, tX - 16, tY).data[2] == 255)) && ((ctx.getImageData(tX - 16, tY - block - 14, tX - 16, tY - block - 14).data[2] == 255 && ctx.getImageData(tX - 16, tY - block + 14, tX - 16, tY - block + 14).data[2] == 255 && ctx.getImageData(tX - 16, tY - block, tX - 16, tY - block).data[2] == 255)))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "up") {
            directionG = "down";
            D = "down";
        } else if (X == "right" && (!(ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            directionG = "right";
            D = "right";
        } else if (X == "left" && (!(ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "left" && (!(ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            directionG = "right";
            D = "right";
        } else if (directionG != "right" && (!(ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "down" && (!(ctx.getImageData(xG + 14, yG - 16, xG + 14, yG - 16).data[2] == 255 || ctx.getImageData(xG - 14, yG - 16, xG - 14, yG - 16).data[2] == 255 || ctx.getImageData(xG, yG - 16, xG, yG - 16).data[2] == 255))) {
            directionG = "up";
            D = "up";
        }
    } else if (Y == "down" && ((ctx.getImageData(xG + 14, yG + 16, xG + 14, yG + 16).data[2] == 255 || ctx.getImageData(xG - 14, yG + 16, xG - 14, yG + 16).data[2] == 255 || ctx.getImageData(xG, yG + 16, xG, yG + 16).data[2] == 255)) || ((yG == 14 * block + block / 2 && xG == 14 * block) || (yG == 14 * block + block / 2 && xG == 14 * block + block / 2) || (yG == 14 * block + block / 2 && xG == 14 * block - block / 2) || (yG == 14 * block + block / 2 && xG == 14 * block + block) || (yG == 14 * block + block / 2 && xG == 14 * block - block) || (yG == 14 * block + block / 2 && xG == 14 * block + block + block / 2) || (yG == 14 * block + block / 2 && xG == 14 * block - block - block / 2))) {
        if ((X == "right" || X == "0") && directionG != "left" && (!(ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            directionG = "right";
            D = "right";
        } else if (X == "left" && directionG != "right" && (!(ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "left" && (!(ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            directionG = "right";
            D = "right";
        } else if (directionG != "right" && (!(ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "down" && (!(ctx.getImageData(xG + 14, yG - 16, xG + 14, yG - 16).data[2] == 255 || ctx.getImageData(xG - 14, yG - 16, xG - 14, yG - 16).data[2] == 255 || ctx.getImageData(xG, yG - 16, xG, yG - 16).data[2] == 255))) {
            directionG = "up";
            D = "up";
        }
    } else if (Y == "up" && (!(ctx.getImageData(xG + 14, yG - 16, xG + 14, yG - 16).data[2] == 255 || ctx.getImageData(xG - 14, yG - 16, xG - 14, yG - 16).data[2] == 255 || ctx.getImageData(xG, yG - 16, xG, yG - 16).data[2] == 255))) {
        var tY = yG - 3 * block;
        var tX = xG;
        if ((directionG != "left" && tY > 0 && tY < 576 && X == "right" && (ctx.getImageData(tX + 14, tY - 16, tX + 14, tY - 16).data[2] == 255 && ctx.getImageData(tX - 14, tY - 16, tX - 14, tY - 16).data[2] == 255 && ctx.getImageData(tX, tY - 16, tX, tY - 16).data[2] == 255) && ((ctx.getImageData(tX + 16, tY - 14, tX + 16, tY - 14).data[2] == 255 && ctx.getImageData(tX + 16, tY + 14, tX + 16, tY + 14).data[2] == 255 && ctx.getImageData(tX + 16, tY, tX + 16, tY).data[2] == 255)) && ((ctx.getImageData(tX + 16, tY + block - 14, tX + 16, tY + block - 14).data[2] == 255 && ctx.getImageData(tX + 16, tY + block + 14, tX + 16, tY + block + 14).data[2] == 255 && ctx.getImageData(tX + 16, tY + block, tX + 16, tY + block).data[2] == 255)))) {
            directionG = "right";
            D = "right";
        } else if ((directionG != "right" && tY > 0 && tY < 576 && X == "left" && (ctx.getImageData(tX + 14, tY - 16, tX + 14, tY - 16).data[2] == 255 && ctx.getImageData(tX - 14, tY - 16, tX - 14, tY - 16).data[2] == 255 && ctx.getImageData(tX, tY - 16, tX, tY - 16).data[2] == 255) && ((ctx.getImageData(tX - 16, tY - 14, tX - 16, tX - 14).data[2] == 255 && ctx.getImageData(tX - 16, tY + 14, tX - 16, tY + 14).data[2] == 255 && ctx.getImageData(tX - 16, tY, tX - 16, tY).data[2] == 255)) && ((ctx.getImageData(tX - 16, tY + block - 14, tX - 16, tY + block - 14).data[2] == 255 && ctx.getImageData(tX - 16, tY + block + 14, tX - 16, tY + block + 14).data[2] == 255 && ctx.getImageData(tX - 16, tY + block, tX - 16, tY + block).data[2] == 255)))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "down") {
            directionG = "up";
            D = "up";
        } else if (X == "right" && (!(ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            directionG = "right";
            D = "right";
        } else if (X == "left" && (!(ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "left" && (!(ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            directionG = "right";
            D = "right";
        } else if (directionG != "right" && (!(ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "up" && (!(ctx.getImageData(xG + 14, yG + 16, xG + 14, yG + 16).data[2] == 255 || ctx.getImageData(xG - 14, yG + 16, xG - 14, yG + 16).data[2] == 255 || ctx.getImageData(xG, yG + 16, xG, yG + 16).data[2] == 255))) {
            directionG = "down";
            D = "down";
        }
    } else if (Y == "up" && ((ctx.getImageData(xG + 14, yG - 16, xG + 14, yG - 16).data[2] == 255 || ctx.getImageData(xG - 14, yG - 16, xG - 14, yG - 16).data[2] == 255 || ctx.getImageData(xG, yG - 16, xG, yG - 16).data[2] == 255))) {
        if ((X == "right" || X == "0") && directionG != "left" && (!(ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            directionG = "right";
            D = "right";
        } else if (directionG != "right" && X == "left" && (!(ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "left" && (!(ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            directionG = "right";
            D = "right";
        } else if (directionG != "right" && (!(ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            directionG = "left";
            D = "left";
        } else if (directionG != "up" && (!(ctx.getImageData(xG + 14, yG + 16, xG + 14, yG + 16).data[2] == 255 || ctx.getImageData(xG - 14, yG + 16, xG - 14, yG + 16).data[2] == 255 || ctx.getImageData(xG, yG + 16, xG, yG + 16).data[2] == 255))) {
            directionG = "down";
            D = "down";
        }
    } else if (Y == "0") {
        if (directionG != "right" && X == "left" && (!(ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            directionG = "left";
            D = "left";
        } else if (X == "left" && ((ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
            if (directionG != "up" && directionG != "down") {
                if (directionG != "up") {
                    var yG = this.yG;
                    var xG = this.xG;
                    var i = 0;
                    var j = 0;
                    while ((!(ctx.getImageData(xG + 14, yG + 16, xG + 14, yG + 16).data[2] == 255 || ctx.getImageData(xG - 14, yG + 16, xG - 14, yG + 16).data[2] == 255 || ctx.getImageData(xG, yG + 16, xG, yG + 16).data[2] == 255)) && ((ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
                        yG += 8;
                        i++;
                    }
                    if (((ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255)))
                        i = 0;
                }
                if (directionG != "down") {
                    var yG = this.yG;
                    var xG = this.xG;
                    while ((!(ctx.getImageData(xG + 14, yG - 16, xG + 14, yG - 16).data[2] == 255 || ctx.getImageData(xG - 14, yG - 16, xG - 14, yG - 16).data[2] == 255 || ctx.getImageData(xG, yG - 16, xG, yG - 16).data[2] == 255)) && ((ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255))) {
                        yG -= 8;
                        j++;
                    }
                    if (((ctx.getImageData(xG - 16, yG - 14, xG - 16, yG - 14).data[2] == 255 || ctx.getImageData(xG - 16, yG + 14, xG - 16, yG + 14).data[2] == 255 || ctx.getImageData(xG - 16, yG, xG - 16, yG).data[2] == 255)))
                        j = 0;
                }
                if (i == 0) {
                    directionG = "up";
                    D = "up";
                } else if (j == 0) {
                    directionG = "down";
                    D = "down";
                } else if (i <= j) {
                    directionG = "down";
                    D = "down";
                } else {
                    directionG = "up";
                    D = "up";
                }
            } else if (directionG == "up" && (!(ctx.getImageData(xG + 14, yG - 16, xG + 14, yG - 16).data[2] == 255 || ctx.getImageData(xG - 14, yG - 16, xG - 14, yG - 16).data[2] == 255 || ctx.getImageData(xG, yG - 16, xG, yG - 16).data[2] == 255))) {
                directionG = "up";
                D = "up";
            } else if (directionG == "down" && (!(ctx.getImageData(xG + 14, yG + 16, xG + 14, yG + 16).data[2] == 255 || ctx.getImageData(xG - 14, yG + 16, xG - 14, yG + 16).data[2] == 255 || ctx.getImageData(xG, yG + 16, xG, yG + 16).data[2] == 255))) {
                directionG = "down";
                D = "down";
            } else {
                if (X == "left") {
                    directionG = "right";
                    D = "right";
                } else {
                    directionG = "left";
                    D = "left";
                }
            }
        } else if (directionG != "left" && X == "right" && (!(ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            directionG = "right";
            D = "right";
        } else if (X == "right" && ((ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
            if (directionG != "up" && directionG != "down") {
                if (directionG != "up") {
                    var yG = this.yG;
                    var xG = this.xG;
                    var i = 0;
                    var j = 0;
                    while ((!(ctx.getImageData(xG + 14, yG + 16, xG + 14, yG + 16).data[2] == 255 || ctx.getImageData(xG - 14, yG + 16, xG - 14, yG + 16).data[2] == 255 || ctx.getImageData(xG, yG + 16, xG, yG + 16).data[2] == 255)) && ((ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
                        yG += 8;
                        i++;
                    }
                    if (((ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255)))
                        i = 0;
                }
                if (directionG != "down") {
                    var yG = this.yG;
                    var xG = this.xG;
                    while ((!(ctx.getImageData(xG + 14, yG - 16, xG + 14, yG - 16).data[2] == 255 || ctx.getImageData(xG - 14, yG - 16, xG - 14, yG - 16).data[2] == 255 || ctx.getImageData(xG, yG - 16, xG, yG - 16).data[2] == 255)) && ((ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255))) {
                        yG -= 8;
                        j++;
                    }
                    if (((ctx.getImageData(xG + 16, yG - 14, xG + 16, yG - 14).data[2] == 255 || ctx.getImageData(xG + 16, yG + 14, xG + 16, yG + 14).data[2] == 255 || ctx.getImageData(xG + 16, yG, xG + 16, yG).data[2] == 255)))
                        j = 0;
                }
                if (i == 0) {
                    directionG = "up";
                    D = "up";
                } else if (j == 0) {
                    directionG = "down";
                    D = "down";
                } else if (i <= j) {
                    directionG = "down";
                    D = "down";
                } else {
                    directionG = "up";
                    D = "up";
                }
            } else if (directionG == "up" && (!(ctx.getImageData(xG + 14, yG - 16, xG + 14, yG - 16).data[2] == 255 || ctx.getImageData(xG - 14, yG - 16, xG - 14, yG - 16).data[2] == 255 || ctx.getImageData(xG, yG - 16, xG, yG - 16).data[2] == 255))) {
                directionG = "up";
                D = "up";
            } else if (directionG == "down" && (!(ctx.getImageData(xG + 14, yG + 16, xG + 14, yG + 16).data[2] == 255 || ctx.getImageData(xG - 14, yG + 16, xG - 14, yG + 16).data[2] == 255 || ctx.getImageData(xG, yG + 16, xG, yG + 16).data[2] == 255))) {
                directionG = "down";
                D = "down";
            } else {
                if (X == "left") {
                    directionG = "right";
                    D = "right";
                } else {
                    directionG = "left";
                    D = "left";
                }
            }
        }
    }
};

var keys = function (key) {
    if (key == "ArrowLeft" && direction != "left") {
        if (!(ctx.getImageData(x - 16, y - 14, x - 16, y - 14).data[2] == 255 || ctx.getImageData(x - 16, y + 14, x - 16, y + 14).data[2] == 255 || ctx.getImageData(x - 16, y, x - 16, y).data[2] == 255)) {
            direction = "left";
            wait_ = "";
        } else
            wait_ = "left";
    } else if (key == "ArrowUp" && direction != "up") {
        if (!(ctx.getImageData(x + 14, y - 16, x + 14, y - 16).data[2] == 255 || ctx.getImageData(x - 14, y - 16, x - 14, y - 16).data[2] == 255 || ctx.getImageData(x, y - 16, x, y - 16).data[2] == 255)) {
            direction = "up";
            wait_ = "";
        } else
            wait_ = "up";
    } else if (key == "ArrowRight" && direction != "right") {
        if (!(ctx.getImageData(x + 16, y - 14, x + 16, y - 14).data[2] == 255 || ctx.getImageData(x + 16, y + 14, x + 16, y + 14).data[2] == 255 || ctx.getImageData(x + 16, y, x + 16, y).data[2] == 255)) {
            direction = "right";
            wait_ = "";
        } else
            wait_ = "right";
    } else if (key == "ArrowDown" && direction != "down" && !(x == 14 * block && y == 14 * block + block / 2)) {
        if (!(ctx.getImageData(x + 14, y + 16, x + 14, y + 16).data[2] == 255 || ctx.getImageData(x - 14, y + 16, x - 14, y + 16).data[2] == 255 || ctx.getImageData(x, y + 16, x, y + 16).data[2] == 255)) {
            direction = "down";
            wait_ = "";
        } else
            wait_ = "down";
    }
};
var x = 14 * block;
var y = 26 * block + block / 2;
var direction = "right";
var wait_ = "";
var score = 0;
var point = Array(245);
var xG = 14 * block;
var yG = 14 * block + block / 2;
for (var i = 0; i < 245; i++)
    point[i] = true;
var pointX = Array(245);
var pointY = Array(245);
var directionG = "right";
var D = directionG;
for (var i = 1; i < 13; i++)
    pointX[i - 1] = i * block + block / 2;
for (var i = 12; i < 24; i++)
    pointX[i] = (i + 3) * block + block / 2;//24

for (var i = 0; i < 3; i++) {
    pointX[24 + 6 * i] = block + block / 2;
    pointX[25 + 6 * i] = 6 * block + block / 2;
    pointX[26 + 6 * i] = 12 * block + block / 2
    pointX[27 + 6 * i] = 15 * block + block / 2;
    pointX[28 + 6 * i] = 21 * block + block / 2;
    pointX[29 + 6 * i] = 26 * block + block / 2;//42
}

for (var i = 42; i < 68; i++)
    pointX[i] = (i - 41) * block + block / 2;//68

for (var i = 0; i < 2; i++) {
    pointX[i * 6 + 68] = block + block / 2;
    pointX[i * 6 + 69] = 6 * block + block / 2;
    pointX[i * 6 + 70] = 9 * block + block / 2;
    pointX[i * 6 + 71] = 18 * block + block / 2;
    pointX[i * 6 + 72] = 21 * block + block / 2;
    pointX[i * 6 + 73] = 26 * block + block / 2;//80
}
for (var i = 1; i < 7; i++)
    pointX[79 + i] = i * block + block / 2;
for (var i = 9; i < 13; i++)
    pointX[77 + i] = i * block + block / 2;
for (var i = 15; i < 19; i++)
    pointX[75 + i] = i * block + block / 2;
for (var i = 21; i < 27; i++)
    pointX[73 + i] = i * block + block / 2;//100

for (var i = 0; i < 11; i++) {
    pointX[100 + i * 2] = 6 * block + block / 2;
    pointX[101 + i * 2] = 21 * block + block / 2;//122
}

for (var i = 1; i < 13; i++)
    pointX[i + 121] = i * block + block / 2;
for (var i = 12; i < 24; i++)
    pointX[i + 122] = (i + 3) * block + block / 2;//146

for (var i = 0; i < 2; i++) {
    pointX[146 + 6 * i] = block + block / 2;
    pointX[147 + 6 * i] = 6 * block + block / 2;
    pointX[148 + 6 * i] = 12 * block + block / 2
    pointX[149 + 6 * i] = 15 * block + block / 2;
    pointX[150 + 6 * i] = 21 * block + block / 2;
    pointX[151 + 6 * i] = 26 * block + block / 2;//158
}

for (var i = 1; i < 4; i++)
    pointX[157 + i] = i * block + block / 2;//161
for (var i = 6; i < 13; i++)
    pointX[155 + i] = i * block + block / 2;//168
for (var i = 15; i < 22; i++)
    pointX[153 + i] = i * block + block / 2;//175
for (var i = 24; i < 27; i++)
    pointX[151 + i] = i * block + block / 2;//178

for (var i = 0; i < 2; i++) {
    pointX[i * 6 + 178] = 3 * block + block / 2;
    pointX[i * 6 + 179] = 6 * block + block / 2;
    pointX[i * 6 + 180] = 9 * block + block / 2;
    pointX[i * 6 + 181] = 18 * block + block / 2;
    pointX[i * 6 + 182] = 21 * block + block / 2;
    pointX[i * 6 + 183] = 24 * block + block / 2;//190
}

for (var i = 1; i < 7; i++)
    pointX[i + 189] = i * block + block / 2;
for (var i = 7; i < 11; i++)
    pointX[i + 189] = (i + 2) * block + block / 2;
for (var i = 11; i < 15; i++)
    pointX[i + 189] = (i + 4) * block + block / 2;
for (var i = 15; i < 21; i++)
    pointX[i + 189] = (i + 6) * block + block / 2;//210

for (var i = 0; i < 2; i++) {
    pointX[210 + 4 * i] = block + block / 2;
    pointX[211 + 4 * i] = 12 * block + block / 2
    pointX[212 + 4 * i] = 15 * block + block / 2;
    pointX[213 + 4 * i] = 26 * block + block / 2;//218
}

for (var i = 218; i < 245; i++)
    pointX[i] = (i - 217) * block + block / 2;//244

for (var i = 0; i < 24; i++)
    pointY[i] = 4 * block + block / 2;//24

for (var i = 24; i < 30; i++)
    pointY[i] = 5 * block + block / 2;

for (var i = 30; i < 36; i++)
    pointY[i] = 6 * block + block / 2;

for (var i = 36; i < 42; i++)
    pointY[i] = 7 * block + block / 2;//42

for (var i = 42; i < 68; i++)
    pointY[i] = 8 * block + block / 2;//68

for (var i = 68; i < 74; i++)
    pointY[i] = 9 * block + block / 2;

for (var i = 74; i < 80; i++)
    pointY[i] = 10 * block + block / 2;//80

for (var i = 80; i < 100; i++)
    pointY[i] = 11 * block + block / 2;//100

for (var k = 12; k < 23; k++)
    for (var i = 100 + (k - 12) * 2; i < 102 + (k - 12) * 2; i++)
        pointY[i] = k * block + block / 2;//122

for (var i = 122; i < 146; i++)
    pointY[i] = 23 * block + block / 2;//146

for (var k = 24; k < 26; k++)
    for (var i = 146 + (k - 24) * 6; i < 152 + (k - 24) * 6; i++)
        pointY[i] = k * block + block / 2;//158

for (var i = 158; i < 178; i++)
    pointY[i] = 26 * block + block / 2;//178

for (var k = 27; k < 29; k++)
    for (var i = 178 + (k - 27) * 6; i < 184 + (k - 27) * 6; i++)
        pointY[i] = k * block + block / 2;//190

for (var i = 190; i < 210; i++)
    pointY[i] = 29 * block + block / 2;//210

for (var k = 30; k < 32; k++)
    for (var i = 210 + (k - 30) * 4; i < 214 + (k - 30) * 4; i++)
        pointY[i] = k * block + block / 2;//218

for (var i = 218; i < 244; i++)
    pointY[i] = 32 * block + block / 2;//244

var intI = setInterval(function () {
    wait();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $("html").keyup(function (event) {
        if (event.key != undefined)
            keys(event.key);
    });
    drawField();
    drawP(x, y);
    drawG(xG, yG);
    //debag();
    if (!function () {
        if (x - 16 == 0)
            x = 432;
        else if (x + 16 == 448)
            x = 16;
        if (direction == "right")
            return (ctx.getImageData(x + 16, y - 14, x + 16, y - 14).data[2] == 255 || ctx.getImageData(x + 16, y + 14, x + 16, y + 14).data[2] == 255 || ctx.getImageData(x + 16, y, x + 16, y).data[2] == 255);
        else if (direction == "left")
            return (ctx.getImageData(x - 16, y - 14, x - 16, y - 14).data[2] == 255 || ctx.getImageData(x - 16, y + 14, x - 16, y + 14).data[2] == 255 || ctx.getImageData(x - 16, y, x - 16, y).data[2] == 255);
        else if (direction == "up")
            return (ctx.getImageData(x + 14, y - 16, x + 14, y - 16).data[2] == 255 || ctx.getImageData(x - 14, y - 16, x - 14, y - 16).data[2] == 255 || ctx.getImageData(x, y - 16, x, y - 16).data[2] == 255);
        else if (direction == "down")
            return (ctx.getImageData(x + 14, y + 16, x + 14, y + 16).data[2] == 255 || ctx.getImageData(x - 14, y + 16, x - 14, y + 16).data[2] == 255 || ctx.getImageData(x, y + 16, x, y + 16).data[2] == 255);

    }()) {
        if (direction == "right")
            x += 8;
        else if (direction == "left")
            x -= 8;
        else if (direction == "up")
            y -= 8;
        else if (direction == "down")
            y += 8;
    }
    G();
    if (x == xG && y == yG) {
        clearInterval(intI);
        setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawField();
            drawP(x, y);
            drawG(xG, yG);
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = "white";
            ctx.font = 40 + 'px ' + 'TimesNewRoman';
            ctx.strokeText("Y O U   L O S E !", 95 + debag_, 18 * block - debag_);
            ctx.fill();
        }, 80);
    }
    if (xG - 16 == 0)
        xG = 432;
    else if (xG + 16 == 448)
        xG = 16;
    if (directionG == "right")
        xG += 8;
    else if (directionG == "left")
        xG -= 8;
    else if (directionG == "up")
        yG -= 8;
    else if (directionG == "down")
        yG += 8;
    if (score == 2440) {
        clearInterval(intI);
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "white";
        ctx.font = 40 + 'px ' + 'TimesNewRoman';
        ctx.strokeText("Y O U   W I N !", 95 + debag_, 18 * block - debag_);
        ctx.fill();
    }
    if (x == xG && y == yG) {
        clearInterval(intI);
        setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawField();
            drawP(x, y);
            drawG(xG, yG);
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = "white";
            ctx.font = 40 + 'px ' + 'TimesNewRoman';
            ctx.strokeText("Y O U   L O S E !", 95 + debag_, 18 * block - debag_);
            ctx.fill();
        }, 80);
    }
    //console.log(x);
    //console.log(xG);
    //console.log(y);
    //console.log(yG);

}, 80);