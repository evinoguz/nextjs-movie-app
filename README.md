# Nextjs Movie App

Projede en populer, en beğenilen ve yakında gelecek filmler listelenmiştir.<br />
Seçilen filmin detayında film hakkında ayrıntılı bilgiler verilmiştir.<br />
Arama yaparak dilediği filmlere ulaşabilir.<br />

Tailwindcss ile arayüz geliştirildi.<br />
React tabanlı bir framework olan Next.js kullanıldı.<br />
Next.js, özellikle performans ve kullanıcı deneyimi konularında önemli avantajlar sunar<br />
Api'ye [buradan](https://developer.themoviedb.org/reference/intro/getting-started) ulaşabilirsiniz.<br />
## Gif

![](/public/nextjs-movie-app.gif)

## Projenin Çalıştırılması
Projeyi indiriniz veya fork ediniz. 'Visual Studio Code' editörü ile projeyi açınız. 
```
git clone https://github.com/evinoguz/nextjs-movie-app.git
```

Proje dizininde .env adında dosya oluşturunuz. Bu dosyada ortam değişkenlerini tanımlayınız.
```
NEXT_PUBLIC_API_KEY = yourApiKey
NEXT_PUBLIC_API_URL = https://api.themoviedb.org/3
```

  Terminalde;
```
npm install

```
komutu ile projede kullanılan paketlerin yüklenmesini sağlar, ardından
```
npm run dev
```
komutunu ile proje ayağa kaldırılır.
