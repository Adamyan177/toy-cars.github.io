const redCars = [
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/1.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/2.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/3.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/4.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/5.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/6.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/7.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/8.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/9.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/10.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/11.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/12.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/13.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/14.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/15.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/16.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/17.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/18.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/19.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/20.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/21.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/22.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/23.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/24.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/25.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/26.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/27.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/28.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/29.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/30.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/31.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/32.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/33.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/34.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/35.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d25/36/36.png?fmt=webp-alpha&wid=930&qlt=90",
  ];
    const serCars =[
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/1.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/2.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/3.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/4.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/5.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/6.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/7.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/8.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/9.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/10.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/11.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/12.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/13.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/14.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/15.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/16.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/17.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/18.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/19.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/20.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/21.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/22.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/23.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/24.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/25.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/26.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/27.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/28.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/29.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/30.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/31.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/32.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/33.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/34.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/35.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/1k3/36/36.png?fmt=webp-alpha&wid=930&qlt=90",


  ];

  const BlackCars=[
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/1.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/2.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/3.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/4.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/5.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/6.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/7.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/8.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/9.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/10.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/11.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/12.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/13.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/14.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/15.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/16.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/17.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/18.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/19.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/20.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/21.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/22.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/23.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/24.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/25.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/26.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/27.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/28.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/29.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/30.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/31.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/32.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/33.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/34.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/35.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/d11/36/36.png?fmt=webp-alpha&wid=930&qlt=90",
  ]

  const SpitakCars=[
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/1.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/2.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/3.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/4.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/5.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/6.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/7.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/8.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/9.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/10.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/11.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/12.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/13.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/14.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/15.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/16.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/17.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/18.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/19.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/20.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/21.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/22.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/23.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/24.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/25.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/26.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/27.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/28.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/29.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/30.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/31.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/32.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/33.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/34.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/35.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/089/36/36.png?fmt=webp-alpha&wid=930&qlt=90",
  ]

  const GreenCars=[
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/1.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/2.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/3.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/4.png?fmt=webp-alpha&wid=930&qlt=90",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/5.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/6.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/7.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/8.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/9.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/10.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/11.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/12.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/13.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/14.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/15.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/16.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/17.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/18.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/19.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/20.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/21.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/22.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/23.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/24.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/25.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/26.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/27.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/28.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/29.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/30.png?fmt=webp-alpha&wid=930&qlt=90",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/31.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/32.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/33.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/34.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/35.png?fmt=webp-alpha&wid=930&qlt=90",    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/xle/6305/6x5/36/36.png?fmt=webp-alpha&wid=930&qlt=90",
]

const SevSpitakCars=[
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/1.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/2.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/3.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/4.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/5.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/6.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/7.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/8.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/9.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/10.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/11.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/12.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/13.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/14.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/15.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/16.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/17.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/18.png?fmt=webp-alpha&wid=930&qlt=90",

  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/19.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/20.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/21.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/22.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/23.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/24.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/25.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/26.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/27.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/28.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/29.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/30.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/31.png?fmt=webp-alpha&wid=930&qlt=90","https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/32.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/33.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/34.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/35.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridnightshade/6315/d23/36/36.png?fmt=webp-alpha&wid=930&qlt=90",

]

const KapuytSevCars=[
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/1.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/2.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/3.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/4.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/5.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/6.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/7.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/8.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/9.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/10.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/11.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/12.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/13.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/14.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/15.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/16.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/17.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/18.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/19.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/20.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/21.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/22.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/23.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/24.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/25.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/26.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/27.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/28.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/29.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/30.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/31.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/32.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/33.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/34.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/35.png?fmt=webp-alpha&wid=930&qlt=90",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corollacross/hybridxse/6316/d15/36/36.png?fmt=webp-alpha&wid=930&qlt=90",

]

let n=0;
let a=0;
let data=redCars



document.getElementById("right").addEventListener("click", ()=>{
if(n>0){n--}
else(n=data.length-1)

document.getElementById("nk").src=data[n];

})


document.getElementById("left").addEventListener("click", ()=>{
  if(n<35){n++}
  else(n=0)
  
  document.getElementById("nk").src=data[n];
  
  })



document.getElementById("bb2").addEventListener("click",()=>{
data=redCars
document.getElementById("nk").src=data[n]

})


