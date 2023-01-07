//1000 ile 2000 arasındaki sayılardan 13 e bölümünden kalan 3 olan sayıları ekrana yazdır...

for (let i = 1000; i < 2000; i++) {
  if (i % 13 == 3) {
    console.log(i);
  } else {
    continue;
  }
}
