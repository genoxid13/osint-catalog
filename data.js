// ============ КАТАЛОГ OSINT-ИНСТРУМЕНТОВ ============
// Формат: ['Название','Иконка','Описание RU','Описание EN','URL','Тип','Доступ']
// Тип: web/cli/api | Доступ: free/freemium/paid
// Чтобы добавить инструмент — просто допиши строку в нужный массив

var CATALOG = {

  // ========== ДЕАНОН ==========
  deanon:{ru:'Деанон',en:'Deanon',tools:[
    ['Sosok Monster','🔎','Поиск информации о людях: ФИО, телефон, email, соцсети','Search for people info: name, phone, email, socials','https://sosok.monster','web','freemium'],
    ['Infinity Search','🔎','Поиск по номеру, ФИО, email, IP','Search by phone, name, email, IP','https://infinity-search.fun','web','freemium'],
    ['GetContact','📱','Определение имени по номеру телефона','Name lookup by phone number','https://www.getcontact.com','web','freemium'],
    ['NumBuster','🔍','Проверка номера — имя, отзывы, спам','Phone number check — name, reviews','https://numbuster.com','web','freemium'],
    ['Sync.me','📞','Определитель номера и поиск по имени','Caller ID and name search','https://sync.me','web','freemium'],
    ['Truecaller','📲','Определитель номера и блокировка спама','Caller ID and spam blocking','https://www.truecaller.com','web','free'],
    ['InfoTracer','🕵️','Поиск людей по email, телефону, адресу (US)','People search by email, phone, address (US)','https://infotracer.com','web','paid'],
    ['ZabaSearch','🔎','Поиск людей и публичных записей (US)','People and public records (US)','https://www.zabasearch.com','web','free'],
    ['CyberBackgroundChecks','🔐','Поиск по публичным записям (US)','Public records search (US)','https://www.cyberbackgroundchecks.com','web','free'],
    ['USPhoneBook','📖','Обратный поиск по телефону (US)','Reverse phone lookup (US)','https://www.usphonebook.com','web','free']
  ]},

  // ========== ПОИСКОВЫЕ СИСТЕМЫ ==========
  search:{ru:'Поисковые системы',en:'Search Engines',tools:[
    ['Google','🔎','Основной поисковик, эффективен с дорками','Main search engine, powerful with dorks','https://google.com','web','free'],
    ['Яндекс','🔎','Лучший поиск по русскоязычному сегменту','Best for Russian-language web','https://yandex.ru','web','free'],
    ['DuckDuckGo','🦆','Анонимный поиск без трекинга','Anonymous search without tracking','https://duckduckgo.com','web','free'],
    ['Google Dorks DB','📚','База Google Dorks в Exploit-DB','Google Dorks database','https://www.exploit-db.com/google-hacking-database','web','free'],
    ['Startpage','🔍','Приватный поиск на основе Google','Private search based on Google','https://www.startpage.com','web','free'],
    ['Bing','🔎','Поисковик Microsoft','Microsoft search engine','https://bing.com','web','free'],
    ['Million Short','🗂️','Исключает топовые сайты из выдачи','Excludes top sites from results','https://millionshort.com','web','free'],
    ['Searx','🔐','Метапоисковик с открытым кодом','Open-source metasearch','https://searx.be','web','free'],
    ['Ahmia','🕶️','Поисковик по onion-сайтам в Tor','Search engine for onion sites','https://ahmia.fi','web','free'],
    ['Yandex Dorks','📖','Операторы Яндекса для поиска','Yandex advanced search operators','https://yandex.ru/support/search/query-language/','web','free'],
    ['PublicWWW','🌐','Поиск по HTML-коду сайтов','Search by HTML code','https://publicwww.com','web','freemium'],
    ['NerdyData','🔎','Поиск технологий и кода на сайтах','Search tech and code on sites','https://nerdydata.com','web','freemium'],
    ['SearchCode','💻','Поиск по исходному коду в репозиториях','Source code search','https://searchcode.com','web','free'],
    ['Shodan Search','🌐','Поиск по устройствам и сервисам','Search devices and services','https://www.shodan.io','web','freemium']
  ]},

  // ========== ПОИСК ЛЮДЕЙ ==========
  people:{ru:'Поиск людей',en:'People Search',tools:[
    ['Have I Been Pwned','🔓','Проверка email на утечки данных','Check email against breaches','https://haveibeenpwned.com','web','free'],
    ['WebMii','👤','Поиск людей и упоминаний в сети','Search people and mentions','https://webmii.com','web','free'],
    ['Pipl','📊','Глубокий поиск информации о человеке','Deep search on a person','https://pipl.com','web','paid'],
    ['Sherlock','🎯','Поиск username по 400+ соцсетям (CLI)','Find username across 400+ sites','https://github.com/sherlock-project/sherlock','cli','free'],
    ['WhatsMyName','🔗','Проверка username по сотням сайтов','Check username on hundreds of sites','https://whatsmyname.app','web','free'],
    ['Maigret','🎭','Поиск аккаунтов по нику в 2000+ сайтах','Find accounts by nick on 2000+ sites','https://github.com/soxoj/maigret','cli','free'],
    ['Blackbird','👁️','Быстрый поиск аккаунтов по email/нику','Fast account search','https://github.com/p1ngul1n0/blackbird','cli','free'],
    ['Namechk','🔍','Проверка доступности ника','Check nickname availability','https://namechk.com','web','free'],
    ['Hunter.io','📇','Поиск корпоративных email по домену','Find corporate emails by domain','https://hunter.io','web','freemium'],
    ['Epieos','📩','Проверка email и привязанных аккаунтов','Email check and linked accounts','https://epieos.com','web','freemium'],
    ['Holehe','📬','Проверка, где email зарегистрирован (CLI)','Check where email is registered','https://github.com/megadose/holehe','cli','free'],
    ['Gravatar','🌐','Поиск профиля по email','Find profile by email','https://gravatar.com','web','free'],
    ['EmailRep','📧','Репутация и данные об email','Email reputation data','https://emailrep.io','web','free'],
    ['Spokeo','👤','Поиск людей по email, телефону (US)','People search US','https://www.spokeo.com','web','free'],
    ['TruePeopleSearch','🔎','Поиск людей в США','US people search','https://www.truepeoplesearch.com','web','free'],
    ['FastPeopleSearch','🔍','Быстрый поиск людей (US)','Fast US people search','https://www.fastpeoplesearch.com','web','free'],
    ["That'sThem",'🧑','Поиск по имени, телефону, email и IP','Search by name, phone, email, IP','https://thatsthem.com','web','free'],
    ['UserSearch','👤','Поиск username по 50+ платформам','Search username across 50+ platforms','https://usersearch.org','web','free'],
    ['InstantUsername','⚡','Мгновенная проверка ника','Instant username check','https://instantusername.com','web','free'],
    ['CheckUsernames','✅','Проверка ника на 160+ сайтах','Check nick on 160+ sites','https://checkusernames.com','web','free'],
    ['EmailHippo','✉️','Проверка валидности email','Email validity check','https://tools.emailhippo.com','web','free'],
    ['Phonebook.cz','📖','Поиск email, доменов и поддоменов','Search emails, domains, subdomains','https://phonebook.cz','web','free'],
    ['PeekYou','👥','Поиск людей по нику и соцсетям','People search by nick and socials','https://www.peekyou.com','web','free']
  ]},

  // ========== СОЦИАЛЬНЫЕ СЕТИ ==========
  social:{ru:'Социальные сети',en:'Social Media',tools:[
    ['Twitter Advanced Search','🐦','Продвинутый поиск по твитам','Advanced tweet search','https://twitter.com/search-advanced','web','free'],
    ['Nitter','🐦','Приватный фронтенд Twitter','Private Twitter frontend','https://nitter.net','web','free'],
    ['Instaloader','📸','Скачивание контента Instagram (CLI)','Download Instagram content','https://instaloader.github.io','cli','free'],
    ['StoriesIG','👀','Анонимный просмотр Instagram Stories','View Instagram Stories anonymously','https://storiesig.info','web','free'],
    ['Imginn','📱','Просмотр Instagram-профилей анонимно','View Instagram profiles anonymously','https://imginn.com','web','free'],
    ['Social Searcher','🔎','Поиск по всем соцсетям','Search all social networks','https://www.social-searcher.com','web','freemium'],
    ['TGStat','💬','Поиск публичных Telegram-каналов','Search public Telegram channels','https://tgstat.ru','web','free'],
    ['Telemetr','📊','Аналитика Telegram-каналов','Telegram channel analytics','https://telemetr.io','web','free'],
    ['YouTube Metadata','🎬','Метаданные YouTube-видео','YouTube video metadata','https://mattw.io/youtube-metadata/','web','free'],
    ['Who Posted What','📘','Поиск постов Facebook по дате','Facebook posts search by date','https://www.whopostedwhat.com','web','free'],
    ['Reddit Search','👽','Продвинутый поиск по Reddit','Advanced Reddit search','https://www.reddit.com/search/','web','free'],
    ['Snaptik','🎵','Скачивание TikTok без водяного знака','Download TikTok without watermark','https://snaptik.app','web','free'],
    ['LinkedIn','💼','Поиск сотрудников по компаниям','Employee search by company','https://www.linkedin.com','web','free'],
    ['Pinterest Search','📌','Поиск пинов и профилей','Search pins and profiles','https://pinterest.com','web','free'],
    ['Discord Lookup','🎮','Поиск Discord-профиля по ID','Find Discord profile by ID','https://discordlookup.com','web','free'],
    ['Twitch Tracker','🎥','Аналитика стримов и каналов','Twitch stream analytics','https://twitchtracker.com','web','free'],
    ['Sotwe','🐦','Просмотр Twitter-профилей без логина','View Twitter profiles without login','https://www.sotwe.com','web','free'],
    ['Twstalker','🐦','Просмотр Twitter-профилей анонимно','View Twitter profiles anonymously','https://twstalker.com','web','free'],
    ['Picuki','📸','Просмотр Instagram-профилей и хэштегов','View Instagram profiles and hashtags','https://www.picuki.com','web','free'],
    ['Inflact','📊','Аналитика Instagram-профилей','Instagram profile analytics','https://inflact.com','web','freemium'],
    ['SaveFrom','📥','Скачивание видео с YouTube, Instagram, TikTok','Download video from YouTube, Instagram, TikTok','https://savefrom.net','web','free'],
    ['Imgur','📷','Поиск по картинкам Imgur','Search images on Imgur','https://imgur.com','web','free']
  ]},

  // ========== МЕССЕНДЖЕРЫ ==========
  messenger:{ru:'Мессенджеры и чаты',en:'Messengers & Chats',tools:[
    ['Lyzem','🔍','Поисковик по Telegram-контенту','Telegram content search','https://lyzem.com','web','free'],
    ['Telegago','🌐','Google-поиск по Telegram-каналам','Google search on Telegram channels','https://cse.google.com/cse?cx=006368593537057042503:efxu7xprihg','web','free'],
    ['WhatsApp Check','💬','Проверка наличия WhatsApp по номеру','Check WhatsApp by number','https://wa.me','web','free'],
    ['Snapchat Map','📷','Публичная карта Snapchat Stories','Public Snapchat Stories map','https://map.snapchat.com','web','free'],
    ['Discord.id','🤖','Поиск Discord-профиля по ID','Find Discord profile by ID','https://discord.id','web','free'],
    ['Telegram Analytics','📈','Каталог и аналитика Telegram-каналов','Telegram channels directory','https://telegramchannels.me','web','free'],
    ['Telepathy','🧠','Анализ Telegram-чатов и каналов','Analyze Telegram chats and channels','https://telepathy.io','web','freemium']
  ]},

  // ========== СЕТИ И ДОМЕНЫ ==========
  network:{ru:'Сети и домены',en:'Networks & Domains',tools:[
    ['Shodan','🌐','Поисковик интернет-устройств и портов','Search engine for IoT devices','https://www.shodan.io','web','freemium'],
    ['Censys','🔍','Сканирование интернета и анализ хостов','Internet scanning and host analysis','https://censys.io','web','freemium'],
    ['VirusTotal','🛡️','Анализ файлов, URL, доменов и IP','Analyze files, URLs, domains, IPs','https://www.virustotal.com','web','free'],
    ['crt.sh','🔐','Поиск поддоменов через SSL-сертификаты','Find subdomains via SSL certs','https://crt.sh','web','free'],
    ['DNSDumpster','🗺️','Карта DNS-инфраструктуры домена','DNS infrastructure map','https://dnsdumpster.com','web','free'],
    ['IPinfo','📡','Геолокация и информация об IP','IP geolocation and info','https://ipinfo.io','web','free'],
    ['WiGLE','📶','База Wi-Fi сетей по всему миру','Wi-Fi networks database','https://wigle.net','web','free'],
    ['URLScan.io','🔬','Анализ и сканирование URL','URL analysis and scanning','https://urlscan.io','web','free'],
    ['SecurityTrails','🌐','Исторические данные DNS и WHOIS','DNS and WHOIS history','https://securitytrails.com','web','free'],
    ['BuiltWith','🕸️','Определение технологий сайта','Detect website technologies','https://builtwith.com','web','free'],
    ['Netcraft','🔎','Информация о сайте и владельце','Site and owner info','https://sitereport.netcraft.com','web','free'],
    ['MXToolbox','📧','Проверка MX, SMTP и DNS записей','MX, SMTP, DNS checks','https://mxtoolbox.com','web','free'],
    ['FOFA','🔎','Китайский аналог Shodan','Chinese Shodan analog','https://fofa.info','web','freemium'],
    ['ZoomEye','🌐','Поисковик сетевых устройств','Network device search','https://www.zoomeye.org','web','freemium'],
    ['GreyNoise','📡','Анализ интернет-шума и сканеров','Internet noise analysis','https://viz.greynoise.io','web','free'],
    ['SSL Labs','🔐','Проверка SSL-конфигурации сайта','SSL config test','https://www.ssllabs.com/ssltest/','web','free'],
    ['Wappalyzer','📊','Определение технологий сайта','Detect website technologies','https://www.wappalyzer.com','web','free'],
    ['Robtex','🌍','Анализ IP и доменных имён','IP and domain analysis','https://www.robtex.com','web','free'],
    ['IPVoid','📋','Проверка репутации IP','IP reputation check','https://www.ipvoid.com','web','free'],
    ['CriminalIP','🚨','Поисковик киберугроз и уязвимостей','Cyber threat and vulnerability search','https://www.criminalip.io','web','freemium'],
    ['AbuseIPDB','⚠️','База IP-адресов с жалобами','IP abuse reports database','https://www.abuseipdb.com','web','free'],
    ['ThreatFox','🦊','База IOC от abuse.ch','IOC database from abuse.ch','https://threatfox.abuse.ch','web','free'],
    ['Netlas','🔍','Поисковик интернет-активов','Internet asset search engine','https://netlas.io','web','freemium'],
    ['ONYPHE','🌐','Кибер-разведка по IP и доменам','Cyber threat intel','https://www.onyphe.io','web','freemium'],
    ['Subfinder','🔍','Быстрый поиск поддоменов (CLI)','Fast subdomain finder','https://github.com/projectdiscovery/subfinder','cli','free'],
    ['HTTPX','📡','Быстрая проверка HTTP-сервисов (CLI)','Fast HTTP toolkit','https://github.com/projectdiscovery/httpx','cli','free'],
    ['Nuclei','💥','Сканер уязвимостей (CLI)','Vulnerability scanner','https://github.com/projectdiscovery/nuclei','cli','free'],
    ['Katana','🗡️','Краулер для веб-приложений (CLI)','Web crawling framework','https://github.com/projectdiscovery/katana','cli','free'],
    ['FFUF','⚡','Быстрый веб-фаззер (CLI)','Fast web fuzzer','https://github.com/ffuf/ffuf','cli','free'],
    ['Feroxbuster','🔦','Рекурсивный контент-дискавери (CLI)','Recursive content discovery','https://github.com/epi052/feroxbuster','cli','free']
  ]},

  // ========== ИЗОБРАЖЕНИЯ И ГЕО ==========
  images:{ru:'Изображения и геолокация',en:'Images & Geolocation',tools:[
    ['Google Images','🖼️','Обратный поиск по картинке','Reverse image search','https://images.google.com','web','free'],
    ['Yandex Images','🖼️','Лучший обратный поиск по лицу','Best face reverse search','https://yandex.ru/images','web','free'],
    ['TinEye','🔍','Поиск источника изображения','Find image source','https://tineye.com','web','free'],
    ['PimEyes','🍑','Поиск лиц по фото через AI','AI face search','https://pimeyes.com','web','freemium'],
    ['ExifData','📷','Просмотр EXIF-метаданных фото','View photo EXIF data','https://exifdata.com','web','free'],
    ['FotoForensics','🔬','Анализ подлинности фотографий','Photo authenticity analysis','https://fotoforensics.com','web','free'],
    ['SunCalc','☀️','Расчёт положения солнца — геолокация по теням','Sun position — geo via shadows','https://www.suncalc.org','web','free'],
    ['PeakVisor','🏔️','Идентификация горных вершин на фото','Identify mountain peaks','https://peakvisor.com','web','free'],
    ['Mapillary','🗺️','Краудсорсинговые фото улиц','Crowdsourced street photos','https://www.mapillary.com','web','free'],
    ['GeoSpy','🌐','AI-определение локации по фото','AI photo geolocation','https://geospy.ai','web','free'],
    ['Google Earth','🛰️','3D-снимки планеты','3D planet imagery','https://earth.google.com','web','free'],
    ['NASA Worldview','🛰️','Спутниковые снимки NASA','NASA satellite imagery','https://worldview.earthdata.nasa.gov','web','free'],
    ['OpenStreetMap','🌍','Открытая карта мира','Open world map','https://www.openstreetmap.org','web','free'],
    ['Overpass Turbo','🌍','Запросы к OpenStreetMap','OSM queries','https://overpass-turbo.eu','web','free'],
    ['KartaView','📸','Открытые панорамы улиц','Open street panoramas','https://kartaview.org','web','free'],
    ['ShadeMap','🌅','Расчёт теней в любой точке','Shadow calculation','https://shademap.app','web','free'],
    ['Bing Visual Search','🖼️','Обратный поиск изображения от Microsoft','Reverse image search by Microsoft','https://www.bing.com/visualsearch','web','free'],
    ['FaceCheck.ID','🎯','AI-поиск человека по фото лица','AI face search','https://facecheck.id','web','free'],
    ['Lenso.ai','🔍','AI-поиск похожих изображений и мест','AI similar images and places search','https://lenso.ai','web','freemium']
  ]},

  // ========== УТЕЧКИ И АРХИВЫ ==========
  leaks:{ru:'Утечки и архивы',en:'Leaks & Archives',tools:[
    ['Wayback Machine','📚','Архив старых версий сайтов','Web archive','https://web.archive.org','web','free'],
    ['archive.today','🗄️','Быстрое сохранение страниц','Fast page archiving','https://archive.ph','web','free'],
    ['DeHashed','🔓','Поиск по базам утечек','Search leaked databases','https://dehashed.com','web','paid'],
    ['Intelligence X','🕵️','Поиск в даркнете и утечках','Search dark web and leaks','https://intelx.io','web','freemium'],
    ['LeakCheck','🔐','Проверка утечек по email','Email leak check','https://leakcheck.io','web','freemium'],
    ['Leak-Lookup','🔑','Поиск по 15+ млрд записей','Search 15B+ leaked records','https://leak-lookup.com','web','paid'],
    ['Snusbase','🗃️','Поиск по крупнейшим базам утечек','Search big leak databases','https://snusbase.com','web','paid'],
    ['CachedView','📄','Кэшированные версии страниц','Cached page versions','https://cachedview.com','web','free'],
    ['Google News Archive','📰','Архив газет и новостей','Newspaper archive','https://news.google.com/newspapers','web','free']
  ]},

  // ========== КРИПТА ==========
  crypto:{ru:'Криптовалюты',en:'Cryptocurrencies',tools:[
    ['Blockchain.com','₿','Просмотр транзакций Bitcoin и Ethereum','View BTC & ETH transactions','https://www.blockchain.com/explorer','web','free'],
    ['Etherscan','🔗','Explorer блокчейна Ethereum','Ethereum blockchain explorer','https://etherscan.io','web','free'],
    ['Wallet Explorer','💰','Баланс и история крипто-кошельков','Crypto wallet history','https://www.walletexplorer.com','web','free'],
    ['CoinMarketCap','📊','Котировки криптовалют','Crypto market data','https://coinmarketcap.com','web','free'],
    ['OpenCorporates','💵','База данных компаний','Companies database','https://opencorporates.com','web','free'],
    ['Chainalysis','🔍','Анализ криптотранзакций','Crypto transaction analysis','https://www.chainalysis.com','web','free'],
    ['BitRef','🪙','Проверка Bitcoin-адресов','Bitcoin address check','https://bitref.com','web','free'],
    ['OXT','📈','Исследование блокчейна Bitcoin','Bitcoin blockchain research','https://oxt.me','web','free'],
    ['Blockchair','🪑','Мультиблокчейн explorer','Multi-blockchain explorer','https://blockchair.com','web','free'],
    ['Breadcrumbs','🍞','Визуализация криптотранзакций','Crypto transaction visualization','https://www.breadcrumbs.app','web','freemium']
  ]},

  // ========== ТРАНСПОРТ ==========
  transport:{ru:'Транспорт и авиация',en:'Transport & Aviation',tools:[
    ['FlightRadar24','✈️','Отслеживание самолётов в реальном времени','Real-time flight tracking','https://www.flightradar24.com','web','free'],
    ['FlightAware','✈️','Отслеживание рейсов и расписания','Flight tracking and schedules','https://www.flightaware.com','web','free'],
    ['ADS-B Exchange','✈️','Нетфильтрованный трекинг самолётов','Unfiltered flight tracking','https://globe.adsbexchange.com','web','free'],
    ['MarineTraffic','🚢','Отслеживание кораблей','Ship tracking','https://www.marinetraffic.com','web','free'],
    ['VesselFinder','🚢','Информация о судах','Ship info','https://www.vesselfinder.com','web','free'],
    ['OpenRailwayMap','🚂','Карта железных дорог мира','World railway map','https://www.openrailwaymap.org','web','free'],
    ['OpenCarInfo','🚗','Проверка авто по VIN','VIN check','https://opencarinfo.com','web','free'],
    ['Flightera','✈️','Статистика рейсов и авиакомпаний','Flight and airline statistics','https://www.flightera.net','web','free'],
    ['FlightStats','📊','Статус рейсов и аэропортов','Flight and airport status','https://www.flightstats.com','web','free'],
    ['ShipXplorer','🛳️','Отслеживание судов в реальном времени','Real-time ship tracking','https://www.shipxplorer.com','web','free']
  ]},

  // ========== ДАРКНЕТ ==========
  darknet:{ru:'Даркнет и Tor',en:'Darknet & Tor',tools:[
    ['Tor Project','🧅','Официальный браузер для onion','Official onion browser','https://www.torproject.org','web','free'],
    ['Ahmia','🔍','Поисковик по onion-сайтам','Onion search engine','https://ahmia.fi','web','free'],
    ['Tor2Web','🧅','Доступ к .onion через обычный браузер','Access .onion via regular browser','https://www.tor2web.org','web','free'],
    ['Onion.Live','📋','Каталог onion-сайтов','Onion sites catalog','https://onion.live','web','free'],
    ['Dark.fail','🕶️','Проверенный список onion-зеркал','Verified onion mirrors','https://dark.fail','web','free'],
    ['OnionLand','🌐','Поисковик по onion-сайтам','Onion sites search engine','https://onionlandsearchengine.com','web','free'],
    ['Tor66','🔎','Поисковик по даркнету','Dark web search engine','http://tor66sewebgixwhcqfnp5inzp5x5uohhdy3kvtnyfxc2e5mxiuh34iid.onion','web','free']
  ]},

  // ========== AI ==========
  ai:{ru:'AI для OSINT',en:'AI for OSINT',tools:[
    ['ChatGPT','🤖','Ассистент для анализа данных','Data analysis assistant','https://chat.openai.com','web','freemium'],
    ['Claude','🧠','AI-ассистент от Anthropic','Anthropic AI assistant','https://claude.ai','web','freemium'],
    ['Gemini','🌟','AI от Google','Google AI','https://gemini.google.com','web','freemium'],
    ['Perplexity','🔍','AI-поисковик с источниками','AI search with sources','https://www.perplexity.ai','web','free'],
    ['You.com','💡','AI-поисковик с режимом исследований','AI search with research mode','https://you.com','web','freemium'],
    ['Phind','👨‍💻','AI-поиск для разработчиков','AI search for developers','https://www.phind.com','web','freemium']
  ]},

  // ========== ПЕНТЕСТ ==========
  pentest:{ru:'Пентест и разведка',en:'Pentest & Recon',tools:[
    ['theHarvester','🦈','Сбор email и поддоменов','Email and subdomain collection','https://github.com/laramies/theHarvester','cli','free'],
    ['Maltego','🔎','Визуализация связей','Link visualization','https://www.maltego.com','web','paid'],
    ['SpiderFoot','🌐','Автоматизированная разведка','Automated recon','https://www.spiderfoot.net','cli','free'],
    ['Recon-ng','🔍','Фреймворк для веб-разведки','Web recon framework','https://github.com/lanmaster53/recon-ng','cli','free'],
    ['Nmap','🛰️','Сканирование портов','Port scanning','https://nmap.org','cli','free'],
    ['Wireshark','🔐','Анализатор трафика','Traffic analyzer','https://www.wireshark.org','cli','free'],
    ['Metasploit','🔓','Тестирование уязвимостей','Vulnerability testing','https://www.metasploit.com','cli','free'],
    ['Amass','📡','Сканирование поддоменов','Subdomain scanning','https://github.com/owasp-amass/amass','cli','free'],
    ['Nikto','🎯','Сканер веб-серверов','Web server scanner','https://github.com/sullo/nikto','cli','free'],
    ['Gobuster','🔦','Брутфорс директорий','Directory bruteforce','https://github.com/OJ/gobuster','cli','free'],
    ['SQLMap','💥','SQL-инъекции','SQL injection','https://sqlmap.org','cli','free'],
    ['Aircrack-ng','🌊','Аудит Wi-Fi сетей','Wi-Fi audit','https://www.aircrack-ng.org','cli','free'],
    ['Dalfox','🦊','Поиск XSS-уязвимостей (CLI)','XSS vulnerability scanner','https://github.com/hahwul/dalfox','cli','free'],
    ['Dirsearch','📂','Брутфорс директорий веб-сервера (CLI)','Web path scanner','https://github.com/maurosoria/dirsearch','cli','free'],
    ['WPScan','🔓','Сканер уязвимостей WordPress','WordPress vulnerability scanner','https://wpscan.com','cli','free']
  ]}
};