document.getElementById("bb4").addEventListener("click",()=>{
  data=serCars
  document.getElementById("nk").src=data[n]
  
  })

  document.getElementById("bb6").addEventListener("click",()=>{
    data=BlackCars
    document.getElementById("nk").src=data[n]
    
    })

    document.getElementById("bb8").addEventListener("click",()=>{
      data=SpitakCars
      document.getElementById("nk").src=data[n]
      
      })

      document.getElementById("bb10").addEventListener("click",()=>{
        data=GreenCars
        document.getElementById("nk").src=data[n]
        
        })



        document.getElementById("bb12").addEventListener("click",()=>{
          data=SevSpitakCars
          document.getElementById("nk").src=data[n]
          
          })


          document.getElementById("bb14").addEventListener("click",()=>{
            data=KapuytSevCars
            document.getElementById("nk").src=data[n]
            
            })
  
  document.getElementById("but4").addEventListener("click",()=>{
    document.getElementById("imgg").src="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/COC_MY24_0002_V003.png?fmt=jpeg&fit=crop&qlt=90&wid=1024"
    
  })
    
  document.getElementById("but3").addEventListener("click",()=>{
    document.getElementById("imgg").src="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/CRC_MY25_0020_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=2048"
    
  })

  const Dus=[
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/CRC_MY25_0020_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=2048",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/CRC_MY25_0011_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1024",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/CRC_MY25_0010_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1024",
    "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/CRC_MY25_0012_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1024",
  ]

const Ners=[
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/COC_MY24_0002_V003.png?fmt=jpeg&fit=crop&qlt=90&wid=1024",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/COC_MY22_0027_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1024",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/CRC_MY25_0007_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1024",
  "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/short-gallery/COC_MY23_0009_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1024",
]



let ddf=Dus;




document.getElementById("aj").addEventListener("click", ()=>{
  if(3>a){a++}

  document.getElementById("imgg").src=ddf[a];
  
  })



  
document.getElementById("dzax").addEventListener("click", ()=>{
  if(0<a){a--}
 
  
  document.getElementById("imgg").src=ddf[a];
  
  })

    document.getElementById("but3").addEventListener("click",()=>{
      ddf=Dus
      document.getElementById("imgg").src=ddf[a]
    })

    document.getElementById("but4").addEventListener("click",()=>{
      ddf=Ners
      document.getElementById("imgg").src=ddf[a]
    })

    document.getElementById("gi1").addEventListener("click", ()=>{

      document.getElementById("gi1").style="width:60px; background:#000;"

      document.getElementById("gi2").style="width:24px; background:#ccc;"
      document.getElementById("gi3").style="width:24px; background:#ccc;"
      document.getElementById("gi4").style="width:24px; background:#ccc;"
      
      })
        
      
      document.getElementById("gi2").addEventListener("click", ()=>{
      
        document.getElementById("gi2").style="width:60px; background:#000;"
        document.getElementById("gi1").style="width:24px; background:#ccc;"
        document.getElementById("gi3").style="width:24px; background:#ccc;"
        document.getElementById("gi4").style="width:24px; background:#ccc;"
        })
      
      
        document.getElementById("gi3").addEventListener("click", ()=>{
      
          document.getElementById("gi3").style="width:60px; background:#000;"
          document.getElementById("gi1").style="width:24px; background:#ccc;"
          document.getElementById("gi2").style="width:24px; background:#ccc;"
          document.getElementById("gi4").style="width:24px; background:#ccc;"
          
          })
      
      
          document.getElementById("gi4").addEventListener("click", ()=>{
      
            document.getElementById("gi4").style="width:60px; background:#000;"
            document.getElementById("gi2").style="width:24px; background:#ccc;"
            document.getElementById("gi1").style="width:24px; background:#ccc;"
            document.getElementById("gi3").style="width:24px; background:#ccc;"
            })
   
 const Toy=[
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/mosaic/CRC_MY25_0021_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1214&hei=390",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/mosaic/CRC_MY25_0001_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=470&hei=390",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/mosaic/CRC_MY25_0022_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=470&hei=390",
"https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corollacross/mlp/mosaic/CRC_MY25_0003_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1214&hei=390",
 ]
  


 




 let Cars1=Toy
  let f=0
  let te=texth1
  
 document.getElementById("sl2").addEventListener("click", ()=>{
  if(f<3){f++}

  
  document.getElementById("imgg1").src=Cars1[f];
  
  })



  document.getElementById("sl1").addEventListener("click", ()=>{
    if(f>0){f--}

    
    document.getElementById("imgg1").src=Cars1[f];






    
    })







