const LocalGameEncoder = window.LocalGameEncoder || {
    createEncodedLink: function(path) {
        return path;
    }
};

function makeScramjetLink(url) {
    return '__SCRAMJET__' + url;
}
const gamesData = [
{
    title: "Roblox",
	ipcloak: false,
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCv-Adr-2z52bl4rbFKmjqwXfwLEyLFqfe-6lRD7ZP7HmtJKEmIpox6RJmXynlOMBee3c54B3YoeqNC_ilZfO8wOEaszdh9o8yL4TwY3cqm6QlNRX8WfPNcR5CsFGE38Ku4yKxfoniVUzS3952Z3ykY1eSZAyMQb5eMsA?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  makeScramjetLink("https://studyimages.com")
},
{
    title: "Agar.io",
    imgSrc: "/img/gameimg/Agario.png",
    link:  LocalGameEncoder.createEncodedLink("/local games/Agar.io/index.html")
},
{
    title: "Among us",
    imgSrc: "/img/gameimg/Amoungus.png",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamemonetize.co/luye5rleios737wp2o9wjq7h577gl937")
},
{
    title: "Slow Roads",
    imgSrc: "/img/gameimg/SlowRoads.png",
    link: LocalGameEncoder.createEncodedLink("/local games/slowroads/index.html")
},
{
    title: "Suika Game",
    imgSrc: "/img/gameimg/suikagame.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/watermelongame/index.html")
},
{
    title: "Moto X3M 1",
    imgSrc: "/img/gameimg/motox3m.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/motox3m1/index.html")
},
{
    title: "Moto X3M 2",
    imgSrc: "/img/gameimg/motox3m2.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/moto-x3m2/index.html")
},
{
    title: "Spacebar Clicker",
    imgSrc: "/img/gameimg/spacebarclicker.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/spacebarclicker/index.html")
},
{
    title: "Slope",
    imgSrc: "/img/gameimg/slopegame.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/slope-game-main/index.html")

},
{
    title: "Happy Wheels",
    imgSrc: "/img/gameimg/happywheels.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/happywheels-fixed/index.html")
},
{
    title: "G</x>un Mayhem",
    imgSrc: "/img/gameimg/gunmayhem.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/gunmayhem/index.html")
},
{
    title: "Snow Rider",
    imgSrc: "/img/gameimg/snowrider.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/snowrider3d/index.html")
},
{
    title: "Happy Glass",
    imgSrc: "/img/gameimg/happyglass.avif",
    link: LocalGameEncoder.createEncodedLink("/local games/happyfilledglass/lagged.com/api/play2/happy-glass6/index.html")
},
{
    title: "M</x>inec</x>raft",
    imgSrc: "/img/gameimg/minecraft.avif",
    link: LocalGameEncoder.createEncodedLink("/local games/Eaglercraft_1.12_Offline_en_US.html")
},
{
    title: "Dino Game",
    imgSrc: "/img/gameimg/dinogame.avif",
    link: LocalGameEncoder.createEncodedLink("/local games/dino/index.html")
},
{
    title: "BitLife",
    imgSrc: "/img/gameimg/bitlife.png",
    link: LocalGameEncoder.createEncodedLink("/local games/bitlife/index.html")
},
{
    title: "Cook</x>i</x>e Clic</x>ker",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAQjEx2at-wBokr69I4c06cSBDEGp8ieguMRKa5_HCB4ElwMLG5PCxIuMmeRNeF91B-9tGidfkRUMvzt7cvPOq9v9WOIw67UCcAVTTssI9x8A6zlTwpzdR5x_Z-PyVKmjh1ry8PYCk0uTegl6StH4Qv1Pvez5LEt6cfXw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Cookie Clicker.html"
},
{
    title: "Id</x>le Brea</x>kout",
    imgSrc: "/img/gameimg/idle-breakout-logo.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/idle-breakout-web/index.html")
},
{
    title: "Wordle Unlimited",
    imgSrc: "/img/gameimg/wordle.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/wordle/index.html")
},
{
    title: "Cu</x>t T</x>he R</x>ope",
    imgSrc: "/img/gameimg/CutTheRope.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/cuttherope/index.html")
},
{
    title: "Le</x>arn to F</x>ly",
    imgSrc: "https://image.spreadshirtmedia.com/image-server/v1/compositions/T812A1PA4267PT17X37Y50D11330543W27177H19067/views/1,width=500,height=500,appearanceId=1,backgroundColor=468bd2,noPt=true/learn-to-fly-mens-premium-t-shirt.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/learntofly/index.html")
},
{
    title: "Fireboy and Watergirl 1",
    imgSrc: "https://kizicdn.com/system/thumbs/big_tile_thumb/9/thumb300_FBWG1_300x300.jpg?1556198405",
    link: LocalGameEncoder.createEncodedLink("/local games/fireboywatergirl/index.html")
},
{
    title: "Mr. Mine",
    imgSrc: "/img/gameimg/mrmine.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/mr-mine/index.html")
},
{
    title: "Time Sho</x>oter 2",
    imgSrc: "/img/gameimg/TimeShooter2.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/timeshooter/index.html")
},
{
    title: "OvO",
    imgSrc: "/img/gameimg/OVO.png",
    link: LocalGameEncoder.createEncodedLink("/local games/ovo/index.html")
},
{
    title: "The Impossible Quiz",
    imgSrc: "/img/gameimg/theimpossiblequiz.png",
    link: LocalGameEncoder.createEncodedLink("/local games/theimpossiblequiz/index.html")
},
{
    title: "Tunnel Rush",
    imgSrc: "/img/gameimg/tunnelrush2.png",
    link: LocalGameEncoder.createEncodedLink("/local games/tunnelrush/index.html")
},
{
    title: "Vex 8",
    imgSrc: "/img/gameimg/vex8.png",
    link: LocalGameEncoder.createEncodedLink("/local games/vex7/index.html")
},
{
    title: "Rooftop Snipers",
    imgSrc: "/img/gameimg/rooftopsnipers.png",
    link: LocalGameEncoder.createEncodedLink("/local games/rooftopsnipers/index.html")
},
{
    title: "FNAF",
    imgSrc: "/img/gameimg/fnaf.png",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://run3.io/popgame/fnaf/fnaf1")
},
{
    title: "Neon Swing",
    imgSrc: "/img/gameimg/neonswing.png",
    link: LocalGameEncoder.createEncodedLink("/local games/stickman-hook/index.html")
},
{
    title: "Basketball Stars",
    imgSrc: "/img/gameimg/basketballstars.png",
    link: LocalGameEncoder.createEncodedLink("/local games/basketball-stars/index.html")
},
{
    title: "FNAF 2",
    imgSrc: "/img/gameimg/fnaf2.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/fnaf2/index.html")
},
{
    title: "FNAF 3",
    imgSrc: "/img/gameimg/fnaf3.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/fnaf3/index.html")
},
{
    title: "FNAF 4",
    imgSrc: "/img/gameimg/fnaf4.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/fnaf4/index.html")
},
{
    title: "Monkey Mart",
    imgSrc: "/img/gameimg/monkeymark.png",
    link: LocalGameEncoder.createEncodedLink("/local games/monkeymart/index.html")
},
{
    title: "Flappy Bird",
    imgSrc: "/img/gameimg/flappybird.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/flappybird/index.html")
},
{
    title: "FNF",
    imgSrc: "/img/gameimg/fnf.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/friday-night-funkin-poki/index.html")
},
{
    title: "Silk",
    imgSrc: "/img/gameimg/silk.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/weavesilk/index.html")
},
{
    title: "Drift Boss",
    imgSrc: "/img/gameimg/drift-boss1.png",
    link: LocalGameEncoder.createEncodedLink("/local games/drift-boss/index.html")
},
{
    title: "Subway Surfers",
    imgSrc: "/img/gameimg/subway-surfers.png",
    link: LocalGameEncoder.createEncodedLink("/local games/subway-surfers/index.html")
},
{
    title: "Temple Run",
    imgSrc: "/img/gameimg/templerun.png",
    link: LocalGameEncoder.createEncodedLink("/local games/templerun/index.html")
},
{
    title: "Google Snake",
    imgSrc: "/img/gameimg/google-snake-icon-filled-256.png",
    link: LocalGameEncoder.createEncodedLink("/local games/googlesnake/index.html")
},
{
    title: "Drift Hunters",
    imgSrc: "/img/gameimg/drifthunters.png",
    link: LocalGameEncoder.createEncodedLink("/local games/drift-hunters-main/index.html")
},
{
    title: "Ngon",
    imgSrc: "/img/gameimg/ngon_title.gif",
    link: LocalGameEncoder.createEncodedLink("/local games/ngon/index.html")
},
{
    title: "Crossy Road",
    imgSrc: "https://lh7-us.googleusercontent.com/q9pQl7MZG2X6QYEVsGMYZp5PoalmJCY0bK9o5wcNEhEhN6pWmDTutZNwmEhfNVUIhqKAGlt6VNjGOInVSkkphG8D8uyx0gF2KVzXTt3LLF9OyBSiI3XGb2PZsM6HPHRol1nfALe6m20v7xrFGsT2J43-dBnueA",
    link: LocalGameEncoder.createEncodedLink("/local games/crossyroad/index.html")
},
{
    title: "Run 3",
    imgSrc: "https://lh7-us.googleusercontent.com/6avdW0W2-vTEubtnOORUqELyCbi-axinh-m-R1b7ZXKG6y4kLz18WYO20gQ3Ml4FRXAZAdlH6_s6ADOoowHf6ReiZXbmfdwCiaVBEV59uGb0LQx9qq1vAX41DpNU7rA7AKlqJYc76fjPcCqKCD-8PLW-p5H8Xw",
    link: LocalGameEncoder.createEncodedLink("/local games/run3/index.html")
},
{
    title: "CSGO Clicker",
    imgSrc: "https://lh7-us.googleusercontent.com/1wvdccj2d9ah0y09HW1yjisqyHVasjE5FQfMlx2VtT_NRR2C7xNesoEW1rcu4-gZXXX5UtqyMz2jdm8Ze92VHmAb0kPsnZcw6Hbmk_d5o4yNo7U5uK2L6etRycOyqppy7fEOAHONB4AUgxu-vp-c0m3m1W5zbw",
    link: LocalGameEncoder.createEncodedLink("/local games/csgoclicker/index.html")
},
{
    title: "Bad Time Sim",
    imgSrc: "https://lh7-us.googleusercontent.com/mBlISAzKsz0xx5ZSEBstU7rGyMaL2zZPKDmZ-ZTRnb9c6NxfMBKkaF1Hfc4fTO0svWeokE1UyIQLzDZliz6LEfDMEvAMXQtZzQ3HjFWZ9qljNJj7nKIFMpvDXrgETdka6QEbDHXZpl-JHMuAVsRhhVAoaWFlnw",
    link: LocalGameEncoder.createEncodedLink("/local games/badtimesimulator/index.html")
},
{
    title: "Getaway Sho</x>otout",
    imgSrc: "https://lh7-us.googleusercontent.com/fxmVYqxAHuq9zf7lE33Yy0nLKNiaChEmbEpfzm1MN_SyN24JPFaqDJU_nrEE5WmG4Qt8gPNUbLOI_UnrTwMfD1rKa7BF99M5sp6Z-VUeRoRXrJpgVfaOaUHH2r4iSt1XGWsH31iq_KDkuoUGxuFoxvkcJGadiA",
    link: LocalGameEncoder.createEncodedLink("/local games/getawayshooter/index.html")
},
{
    title: "2048 Cupcakes",
    imgSrc: "https://lh7-us.googleusercontent.com/fxRTAwBXjNG3k_l2NxwgkLClWqbFvXWws76FeW8KS5D8b4Py5zwd8IePuw9_KKggqzppFGENNBlsiLihiBI5eFUBtwamxZeDyxK1ck6qJPR3uKlNJtojOI7-OLm6NqBAHG4ctoHM3hPISkU8lxd7bR-Cw-_ucA",
    link: LocalGameEncoder.createEncodedLink("/local games/2048cup/index.html")
},
{
    title: "Tube Jumpers",
    imgSrc: "https://lh7-us.googleusercontent.com/THZEgS16ulDmx9iZPCHuRwCoU0N2c9-PF4WewqWph98dDi_quwk389OO6ia7tg2_r-WTN94HrlQh2Ejao_MV_8DLgZY1YHxZPfziyADp1HG-2vFQXLibYiG7ZQUgZ-XkPeOfJqD-OyO7rMO1AcRTYoP3bh2sLQ",
    link: LocalGameEncoder.createEncodedLink("/local games/tube-jumpers/index.html")
},
{
    title: "Slope Run",
    imgSrc: "https://lh7-us.googleusercontent.com/Gb8hdT5a8UzWV0lU4WZx7LWViY8SqULyzwwjQcfBA43vo-pMKOcveBSuk0_633Rb9pkR-UHxF9ItMsdLYdLs1qrDlw0vGK-1YJrEaqExpcIDhLz-XQdAs87JnT4bop6cvD-DJ9VPiUihOi8t_pBsXIXztj5bxw",
    link: LocalGameEncoder.createEncodedLink("/local games/slope-run-gamedistribution/index.html")
},
{
    title: "Geomatry Dash",
    imgSrc: "https://lh7-us.googleusercontent.com/xzhOGM4wjIJKEp5B80TXpg4LArOEXtTVosOj98RMbNdzdtQBMitXKakY6kzTuaHJQoJa2TI--LQseSXSaGecSUUYRbACHQ3-M0R87sXCC_nWy0q0ovn8sXna5ZbHDSZKQBccX1w95MT5KwGdjoMm5wuTIKHiOw",
    link: LocalGameEncoder.createEncodedLink("/local games/geometrydash/index.html")
},
{
    title: "Duck Life",
    imgSrc: "https://lh7-us.googleusercontent.com/MT7Kp6m_Bbb-HHM29S7ow2cl1YvC6LKI0OSg3nLEVXTg0YffNRsRPeU41O-mqz-bn8Cg84yDtrrJXSUGVj2JeMp10Ddslxs9TX5z3mu_qNrF1uKb2BTL5bN3B9bLf7EMunzY3cJQOg9z09gDSZahVTlUk3g5UQ",
    link: LocalGameEncoder.createEncodedLink("/local games/ducklife/index.html")
},
{
    title: "Duck Life 4",
    imgSrc: "https://lh7-us.googleusercontent.com/z8atGY8NONZpEpxoOyyHo94FjI4bu8dekjNFrbBPAE1UBlhbd51FUzu2tMCcXSWYc99E1OEFsAYVHLbQXgPgQoxGPkbcCutGRwLRSnxA58YJh679uJgaFYT1jyJWY4fGWA-c76f5jSPzKfJ8giZGvHk-ILvLxw",
    link: "/onlylocal/html/237.html"
},
{
    title: "Duck Life Space",
    imgSrc: "https://lh7-us.googleusercontent.com/PH_XPFbty-8F-XCtG5H6tu39RBP-ga9Izjem7Fj6dmSqcCaCKLXhgSQmpSb2VOcHc5AGnlFHfNRM2rycwHSDDNwp-SQPq8SZj4lLWsITVTUo-W-Cat6mlAggu6lV3IOJMkvhZ3eYOiDUe_w24qxmRGOlJjWTNA",
    link: LocalGameEncoder.createEncodedLink("/local games/ducklife6/index.html")
},
{
    title: "Gladihoppers",
    imgSrc: "https://lh7-us.googleusercontent.com/DBHR_BJ45z_j2rshMggVz_uGCz4ZzfzDJNCdtetUdaCXWR7ITxJfq7wNES9sLqAFkxCz67Cd_HN1j8jJzZJAefj_JwvOJRXDZDy51faxFRiVIznXm09HJuO9GgLN9JFThlRtSfSqIhEAoJRdnszgyDsSybrguA",
    link: LocalGameEncoder.createEncodedLink("/local games/gladihoppers/index.html")
},
{
    title: "Ragdoll Archers",
    imgSrc: "https://lh7-us.googleusercontent.com/V0oeuxrpTGrOAdC0HMtztXnG6v-W0AMSC4ozjjK5-GbmylDDfismz5ylhEkKsHG7vJCc4WxQ2OLcHY8QEZCQftc0adJDjw_Ia2KvpNeonq2RzXTgz6x6DAroDVp-M-i5c8FQwPmnzQizzxIs0yVVBZzxrRzhlQ",
    link: LocalGameEncoder.createEncodedLink("/local games/ragdollar/index.html")
},
{
    title: "Funny Shooter 2",
    imgSrc: "https://lh7-us.googleusercontent.com/4E55AJwZrKouLKIWNiY4An-bf9UjmuR_b68Bz3v34iyyioUqD8Zp2MzqQzp_xCNkYw8ND1A368P1ntd0vBERkWVKszzM6MkgUst1b4dqTehf3USQkRC4hMqBM0cfm29Mi1r5UkpTDdkSxhsRYTyyhJn9SGnNEw",
    link: LocalGameEncoder.createEncodedLink("/local games/funnyshooter2/index.html")
},
{
    title: "Rodha",
    imgSrc: "https://lh7-us.googleusercontent.com/OF4fKFD4AbftL81PKtjYbFnTgxWDpth5EEhxICylwAwwJqKIyFKQjTL05HxlQyxbvr-jW8EXGMP-MK5nFM1QozZ_2Qyed8pwTGmPmUhw2UqX7YtKTx5iMldSY9Rg1kVCZ9y5OWUmwlOJVZ_x-G-9WC-fPJbsLA",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.mathplayground.com/rodha-new-3/index.html")
},
{
    title: "Baldis Basics",
    imgSrc: "https://lh7-us.googleusercontent.com/Iafhnkg3uzMv7lLK99ADN1O0tunCQwc0JLhuvYEhJrH6SiIgxVXhEUVHGEVrgC3KIATkNx5H0LHfq8-strKG-g4fsuoeRzjbQPJVCCzA063nQkqnk1nTEihZJaRv-4qDPXaMfDUcFPbvgaGFcTduBOsK8yq2kA",
    link: LocalGameEncoder.createEncodedLink("/local games/baldis-basics/index.html")
},
{
    title: "Mario Games",
    imgSrc: "https://lh7-us.googleusercontent.com/9gBn_-diXW0qiyzxP1M3D65mJgpeZ7RqM2mSy2HwTz78-cd7HY0HEra0of4EhWsrOHBMoMzwEMWlBCPD0v-M59XTbuR9vCnByqM2QA_wBv_qeETzKCVIedkDRi7yEo4jnCJqu4sSeOANEPEg-Ej7VOmm9HTPdw",
    link: LocalGameEncoder.createEncodedLink("/local games/mario/index.html")
},
{
    title: "EggyCar",
    imgSrc: "https://lh7-us.googleusercontent.com/XzQmqFIMuI1P7JPJYEMDsaVvnyUEx3Yi-yHMb56pAWDDP6BS9L7nhz-9Z6qGfcqqU7SK3-dLuBVBBd7ptmx-zFOm5jK3Nba_o8I8pNAq3-NpNcInyXFJJ1woU3a-jDQ9zONSio91O_5QCYVWAqn-_vIgMW7rCQ",
    link: LocalGameEncoder.createEncodedLink("/local games/eggycar-poki/index.html")
},
{
    title: "Papa's Cheeseria",
    imgSrc: "https://lh7-us.googleusercontent.com/vvyk1JdsAgFsPPE4lTjaW2KeG9Yf1C49WBvdZNZWQr2vyIChl5XCIy7DCByd8estWUjxVYBWowhFV11oqIqdw2IDtj-Mqjl2eqNBraif34wCjkhUT2OYtCPweDFTk_YQiOHufRMUqsT3Z7_kcTVqptmnvrOQPg",
    link: LocalGameEncoder.createEncodedLink("/local games/papas-cheeseria-freezenova/index.html")
},
{
    title: "Papa's Freezeria",
    imgSrc: "https://lh7-us.googleusercontent.com/oqGyMLvZptjeWaKEcJa0IHF_OzZmtKZ4-CEm0eIO-hNtacbgZCgrqPztf-MRxUr6lodNhwJnb2qfX2AHQtaiYybOtIQtylifGyUpg11BY9e9BdIH8vEwOgAGoRpricltz9D54dnbs5ieSefqLr5zo9M_kp7LcQ",
    link: LocalGameEncoder.createEncodedLink("/local games/papasfreezeria/index.html")
},
{
    title: "Doge Miner",
    imgSrc: "https://lh7-us.googleusercontent.com/vp_mx6o4SrOHlgzoIBWO0inGCWEO3XX7WPD2JZqpz_NWBcLH6tIUoW9zUolo2SpzFKcbtDMBhayCH14LwGNQXurcfIyeDpwla2wMfseS_ZLYvgIQG_92sFF36BQyWD1p80qWbL3OJ60b0CwEZZZiu5qKrfzJqg",
    link: LocalGameEncoder.createEncodedLink("/local games/dogeminer/index.html")
},
{
    title: "Super Orb Collector",
    imgSrc: "https://lh7-us.googleusercontent.com/Ge18u1hdxEoVA7YJahOCstBSJ5E0dIi-_0Ps9mWCYMXQoFIsZ-VfWCEmkDInxX_Tebac2cAnBbdMOGy-wOMIxxI4jNM0o0aJqQWvVcCWYL53eMWUELeNHkF2WvvWfLvp17cXXSekcw5jO6vXxcLRzrD5TkpR4swwIVnDW8nfBhEktTZMFBD8WN1vKKOMH69XLsmFWA0D?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/orbcollector/html-classic.itch.zone/html/1514220/indexaf55.html")
},
{
    title: "Bloons Tower Defense",
    imgSrc: "https://lh7-us.googleusercontent.com/MG61ryfsIFHqeOglDcH5qGEzHwNqBsJdSGVJA1Q_A65WL3QgIteLefelKseMqf7oAtMTCes4ABYkFyWzxGq3rBM4C8Tsfc6iar8hXwLLH6tH24HH7r1f1XIBqEklb07JabqNU8PJAv9uq6KbTMfXfU3aV8EAPxoloEu9f4ny0Xmf6aQc5DYX_mWbZjPBGrdAmqHN6549?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/bloonstowerdefence/index.html")
},
{
    title: "Space Wave",
    imgSrc: "https://lh7-us.googleusercontent.com/4supg0ReRZsQvGZGVeqpJ3nUENg_Er3FchO5mGUBY52j1D0xxsDhBW-j5MAiWeoivJSyxJu-hR_KE2Nqw8pOMjb6FuQKI2Lejpzo7udmDx9PGZs4hhkZRY1HFJ80zzf9waxIDSLQJ5AycB_irXZ4yGcJ1IZyGN12idR4DVJV45T0QJ6jbNZTyg6H2HVVPsNtDWRf5Siu?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("local games/space-waves/index.html")
},
{
    title: "Super Liquid Soccer",
    imgSrc: "https://lh7-us.googleusercontent.com/9awxqJ3gZ5kMMU1p7v_tjBIuNU_Q3g0a7xnhupHxXDFkjYs6whvHj3z1tR3NLg3NnY7GQWvx1mJLy_3dxgFf2vo-YFrs2FSNA2frDBEKha2rbdpW9hjVoKOQfCjqCwPySig7z2sFPXXU8NmpW2UNS6EgFDo31XmPiwcMJnsHiBNKXLbo5afZinH9X6JfD4auC-qLzFkP?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://superliquidsoccer.gitlab.io/file/")
},
{
    title: "Bit Planes",
    imgSrc: "https://lh7-us.googleusercontent.com/7_KB7ktxTYY29d_TQnnEk1-oo-2c69hMAtp1AWvIwWoSaky4Xp68WbeBeDueKUqCvvNadYIACMeKxILJ3YnybGscdD7gR_qzRUBsd58JR3fXZbYx4f1bg_yy--Glph-CdSq-6uN-vqifMwHox-hX8tNHoE5FC5c6CtWMhNa6olBW1vl7jkCZJb0-Jl5pInBWDS-Os5NK?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/bit-planes/index.html")
},
{
    title: "Connect 4",
    imgSrc: "https://lh7-us.googleusercontent.com/5VfCfVupllfGOuK_XfTGctmjzxDktv_lgYD12Xsf1wFaojcRVkt_R32sq9arCHdWMYCm-KT4C6KX4u3ZLIoM-tZMwrJmeqEHecVeGw3TGB80gr4XQvw9Z7wwLmhAveD9KSRN9Zew4A2lisD3HbK3n7QHRlnxvu8C0OJl_rubtdbWNqsVNIt8Gc61yCt4cJNMMv3E3gH?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/connect4-main/index.html")
},
{
    title: "Wheelie Bike",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDHRzh80n6-i5ZpIFzKttxVEmBFQoV05ShUlS6095RiAEL59RhRQ18Io3F7pM45hxPqRQKXP7Hx1-FUNz8RO0JVXCIjIUZ1ZGMHIgT_zCZdqvSgvGLGnGglgR-s3YT51l8NKuWQcBeIU_dlD2Hv987wP4P5a78ybtnBPA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/wheelie-bike-gamedistribution/index.html")
},
 {

    title: "CoreBall",

    imgSrc: "/img/gameimg/coreball.jpg",

    link: LocalGameEncoder.createEncodedLink("/local games/core-ball-web/index.html")

},
{

    title: "Papa's Pizzeria",

    imgSrc: "https://lh7-us.googleusercontent.com/xlAFdWg3NsJ2FnvB2HLNRhdMJayauFsKICNWfBKCv6OFymWJOgaxz8xG25d0BpRmmjNivG7AH__vC9QMM1bxSx3XBVAeLnT_GR6i3l6rUmO6v1fUBUsKZVsFmYlsv3DM-IggICm_m9cxoYKzjo3-y1Lhei1Wqg",

    link: LocalGameEncoder.createEncodedLink("/local games/papas-pizzeria-main/index.html")

},
{

    title: "House of Hazards",

    imgSrc: "https://lh7-us.googleusercontent.com/6fQmRC7Le6oqmBNIPFBW5QKyRvKE4qubVXlPU1s1lhM3vR32I75hUcCwSs32NpHdHq4YafutCj2KXAXGluJLzPgzdD1Adbsz8-UF27_ymBCMgLwuSQWI6q-0ETJL28B_KaEbsKeoLdQZ6h-akidcb2GSv09xgw",

    link: LocalGameEncoder.createEncodedLink("/local games/house-of-hazards-main/index.html")

},
{

    title: "Basketball Legends",

    imgSrc: "https://lh7-us.googleusercontent.com/0nwyFoEcn-ISiCZwdyIdyVVRuVYIVgoqXEbMGtyx2pYQwIoyv-EMYmeVtz1_UZHY5t8YSO-e09wE9WYTymvkqTixPqjHepJgXExnhc_4SBOATtY_b7onEebJMTXG2CSE6FpJeCi6UK9KuQ51XUwgNxG4qTxFZ5j-nQ9BiaZxVCydE1M28x4IHOfHQ4dm2uEzj2g_qbyu?key=yj4V8pHW144VjA9YlEbf1Q",

    link: LocalGameEncoder.createEncodedLink("/local games/basketball-legends-main/index.html")

},
{

    title: "Soccer Legends",

    imgSrc: "https://lh7-us.googleusercontent.com/BOFW1ZerubL2OaBLXFFS-Ns2OWRr_yO1gGqCJPSckN5jnlpKxChw-fbKiHrJ4iIQMVbJRwxARPvqzR8OukN6KmFQfaOkV1rZlLY3ghMmZKuKmeLsBi2rdfYmY3u_0oXSOqpffNAgrs-7RUYjtK8ecj6YR1zEDiXK-hYOkFUKnySdslg2l1I74Sngv5j3D1Au9fLmymBe?key=yj4V8pHW144VjA9YlEbf1Q",

    link: LocalGameEncoder.createEncodedLink("/local games/soccer-legends-main/index.html")

},
{

    title: "Ragdoll Hit",

    imgSrc: "https://lh7-us.googleusercontent.com/fMYsrt3Lp6FlRyA8pbx7xwJjLXmDXn34b-OAhBulIDVrrdqV8d3WADtoGJABgu9iTv_dTWZNICKUw_uzGyvJjOoQfu4FVmi6sMkHeP58PpraePdNwXRyNnCP6L_gwWD7UQO1TvCKR-5Z5MvZ_39RmIfgJClczi7rBkaMJk68FnUX4tXBN9_wBOJXvHasRcjv2I0-",

    link: LocalGameEncoder.createEncodedLink("/local games/freetoplayz.github.io_1768602647/ragdoll-hit/index.html")

},
{

    title: "A Dance Of Fire And Ice",

    imgSrc: "https://lh7-us.googleusercontent.com/OnLUO5_5ONgtJrsEW_iPLtX86ILb9O-M-4s1Ae7zALw25b0gucoF7xraNHojCKzmOpXTNIp0cuGsQkB1jJ9pbQWRx9JMgEmwpQZ7E8RDNSoyLzaUE6r-6vOJKouFUzzFxp_CZHHBmRguZr6JB5bZmbL1HDrhoA",

    link: LocalGameEncoder.createEncodedLink("/local games/a-dance-of-fire-and-ice/index.html")

},
{
    title: "A Small World Cup",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAIaO3RG2si5yf7K9Rwm5m-YmIotES4L9NCAocMB9F4p1DyhRQCCvhZdVbDgF6ZtV2NKsgRs0ANUlUtSxrPKOo1vQRpwFxbHYMCELtTqWH1bbQwBjhQOPn44vZ0VsMU4H5OjQ6CaWfLrfF0bsz-QRqPtVn4TCuv0Un3mA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/a-small-world-cup-freezenova/index.html")
},
{

    title: "Tanuki Sunset",

    imgSrc: "/img/gameimg/tanukisunset.png",

    link: LocalGameEncoder.createEncodedLink("/local games/tanuki-sunset-main/index.html")

},
{

    title: "Gun Spin",

    imgSrc: "/img/gameimg/gunspin.png",

    link: LocalGameEncoder.createEncodedLink("/local games/gun-spin/index.html")

},
{

    title: "Papery Planes",

    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAu0RuoTt5BJ_GjxyG7t8NNZjdFnDOnvm8tfDpsZn-5N8BChXRhvLPl-0-NLziDqufB-sLNh6WUg2gN0bQKa0yFbKQJTPcqVh96u997lLnWuQYDQrfQXq7mWJau5-VpM77Nwa8O1eS8wPAHS1jSX3Sz9zIGdeajXGZ6mA?key=yj4V8pHW144VjA9YlEbf1Q",

    link: LocalGameEncoder.createEncodedLink("/local games/papery-planes/index.html")

},
{
    title: "Aquapark io",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVACcca3js0BWVDYPVb5HN7dl8nFi7ZsuE-Peeyor0VmrcgSN_iayJmCAj81YwnZK3dIAZsTUe_HEMzd6J5q9gxyrWCrX7CNqtgtwByQuCWk1Bkt6mXm0PpEaK4z2wgyp7oPBZ6DW60K9YeccLq9q0QBtpCkl3-8rfoxoA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/aquapark-io/index.html")
},
{
    title: "Apple Shooter",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCsqU4fwyDtFpqsw1CLI5hoeThJ5HyLMkLc4kE0RZCS7mvkAP__BeaEMdP2I6Wdjpoi-8BewN3hug5lpABfbKaNflOGlovQWcorJcXTQa6oERfhB697SXYkgHw94lY8FI5OEAF_pP3efbmaSBkVkKkUSmSDK_WIwxhxvQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/apple-shooter/index.html")
},
{
    title: "Italian Brainrot",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBnbUkKWuWutWTF4vSkAah7BI60Ganfn7mqXhRapqJDlibvtv6dt3wK0s2k13BjQdmo6z_JMW3l6uk-CgNl6JG_H_83BQeg3ufnOzNvm9JZo4Bru6ExcuGMj96HKGZD6qe9HrsMuz7uyvCyqbS9QSbCv4R-64UTardFBQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/italian Brainrot/g.igroutka.ru/games/8/zPWB0Z3MWEWki3/files/games/h1/italian-brainrot-obby-parkour-v01i/index.html")
},
{
	title: "Candy Crush",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAsktKQ83NcyrjJfkUY8abzkhXjwXCRjvl-vkyPRU1xrtilFOm3MOkhzswulxBpLfUHeEJ_TjXeAisyHHFTjdGGxWo81Yi-H6C1FEOl2_4omNccDbI8qsVbrHlO4KPw7PjEkwxTd-hjQEhE1PtrnafVKmrEtZI6zblt?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamemonetize.co/ushitaltif0ig5by3w54p4cy9sd3yptt")
},
{
	title: "People Playground",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBgveh38ngxS2cbAY17KqTfqB0iCY9B-hhrkQGZ_WlP-M9R0_MGZsJpL2O7mV9oRIDC3vib7ZnH12NlkhPGFJGHZqXmcE2sGmVSNsJxTZ5ue1CuseLMt-kk_tXuTBzzJchZbDL2Uap5qEXtvD1KSe8nXKZ9V9K5tdln?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/people-playground/index.html")
},
{
	title: "Bacon May Die",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDCFwC0bnsnIIEZCcY0QsF2XkUdXqsKm4ylI-2mY3kPA6CWp2Gy2YWBRQGqC30moMiG6mKaKjB7ulYHjzD6qM2V4Ef9kvn7J4v2JPtwKO5tG3Qv8rgQ-0oK7iLTlHu2B6c-joH6tWrPwH_3kZ6IJk1bkfzIHqzxWrxqXw?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/bacon-may-die/index.html")
},
{
	title: "Burrito Bison",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDLKqjWkGifEb5Iys2_kaj66bP_bvtCuLjIgO9XIZWw21FALTHr55n3zYcv0S20pexP1BZEPhgKMFiL70MHXjsM_E_VoAazZAsAbl6SGJdDfv_C2HrDGX17vTZYGBna6M8sYxk6kg4fUlYEXiSbvshGnFFS5HlgPLS2?key=yj4V8pHW144VjA9YlEbf1Q",
	link: "/onlylocal/html/78.html"
},
{
	title: "Astro Survivors",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCwust-kszswliG-xvv95FSvnNdF5LAPY2f7y--J6cZ8f3MlobAjdUeDUIeAlutFzipQgJGKse3ScqgkVEV8m6Ih-Tdh4stWiLpFeuowQyWRccHsr95hD3BaVI0Q4ToUfyjEPNcmBj0ZjC7HBoMVltEVSEnSu1HzKLJ?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://g.igroutka.ru/games/942/HQ5sOKj0NiXxlzEw/cf80519a-7254-4dba-aa36-e3b0fd968e0c/index.html")
},
{
	title: "Choir",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAtOytfV4LFvg2Jr-Jng6rV054K0yJ1YSpUPqF7KQp0FQIiEwngcHir4xqgs-5jCg7u8TD-keGS5kVtjcGg3Rex-SlPV3zOvvhsaWURoHmQ00DMgAAL7d54s9nXlg3MlxneGNK7qW3inqO0c526JGEMkN9hogV5lCsdBA?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/choir/index.html")
},
{
	title: "Z-Type",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDiUzYU0ImhaNlYwv_F_n4kQEdUCj-_sO6xtYZS1-GjAdJ2a1edI0pijwx8CfUHxUSqKt1s5Be11oXF8UAuAJW7xDy1Aim_cDRv2SB3jE3q6X7lgyJ-Im0l-un82Uir9swy2AJRCIu2OlpixTb-UdZNJxIpOZEROeYg0A?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://zty.pe")
},
{
	title: "Blumgi Slime",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB3MFrETiEzoQ0b34jt7H3eaxNbtdHFrBW_GAFnt2vvFtFWVB_kcqwTToHObP3_tHffnFjaeGcr0ho8xc5wBRv4c2M417CEf51taIF2af5Vb99xdUJvXvYCbvInaqbC9naQyJXOSr5UKzVKN4y2O8l06MHxIZz7DGY30w?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/BlumgiSlime/index.html")
},
{
	title: "Powerline.io",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDJODf4x5RDJAxsP1Q90AYENw7DZPBRnD9BM8CgT-8OTKJdfgjyojoZRTD0uDa5DamKgtdMiGd9nAhG1UHvFYU7OB-w3wg462zVhde3Xv1YcKrYEqdKauiYFL49RcaZxFLFIJZc6DDHHP81LyS-xsq65fbigIKW58_G?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://powerline.io/#2cs0")
},
{
	title: "Slither.io",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDdkGZAD-8S-CkVFddtEAapZZDHnTDelNQJuGJUfa3cLAHzae85hPg8g9UCSm3dLH5wnfxQTCAJAvXlFTiQnxy5X1qMDoPzqIyJ4FoFMepvgeExm7Mf1v2LTEsZasYa490x9YObyXqxs2VmO7OEWuy1zoxu6oAIDxZkzQ?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("http://slither.com/io")
},
{
    title: "Geomatry Dash Meltdown",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBUnoydSBLBHQhoHizTlJncRu0xAX3UWWN5Y-T-BbkmVi2bcYAsTwKawnOOa2Uu5goTlodgJ94qFZP3wrEiuryyEeGLo6cw7LgeCefp-5w75-rdoypG-BFZur0UnZS_H7sNfXe3YdFIqTIEOjW5cmsPuFDeLY2Jb_EakA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/geomdmelt/index.html")
},
{
    title: "Geometry Dash Subzero",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBAI0S9A4GQt0PfoEqyNx13KP5k6WCRS-HBv4c2J8KWEwt7oSf8J9SpQonQUJmsdF9X9VPPbJC2NT5ufACQ4aSSZ3DUtiwFnYxbGOIbmvbgl0Yhove9rZOtay2DHU5CL_qfagzRd4PHrdTYsHOu6uY0DYZ4LHqbAInMnw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/geometry-dash-subzero-main/index.html")
},
{
    title: "Papa's Burgeria",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVA17XoyyakwcrPjie6eQG-x4FGm6u-Fmyzp-M36iq-OzvbxEy9HbR8CuB9ZnHpU3qUBU-xDNhF0bMzZKqs5sNObvx9MHGPBs0H1aKLP1EIZr6EKbqfbZlZBSkuwa4mD5N5gM2UZmiXdblu0PcAVW8pofZE3D3fyHsWQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/burgpapa/papa-s-burgeria.game-files.crazygames.com/ruffle/papa-s-burgeria/4/papasburgeria_v2.html")
},
{
    title: "Papa's Taco Mia",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCuORrJmseHk6ubvKYfYMJtaaOFilVQKwSm5eNGCPeWjartL-Yqih08llNWQUZN0sSg8KEs5sBXU077Yq29gr6JP6Iz0J-KDVmjtZVbLts_ft50z5rERSgZlYVU7I9RStq6jIO-n3kObI51hiCQOPLSUOHJEfSJQcBT?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/papatacomia/papas-taco-mia.game-files.crazygames.com/ruffle/papas-taco-mia/4/game.html")
},
{
    title: "Football Legends",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDcgK2nWW3AIuEB9TbprrBN9_-Ey-zwVsyg9NKv_aklzqRHKFZ6Mkb02iQXWM6PvbtUTYyKJEUWFd0CtfqY-_QvugivxA2HsM3_krrqdOzXEW0XTkY-kHE1NGkpTQdsATi_ulfTY56-yrachY_prIVPiTIOWRR2Ki3tOQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/footballleg/unblocked-games.s3.amazonaws.com/games/2024/more/football-legends/index.html")
},
{
    title: "Papa's Pancakeria",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBdh86BOGnuVsdxVtkBGsCfnxiHyILQo0Lkp2ZCeIecI28xPoS2VyLyYJDTOxl420hE5EXBSPXGtnUtd-boKBh2Q7T3WLfOMo9hlW54iKiYTAA8r2qeyO1u46GFBoAJ3pBN3soh49WMEt0NWGR9N-ZWrgAWJ3Z1AcBCGQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/papaspank/papas-pancakeria.game-files.crazygames.com/ruffle/papapancakeria.html")
},
{
    title: "Paper.io 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCmIxB-BuP-woS3mWu-CC-7FMdxe7FWRVcLdjeiZz1BW1UsQ9FQpHl37zt9VKPUMRkDyfk4X0PqeCK0tQy5hPjVAZ3Z3cgypx3Xfy7pXYX-sx_fAKYgfl4pa5g3Go6_k348LfPiM-564dXfFlRb-fg-zKpZ6S1fhsdr?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/SSiiggmmaa/games.voodoo.io/paperio2/index.html")
},
{
    title: "Papas Wingeria",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB7rK85XmKOqwuKC9HLL554YUMlqxrNLNiKvNeP5u6yMhUZce-MiLBrOMhSyxEYlY5XyW6nBqmBglL5xkZ4Ox8k9GUzd-l1RdbzJvvJIKm3_uTjEAAw6yxN6y0wnq1TczhTsM7RBwXoswputEZ1JcHmcsTyxeeIDM91Tw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/wingertiaa/papas-wingeria.game-files.crazygames.com/ruffle/papaswingeria.html")
},
{
	title: "Viola The Bird",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDCFwBgfvvxKhHuq2IKgBDMbyygsPi1CkwsBwtrAlqn7819etE4SDfWROZkZsw0mcRRKkbHu2LRyr2ruxwDnuCCyWnLVOikhM_93K3uF69rSmdVadpGK-vhg9TfzEQvAd16iuS6Y0HS5pUhvx8ASWogqT1s7T5IWnalDA?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://gacembed.withgoogle.com/viola-the-bird")
},
{
	title: "Blob Opera",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAZxkmpwEgHPK9OfYhKbg9xFwbnKk0Krd9knzAdjj_Kr5NuOZFaWL6aqhQPC0KlVn_edSv7WEIBL08DKTXR5dU0pcEEpc5Bpew-fagxnVSyLW6CAhO-xz-IREtqlnEP8wzw4QoJKl8w1AxQ6CT5XA-kWECu7UzbjkD99g?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://gacembed.withgoogle.com/blob-opera#")
},
{
	title: "Chess Online",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCblWGGwK_nVbdv2jMR5SgYdYL0EOLkh7in_7LwKY9djvQahZNhvRP6XCy6SzWnhx7RAn-TfN6Ef1f41gY_lrmlBtkorAU7k3ApVeidMNrLSS9RfQnlg9nmf1LIgaW7M_43W19DC_0_7oWS9vpQ23iwWIgJs_OQeReXkw?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://chess.coolmathgames.com")
},
{
    title: "No Game",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDfj8Sag7ovXBQo1mSSrh8HiD93-3Tekb6KaP2uXbPi2p9LntYJk8c96Ijp9pNTfMWa20Ubnw5SxxmPdxDtGE0ywNpRz14R-TXF-dSgz3SGVW12UHBa0TwM3CG3ceJjERwWCPu6owS9MGSQG0vMpjUzFW-q7ggO-fxfjg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/notagame/index.html")
},
{
    title: "Grow a Garden",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCQep8gmGMYsxpzEJZQsjKeHvtg-20QB3nuURVuzsDZJHml1bwyVVsWxoAuWLoKVzwn0o0qwdH-joio_WtjQsdow56OFwwUzJOgOx2bksk-yYOITXGWufqd8Mr58kbi5yHo4xFBVkcG_hATPAvvlqrwxgD53nCEBvf-?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Growden.io.html"
},
{
    title: "Chess",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDG8_8MjWhfpwcBw4GXCeQYna--wkX7XBjxwbnqTTFydnMXEx99AzQcVup61bEP977PabkNZ-T7psmalWra4R0H6mhD0qy6RZ2clAINvWqDKkEMEREwwXcv9c-yRy2aRa1UfnMD70E5DeWFxsDGd676XExHdWurSFPjcA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/chees/index.html")
},
{
    title: "Doodle Jump",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAHl5zte_Ua4pa4ie8Hjy13tOfPdKUJRN8w1EmnwQLV_gL9CUVifN9kafjh0WNYvTmJ8z8wG2Z-_DN4IsZjHnATnOG66EaPMmdl4ppgXjWNLkxiOq1eyHb363sb-IQKY4QUIz3oCLv3x500d7Xbszfty_jmdwsXUbfn5w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/doodlejump/index.html")
},
{
    title: "The Worlds Hardest Game",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBv97_-u2DMnIFaIkBJIAytn-GR1gUUv9DdW9Gh1Y5nrepjMgdqaIOsF1XU6ZDAG2XZGtLOD8iNX6nR-BlkImrd3VNYwvVOqAcGVJ2qwa7woJ5aOQyW7s5VsD3v8-45u4Sa0ns-d7s-uP9e44TwT8MKuC0N1B73aQCZ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/worldshardestgame/index.html")
},
{
    title: "The Worlds Hardest Game 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB4dt7QPmXdDYszK1UhBw3V_wnATlADIl6GbJST-Fz2CAP8YIaG6tEWaPZB7NXh8YhHgr0aFq4LrdI2LKbRcGCkFfL9gJ6tYYf5H9cHKJvPvx-kpTtk98_h50KVQP--FTAkY5oxH3-26jHic-kICrySQlxreq61RLZj?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/worldhardestgame2/index.html")
},
{
    title: "Boxing Random",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAwovWoKvq6C5SDJm6Ox7cN2Z1VqhaFpsT7zGiLHC_PYkUF5M-N68gFMkT--wtABB67ZypN2rVy3ylZKW3iPQygiwXJroHNXRMMtyS-OpG4TZzwynKGlYiVLDAkSuMYEPXRbE_7mh1QTXWOg6EhUXcDDTTkcb4afZF1JA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://boxing-random.gitlab.io/file")
},
{
    title: "Slime Laboratory",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDc0ZZ_DQwkaQbxRbWubUGfs2uUCnblNzxCjdz14YjgM33De5J01sV5Gdyt5Eb00qd10KJAQfvPVv1C9JhoRGmCRAZWuGyZKzKFdpGee8jtZnPjF97D7hgDR4t5X0HSJPlEVCUIOAG7rMajb-mqTFhZrrybJprQ2VEMLQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.coolmathgames.com/sites/default/files/public_games/53088")
},
{
    title: "Adventure Drivers",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDwE1nBLu5KI6MRbwBWsmTAIfQaznU6PM3ND8fFmMADA5o06mDoCzeRL8GMu5oArCnpYc1RmgKaGDbACg5Zfpj3bC5_tpjon4U4BTSWIREoPbcoe9MBRqrPSLNlDv-c4P6lPUN0egSoim03QFrIuWDrT9ret6sl4GlD4w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/adventure-drivers/index.html")
},
{
    title: "REPO (REAL)",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAxxc85DZ6kxhjs2U3bSlLXpGj-2kLSpSO4Al6_kzOpewjUMSRltDLvdk85kuoG_VqQCJ0jCFMNS-BRO38M1i0a37rT6RJYOeiQNe2YtHZSWh4R4yOfbwD1PV_jOjoXfQNlj1OFS3GkdQqOezYVHtkYBLZxes8DFeRKEw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/repo/index.html")
},
{
    title: "Shogun Showdown",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBoLQeYPZdKFpN8FOldZBf_FqDAVWf-LjYnPVI7mXonC4ikVTdBI9LcD14H3Leh2BJ2vz2dz3ZQ7Wixlkv3YcdJJ8vWSD58QmmpIbxiPE_EGSaLtl_JqQmPKZ4Y9LtGUdCh1vkQDrnpQEYNnjXhgfygLuYgUIpCpnAoOw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamenora.com/ShogunShowdown_WebGL/?v=20250503220652")
},
{
    title: "99 Nights In The Forest",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAbK9TV5B3O_gfbJpc2LIxczk8zwy_rAXEbVhP-KTOXwieWlGu5ruf0XuyfCkG-aNQSZnAX40vLweR3PnfhYOIY7mgqW2j2tcLy6y2d2c2r1Zuo14ozKxR-KcK8PkJhi0OUByIJ38_euxTemTP-Kt04Ob2SNdQCqFj9XQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/99_nights_in_the_forest/index.html")
},
{
    title: "Nova Idle Clicker",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVC6PYgV9fMdbl87ri5650Plt1z4mlKyIT8PjrymjklGVBCmnWDcozox1_pk-rYvmiFlJx9kgllM3VyNUXj54dIE7O5FtB6vQxJK-Nc93HFwRjw_AxsS2AqzhuDsTuuMbFCq-aIgDthjbfFMWDI4RGvo7IYur-c64TeC2A?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/nova-idle-clicker/index.html")
},
{
    title: "Draw The Bridge",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB0RVW67p_KKySMZlWurRaqA2pdo0l6ZZgBJhfIO_kvqOrIqia5oaoBOJ5wlhd3f6J0iuY6ECltEhymt9FMM08YHkqEK0ypA5kKKFs_7ZX8gAjPwLsreyx8zHsDErjhHyKkFWhsR10oBUqPRIYtG0vjbRdSAWEGyUiy?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/draw-the-bridge/index.html")
},
{
    title: "Basketball King",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDLiUGwmmAXA-sOHiztK-o70oicl7xR8bEOI8Mn6daQpt9cg3Z1t1O6btqnt3kGrlKP-0WhfC63IUf1_KsL-dXBpDhPziQSqKx5lThvAmMpJH-jhfL2Sem1vSz3J3u1kpLDQTJ12S0tU8IadRD9jDHPd_KR5SmKPneIFg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/basketball-king/index.html")
},
{
    title: "Football Bros",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBYZGQNgZCKaE9HrOki8v-JzOR2m7gz3az8ojbOxzrKwXIn_aR0sRJgusmW1W0djljMo1QTJP_WJx_JrFcdEiR1iMOnbUM1Dk0yniXM-v3sWbmQBvQ8Fp5mIo8eR2rTOUcgVTHj6-zOOstZOGyEVHAbGafDuR_hOosz9A?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/football-bros/index.html")
},
{
    title: "StackTris",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCkh1I6TvsPCPWtub-czLtZKEHjRpfCkJHUPnBZcazK36qbcowtWztHt38vDH71gQuTtlnKuQkEGzmoBE-or7FUrEsAH6JyeiNGMzzzXMfyMN3XOQyE3-2y6h6_H8Q6n9AoepCgmztI3izfqmJBm6Ks5PRYaESQ0wWh?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/stacktris/index.html")
},
{
    title: "Zombocalypse",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDeXOKip2aD_xNp9Ex--syakx0Mg4n9DAdDsSbfk8bXJ5TQYbmWgvQeAQ3UwW66ndBEgP8vwdA1zbz4uKbgBx3RuE-IAtj3gxERisAkM3xJqKMuXRhhlw_bkmaRJ-ubYwqHedmNI1Qde5ShaBI4oSFHrd1watDlXkfA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://script.google.com/macros/s/AKfycbyAgz-IpXZmrwqBGMUE0Qi9NgCxyM7xg2Ds6e4B8RHXUwjyvQOozmj7CQiKMBVyAJ3R9Q/exec")
},
{
    title: "Zombies Coming",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBsKYPtzV1HgDUzFkJsGDi0N_P_A8q29U-Uk2PMLWRjk9LgGMwp0qDxTEfa-NhWd1V9jfaCCcTwAULVv-fvp94cJDmPSYbMySHME728qfLQlhMfTJqg7XA_NVyYhs-qoNi1yGraxQQD-fMiLthWV9Ds184o51R38n7mYQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/zombiescoming/index.html")
},
{
    title: "Hill Climber",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVClP0nPl0vSH0vaOX7F8cvJALjPbKJw1kQdMcLqj4K9lzAKIAMvVK4-bbWzPmYO8cy6I4CFQopBZHdxKbq7mUaO9NVou8t2HG2GgeUSD6BBX48hAJ-uH0zSzh7_4960hIMaA6eI5KyeLcf1aYOLhEfC_RPoXP5twLzM9A?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://unblocked-games.s3.amazonaws.com/games/2025/beedo/hill-climber/index.html")
},
{
    title: "Clash of Tanks",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDLW1I-iyn_fTiDRN-nHELD-pCxaYDiLdDoGhcWZICXOrVPHqMPgMzXMqDKJkZb8XmhytDxYunLS7m5Oymskkkt5VwSbyJDYCCjrLsSOQSwF_tx9rhO1IV66v81v-8SZkBWDYBkn8vX2PW7JyV1VADr5M9qICk6LSj_JA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://unblocked-games.s3.amazonaws.com/games/2025/beedo/clash-of-tanks/index.html")
},
{
    title: "Thorn and Balloons",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVARvr3MwnmQYYny4otlqUKVvjWYzTVJd6LvmNbumAKV6Qj8ByZD_rWFOVAxJQp3JgZuw0xMfFeybFwEktZkNiPDni-TErQaAgSs2A4g1gumG1e5HQbOIp-JftEGBGFEC4X3vAOk7ZzWUWs6eulXDOaEva1XrrVXqWlA-w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/thornsandbloons/index.html"
},
{
    title: "Dip n Dice",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCMa2FMeIzeSdO7elzbYSavSsRDCNUyijBhg7rzPJeiWfbyC1yeASxV1Crf87fODrNpSkCVQlgOAOGLBdoQyS-l8kH4_vwWSRTMR9qF43JzOGKo0DB7wpixHxKyrZfrpixKKOJlf-UMT0bkAVdgEvSGnr0WehIpcLk2nA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.coolmathgames.com/sites/default/files/public_games/52546")
},
{
    title: "Getting Over It",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB0PaBrNAJX9qDF18xz0j8U38USeq75Etdkt1mAUpPCTsSqLVw8DXjpXc9LQ5I-lsFKI0cP-oCrNbw3I0WcFhE--_OXQVAgktXwGVtfzWBICBSX4JFeQsTqxWKo82ld9dryi8GlIv3ZoR9LvdsWwXErHz5iI4wZ7uqG?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/gettingoverit/index.html")
},
{
	title: "Soccer Random",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBLGr_YZ0CmTmXig0exrgwHvzOwvac0q3LntszT378BKYiR07HLu5dFR_kAwET0o7MV1U_8DiHaXrLPJqVWkXJiP-Cc8a-JbDKvZ06BMXpPzoEKgqwc-zO3HeSrC6t_fccdxEeaeg-YJIGktx8dZ1oaxbUXeyEQ6pZowg?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://void.radio.am/local%20games/soccer-random/soccer-random-main/index.html")
},
{

    title: "Head Soccer",

    imgSrc: "https://play-lh.googleusercontent.com/yVRLyqu3y5wKs5WKcaeeKbTZygK-rCp6SDScAyTX4XqvJlNSi4WZzbDZf2a_zR-47g",

    link: __uv$config.prefix + __uv$config.encodeUrl("https://void.radio.am/local%20games/head-soccer-2023-main/index.html")

},
{
    title: "8 Ball Pool",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBlleTS1GJYv-KCGXIRWlwuXFkTHsZQ6aXPSoBfc0TjEgQGNjnuNc6gDueGlS-5KBbA5RS32S8jPMEm0fr95gPlK-6pJudpzt29inkLDoOblWar8AUGJnpWvx87baUtiYmwKXXFxWQ4l3k2Cq-iikfG3jTJvBRpffdx8g?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://void.radio.am/local%20games/8-ball-pool-yyggames/index.html")
},
{
    title: "2 Minute Football",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDPM-mu7l0vROyVRjK2hmfH-NDVGtLwAgfwVr2bPFYzmIqtb5kxlxF1qmVL5PvjTksq9lOAuWy47LbJ8z0jszxCgslskD3Sk8WjY38tcKEhyBEapRHE3zkaTcbb4OdnPQelHFIPcYQaIAibKXGlOfmi52cMMZ6GcGNCuw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://2864e36c-59ac-424a-9df6-fadd5b105400.poki-gdn.com/d42b27af-597a-4b82-b6fa-91196e3b5a5a/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9b00601e7517075015f790e097620ef83abcb8c2&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2F2-minute-football-classic&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=2%2C93%2C775%2C854%2C869%2C929&special_condition=landing&game_id=2864e36c-59ac-424a-9df6-fadd5b105400&game_version_id=d42b27af-597a-4b82-b6fa-91196e3b5a5a&inspector=0&csp=1")
},
{
    title: "Planet Clicker",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCpc0lzQ8Oc7MdMmXxJRsKMXo6CFBr3h0jtwoNl20viKLqXPJ3FGoVCmfRKfACjugQlkL8BASUvBQdt9GLjaz7RlRAWsAxxwpXoCKkJQUg18BEGbdDw1RUdaem0cEC9pyiHoz0wFytk8rc-9wtPRT-i0Dyz_jbYaHdd?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/planetclicker.html")
},
{
    title: "Poly Track",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAnHhTfnPQtyGj9JyDQ-hHtr0abztS_6_jhOJYfIXFf0ojvR03MqSmD0efjnJC0gQzZOMQl1me1K6d39GhBwWK0uZELGZ9n__hwKZ4fcc4vqqSSa0dcx1epl2tPT_awQwGJ-eIU6bA0s29FL6YdwISTJ8oZjZlxa49T?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/polytrack")
},
{
    title: "Rocket Bot Royale",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAjx1BBhREn_rd2nc6WPdb3GJtcANGnZLSlq2yFuCOSmDUFfdUthoSkt5ZQhQr-yWiNk5DPua0eg5GaN_nRLw4zqZqOyNSP0VBr1ftFr_qaRGHxHvj_pwBQcivsnVURPzvDxenkjOjIl5txkoLw3DcUbycfS_7s8egW?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://rocketbotroyale2.winterpixel.io")
},
{

    title: "Speed Stars",

    imgSrc: "https://lh7-us.googleusercontent.com/ud4mZPl0dGjWzNuTc-rEY-lKLyqoln5Tfdo9bnk9bHYR-X0WdrD_teYV6RfG2ZAEEUgTuFVQ5_Q7xTpgyBScUxuQFbX2AVjV9VdKYgWC5h06t4uHkmv7Eu7ozqDOYmlpKeln4F75Px53YOWcPqh2A5t2V2QoQek3GjBYaxsDfgEawsFvmRvtqh56m5BJvX1UlRDC0EFy?key=yj4V8pHW144VjA9YlEbf1Q",

    link: __uv$config.prefix + __uv$config.encodeUrl("https://speedstarsfree.io/game/speed-stars")

},
{

    title: "Crazy Cattle 3D",

    imgSrc: "https://lh7-us.googleusercontent.com/A2kcwkSl4mGLLMtOm6YiuSrgezQ0KxKi9k92Ju_4z8IEvQHeXYtW6KamntKutGZJES4Fa1vUH2itvpptMC4MrOywXKHkm6aFNYnX-XWo5z2V9C7OzFEjdhZlwHX8Uwca8SmG4ceF82e3Al0QyBHqwWw5UqAjhyAPf_Wl75-dkZ7_tv8hjoI7PpPHWaIVtA146y_Y0iRs?key=yj4V8pHW144VjA9YlEbf1Q",

    link: __uv$config.prefix + __uv$config.encodeUrl("https://1games.io/game/crazy-cattle-3d")

},
{
    title: "Pokemon Showdown",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDDeT4jlXqmHMfwW0MF2lPvRydPKLtLmn7NCfj5nInVP3W1TEAkg-82RgS47dMm4k88R9lm1ylTJ7kliwQC3AFvED9phSMdsl46mXjHRoDuHffN8V8mOaQRuZ-2lrcn1DEmpoAGb1jpq2bH2BVf1ErIVijf4ULHYSiwMg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://play.pokemonshowdown.com")
},
{
    title: "Opposite Day 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAPJ9D2ZZgchHSPfUO8cyXo_Dls-vNQbZb7i-AoHQDRPIm0SzyF5LVAeP7iemNjaqoOjCVvbMv5aTLoUGk2ItlyejsDh7rZVAT0xwwEfeckRVk_aySxTWS2Z-zodmoAXc7vV1EB7juqLEMizSvf7a58SVSahtZP8uIwzg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/opposite-day-2/index.html")
},
{
    title: "Slice of Zen",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCwtjWjeY3GmiKAGLYzAX0tMNIu1YuxsPQQIiaovt1DYwNIAWY88tJGeauS127gQvWE-Umd3LF_8V1mvhi_uu8aMOQhPn2C5EKDrFSex3WeRA6it6Infx9cnHZB0xrbsdeah8roTPVPa6qEdILUNJhiuTyMvVeeCUxS9w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/html5.gamedistribution.com_1761078308/rvvASMiM/1b56d068061f412c8d33add2d6251ba0/index.html")
},
{
    title: "Block Blast",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDqPAXWF4VM40ryK5_92YOAXm7Pqw3o0d-ERwzSXGD9HzXdQIk1yLaT_iCrCed1XcZSaaG-aMTzg2pccxTY2WGMZJpzCkT79bWmcyq7JkRRmsgjzyWYld54NZ1ObMOMOueFsNKDwNZ0n6o1CaTdTbB3XvH9MEUZgI8m?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/BlockBlast/index.html")
},
{
    title: "State Connect",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDWbA8-IxnfaOceU9hDHdMxOUgkEQ8VAYmaYJKudS6_BnaatZiGU5hO6sKuUM6ZvuYAYl21uX_05zYbNxh4ZeP_XRhBc4P_IIiJR1NfiGTJ9RX8ChsFTjnfOYKh36lXEcCxm9WzamINiLwnlo9hyWsnfYBJQyGQ9UofDg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://games.cdn.famobi.com/html5games/s/state-connect/v010/?fg_domain=play.famobi.com&fg_aid=A1000-10B0B&fg_uid=da3142db-c668-477a-9191-dd901305ca16&fg_pid=48fd668a-7711-4ef7-9b1d-723b3af47503&fg_beat=070&original_ref=https%3A%2F%2Fplay.famobi.com%2Fwrapper%2Fstate-connect%2FA1000-10")
},
{
    title: "Escape Road",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDP8i92TvKYozeudO8f-fO6XWlRLBzNliSq7Py6wFszTcfE4HNojybJcQgzCN69bz16SG8jRQqLj85F4vUXDKocIRyCHOaUP-XTWE2GIU7FFawi0xvODQfMTzeENwZRVSeZx1HdACO3QvAmQIeRblUlWVgL7tY3QdMi?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/html/264.html"
},
{
    title: "Bank Robbery",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAtp3kKMlvXtNg7kdQxB8OPk-cZqDVn1MB1ZSX3PyQlSmvrvbjmy4SJNq2vfGv95ZLyD3mYeGjuNHc0SbylPMRKKyexFgCHxjVPkiO6HkGj0G5598AgIfs5ZlclIn6vYP04VipBW_k7jMBiODBwb5BBsOqaN95G-ag4vA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/testgame.html")
},
{
    title: "Use Boxmen",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCEkJDFkRIXWztwxffGaB8ugkrewGaMXyAxdHCznKFNIxJpk9uiCqAZaGHAZ8wy_9mORgLMrZ18dQ8oRQl1rb6xMYVbmTcMjNqPlNKSDCWeHx_hyqCq1Y6QTNC4xZJRZOO00ipiv1c4BGeaaPTy6egKgwmUA9u4ftOfpQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://games.kidzsearch.com/computer/flashgame_data/ruffleplayer.html?game=use-boxmen-42945")
},
{
    title: "Curve Ball",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAMdgxBA_hnwOrFWTUQQ7U5Sh7kjTd821ByEL1UyLk7DIh8GoU23rGbN46v-NuAWBSZTz5sKeGS5W5HPBNaTzsnR77tHvq0iseCNby53l18Ur_WFZGI4125M9_QH3IIJjnzL5f5HBcC58eqVRlIiqQUiqCh7U0r_krZcA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.coolmathgames.com/sites/default/files/public_games/47965")
},
{
    title: "Short Life",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBKGf-DKFZcrwY0Shl5zf9ab3x2dHcghnJWKQaY4rHYC_ipn0es8IPNGmH27iNf_nnYItcy4pWRsvxEUkCSab73pT13ccRApDfWAkB2BAFIOL94ormDZ8uMc5DCRKjssWEejiPaFP2OEYOOHVZcSs_1HO2fk6UKg1oM0A?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://classroom8.github.io/short-life")
},
{
    title: "Flip Parkour Pro",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCoiqtld3YSqwf9qjk2hs5gjuytIJRIa_p3fxQWpba723SI948z3aVXVt5qQMUZR2kcQPUw6N46KbAgTtGb2fjOyYNzChcLBeekANNgP9__Y8ahXgTbb4DZ-DLBOpF7DxxvcNkTnwAFotDJcPNIT6c1s2arhRP6hL48?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamedistribution.com/rvvASMiM/e8938917404a4ed2b249d53d1b25faaf/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3dhY2t5ZmxpcC5pby8iLCJwYXJlbnREb21haW4iOiJ3YWNreWZsaXAuaW8iLCJ0b3BEb21haW4iOiJ3YWNreWZsaXAuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9")
},
{
    title: "Retro Bowl",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB_jkTKN05q9bkWG4pZ0tnQX3eztMsVGCDYstrc1JIttSoPUbdtOsMSwFhGIum6ILKHlhvmC7dt8lGxiFhFDRA_qBdwPTxl_NaKFWFHyRYL5fwzH0VudwIjKqMn-h27jNuN7wOwrcpaPBufkUpZZGsw5O1kYhk-QpTAjg?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  "/onlylocal/Retro Bowl/index.html"
},
{
    title: "Clash Royale",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAZHCWOj0VI33kUwpj8joiAFq9Zpi6B_5No77BkdhNQmRiS5GgbX26M5lgx_iGnCQ6iMrRFf0tCWwfQpPC-dn-OyIJ7AZjefr8Ox_y7HuCIzls_vEQvm1LlIp7JIRWG13PC27c3LnuMEwBRKAXGjcd0S7jMW7zKsuv3?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/clash_royale/index.html")
},
{
    title: "Theme Hotel",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBooQN-Jn57VJUmCH7D_omEssMtOwusAfjMomQ6JxfeaaFeDqRj91h7S3TYBCDvVbduM2q75YyIe0TcRuQYkUZpjMDZAesDYJmf8tE7qLowliQsK1cYr_YK_ImOlE1H0Hj_z5_eCFOtzfHL5gZRarzFStvcZ1N8UMSQZA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/themehotel/index.html")
},
{
    title: "Granny V2 (Horror, Gore)",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAOCXCUUiC6jreRvHIfc7ACUY4nxESc2Cp3_ZkrvbvpvlALH_4AR8xqIWwNavnAMxCEvi2Qn0xA0QeMnaMj7IjG31ITzvXqgMUCe051GrQnKMqCN03iVk9Jgm-V6BT-t4xeN_N4WF0PYz7iF2YahD7S39dXKQHZ1a94vg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/granny-main/granny-main/index.html")
},
{
    title: "Granny",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCFc9d73m8AUDGlHlBSViBJP4BgxBbI-XscsqLbRxfzfgWuky1UUT6oNSnZZrchyK5oLRoQkqO8tffEWi6oBluKkiT5F5ebZ_Bm_RzI_lYREX-UBqmczRAXpdr4i9VkyAaanV-OuvagRAEb8bbpH3bCgoUzmfAI6Yv_?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://sz-games.github.io/Games8/GRANNY")
},
{
    title: "Friday Night Funkin VS Impostor v4",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDNLYq1rGgajNHTVov3hoRqOcMP9nB3alYSOA46c8kXn2lQucNgi4ULXD-zUhOPrRJn3ha9YULTopQZfyOEu2KS17MeOc_M_nUTbh3p6_Gy__psPTHzPZj4l9or3pckVcet6ciDCdgmhtHkxxQ2l7bND6aFska9tQiy?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  "/onlylocal/Friday Night Funkin VS Impostor v4.html"
},
{
	title: "Cluster Rush",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDwPyOCqStLCoartvPpMgk8thip0LRmXpyefD0UQU9I09_qbd-qO1hU7vy1nRtWeFjiN-ACbVIxcTWP3IOnE4BBrPx8-tRyTVAS3GU61dpozqLNtGj8XfXrNu85-LGJFdxysZuLLiuFjtMe2SdiUrMbfXKRStLO9N30?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/Cluster Rush.html")
},
{
    title: "Flappy Dunk",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVD8p4RNCYP73SH2B8owesS3Ycspb_vu6sugjQxVpAhyD9mQ92BR9-Z88_da756dhmAsYEXX5MhzPM_-t_VLtOBf4delN1pbHIVkmzWj6F6V1kCyINZM6yTyh3ah-ynhF09j779uquGELT66kN_NUlerz--HnIcKGm0Jvg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/flappy-dunk-crazygames/index.html")
},
{
    title: "Big Shot Boxing",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDl3ErVv11j_rUU95mATvlzawKhxf3rXf7L3Bzt367Ku73dNUdzH1rjC-tQDfzu5RciynF3MNyttxruxqPYKLJDc17wCbrciflUOZTYW0BdU3LohucdthYgW_GTzccNCsYAoYP2ySP7txWGyiTKBeccC3GYpGrR-Ac7bQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/big-shot-boxing-main/index.html")
},
{
    title: "Protektor",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAOHIrV6S5uuAb25bcnnzkyGLRvGmUL4C6ewtO9bDGApjhfNvpq4P32dsrGpn3aQEvQlxenOIm_NmBvER174_9_S-_uCPRFvXfO_-SYaLvn3FtkXuNccVZN0y1pA409Q5BOGp9Ps0_zQ6WHeijDCgZ_7O9jM9rw649z?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/protektor/index.html")
},
{
    title: "Goober Royale",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVATROLo0tNpUj7D9SrZZO3xQJOh3tvOoFIbJQcCnYi7v_cS2vMOtdn2nMaMWpiItkn3ZoTz33U2bDToBA-HWK4vu8NuLYB6g7wCTNgyse5awLoLjZqNmkrovMyLsddRr0u7tSBP6VukNGuthsoG6WPo-AP-7JU46vwxzw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://gooberroyale.winterpixel.io")
},
{
    title: "Freehead Skate",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCl4edDhIcuyqy7HgYfOsh7XbZL2vjzR2t5Jjub8G0_UbmyIhYWlEFLz9ZsxLPi1tLTMJP-qJyyXlhH8No5hnCwnk79kTxU6e3yEyK--euTrgE_P3KM4Dk9sigAf-BR-iHQA2Mstp-tm0-zmxb-od_tQrS47vscSTMpJA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://plays.org/game/freehead-skate")
},
{
    title: "skribbl.io",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVD1uds83IKSyphgSns8WGfgF8MfltkfEuxsgvAoZ7-Ml0zwEppqilFp8euvFA2-IcuWjznPGMw-5iFmg35DxysEdkGB798a7kjMkVKMavazzpYfI8NC-xR30eA60vY1LkxBtdzjirq-86LDe6EQmsqqeogb3v9sUR2W0w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink("https://skribbl.io")
},
{
    title: "neal.fun",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDKX4SHBuFruvnmslUiih-gnlsi11k9Ph8-O2DAQnoW6mqBa54SMo-SHlIQ4UcwHG6fktysbPaMzMq6TFpbHu0cmSRtOU5cA8ERHYR-cY8THYc3q05x-eQ0q_HqyJOaoUbJPMo7_BLx4AMYPISr2S-RSuQYoWpf7VFrwA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink('https://neal.fun')
},
{
    title: "zombsroyale.io",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVATDTiWyTTMwY7XHUkiyQZ_XY9i2Yd-k2UFAvZ6VU8h6msu7YqUFeA1LqHnFjeiaNIs1exZ4KfgqtF2i_yKj5nbKXU6HaADHE1xnOTw6yViYF6R3DvfN7St4oYKDzA1OeTOB669DOCB0RxWNXch2MkrUqA0t2UD5ISK?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl('https://zombsroyale.io')
},
{
    title: "yohoho.io",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVA8tb7FLtT5A90B23fU5Rd3PSFzt13ojf8O3uYY8tsACX1xzoF3UcWiHFCsS2CfxsP4a8pvTsf9oo6uJqb9cP5bbTawrmZo539HfZfrXl7Uwkm_R2lAJeeTjIuoaQEx6vd0NKt8Rq3j1_widACIlBPQMl0v3NaVIVjmdg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink('https://yohoho.io')
},
{
    title: "Online UNO",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCvsRIEpAPnKdKlWOI8nZWeTYRcABD6GTdPEFR7uHHoUiB8N-_7gHppA-gFBtly8IrKQO_0OQf9iPKeYNANi_q6DyeGaCZCor70GJcISsvMgzU0T54R3x2QYLfuWGWh_O0G0yWbJcOg9hojVtb6ZcnRZtyCbxp9O3Q1hA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamedistribution.com/rvvASMiM/f2520bae00624e93a4f4614732fa259e/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.twoplayergames.org%2Fgame%2Funo-online&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy50d29wbGF5ZXJnYW1lcy5vcmcvZ2FtZS91bm8tb25saW5lIiwicGFyZW50RG9tYWluIjoidHdvcGxheWVyZ2FtZXMub3JnIiwidG9wRG9tYWluIjoidW5vb25saW5lLmlvIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D")
},
{
    title: "Scuffed UNO",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBHNsr0iVer5icDTvlKNn5zftyHnXaeUWMXlbh0FZmr7S7L0XlYjEciHfO1Ggc2l8lyHg38__BeOMWVK96HPViTiSALjPbAF1vkXwVB9fVFbskA67_yCaH-yFFjx-WaA-k7ZtOrCVnZ3Rdpb9DQe3VNbwt07Rc_vjK2fg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://scuffeduno.online")
},
{
    title: "Ultrakill",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBVAkrncWEHwaQeACgRtp2BA2l5HmkQPDJHVdnt1yixMtrt-sv0KNCUA0f4IL-ITIDgWPL9pXpy6Lz5V672vDLSkzyZb2TbDo6B1oai0PZkGb3uQImJ7TzXBmVSYx0k92kJP2ZVnxiy44MXPrhBCXyeZTqmwBm_Vrsd3Q?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/ULTRAKILL.html")
},
{
    title: "67 Clicker Rizzmas",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAcXD9NIOeZSyvqqW-j0PHxgJa7ZQuKb1TZzMh_F9bNh_KwCxaZUVM07NoWBT07MHBVDhwjUSfDVv6MlxzJDB7srHymlEFkD-6IlKiwtrIM1sBzT6FtJ54yliOtLQB-3zYRDg4XvBejvm4obn1ustCD5BiihR5rvJquuQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  LocalGameEncoder.createEncodedLink("/local games/67.html")
},
{
    title: "Snow Line",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAwCoYb0h4m5g1jT7p8IXRFFXeW47DFuS4Su7ZQNO3JDu-LWK4gjUwuJVorL7LvWncP_zC9vyLk7X5wA7tZT4ep7o7n6S1Ks9JSAbDajwEjQ5y39dQU965g06ewdu562w6nMWFbqG0zcEtLhGpIaESqcVa0o0j2W43Q_Q?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  LocalGameEncoder.createEncodedLink("/local games/snowline/index.html")
},
{
    title: "Cuphead",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDIIiDSlQkG5i9PbypY3wv_JjddKGjt0OzZbsU9nYtKIAURD9slcyorj9NEqTIhEea32_Gpjl257W2KYT2LoYD5QgHBaNCROTHij6Am4g1lrEqVmFbcu57LhJ-PVQZi11kv11YT820-TuMMqjL6ouESuSDvCF_5OMiXMA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Cuphead.html"
},
{
    title: "Undertale Yellow",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBReZJ3GSVTQeGFflLXEZQt-CcTQhkS3M-Dm3cg45XLfyiWHWt4dthYgkuiEayq5JR1wk1bl9BGrojHHhvEhsKmcf-D1TshwgisVNa6r-CvcocG5lwBi-y8HQn4hTlJKC8_u4oXuVNQXr-hVHrymf2-2m6yhjizawrf6g?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Undertale Yellow.html"
},
{
    title: "Deltatraveler",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBIlRqUrq5--ewkhKYLi0qkuLR7JP48nawP7QpzlbDPnIaWiRcwduYTnqvERx_px0lfA59sKeWBgtm5QKCieAYwxGV6OTXTCn3eLsfiyN80lMSDuPsRW-3XO6_Hc4pvIuVPz_Kb0AW32pqkDf54K65v4PwWogowjJHlnA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Deltatraveler.html"
},
{
    title: "Neon Rocket",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDgG4w1QnRcpHkT0AGWCvt7ZzOCmRS31e3sxJ7oNDZvbcKcGqutIFamS2lPfgQJapM5QHBJsWs8nFIscQ0Zu5B00T2EVqb01hDXQGcCGVlIoXnwRONCMdsAHj89kh4BoC3iAuHOzLYPOMDKWuk1UfjPlwQv929p8r_TYA?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  __uv$config.prefix + __uv$config.encodeUrl("https://www.mortgagecalculator.org/money-games/neon-rocket/")
},
{
    title: "SoundBoard",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBO0WdFhJI3ez3F0c81VA0waZhOk8xtRxOGcjgkt2m1TMmoF-9jFOxYm-LS0numKF47y6EUGx_QjBIm7g5MxDlgkMWv-qbHqmmaWOzSjzCDlz3pug7muwXxfZUIqxR3llIkp9LyIJlLZ0avQ424n3dRmx2DIbW_s56i1g?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/soundboard.html"
},
{
    title: "Cube Field",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBaqCbxnVLGgynBGffIVEpO4J3wVSgKpBEy9d25NFPJ0dQRgoY_Ht6NkInfRTUiOu0OzjMjxxMrPnfFdBPi-H6RdaCop-M2dQeaBHh_bNcYX2ekpj2hB5VC76qL9mCTkD9H9kopXhXPTLAsEDjYcDRdWt1jFmkmz_eDiw?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  __uv$config.prefix + __uv$config.encodeUrl("https://cubefield.fbrq.io/cubefield/index.html")
},
{
    title: "Sister Location",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCfT1ddkX4x5PMo-uDr4PyENDz0tvOQofZsHmQz3ykVYMjmMrUKhNDYm93krynfPCTa1nkmQsmIY3wp3Hkdt2B9u9yrKBqHEXUXgZB9kXU2Tqsd98J1ba-_w6hJzKBwZsBg8QgjVms-5wNi6xCxDDLaizCZhPVhf5qW?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  LocalGameEncoder.createEncodedLink("/local games/FNAF5-gh-pages/index.html")
},
{
    title: "Jelly Drift",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVADeEmR8_dKZKurv8VIIq60gBE17d5XBO_he0bdJc0YnbmZPSu6azuNQx8uweKqXft5plmXHOsPGyr4L7QYwJ9v6o5i6iZz76_zalZTSy4JX5dRWSj-WIYSBS-rQm99PRD4MxjF5olAqWUWM6qTqlmc8d3dskARx3Y9Ag?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/jelly-drift/index.html"
},
{
    title: "Getting Over It (REAL)",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDsMTZo-UlCrTZcyL9LqItgcfXCqd-EpiS6ryEn3YpZ2GwvGdFk3csT3-NNKbtnfhWJRaNsugXVVsHUhVhQS26163MBVfL12YPy36ZKVL3ggruB2Be0uPKMua7Mqn25LgHRKg6YFUqW2OsfA25TQx0FzqLFac0W8KLUAA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/getting-over-it/index.html"
},
	{ "title": "Bowmasters", "imgSrc": "/onlylocal/covers/0.png", "link": "/BM/Bowmasters.html" },
  { "title": "Temple Run 2", "imgSrc": "/onlylocal/covers/10.png", "link": "/onlylocal/html/10.html" },
  { "title": "Stickman Hook", "imgSrc": "/onlylocal/covers/11.png", "link": "/onlylocal/html/11.html" },
  { "title": "Hide N Seek", "imgSrc": "/onlylocal/covers/16.png", "link": "/onlylocal/html/16.html" },
  { "title": "Mob Control HTML5", "imgSrc": "/onlylocal/covers/22.png", "link": "/onlylocal/html/22.html" },
  { "title": "Amaze", "imgSrc": "/onlylocal/covers/26.png", "link": "/onlylocal/html/26.html" },
  { "title": "Geometry Dash Lite (REMAKE)", "imgSrc": "/onlylocal/covers/27.png", "link": "/onlylocal/html/27.html" },
  { "title": "Bloons TD", "imgSrc": "/onlylocal/covers/71.png", "link": "/onlylocal/html/71.html" },
  { "title": "Cubefield", "imgSrc": "/onlylocal/covers/84.png", "link": "/onlylocal/html/84.html" },
  { "title": "Gunspin", "imgSrc": "/onlylocal/covers/91.png", "link": "/onlylocal/html/91.html" },
  { "title": "Moto X3M", "imgSrc": "/onlylocal/covers/96.png", "link": "/onlylocal/html/96.html" },
  { "title": "Moto X3M Winter", "imgSrc": "/onlylocal/covers/100.png", "link": "/onlylocal/html/100-f.html" },
  { "title": "The World's Hardest Game", "imgSrc": "/onlylocal/covers/103.png", "link": "/onlylocal/html/103.html" },
  { "title": "The World's Hardest Game 3", "imgSrc": "/onlylocal/covers/104.png", "link": "/onlylocal/html/104.html" },
  { "title": "The World's Hardest Game 4", "imgSrc": "/onlylocal/covers/105.png", "link": "/onlylocal/html/105.html" },
  { "title": "Snow Rider 3D", "imgSrc": "/onlylocal/covers/119.png", "link": "/onlylocal/html/119.html" },
  { "title": "Granny 2", "imgSrc": "/onlylocal/covers/125.png", "link": "/onlylocal/html/125.html" },
  { "title": "Chess Classic", "imgSrc": "/onlylocal/covers/151.png", "link": "/onlylocal/html/151.html" },
  { "title": "Draw the Line", "imgSrc": "/onlylocal/covers/152.png", "link": "/onlylocal/html/152.html" },
  { "title": "Melon Playground", "imgSrc": "/onlylocal/covers/172.png", "link": "/onlylocal/html/172.html" },
  { "title": "n-gon", "imgSrc": "/onlylocal/covers/180.png", "link": "/onlylocal/html/180.html" },
  { "title": "Minecraft 1.8.8", "imgSrc": "/onlylocal/covers/181.png", "link": "/onlylocal/html/181.html" },
  { "title": "R.E.P.O", "imgSrc": "/onlylocal/covers/195.png", "link": "/onlylocal/html/195.html" },
  { "title": "That's Not My Neighbor", "imgSrc": "/onlylocal/covers/216.png", "link": "/onlylocal/html/216.html" },
  { "title": "Chat Bot (A.|.I)", "imgSrc": "/onlylocal/covers/253.png", "link": "/onlylocal/html/253.html" },
  { "title": "A Bite at Freddy's", "imgSrc": "/onlylocal/covers/258.png", "link": "/onlylocal/html/258.html" },
  { "title": "BitPlanes", "imgSrc": "/onlylocal/covers/330.png", "link": "/onlylocal/html/330.html" },
  { "title": "Learn to Fly 2", "imgSrc": "/onlylocal/covers/341.png", "link": "/onlylocal/html/341.html" },
  { "title": "Adventure Capatalist", "imgSrc": "/onlylocal/covers/354.png", "link": "/onlylocal/html/354-a.html" },
  { "title": "Slowroads", "imgSrc": "/onlylocal/covers/369.png", "link": "/onlylocal/html/369.html" },
  { "title": "2048 Merge Run", "imgSrc": "/onlylocal/covers/375.png", "link": "/onlylocal/html/375.html" },
  { "title": "Andy's Apple Farm", "imgSrc": "/onlylocal/covers/426.png", "link": "/onlylocal/html/426.html" },
  { "title": "God's Flesh", "imgSrc": "/onlylocal/covers/434.png", "link": "/onlylocal/html/434.html" },
  { "title": "Nijika's Ahoge", "imgSrc": "/onlylocal/covers/447.png", "link": "/onlylocal/html/447-e.html" },
  { "title": "Aquapark.io", "imgSrc": "/onlylocal/covers/448.png", "link": "/onlylocal/html/448.html" },
  { "title": "Bad Time Simulator", "imgSrc": "/onlylocal/covers/472.png", "link": "/onlylocal/html/472.html" },
  { "title": "Steal A Brainrot", "imgSrc": "/onlylocal/covers/479.png", "link": "/onlylocal/html/479.html" },
  { "title": "Human Expenditure Program", "imgSrc": "/onlylocal/covers/482.png", "link": "/onlylocal/html/482-2.html" },
  { "title": "Touhou Mother", "imgSrc": "/onlylocal/covers/523.png", "link": "/onlylocal/html/523-f.html" },
  { "title": "Cat Gunner: Super Zombie Shoot", "imgSrc": "/onlylocal/covers/537.png", "link": "/onlylocal/html/537.html" },
  { "title": "Karlson", "imgSrc": "/onlylocal/covers/542.png", "link": "/onlylocal/html/542-a.html" },
  { "title": "Getting Over It with Bennett Foddy", "imgSrc": "/onlylocal/covers/557.png", "link": "/onlylocal/html/557.html" },
  { "title": "Highway Racer 2 REMASTERED", "imgSrc": "/onlylocal/covers/568.png", "link": "/onlylocal/html/568.html" },
  { "title": "Steal Brainrot Online", "imgSrc": "/onlylocal/covers/577.png", "link": "/onlylocal/html/577.html" },
  { "title": "BuildNow.gg", "imgSrc": "/onlylocal/covers/581.png", "link": "/onlylocal/html/581.html" },
  { "title": "Stone Grass Mowing Simulator", "imgSrc": "/onlylocal/covers/584-a.png", "link": "/onlylocal/html/584.html" },
  { "title": "Plants vs. Zombies 2 Gardenless", "imgSrc": "/onlylocal/covers/597.png", "link": "/onlylocal/html/597-a.html" },
  { "title": "Sonic.EXE", "imgSrc": "/onlylocal/covers/598.png", "link": "/onlylocal/html/598.html" },
  { "title": "Metal Gear Solid", "imgSrc": "/onlylocal/covers/599.png", "link": "/onlylocal/html/599.html" },
  { "title": "Schoolboy Runaway", "imgSrc": "/onlylocal/covers/605.png", "link": "/onlylocal/html/605-e.html" },
  { "title": "Sonic.EXE (ORIGINAL)", "imgSrc": "/onlylocal/covers/606.png", "link": "/onlylocal/html/606-e.html" },
  { "title": "Tattletail", "imgSrc": "/onlylocal/covers/607.png", "link": "/onlylocal/html/607-e.html" },
  { "title": "Friday Night Funkin vs Sunday Remastered HD", "imgSrc": "/onlylocal/covers/609.png", "link": "/onlylocal/html/609-a.html" },
  { "title": "Postal", "imgSrc": "/onlylocal/covers/617.png", "link": "/onlylocal/html/617-a.html" },
  { "title": "Oneshot (LEGACY)", "imgSrc": "/onlylocal/covers/622.png", "link": "/onlylocal/html/622.html" },
  { "title": "Doom 3", "imgSrc": "/onlylocal/covers/626.png", "link": "/onlylocal/html/626-f.html" },
  { "title": "Pizza Tower: Scoutdigo", "imgSrc": "/onlylocal/covers/628.png", "link": "/onlylocal/html/628-f.html" },
  { "title": "Off", "imgSrc": "/onlylocal/covers/629.png", "link": "/onlylocal/html/629.html" },
  { "title": "Endroll", "imgSrc": "/onlylocal/covers/631.png", "link": "/onlylocal/html/631-a.html" },
  { "title": "Cave Story", "imgSrc": "/onlylocal/covers/632.png", "link": "/onlylocal/html/632-a.html" },
  { "title": "BFDIA 5b: 5*30", "imgSrc": "/onlylocal/covers/638.gif", "link": "/onlylocal/html/638-f.html" },
  { "title": "Friday Night Funkin vs Nonsense", "imgSrc": "/onlylocal/covers/644.png", "link": "/onlylocal/html/644.html" },
  { "title": "Arthur's Nightmare", "imgSrc": "/onlylocal/covers/645.png", "link": "/onlylocal/html/645-e.html" },
  { "title": "Mindwave", "imgSrc": "/onlylocal/covers/648.png", "link": "/onlylocal/html/648-el.html" },
  { "title": "Milk Inside a Bag of Milk Inside a Bag of Milk", "imgSrc": "/onlylocal/covers/650.png", "link": "/onlylocal/html/650-f.html" },
  { "title": "Milk Outside A Bag Of Milk Outside A Bag Of Milk", "imgSrc": "/onlylocal/covers/651.png", "link": "/onlylocal/html/651.html" },
  { "title": "1 Date Danger", "imgSrc": "/onlylocal/covers/653.png", "link": "/onlylocal/html/653-f.html" },
  { "title": "Final Fantasy VII", "imgSrc": "/onlylocal/covers/654.png", "link": "/onlylocal/html/654.html" },
  { "title": "Goblin Goopmaxxing", "imgSrc": "/onlylocal/covers/655.png", "link": "/onlylocal/html/655.html" },
  { "title": "Rogue Sergeant The Final Operation", "imgSrc": "/onlylocal/covers/656.png", "link": "/onlylocal/html/656.html" },
  { "title": "Friday Night Funkin vs Undertale", "imgSrc": "/onlylocal/covers/657.png", "link": "/onlylocal/html/657.html" },
  { "title": "Midnight Shift", "imgSrc": "/onlylocal/covers/658.png", "link": "/onlylocal/html/658.html" },
  { "title": "Orange Roulette", "imgSrc": "/onlylocal/covers/659.png", "link": "/onlylocal/html/659.html" },
  { "title": "Please Dont Touch Anything", "imgSrc": "/onlylocal/covers/660.png", "link": "/onlylocal/html/660.html" },
  { "title": "Royal Towers: Medieval TD", "imgSrc": "/onlylocal/covers/661.png", "link": "/onlylocal/html/661.html" },
  { "title": "Going Balls", "imgSrc": "/onlylocal/covers/662.png", "link": "/onlylocal/html/662.html" },
  { "title": "3D Bolt Master", "imgSrc": "/onlylocal/covers/663.png", "link": "/onlylocal/html/663.html" },
  { "title": "Tall.io", "imgSrc": "/onlylocal/covers/664.png", "link": "/onlylocal/html/664.html" },
  { "title": "Match Triple 3D", "imgSrc": "/onlylocal/covers/665.png", "link": "/onlylocal/html/665.html" },
  { "title": "Stick War: Legacy", "imgSrc": "/onlylocal/covers/666.png", "link": "/onlylocal/html/666.html" },
  { "title": "In Stars and Time", "imgSrc": "/onlylocal/covers/667.png", "link": "/onlylocal/html/667-fix.html" },
  { "title": "Gorilla Tag", "imgSrc": "/onlylocal/covers/668.png", "link": "/onlylocal/html/668-fix2.html" },
  { "title": "Terraria", "imgSrc": "/onlylocal/covers/669.png", "link": "/onlylocal/html/669.html" },
  { "title": "Raldi's Crackhouse", "imgSrc": "/onlylocal/covers/670.png", "link": "/onlylocal/html/670.html" },
  { "title": "We Become What We Behold", "imgSrc": "/onlylocal/covers/671.png", "link": "/onlylocal/html/671.html" },
  { "title": "A Difficult Game About Climbing", "imgSrc": "/onlylocal/covers/672.png", "link": "/onlylocal/html/672-2.html" },
  { "title": "Hobo 1", "imgSrc": "/onlylocal/covers/673.png", "link": "/onlylocal/html/673.html" },
  { "title": "Hobo 2", "imgSrc": "/onlylocal/covers/674.png", "link": "/onlylocal/html/674.html" },
  { "title": "Hobo 3", "imgSrc": "/onlylocal/covers/675.png", "link": "/onlylocal/html/675.html" },
  { "title": "Hobo 4", "imgSrc": "/onlylocal/covers/676.png", "link": "/onlylocal/html/676.html" },
  { "title": "Hobo 5", "imgSrc": "/onlylocal/covers/677.png", "link": "/onlylocal/html/677.html" },
  { "title": "Hobo 6", "imgSrc": "/onlylocal/covers/678.png", "link": "/onlylocal/html/678.html" },
  { "title": "Hobo 7", "imgSrc": "/onlylocal/covers/679.png", "link": "/onlylocal/html/679.html" },
  { "title": "Kirby Super Star Ultra", "imgSrc": "/onlylocal/covers/680.png", "link": "/onlylocal/html/680.html" },
  { "title": "Cooking Mama", "imgSrc": "/onlylocal/covers/681.png", "link": "/onlylocal/html/681.html" },
  { "title": "Cooking Mama 2", "imgSrc": "/onlylocal/covers/682.png", "link": "/onlylocal/html/682.html" },
  { "title": "Cooking Mama 3", "imgSrc": "/onlylocal/covers/683.png", "link": "/onlylocal/html/683.html" },
  { "title": "Kirby Squeak Squad", "imgSrc": "/onlylocal/covers/684.png", "link": "/onlylocal/html/684.html" },
  { "title": "FIFA 11", "imgSrc": "/onlylocal/covers/685.png", "link": "/onlylocal/html/685.html" },
  { "title": "FIFA 10", "imgSrc": "/onlylocal/covers/686.png", "link": "/onlylocal/html/686.html" },
  { "title": "Pico's School (1999)", "imgSrc": "/onlylocal/covers/687.png", "link": "/onlylocal/html/687.html" },
  { "title": "Peggle", "imgSrc": "/onlylocal/covers/688.png", "link": "/onlylocal/html/688.html" },
  { "title": "Meatboy", "imgSrc": "/onlylocal/covers/689.png", "link": "/onlylocal/html/689.html" },
  { "title": "Kirby ~ Soft & Wet", "imgSrc": "/onlylocal/covers/692.png", "link": "/onlylocal/html/692.html" },
  { "title": "Half Life: Opposing Force", "imgSrc": "/onlylocal/covers/693.png", "link": "/onlylocal/html/693.html" },
  { "title": "Pokemon Firered", "imgSrc": "/onlylocal/covers/694.png", "link": "/onlylocal/html/694.html" },
  { "title": "Duck Life 8", "imgSrc": "/onlylocal/covers/695.png", "link": "/onlylocal/html/695.html" },
  { "title": "Pokemon HeartGold", "imgSrc": "/onlylocal/covers/696.png", "link": "/onlylocal/html/696.html" },
  { "title": "Bank Robbery 3", "imgSrc": "/onlylocal/covers/698.png", "link": "/onlylocal/html/698.html" },
  { "title": "Stickman Destruction", "imgSrc": "/onlylocal/covers/699.png", "link": "/onlylocal/html/699.html" },
  { "title": "FNF vs Pibby Corrupted", "imgSrc": "/onlylocal/covers/700.png", "link": "/onlylocal/html/700.html" },
  { "title": "Real Flight Simulator", "imgSrc": "/onlylocal/covers/701.png", "link": "/onlylocal/html/701.html" },
  { "title": "JavascriptPS1", "imgSrc": "/onlylocal/covers/702.png", "link": "/onlylocal/html/702.html" },
  { "title": "VS Rewrite: ROUND 2", "imgSrc": "/onlylocal/covers/703.png", "link": "/onlylocal/html/703.html" },
  { "title": "Iron Lung", "imgSrc": "/onlylocal/covers/705.png", "link": "/onlylocal/html/705-fix.html" },
  { "title": "Fear & Hunger", "imgSrc": "/onlylocal/covers/706.png", "link": "/onlylocal/html/706-fix.html" },
  { "title": "Traffic Racer", "imgSrc": "/onlylocal/covers/707.png", "link": "/onlylocal/html/707-fix.html" },
  { "title": "Needy Streamer Overload", "imgSrc": "/onlylocal/covers/708.png", "link": "/onlylocal/html/708-fix.html" },
  { "title": "Survivor.io", "imgSrc": "/onlylocal/covers/709.png", "link": "/onlylocal/html/709-fixagain.html" },
  { "title": "Five Nights at Epstein's", "imgSrc": "/onlylocal/covers/710.png", "link": "/onlylocal/html/710-fix.html" },
  { "title": "Antonblast", "imgSrc": "/onlylocal/covers/711.png", "link": "/onlylocal/html/711.html" },
  { "title": "Jumbo Mario", "imgSrc": "/onlylocal/covers/712.png", "link": "/onlylocal/html/712.html" },
  { "title": "Silent Hill", "imgSrc": "/onlylocal/covers/713.png", "link": "/onlylocal/html/713.html" },
  { "title": "Friday Night Funkin vs Tabi", "imgSrc": "/onlylocal/covers/714.png", "link": "/onlylocal/html/714.html" },
  { "title": "Friday Night Funkin vs Zardy", "imgSrc": "/onlylocal/covers/715.png", "link": "/onlylocal/html/715.html" },
  { "title": "Clover Pit", "imgSrc": "/onlylocal/covers/716.png", "link": "/onlylocal/html/716-fix2.html" },
  { "title": "Peaks of Yore", "imgSrc": "/onlylocal/covers/717.png", "link": "/onlylocal/html/717-fix2.html" },
  { "title": "Untitled Goose Game", "imgSrc": "/onlylocal/covers/718.png", "link": "/onlylocal/html/718.html" },
  { "title": "A Game About Feeding A Black Hole", "imgSrc": "/onlylocal/covers/719.png", "link": "/onlylocal/html/719.html" },
  { "title": "Roulette Hero", "imgSrc": "/onlylocal/covers/720.png", "link": "/onlylocal/html/720.html" },
  { "title": "Shift at Midnight", "imgSrc": "/onlylocal/covers/721.png", "link": "/onlylocal/html/721.html" },
  { "title": "Fused 240", "imgSrc": "/onlylocal/covers/722.png", "link": "/onlylocal/html/722.html" },
  { "title": "Brotato", "imgSrc": "/onlylocal/covers/723.png", "link": "/onlylocal/html/723.html" },
  { "title": "Endoparasitic 2", "imgSrc": "/onlylocal/covers/724.png", "link": "/onlylocal/html/724.html" },
  { "title": "ShredSauce", "imgSrc": "/onlylocal/covers/725.png", "link": "/onlylocal/html/725-ff.html" },
  { "title": "Breath of the Wild NDS", "imgSrc": "/onlylocal/covers/726.png", "link": "/onlylocal/html/726.html" },
  { "title": "Dimension Incident", "imgSrc": "/onlylocal/covers/727.png", "link": "/onlylocal/html/727.html" },
  { "title": "Fear Assessment", "imgSrc": "/onlylocal/covers/728.png", "link": "/onlylocal/html/728.html" },
  { "title": "game inside a game inside a game inside a game inside a game inside a game", "imgSrc": "/onlylocal/covers/729.png", "link": "/onlylocal/html/729.html" },
  { "title": "Cell Machine", "imgSrc": "/onlylocal/covers/730.png", "link": "/onlylocal/html/730.html" },
  { "title": "Undertale: Last Breath", "imgSrc": "/onlylocal/covers/731.png", "link": "/onlylocal/html/731.html" },
  { "title": "64 in 1 NES", "imgSrc": "/onlylocal/covers/732.png", "link": "/onlylocal/html/732.html" },
  { "title": "Tetris", "imgSrc": "/onlylocal/covers/733.png", "link": "/onlylocal/html/733.html" },
  { "title": "Christmas Massacre", "imgSrc": "/onlylocal/covers/734.png", "link": "/onlylocal/html/734.html" },
  { "title": "Famidash", "imgSrc": "/onlylocal/covers/735.png", "link": "/onlylocal/html/735.html" },
  { "title": "Super Mario Bros. Remastered", "imgSrc": "/onlylocal/covers/736.png", "link": "/onlylocal/html/736.html" },
  { "title": "Saihate Station (さいはて駅)", "imgSrc": "/onlylocal/covers/737.png", "link": "/onlylocal/html/737.html" },

	{
    title: "12 Mini Battles",
    imgSrc: "/onlylocal/covers/295.png",
    link: "/onlylocal/html/295.html"
},
{
    title: "1v1.LoL",
    imgSrc: "/onlylocal/covers/58.png",
    link: "/onlylocal/html/58.html"
},
{
    title: "3D Bowling",
    imgSrc: "/onlylocal/covers/320.png",
    link: "/onlylocal/html/320.html"
},
{
    title: "8 Ball Classic",
    imgSrc: "/onlylocal/covers/146.png",
    link: "/onlylocal/html/146.html"
},
{
    title: "Achievement Unlocked",
    imgSrc: "/onlylocal/covers/60.png",
    link: "/onlylocal/html/60.html"
},
{
    title: "Achievement Unlocked 2",
    imgSrc: "/onlylocal/covers/61.png",
    link: "/onlylocal/html/61.html"
},
{
    title: "Achievement Unlocked 3",
    imgSrc: "/onlylocal/covers/62.png",
    link: "/onlylocal/html/62.html"
},
{
    title: "Alien Hominid",
    imgSrc: "/onlylocal/covers/304.png",
    link: "/onlylocal/html/304.html"
},
{
    title: "Angry Birds",
    imgSrc: "/onlylocal/covers/63.png",
    link: "/onlylocal/html/63.html"
},
{
    title: "Angry Birds Chrome",
    imgSrc: "/onlylocal/covers/316.png",
    link: "/onlylocal/html/316.html"
},
{
    title: "Angry Birds Showdown",
    imgSrc: "/onlylocal/covers/147.png",
    link: "/onlylocal/html/147.html"
},
{
    title: "Archery World Tour",
    imgSrc: "/onlylocal/covers/148.png",
    link: "/onlylocal/html/148.html"
},
{
    title: "Attack Hole",
    imgSrc: "/onlylocal/covers/13.png",
    link: "/onlylocal/html/13.html"
},
{
    title: "Backrooms",
    imgSrc: "/onlylocal/covers/64.png",
    link: "/onlylocal/html/64.html"
},
{
    title: "Bad Ice Cream",
    imgSrc: "/onlylocal/covers/269.png",
    link: "/onlylocal/html/269.html"
},
{
    title: "Bad Ice Cream 2",
    imgSrc: "/onlylocal/covers/270.png",
    link: "/onlylocal/html/270.html"
},
{
    title: "Bad Ice Cream 3",
    imgSrc: "/onlylocal/covers/271.png",
    link: "/onlylocal/html/271.html"
},
{
    title: "Bad Parenting 1",
    imgSrc: "/onlylocal/covers/166.png",
    link: "/onlylocal/html/166.html"
},
{
    title: "Ball Blast",
    imgSrc: "/onlylocal/covers/149.png",
    link: "/onlylocal/html/149.html"
},
{
    title: "Basket Battle",
    imgSrc: "/onlylocal/covers/25.png",
    link: "/onlylocal/html/25.html"
},
{
    title: "Basket Bros",
    imgSrc: "/onlylocal/covers/285.png",
    link: "/onlylocal/html/285.html"
},
{
    title: "Basket Random",
    imgSrc: "/onlylocal/covers/66.png",
    link: "/onlylocal/html/66.html"
},
{
    title: "Basketball Frvr",
    imgSrc: "/onlylocal/covers/28.png",
    link: "/onlylocal/html/28.html"
},
{
    title: "Bazooka Boy",
    imgSrc: "/onlylocal/covers/29.png",
    link: "/onlylocal/html/29.html"
},
{
    title: "Bendy and the Ink Machine",
    imgSrc: "/onlylocal/covers/215.png",
    link: "/onlylocal/html/215.html"
},
{
    title: "BlackJack",
    imgSrc: "/onlylocal/covers/312.png",
    link: "/onlylocal/html/312.html"
},
{
    title: "Blade Ball",
    imgSrc: "/onlylocal/covers/167.png",
    link: "/onlylocal/html/167.html"
},
{
    title: "BlockPost",
    imgSrc: "/onlylocal/covers/273.png",
    link: "/onlylocal/html/273.html"
},
{
    title: "Blocky Snakes",
    imgSrc: "/onlylocal/covers/168.png",
    link: "/onlylocal/html/168.html"
},
{
    title: "Bloons TD 2",
    imgSrc: "/onlylocal/covers/72.png",
    link: "/onlylocal/html/72.html"
},
{
    title: "Bloons TD 3",
    imgSrc: "/onlylocal/covers/73.png",
    link: "/onlylocal/html/73.html"
},
{
    title: "Bloons TD 4",
    imgSrc: "/onlylocal/covers/74.png",
    link: "/onlylocal/html/74.html"
},
{
    title: "Bloons TD 5",
    imgSrc: "/onlylocal/covers/75.png",
    link: "/onlylocal/html/75.html"
},
{
    title: "Bloxorz",
    imgSrc: "/onlylocal/covers/169.png",
    link: "/onlylocal/html/169.html"
},
{
    title: "Bob The Robber 2",
    imgSrc: "/onlylocal/covers/76.png",
    link: "/onlylocal/html/76.html"
},
{
    title: "Bottle Jump 3D",
    imgSrc: "/onlylocal/covers/30.png",
    link: "/onlylocal/html/30.html"
},
{
    title: "Brawl Guys.io",
    imgSrc: "/onlylocal/covers/121.png",
    link: "/onlylocal/html/121.html"
},
{
    title: "Bridge Race",
    imgSrc: "/onlylocal/covers/14.png",
    link: "/onlylocal/html/14.html"
},
{
    title: "Buckshot Roulette",
    imgSrc: "/onlylocal/covers/205.png",
    link: "/onlylocal/html/205.html"
},
{
    title: "Build a Queen",
    imgSrc: "/onlylocal/covers/319.png",
    link: "/onlylocal/html/319.html"
},
{
    title: "Cannon Balls 3D",
    imgSrc: "/onlylocal/covers/150.png",
    link: "/onlylocal/html/150.html"
},
{
    title: "Cannon Basketball",
    imgSrc: "/onlylocal/covers/79.png",
    link: "/onlylocal/html/79.html"
},
{
    title: "Cannon Basketball 2",
    imgSrc: "/onlylocal/covers/80.png",
    link: "/onlylocal/html/80.html"
},
{
    title: "Carrom Clash",
    imgSrc: "/onlylocal/covers/202.png",
    link: "/onlylocal/html/202.html"
},
{
    title: "Cheese Chompers 3D",
    imgSrc: "/onlylocal/covers/165.png",
    link: "/onlylocal/html/165.html"
},
{
    title: "CircloO",
    imgSrc: "/onlylocal/covers/274.png",
    link: "/onlylocal/html/274.html"
},
{
    title: "CircloO 2",
    imgSrc: "/onlylocal/covers/275.png",
    link: "/onlylocal/html/275.html"
},
{
    title: "Color Match",
    imgSrc: "/onlylocal/covers/31.png",
    link: "/onlylocal/html/31.html"
},
{
    title: "Color Water Sort 3D",
    imgSrc: "/onlylocal/covers/15.png",
    link: "/onlylocal/html/15.html"
},
{
    title: "Crazy Chicken 3D",
    imgSrc: "/onlylocal/covers/255.png",
    link: "/onlylocal/html/255.html"
},
{
    title: "Crazy Kitty 3D",
    imgSrc: "/onlylocal/covers/256.png",
    link: "/onlylocal/html/256.html"
},
{
    title: "Dig Deep",
    imgSrc: "/onlylocal/covers/32.png",
    link: "/onlylocal/html/32.html"
},
{
    title: "Do NOT Take This Cat Home",
    imgSrc: "/onlylocal/covers/193.png",
    link: "/onlylocal/html/193.html"
},
{
    title: "Doki Doki Literature Club",
    imgSrc: "/onlylocal/covers/189.png",
    link: "/onlylocal/html/189.html"
},
{
    title: "DOOM",
    imgSrc: "/onlylocal/covers/203.png",
    link: "/onlylocal/html/203.html"
},
{
    title: "Dragon vs Bricks",
    imgSrc: "/onlylocal/covers/210.png",
    link: "/onlylocal/html/210.html"
},
{
    title: "Draw Climber",
    imgSrc: "/onlylocal/covers/86.png",
    link: "/onlylocal/html/86.html"
},
{
    title: "Dreadhead Parkour",
    imgSrc: "/onlylocal/covers/310.png",
    link: "/onlylocal/html/310.html"
},
{
    title: "Drive Mad",
    imgSrc: "/onlylocal/covers/35.png",
    link: "/onlylocal/html/35.html"
},
{
    title: "Driven Wild",
    imgSrc: "/onlylocal/covers/43.png",
    link: "/onlylocal/html/43.html"
},
{
    title: "Elastic Man",
    imgSrc: "/onlylocal/covers/197.png",
    link: "/onlylocal/html/197.html"
},
{
    title: "Emulator.JS",
    imgSrc: "/onlylocal/covers/87.png",
    link: "/onlylocal/html/87.html"
},
{
    title: "Endoparasitic",
    imgSrc: "/onlylocal/covers/286.png",
    link: "/onlylocal/html/286.html"
},
{
    title: "Evil Glitch",
    imgSrc: "/onlylocal/covers/277.png",
    link: "/onlylocal/html/277.html"
},
{
    title: "Fashion Battle",
    imgSrc: "/onlylocal/covers/127.png",
    link: "/onlylocal/html/127.html"
},
{
    title: "Find the Alien",
    imgSrc: "/onlylocal/covers/323.png",
    link: "/onlylocal/html/323.html"
},
{
    title: "Fork n Sausage",
    imgSrc: "/onlylocal/covers/154.png",
    link: "/onlylocal/html/154.html"
},
{
    title: "Fortzone Battle Royale",
    imgSrc: "/onlylocal/covers/120.png",
    link: "/onlylocal/html/120.html"
},
{
    title: "Fruit Ninja",
    imgSrc: "/onlylocal/covers/261.png",
    link: "/onlylocal/html/261.html"
},
{
    title: "Gobble",
    imgSrc: "/onlylocal/covers/37.png",
    link: "/onlylocal/html/37.html"
},
{
    title: "Google Baseball",
    imgSrc: "/onlylocal/covers/257.png",
    link: "/onlylocal/html/257.html"
},
{
    title: "Guess Their Answer",
    imgSrc: "/onlylocal/covers/155.png",
    link: "/onlylocal/html/155.html"
},
{
    title: "Half Life",
    imgSrc: "/onlylocal/covers/262.png",
    link: "/onlylocal/html/262.html"
},
{
    title: "Harvest.io",
    imgSrc: "/onlylocal/covers/156.png",
    link: "/onlylocal/html/156.html"
},
{
    title: "Highway Racer 2",
    imgSrc: "/onlylocal/covers/92.png",
    link: "/onlylocal/html/92.html"
},
{
    title: "Hill Climb Racing Lite",
    imgSrc: "/onlylocal/covers/157.png",
    link: "/onlylocal/html/157.html"
},
{
    title: "Hotline Miami",
    imgSrc: "/onlylocal/covers/217.png",
    link: "/onlylocal/html/217.html"
},
{
    title: "Ice Dodo",
    imgSrc: "/onlylocal/covers/5.png",
    link: "/onlylocal/html/5.html"
},
{
    title: "Idle Dice",
    imgSrc: "/onlylocal/covers/294.png",
    link: "/onlylocal/html/294.html"
},
{
    title: "Jelly Mario",
    imgSrc: "/onlylocal/covers/315.png",
    link: "/onlylocal/html/315.html"
},
{
    title: "Jetpack Joyride",
    imgSrc: "/onlylocal/covers/7.png",
    link: "/onlylocal/html/7.html"
},
{
    title: "Johnny Trigger",
    imgSrc: "/onlylocal/covers/93.png",
    link: "/onlylocal/html/93.html"
},
{
    title: "Journey Downhill",
    imgSrc: "/onlylocal/covers/94.png",
    link: "/onlylocal/html/94.html"
},
{
    title: "Kitchen Bazar",
    imgSrc: "/onlylocal/covers/325.png",
    link: "/onlylocal/html/325.html"
},
{
    title: "Line Rider",
    imgSrc: "/onlylocal/covers/95.png",
    link: "/onlylocal/html/95.html"
},
{
    title: "Little Runmo",
    imgSrc: "/onlylocal/covers/302.png",
    link: "/onlylocal/html/302.html"
},
{
    title: "Madalin Stunt Cars 2",
    imgSrc: "/onlylocal/covers/278.png",
    link: "/onlylocal/html/278.html"
},
{
    title: "Madalin Stunt Cars 3",
    imgSrc: "/onlylocal/covers/279.png",
    link: "/onlylocal/html/279.html"
},
{
    title: "Magic Tiles 3",
    imgSrc: "/onlylocal/covers/17.png",
    link: "/onlylocal/html/17.html"
},
{
    title: "Maze Speedrun",
    imgSrc: "/onlylocal/covers/324.png",
    link: "/onlylocal/html/324.html"
},
{
    title: "Minesweeper Mania",
    imgSrc: "/onlylocal/covers/313.png",
    link: "/onlylocal/html/313.html"
},
{
    title: "Monster Tracks",
    imgSrc: "/onlylocal/covers/36.png",
    link: "/onlylocal/html/36.html"
},
{
    title: "Nazi Zombies: Portable",
    imgSrc: "/onlylocal/covers/308.png",
    link: "/onlylocal/html/308.html"
},
{
    title: "Ninja vs EvilCorp",
    imgSrc: "/onlylocal/covers/101.png",
    link: "/onlylocal/html/101.html"
},
{
    title: "Offroad Mountain Bike",
    imgSrc: "/onlylocal/covers/116.png",
    link: "/onlylocal/html/116.html"
},
{
    title: "Om Nom Run",
    imgSrc: "/onlylocal/covers/328.png",
    link: "/onlylocal/html/328.html"
},
{
    title: "osu!",
    imgSrc: "/onlylocal/covers/130.png",
    link: "/onlylocal/html/130.html"
},
{
    title: "Pac-Man Superfast",
    imgSrc: "/onlylocal/covers/158.png",
    link: "/onlylocal/html/158.html"
},
{
    title: "Papers, Please",
    imgSrc: "/onlylocal/covers/187.png",
    link: "/onlylocal/html/187.html"
},
{
    title: "Parking Rush",
    imgSrc: "/onlylocal/covers/159.png",
    link: LocalGameEncoder.createEncodedLink("/local games/parkingrush/9mwf64k6r0bz/v7/index.html")
},
{
    title: "Pixel Gun Survival",
    imgSrc: "/onlylocal/covers/281.png",
    link: "/onlylocal/html/281.html"
},
{
    title: "Pizza Tower",
    imgSrc: "/onlylocal/covers/267.png",
    link: "/onlylocal/html/267.html"
},
{
    title: "Plants vs Zombies",
    imgSrc: "/onlylocal/covers/232.png",
    link: "/onlylocal/html/232.html"
},
{
    title: "Play!.js",
    imgSrc: "/onlylocal/covers/296.png",
    link: "/onlylocal/html/296.html"
},
{
    title: "Pokey Ball",
    imgSrc: "/onlylocal/covers/326.png",
    link: "/onlylocal/html/326.html"
},
{
    title: "Pou",
    imgSrc: "/onlylocal/covers/23.png",
    link: "/onlylocal/html/23.html"
},
{
    title: "Quake III Arena",
    imgSrc: "/onlylocal/covers/263.png",
    link: "/onlylocal/html/263.html"
},
{
    title: "Race Master 3D",
    imgSrc: "/onlylocal/covers/160.png",
    link: "/onlylocal/html/160.html"
},
{
    title: "Rainbow Obby",
    imgSrc: "/onlylocal/covers/307.png",
    link: "/onlylocal/html/307.html"
},
{
    title: "RE:RUN",
    imgSrc: "/onlylocal/covers/260.png",
    link: "/onlylocal/html/260.html"
},
{
    title: "Red Ball",
    imgSrc: "/onlylocal/covers/239.png",
    link: "/onlylocal/html/239.html"
},
{
    title: "Red Ball 2",
    imgSrc: "/onlylocal/covers/240.png",
    link: "/onlylocal/html/240.html"
},
{
    title: "Red Ball 3",
    imgSrc: "/onlylocal/covers/241.png",
    link: "/onlylocal/html/241.html"
},
{
    title: "Red Ball 4",
    imgSrc: "/onlylocal/covers/242.png",
    link: "/onlylocal/html/242.html"
},
{
    title: "Red Ball 4 Vol. 2",
    imgSrc: "/onlylocal/covers/243.png",
    link: "/onlylocal/html/243.html"
},
{
    title: "Red Ball 4 Vol. 3",
    imgSrc: "/onlylocal/covers/244.png",
    link: "/onlylocal/html/244.html"
},
{
    title: "Riddle School",
    imgSrc: "/onlylocal/covers/287.png",
    link: "/onlylocal/html/287.html"
},
{
    title: "Riddle School 2",
    imgSrc: "/onlylocal/covers/288.png",
    link: "/onlylocal/html/288.html"
},
{
    title: "Riddle School 3",
    imgSrc: "/onlylocal/covers/289.png",
    link: "/onlylocal/html/289.html"
},
{
    title: "Riddle School 4",
    imgSrc: "/onlylocal/covers/290.png",
    link: "/onlylocal/html/290.html"
},
{
    title: "Riddle School 5",
    imgSrc: "/onlylocal/covers/291.png",
    link: "/onlylocal/html/291.html"
},
{
    title: "Riddle Transfer",
    imgSrc: "/onlylocal/covers/292.png",
    link: "/onlylocal/html/292.html"
},
{
    title: "Riddle Transfer 2",
    imgSrc: "/onlylocal/covers/293.png",
    link: "/onlylocal/html/293.html"
},
{
    title: "Road of Fury",
    imgSrc: "/onlylocal/covers/42.png",
    link: "/onlylocal/html/42.html"
},
{
    title: "Rolly Vortex",
    imgSrc: "/onlylocal/covers/208.png",
    link: "/onlylocal/html/208.html"
},
{
    title: "Room Sort",
    imgSrc: "/onlylocal/covers/321.png",
    link: "/onlylocal/html/321.html"
},
{
    title: "Ruffle",
    imgSrc: "/onlylocal/covers/113.png",
    link: "/onlylocal/html/113.html"
},
{
    title: "Sandboxels",
    imgSrc: "/onlylocal/covers/309.png",
    link: "/onlylocal/html/309.html"
},
{
    title: "sandspiel",
    imgSrc: "/onlylocal/covers/317.png",
    link: "/onlylocal/html/317.html"
},
{
    title: "Sandtris",
    imgSrc: "/onlylocal/covers/311.png",
    link: "/onlylocal/html/311.html"
},
{
    title: "Scrap Metal 3",
    imgSrc: "/onlylocal/covers/188.png",
    link: "/onlylocal/html/188.html"
},
{
    title: "Shipo.io",
    imgSrc: "/onlylocal/covers/306.png",
    link: "/onlylocal/html/306.html"
},
{
    title: "Side Effects",
    imgSrc: "/onlylocal/covers/318.png",
    link: "/onlylocal/html/318.html"
},
{
    title: "Slice it All",
    imgSrc: "/onlylocal/covers/128.png",
    link: "/onlylocal/html/128.html"
},
{
    title: "Slime.io",
    imgSrc: "/onlylocal/covers/327.png",
    link: "/onlylocal/html/327.html"
},
{
    title: "Snowbattle.io",
    imgSrc: "/onlylocal/covers/207.png",
    link: "/onlylocal/html/207.html"
},
{
    title: "Solar Smash",
    imgSrc: "/onlylocal/covers/118.png",
    link: "/onlylocal/html/118.html"
},
{
    title: "Sprunki",
    imgSrc: "/onlylocal/covers/9.png",
    link: "/onlylocal/html/9.html"
},
{
    title: "Stacky Dash",
    imgSrc: "/onlylocal/covers/18.png",
    link: "/onlylocal/html/18.html"
},
{
    title: "State.io",
    imgSrc: "/onlylocal/covers/161.png",
    link: "/onlylocal/html/161.html"
},
{
    title: "Super Mario 63",
    imgSrc: "/onlylocal/covers/314.png",
    link: "/onlylocal/html/314.html"
},
{
    title: "Superhot",
    imgSrc: "/onlylocal/covers/233.png",
    link: "/onlylocal/html/233.html"
},
{
    title: "Supreme Duelist",
    imgSrc: "/onlylocal/covers/19.png",
    link: "/onlylocal/html/19.html"
},
{
    title: "Survival Race",
    imgSrc: "/onlylocal/covers/122.png",
    link: "/onlylocal/html/122.html"
},
{
    title: "Sushi Roll",
    imgSrc: "/onlylocal/covers/322.png",
    link: "/onlylocal/html/322.html"
},
{
    title: "Swords and Souls",
    imgSrc: "/onlylocal/covers/178.png",
    link: "/onlylocal/html/178.html"
},
{
    title: "Tall Man Run",
    imgSrc: "/onlylocal/covers/20.png",
    link: "/onlylocal/html/20.html"
},
{
    title: "Territorial.io",
    imgSrc: "/onlylocal/covers/303.png",
    link: "/onlylocal/html/303.html"
},
{
    title: "This Is The Only Level",
    imgSrc: "/onlylocal/covers/106.png",
    link: "/onlylocal/html/106.html"
},
{
    title: "This Is The Only Level 2",
    imgSrc: "/onlylocal/covers/107.png",
    link: "/onlylocal/html/107.html"
},
{
    title: "TileTopia",
    imgSrc: "/onlylocal/covers/329.png",
    link: "/onlylocal/html/329.html"
},
{
    title: "Tiny Fishing",
    imgSrc: "/onlylocal/covers/108.png",
    link: "/onlylocal/html/108.html"
},
{
    title: "Tomb Of The Mask",
    imgSrc: "/onlylocal/covers/109.png",
    link: "/onlylocal/html/109.html"
},
{
    title: "Toss The Turtle",
    imgSrc: "/onlylocal/covers/110.png",
    link: "/onlylocal/html/110.html"
},
{
    title: "Tower Crash 3D",
    imgSrc: "/onlylocal/covers/162.png",
    link: "/onlylocal/html/162.html"
},
{
    title: "Trivia Crack",
    imgSrc: "/onlylocal/covers/163.png",
    link: "/onlylocal/html/163.html"
},
{
    title: "Turbo Stars",
    imgSrc: "/onlylocal/covers/21.png",
    link: "/onlylocal/html/21.html"
},
{
    title: "Vex 1",
    imgSrc: "/onlylocal/covers/45.png",
    link: "/onlylocal/html/45.html"
},
{
    title: "Vex 2",
    imgSrc: "/onlylocal/covers/46.png",
    link: "/onlylocal/html/46.html"
},
{
    title: "Vex 3",
    imgSrc: "/onlylocal/covers/47.png",
    link: "/onlylocal/html/47.html"
},
{
    title: "Vex 3 XMAS",
    imgSrc: "/onlylocal/covers/48.png",
    link: "/onlylocal/html/48.html"
},
{
    title: "Vex 4",
    imgSrc: "/onlylocal/covers/49.png",
    link: "/onlylocal/html/49.html"
},
{
    title: "Vex 5",
    imgSrc: "/onlylocal/covers/50.png",
    link: "/onlylocal/html/50.html"
},
{
    title: "Vex 6",
    imgSrc: "/onlylocal/covers/51.png",
    link: "/onlylocal/html/51.html"
},
{
    title: "Vex 7",
    imgSrc: "/onlylocal/covers/52.png",
    link: "/onlylocal/html/52.html"
},
{
    title: "Vex Challenges",
    imgSrc: "/onlylocal/covers/54.png",
    link: "/onlylocal/html/54.html"
},
{
    title: "Vex X3M",
    imgSrc: "/onlylocal/covers/55.png",
    link: "/onlylocal/html/55.html"
},
{
    title: "Vex X3M 2",
    imgSrc: "/onlylocal/covers/56.png",
    link: "/onlylocal/html/56.html"
},
{
    title: "War The Knights",
    imgSrc: "/onlylocal/covers/284.png",
    link: "/onlylocal/html/284.html"
},
{
    title: "Wheely",
    imgSrc: "/onlylocal/covers/245.png",
    link: "/onlylocal/html/245.html"
},
{
    title: "Wheely 2",
    imgSrc: "/onlylocal/covers/246.png",
    link: "/onlylocal/html/246.html"
},
{
    title: "Wheely 3",
    imgSrc: "/onlylocal/covers/247.png",
    link: "/onlylocal/html/247.html"
},
{
    title: "Wheely 4",
    imgSrc: "/onlylocal/covers/248.png",
    link: "/onlylocal/html/248.html"
},
{
    title: "Wheely 5",
    imgSrc: "/onlylocal/covers/249.png",
    link: "/onlylocal/html/249.html"
},
{
    title: "Wheely 6",
    imgSrc: "/onlylocal/covers/250.png",
    link: "/onlylocal/html/250.html"
},
{
    title: "Wheely 7",
    imgSrc: "/onlylocal/covers/251.png",
    link: "/onlylocal/html/251.html"
},
{
    title: "Wheely 8",
    imgSrc: "/onlylocal/covers/252.png",
    link: "/onlylocal/html/252.html"
},
{
    title: "Webfishing",
    imgSrc: "/onlylocal/covers/423.png",
    link: "/onlylocal/html/423.html"
},
{
    title: "BFDI: Branches",
    imgSrc: "/onlylocal/covers/424.png",
    link: "/onlylocal/html/424.html"
},
{
    title: "Deltarune",
    imgSrc: "/onlylocal/covers/425.png",
    link: "/onlylocal/html/425.html"
},
{
    title: "Omori",
    imgSrc: "/onlylocal/covers/427-z.png",
    link: "/onlylocal/html/427-z.html"
},
{
    title: "10 Minutes Till Dawn",
    imgSrc: "/onlylocal/covers/430.png",
    link: "/onlylocal/html/430.html"
},
{
    title: "99 Balls",
    imgSrc: "/onlylocal/covers/431.png",
    link: "/onlylocal/html/431.html"
},
{
    title: "Abandoned",
    imgSrc: "/onlylocal/covers/432.png",
    link: "/onlylocal/html/432.html"
},
{
    title: "Yume Nikki",
    imgSrc: "/onlylocal/covers/433.png",
    link: "/onlylocal/html/433.html"
},
{
    title: "Hollow Knight",
    imgSrc: "/onlylocal/covers/468-a.png",
    link: "/onlylocal/html/468-a.html"
},
{
    title: "Slime Rancher",
    imgSrc: "/onlylocal/covers/591-a.png",
    link: "/onlylocal/html/591-a.html"
},
{
    title: "Sonic the Hedgehog",
    imgSrc: "/onlylocal/covers/598.png",
    link: "/onlylocal/598.html"
},
{
    title: "Growden.io",
    imgSrc: "/onlylocal/covers/603-aa.png",
    link: "/onlylocal/html/603-aa.html"
},
{
    title: "Bouncemasters",
    imgSrc: "/onlylocal/covers/437.png",
    link: "/onlylocal/html/437.html"
},
{
    title: "Yandere Simulator",
    imgSrc: "/onlylocal/covers/554.png",
    link: "/onlylocal/html/554.html"
},
{
    title: "Amongy",
    imgSrc: "/onlylocal/covers/608.png",
    link: "/onlylocal/html/608.html"
},
{
    title: "BFDIA 5b",
    imgSrc: "/onlylocal/covers/637-f.png",
    link: "/onlylocal/html/637-f.html"
},
{
    title: "Buster Jam",
    imgSrc: "/onlylocal/covers/646-fixed.png",
    link: "/onlylocal/html/646-fixed.html"
},
{
    title: "Super Smash Flash",
    imgSrc: "/onlylocal/covers/647.png",
    link: "/onlylocal/html/647.html"
},
{
    title: "Look Outside",
    imgSrc: "/onlylocal/covers/649.png",
    link: "/onlylocal/html/649.html"
},
{
    title: "Milk Inside A Bag Of Milk",
    imgSrc: "/onlylocal/covers/650.png",
    link: "/onlylocal/html/650.html"
},
{
    title: "Grand Theft Auto: Vice City",
    imgSrc: "/onlylocal/covers/652.png",
    link: "/onlylocal/html/652.html"
},
  {
    "title": "OvO 2",
    "imgSrc": "/onlylocal/covers/2.png",
    "link": "/onlylocal/html/2.html"
  },
  {
    "title": "OvO 3 Dimensions",
    "imgSrc": "/onlylocal/covers/3.png",
    "link": "/onlylocal/html/3.html"
  },
  {
    "title": "Wordle",
    "imgSrc": "/onlylocal/covers/112.png",
    "link": "/onlylocal/html/112.html"
  },
  {
    "title": "2048",
    "imgSrc": "/onlylocal/covers/114.png",
    "link": LocalGameEncoder.createEncodedLink("/local games/2048-main/index.html")
  },
  {
    "title": "Moto X3M Pool Party",
    "imgSrc": "/onlylocal/covers/124.png",
    "link": "/onlylocal/html/124.html"
  },
  {
    "title": "Granny 3",
    "imgSrc": "/onlylocal/covers/126.png",
    "link": makeScramjetLink("https://yandex.com/games/app/395267?utm_source=distrib&skip-guard=1&header=no&utm_medium=granny-games.com&flags")
  },
  {
    "title": "Big Tower Tiny Square 2",
    "imgSrc": "/onlylocal/covers/170.png",
    "link": "/onlylocal/html/170.html"
  },
  {
    "title": "World Box",
    "imgSrc": "/onlylocal/covers/174.png",
    "link": "/onlylocal/html/174.html"
  },
  {
    "title": "Run 1",
    "imgSrc": "/onlylocal/covers/175.png",
    "link": "/onlylocal/html/175.html"
  },
  {
    "title": "Run 2",
    "imgSrc": "/onlylocal/covers/176.png",
    "link": "/onlylocal/html/176.html"
  },
  {
    "title": "Minecraft 1.12.2",
    "imgSrc": "/onlylocal/covers/182.png",
    "link": "/onlylocal/html/182.html"
  },
  {
    "title": "Minecraft 1.21.4",
    "imgSrc": "/onlylocal/covers/183.png",
    "link": "/onlylocal/html/183.html"
  },
  {
    "title": "Five Nights at Freddy's: World",
    "imgSrc": "/onlylocal/covers/190.png",
    "link": "/onlylocal/html/190.html"
  },
  {
    "title": "Five Nights at Freddy's: Pizza Simulator",
    "imgSrc": "/onlylocal/covers/191.png",
    "link": "/onlylocal/html/191.html"
  },
  {
    "title": "Five Nights at Freddy's: Ultimate Custom Night",
    "imgSrc": "/onlylocal/covers/192.png",
    "link": "/onlylocal/html/192.html"
  },
  {
    "title": "Time Shooter 1",
    "imgSrc": "/onlylocal/covers/199.png",
    "link": "/onlylocal/html/199.html"
  },
  {
    "title": "Time Shooter 3: SWAT",
    "imgSrc": "/onlylocal/covers/201.png",
    "link": "/onlylocal/html/201.html"
  },
  {
    "title": "Five Nights at Winston's",
    "imgSrc": "/onlylocal/covers/204.png",
    "link": "/onlylocal/html/204.html"
  },
  {
    "title": "Draw the Hill",
    "imgSrc": "/onlylocal/covers/209.png",
    "link": makeScramjetLink("https://www.mathplayground.com/draw-the-hill/index.html")
  },
  {
    "title": "Death Run 3D",
    "imgSrc": "/onlylocal/covers/211.png",
    "link": "/onlylocal/html/211.html"
  },
  {
    "title": "Cut the Rope: Time Travel",
    "imgSrc": "/onlylocal/covers/213.png",
    "link": "/onlylocal/html/213.html"
  },
  {
    "title": "Cut the Rope: Holiday Gift",
    "imgSrc": "/onlylocal/covers/214.png",
    "link": "/onlylocal/html/214.html"
  },
  {
    "title": "Duck Life 2",
    "imgSrc": "/onlylocal/covers/235.png",
    "link": "/onlylocal/html/235.html"
  },
  {
    "title": "Duck Life 3",
    "imgSrc": "/onlylocal/covers/236.png",
    "link": "/onlylocal/html/236.html"
  },
  {
    "title": "Duck Life 5",
    "imgSrc": "/onlylocal/covers/238.png",
    "link": "/onlylocal/html/238.html"
  },
  {
    "title": "Escape Road 2",
    "imgSrc": "/onlylocal/covers/265.png",
    "link": LocalGameEncoder.createEncodedLink("/local games/escape-road2-main/index.html")
  },
  {
    "title": "Minecraft 1.5.2",
    "imgSrc": "/onlylocal/covers/297.png",
    "link": "/onlylocal/html/297.html"
  },
  {
    "title": "Minecraft Alpha 1.2.6",
    "imgSrc": "/onlylocal/covers/298.png",
    "link": "/onlylocal/html/298.html"
  },
  {
    "title": "Minecraft Beta 1.3",
    "imgSrc": "/onlylocal/covers/299.png",
    "link": "/onlylocal/html/299.html"
  },
  {
    "title": "Minecraft Beta 1.7.3",
    "imgSrc": "/onlylocal/covers/300.png",
    "link": "/onlylocal/html/300.html"
  },
  {
    "title": "Minecraft Indev",
    "imgSrc": "/onlylocal/covers/301.png",
    "link": "/onlylocal/html/301.html"
  },
  {
    "title": "Crazy Cars",
    "imgSrc": "/onlylocal/covers/331.png",
    "link": "/onlylocal/html/331.html"
  },
  {
    "title": "Fancy Pants Adventure",
    "imgSrc": "/onlylocal/covers/333.png",
    "link": "/onlylocal/html/333.html"
  },
  {
    "title": "Fancy Pants Adventure 2",
    "imgSrc": "/onlylocal/covers/334.png",
    "link": "/onlylocal/html/334.html"
  },
  {
    "title": "Fancy Pants Adventure 3",
    "imgSrc": "/onlylocal/covers/335.png",
    "link": "/onlylocal/html/335.html"
  },
  {
    "title": "Fancy Pants Adventure 4 Part 1",
    "imgSrc": "/onlylocal/covers/336.png",
    "link": "/onlylocal/html/336.html"
  },
  {
    "title": "Fancy Pants Adventure 4 Part 2",
    "imgSrc": "/onlylocal/covers/337.png",
    "link": "/onlylocal/html/337.html"
  },
  {
    "title": "Retro Bowl College",
    "imgSrc": "/onlylocal/covers/34.png",
    "link": "/onlylocal/html/34.html"
  },
  {
    "title": "Learn to Fly 3",
    "imgSrc": "/onlylocal/covers/342.png",
    "link": "/onlylocal/html/342.html"
  },
  {
    "title": "Learn to Fly Idle",
    "imgSrc": "/onlylocal/covers/343.png",
    "link": "/onlylocal/html/343.html"
  },
  {
    "title": "Raft Wars",
    "imgSrc": "/onlylocal/covers/344.png",
    "link": "/onlylocal/html/344.html"
  },
  {
    "title": "Raft Wars 2",
    "imgSrc": "/onlylocal/covers/345.png",
    "link": "/onlylocal/html/345.html"
  },
  {
    "title": "Sort the Court",
    "imgSrc": "/onlylocal/covers/346.png",
    "link": "/onlylocal/html/346.html"
  },
  {
    "title": "SpiderDoll",
    "imgSrc": "/onlylocal/covers/347.png",
    "link": "/onlylocal/html/347.html"
  },
  {
    "title": "They Are Coming",
    "imgSrc": "/onlylocal/covers/348.png",
    "link": "/onlylocal/html/348.html"
  },
  {
    "title": "Spiral Roll",
    "imgSrc": "/onlylocal/covers/349.png",
    "link": "/onlylocal/html/349.html"
  },
  {
    "title": "Binding of Issac: Wrath of the Lamb",
    "imgSrc": "/onlylocal/covers/350.png",
    "link": "/onlylocal/TheBindingofIsaac.html"
  },
  {
    "title": "Happy Sheepies",
    "imgSrc": "/onlylocal/covers/351.png",
    "link": "/onlylocal/html/351.html"
  },
  {
    "title": "DON'T YOU LECTURE ME",
    "imgSrc": "/onlylocal/covers/352.png",
    "link": "/onlylocal/html/352.html"
  },
  {
    "title": "Blumgi Rocket",
    "imgSrc": "/onlylocal/covers/353.png",
    "link": "/onlylocal/html/353.html"
  },
  {
    "title": "Dadish 2",
    "imgSrc": "/onlylocal/covers/355.png",
    "link": "/onlylocal/html/355.html"
  },
  {
    "title": "Dadish 3",
    "imgSrc": "/onlylocal/covers/356.png",
    "link": "/onlylocal/html/356.html"
  },
  {
    "title": "Dadish",
    "imgSrc": "/onlylocal/covers/357.png",
    "link": "/onlylocal/html/357.html"
  },
  {
    "title": "Dadish 3D",
    "imgSrc": "/onlylocal/covers/358.png",
    "link": "/onlylocal/html/358.html"
  },
  {
    "title": "Daily Dadish",
    "imgSrc": "/onlylocal/covers/359.png",
    "link": "/onlylocal/html/359.html"
  },
  {
    "title": "EvoWars.io",
    "imgSrc": "/onlylocal/covers/360.png",
    "link": "/onlylocal/html/360.html"
  },
  {
    "title": "Google Feud",
    "imgSrc": "/onlylocal/covers/361.png",
    "link": "/onlylocal/html/361.html"
  },
  {
    "title": "Idle Lumber Inc",
    "imgSrc": "/onlylocal/covers/363.png",
    "link": "/onlylocal/html/363.html"
  },
  {
    "title": "Idle Mining Empire",
    "imgSrc": "/onlylocal/covers/364.png",
    "link": "/onlylocal/html/364.html"
  },
  {
    "title": "JustFall.lol",
    "imgSrc": "/onlylocal/covers/365.png",
    "link": "/onlylocal/html/365.html"
  },
  {
    "title": "Merge Harvest",
    "imgSrc": "/onlylocal/covers/366.png",
    "link": "/onlylocal/html/366.html"
  },
  {
    "title": "Parking Fury 3D",
    "imgSrc": "/onlylocal/covers/367.png",
    "link": "/onlylocal/html/367.html"
  },
  {
    "title": "Slope 2",
    "imgSrc": "/onlylocal/covers/368.png",
    "link": "/onlylocal/html/368.html"
  },
  {
    "title": "Smash Karts",
    "imgSrc": "/onlylocal/covers/370.png",
    "link": "/onlylocal/html/370.html"
  },
  {
    "title": "Stickman Fight Ragdoll",
    "imgSrc": "/onlylocal/covers/371.png",
    "link": "/onlylocal/html/371.html"
  },
  {
    "title": "Stickman Boost",
    "imgSrc": "/onlylocal/covers/372.png",
    "link": "/onlylocal/html/372.html"
  },
  {
    "title": "Stickman Climb",
    "imgSrc": "/onlylocal/covers/373.png",
    "link": "/onlylocal/html/373.html"
  },
  {
    "title": "Stickman Golf",
    "imgSrc": "/onlylocal/covers/374.png",
    "link": "/onlylocal/html/374.html"
  },
  {
    "title": "Build a Big Army",
    "imgSrc": "/onlylocal/covers/376.png",
    "link": "/onlylocal/html/376.html"
  },
  {
    "title": "Build a Plane",
    "imgSrc": "/onlylocal/covers/377.png",
    "link": "/onlylocal/html/377.html"
  },
  {
    "title": "Camouflage and Sniper",
    "imgSrc": "/onlylocal/covers/378.png",
    "link": "/onlylocal/html/378.html"
  },
  {
    "title": "Car Survival 3D",
    "imgSrc": "/onlylocal/covers/379.png",
    "link": "/onlylocal/html/379.html"
  },
  {
    "title": "City Defense",
    "imgSrc": "/onlylocal/covers/380.png",
    "link": "/onlylocal/html/380.html"
  },
  {
    "title": "Clothing Shop 3D",
    "imgSrc": "/onlylocal/covers/381.png",
    "link": "/onlylocal/html/381.html"
  },
  {
    "title": "Cool Cars Run 3D",
    "imgSrc": "/onlylocal/covers/382.png",
    "link": "/onlylocal/html/382.html"
  },
  {
    "title": "Crush Cars 3D",
    "imgSrc": "/onlylocal/covers/383.png",
    "link": "/onlylocal/html/383.html"
  },
  {
    "title": "Destiny Run 3D",
    "imgSrc": "/onlylocal/covers/384.png",
    "link": "/onlylocal/html/384.html"
  },
  {
    "title": "Destroy The Car 3D",
    "imgSrc": "/onlylocal/covers/385.png",
    "link": "/onlylocal/html/385.html"
  },
  {
    "title": "Diamond Seeker",
    "imgSrc": "/onlylocal/covers/386.png",
    "link": "/onlylocal/html/386.html"
  },
  {
    "title": "Draw Joust",
    "imgSrc": "/onlylocal/covers/387.png",
    "link": "/onlylocal/html/387.html"
  },
  {
    "title": "Evolving Bombs 3D",
    "imgSrc": "/onlylocal/covers/388.png",
    "link": "/onlylocal/html/388.html"
  },
  {
    "title": "Fire and Frost Master",
    "imgSrc": "/onlylocal/covers/389.png",
    "link": "/onlylocal/html/389.html"
  },
  {
    "title": "Fitness Empire",
    "imgSrc": "/onlylocal/covers/390.png",
    "link": "/onlylocal/html/390.html"
  },
  {
    "title": "Flick Goal",
    "imgSrc": "/onlylocal/covers/391.png",
    "link": "/onlylocal/html/391.html"
  },
  {
    "title": "Flip Master",
    "imgSrc": "/onlylocal/covers/392.png",
    "link": "/onlylocal/html/392.html"
  },
  {
    "title": "Giant Wanted",
    "imgSrc": "/onlylocal/covers/393.png",
    "link": "/onlylocal/html/393.html"
  },
  {
    "title": "Gun Clone",
    "imgSrc": "/onlylocal/covers/394.png",
    "link": "/onlylocal/html/394.html"
  },
  {
    "title": "Gun Runner",
    "imgSrc": "/onlylocal/covers/395.png",
    "link": "/onlylocal/html/395.html"
  },
  {
    "title": "Kaji Run",
    "imgSrc": "/onlylocal/covers/396.png",
    "link": "/onlylocal/html/396.html"
  },
  {
    "title": "Make a SuperBoat",
    "imgSrc": "/onlylocal/covers/397.png",
    "link": "/onlylocal/html/397.html"
  },
  {
    "title": "Makeover Run",
    "imgSrc": "/onlylocal/covers/398.png",
    "link": "/onlylocal/html/398.html"
  },
  {
    "title": "Mega Car Jumps",
    "imgSrc": "/onlylocal/covers/399.png",
    "link": "/onlylocal/html/399.html"
  },
  {
    "title": "Money Rush",
    "imgSrc": "/onlylocal/covers/400.png",
    "link": "/onlylocal/html/400.html"
  },
  {
    "title": "Monster Box 3D",
    "imgSrc": "/onlylocal/covers/401.png",
    "link": "/onlylocal/html/401.html"
  },
  {
    "title": "Office Fight",
    "imgSrc": "/onlylocal/covers/402.png",
    "link": "/onlylocal/html/402.html"
  },
  {
    "title": "Robot Invasion",
    "imgSrc": "/onlylocal/covers/403.png",
    "link": "/onlylocal/html/403.html"
  },
  {
    "title": "Seat Jam 3D",
    "imgSrc": "/onlylocal/covers/404.png",
    "link": "/onlylocal/html/404.html"
  },
  {
    "title": "Shooting Master",
    "imgSrc": "/onlylocal/covers/405.png",
    "link": "/onlylocal/html/405.html"
  },
  {
    "title": "Supermarket 3D",
    "imgSrc": "/onlylocal/covers/406.png",
    "link": "/onlylocal/html/406.html"
  },
  {
    "title": "Survive to Victory",
    "imgSrc": "/onlylocal/covers/407.png",
    "link": "/onlylocal/html/407.html"
  },
  {
    "title": "Telekinesis Attack",
    "imgSrc": "/onlylocal/covers/408.png",
    "link": "/onlylocal/html/408.html"
  },
  {
    "title": "Telekinesis Car",
    "imgSrc": "/onlylocal/covers/409.png",
    "link": "/onlylocal/html/409.html"
  },
  {
    "title": "Telekinesis Drive",
    "imgSrc": "/onlylocal/covers/410.png",
    "link": "/onlylocal/html/410.html"
  },
  {
    "title": "Telekinesis",
    "imgSrc": "/onlylocal/covers/411.png",
    "link": "/onlylocal/html/411.html"
  },
  {
    "title": "Triple Match 3D",
    "imgSrc": "/onlylocal/covers/412.png",
    "link": "/onlylocal/html/412.html"
  },
  {
    "title": "Tug of War with Cars",
    "imgSrc": "/onlylocal/covers/413.png",
    "link": "/onlylocal/html/413.html"
  },
  {
    "title": "Twerk Race 3D",
    "imgSrc": "/onlylocal/covers/414.png",
    "link": "/onlylocal/html/414.html"
  },
  {
    "title": "Twisted Rope 3D",
    "imgSrc": "/onlylocal/covers/415.png",
    "link": "/onlylocal/html/415.html"
  },
  {
    "title": "Wall Crawler",
    "imgSrc": "/onlylocal/covers/416.png",
    "link": "/onlylocal/html/416.html"
  },
  {
    "title": "War Regions",
    "imgSrc": "/onlylocal/covers/417.png",
    "link": "/onlylocal/html/417.html"
  },
  {
    "title": "Weapon Craft Run",
    "imgSrc": "/onlylocal/covers/418.png",
    "link": "/onlylocal/html/418.html"
  },
  {
    "title": "Weapon Upgrade Rush",
    "imgSrc": "/onlylocal/covers/419.png",
    "link": "/onlylocal/html/419.html"
  },
  {
    "title": "Weapon Scale",
    "imgSrc": "/onlylocal/covers/420.png",
    "link": "/onlylocal/html/420.html"
  },
  {
    "title": "Rich Run 3D",
    "imgSrc": "/onlylocal/covers/421.png",
    "link": "/onlylocal/html/421.html"
  },
  {
    "title": "High Heels",
    "imgSrc": "/onlylocal/covers/422.png",
    "link": "/onlylocal/html/422.html"
  },
  {
    "title": "Awesome Tanks",
    "imgSrc": "/onlylocal/covers/436.png",
    "link": "/onlylocal/html/436.html"
  },
  {
    "title": "Awesome Tanks 2",
    "imgSrc": "/onlylocal/covers/438.png",
    "link": "/onlylocal/html/438.html"
  },
  {
    "title": "Bank Robbery 2",
    "imgSrc": "/onlylocal/covers/439.png",
    "link": "/onlylocal/html/439.html"
  },
  {
    "title": "Celeste PICO",
    "imgSrc": "/onlylocal/covers/440.png",
    "link": "/onlylocal/html/440.html"
  },
  {
    "title": "Kitty Toy",
    "imgSrc": "/onlylocal/covers/441.png",
    "link": "/onlylocal/html/441.html"
  },
  {
    "title": "Infinimoes",
    "imgSrc": "/onlylocal/covers/442.png",
    "link": "/onlylocal/html/442.html"
  },
  {
    "title": "Ages of Conflict",
    "imgSrc": "/onlylocal/covers/444.png",
    "link": "/onlylocal/html/444.html"
  },
  {
    "title": "Kindergarten",
    "imgSrc": "/onlylocal/covers/445.png",
    "link": "/onlylocal/html/445.html"
  },
  {
    "title": "Kindergarten 2",
    "imgSrc": "/onlylocal/covers/446.png",
    "link": "/onlylocal/html/446.html"
  },
  {
    "title": "City Smash",
    "imgSrc": "/onlylocal/covers/449.png",
    "link": "/onlylocal/html/449.html"
  },
  {
    "title": "Amanda the Adventurer",
    "imgSrc": "/onlylocal/covers/450.png",
    "link": "/onlylocal/html/450.html"
  },
  {
    "title": "Slender: The 8 Pages",
    "imgSrc": "/onlylocal/covers/451.png",
    "link": "/onlylocal/html/451.html"
  },
  {
    "title": "Station 141",
    "imgSrc": "/onlylocal/covers/452.png",
    "link": "/onlylocal/html/452.html"
  },
  {
    "title": "Station Saturn",
    "imgSrc": "/onlylocal/covers/453.png",
    "link": "/onlylocal/html/453.html"
  },
  {
    "title": "BLOODMONEY!",
    "imgSrc": "/onlylocal/covers/454.png",
    "link": "/onlylocal/html/454.html"
  },
  {
    "title": "BERGENTRUCK 201x",
    "imgSrc": "/onlylocal/covers/455.png",
    "link": "/onlylocal/html/455.html"
  },
  {
    "title": "Raft",
    "imgSrc": "/onlylocal/covers/457.png",
    "link": "/onlylocal/html/457.html"
  },
  {
    "title": "The Deadseat",
    "imgSrc": "/onlylocal/covers/458.png",
    "link": "/onlylocal/html/458.html"
  },
  {
    "title": "The Man In The Window",
    "imgSrc": "/onlylocal/covers/459.png",
    "link": "/onlylocal/html/459.html"
  },
  {
    "title": "Fears to Fathom: Home Alone",
    "imgSrc": "/onlylocal/covers/460.png",
    "link": "/onlylocal/html/460.html"
  },
  {
    "title": "DEAD PLATE",
    "imgSrc": "/onlylocal/covers/462.png",
    "link": "/onlylocal/html/462.html"
  },
  {
    "title": "Lacey's Flash Games",
    "imgSrc": "/onlylocal/covers/463.png",
    "link": "/onlylocal/html/463.html"
  },
  {
    "title": "Choppy Orc",
    "imgSrc": "/onlylocal/covers/464.png",
    "link": "/onlylocal/html/464.html"
  },
  {
    "title": "sandstone",
    "imgSrc": "/onlylocal/covers/469.png",
    "link": "/onlylocal/html/469.html"
  },
  {
    "title": "Madness Combat: Project Nexus (classic)",
    "imgSrc": "/onlylocal/covers/471.png",
    "link": "/onlylocal/html/471.html"
  },
  {
    "title": "Friday Night Funkin': V.S. Whitty",
    "imgSrc": "/onlylocal/covers/474.png",
    "link": "/onlylocal/html/474.html"
  },
  {
    "title": "Friday Night Funkin': B-Sides",
    "imgSrc": "/onlylocal/covers/475.png",
    "link": "/onlylocal/html/475.html"
  },
  {
    "title": "Friday Night Funkin': Vs. Hex",
    "imgSrc": "/onlylocal/covers/476.png",
    "link": "/onlylocal/html/476.html"
  },
  {
    "title": "Friday Night Funkin': Vs. Hatsune Miku",
    "imgSrc": "/onlylocal/covers/477.png",
    "link": "/onlylocal/html/477.html"
  },
  {
    "title": "Friday Night Funkin': Neo",
    "imgSrc": "/onlylocal/covers/478.png",
    "link": "/onlylocal/html/478.html"
  },
  {
    "title": "Friday Night Funkin': Sarvente's Mid-Fight Masses",
    "imgSrc": "/onlylocal/covers/480.png",
    "link": "/onlylocal/html/480.html"
  },
  {
    "title": "Friday Night Funkin': vs. Tricky",
    "imgSrc": "/onlylocal/covers/481.png",
    "link": "/onlylocal/html/481.html"
  },
  {
    "title": "Friday Night Funkin': Hit Single Real",
    "imgSrc": "/onlylocal/covers/483.png",
    "link": "/onlylocal/html/483.html"
  },
  {
    "title": "Friday Night Funkin': Creepypasta JP",
    "imgSrc": "/onlylocal/covers/484.png",
    "link": "/onlylocal/html/484.html"
  },
  {
    "title": "Friday Night Funkin': vs. Garcello",
    "imgSrc": "/onlylocal/covers/485.png",
    "link": "/onlylocal/html/485.html"
  },
  {
    "title": "Friday Night Funkin': Sonic Legacy",
    "imgSrc": "/onlylocal/covers/486.png",
    "link": "/onlylocal/html/486.html"
  },
  {
    "title": "Friday Night Funkin': vs. QT",
    "imgSrc": "/onlylocal/covers/487.png",
    "link": "/onlylocal/html/487.html"
  },
  {
    "title": "Friday Night Funkin': Mistful Crimson Morning Reboot",
    "imgSrc": "/onlylocal/covers/488.png",
    "link": "/onlylocal/html/488.html"
  },
  {
    "title": "Friday Night Funkin': Indie Cross",
    "imgSrc": "/onlylocal/covers/489.png",
    "link": "/onlylocal/html/489.html"
  },
  {
    "title": "Rooftop Snipers 2",
    "imgSrc": "/onlylocal/covers/490.png",
    "link": "/onlylocal/html/490.html"
  },
  {
    "title": "I woke up next to you again.",
    "imgSrc": "/onlylocal/covers/491.png",
    "link": "/onlylocal/html/491.html"
  },
  {
    "title": "UNDERWHEELS",
    "imgSrc": "/onlylocal/covers/492.png",
    "link": "/onlylocal/html/492.html"
  },
  {
    "title": "RigBMX",
    "imgSrc": "/onlylocal/covers/493.png",
    "link": "/onlylocal/html/493.html"
  },
  {
    "title": "RigBMX 2",
    "imgSrc": "/onlylocal/covers/494.png",
    "link": "/onlylocal/html/494.html"
  },
  {
    "title": "groon groon, babey!",
    "imgSrc": "/onlylocal/covers/495.png",
    "link": "/onlylocal/html/495.html"
  },
  {
    "title": "Friday Night Funkin': Jeffy's Endless Aethos",
    "imgSrc": "/onlylocal/covers/496.png",
    "link": "/onlylocal/html/496.html"
  },
  {
    "title": "Friday Night Funkin': vs. BOPCITY",
    "imgSrc": "/onlylocal/covers/497.png",
    "link": "/onlylocal/html/497.html"
  },
  {
    "title": "Friday Night Funkin': 17 Bucks: Floor 1",
    "imgSrc": "/onlylocal/covers/498.png",
    "link": "/onlylocal/html/498.html"
  },
  {
    "title": "Friday Night Funkin': FIRE IN THE HOLE: Lobotomy Dash Funkin'",
    "imgSrc": "/onlylocal/covers/499.png",
    "link": "/onlylocal/html/499.html"
  },
  {
    "title": "Friday Night Funkin': TWIDDLEFINGER",
    "imgSrc": "/onlylocal/covers/500.png",
    "link": "/onlylocal/html/500.html"
  },
  {
    "title": "Kindergarten 3",
    "imgSrc": "/onlylocal/covers/501.png",
    "link": "/onlylocal/html/501.html"
  },
  {
    "title": "Stick With It",
    "imgSrc": "/onlylocal/covers/502.png",
    "link": "/onlylocal/html/502.html"
  },
  {
    "title": "Five Nights at Candy's",
    "imgSrc": "/onlylocal/covers/503.png",
    "link": "/onlylocal/html/503.html"
  },
  {
    "title": "Five Nights at Candy's 2",
    "imgSrc": "/onlylocal/covers/504.png",
    "link": "/onlylocal/html/504.html"
  },
  {
    "title": "Pokemon Red",
    "imgSrc": "/onlylocal/covers/505.png",
    "link": "/onlylocal/html/505.html"
  },
  {
    "title": "Pokemon Emerald",
    "imgSrc": "/onlylocal/covers/506.png",
    "link": "/onlylocal/html/506.html"
  },
  {
    "title": "Super Mario Bros",
    "imgSrc": "/onlylocal/covers/508.png",
    "link": "/onlylocal/html/508.html"
  },
  {
    "title": "Friday Night Funkin’ Soft",
    "imgSrc": "/onlylocal/covers/509.png",
    "link": "/onlylocal/html/509.html"
  },
  {
    "title": "Tomodachi Collection",
    "imgSrc": "/onlylocal/covers/510.png",
    "link": "/onlylocal/html/510.html"
  },
  {
    "title": "Final Earth 2",
    "imgSrc": "/onlylocal/covers/512.png",
    "link": "/onlylocal/html/512.html"
  },
  {
    "title": "Swordfight!!",
    "imgSrc": "/onlylocal/covers/513.png",
    "link": "/onlylocal/html/513.html"
  },
  {
    "title": "PortaBoy+",
    "imgSrc": "/onlylocal/covers/514.png",
    "link": "/onlylocal/html/514.html"
  },
  {
    "title": "PacMan (Horror)",
    "imgSrc": "/onlylocal/covers/515.png",
    "link": "/onlylocal/html/515.html"
  },
  {
    "title": "Oshi Oshi Punch!",
    "imgSrc": "/onlylocal/covers/516.png",
    "link": "/onlylocal/html/516.html"
  },
  {
    "title": "Nubby's Number Factory",
    "imgSrc": "/onlylocal/covers/517.png",
    "link": "/onlylocal/html/517.html"
  },
  {
    "title": "Touhou: Luminous Strike",
    "imgSrc": "/onlylocal/covers/518.png",
    "link": "/onlylocal/html/518.html"
  },
  {
    "title": "Generic Fighter Maybe",
    "imgSrc": "/onlylocal/covers/519.png",
    "link": "/onlylocal/html/519.html"
  },
  {
    "title": "Dan The Man",
    "imgSrc": "/onlylocal/covers/520.png",
    "link": "/onlylocal/html/520.html"
  },
  {
    "title": "Bust a Loop",
    "imgSrc": "/onlylocal/covers/521.png",
    "link": "/onlylocal/html/521.html"
  },
  {
    "title": "Bad Monday Simulator",
    "imgSrc": "/onlylocal/covers/522.png",
    "link": "/onlylocal/html/522.html"
  },
  {
    "title": "Parappa The Rapper",
    "imgSrc": "/onlylocal/covers/524.png",
    "link": "/onlylocal/html/524.html"
  },
  {
    "title": "SpongeBob SquarePants: Land Ho!",
    "imgSrc": "/onlylocal/covers/526.png",
    "link": "/onlylocal/html/526.html"
  },
  {
    "title": "SpongeBob SquarePants: SpongeBob Run",
    "imgSrc": "/onlylocal/covers/527.png",
    "link": "/onlylocal/html/527.html"
  },
  {
    "title": "SpongeBob SquarePants: Squidward's Sizzlin' Scare",
    "imgSrc": "/onlylocal/covers/528.png",
    "link": "/onlylocal/html/528.html"
  },
  {
    "title": "SpongeBob SquarePants: Sandy's Sponge Stacker",
    "imgSrc": "/onlylocal/covers/529.png",
    "link": "/onlylocal/html/529.html"
  },
  {
    "title": "SpongeBob SquarePants: Tasty Pastry Party",
    "imgSrc": "/onlylocal/covers/530.png",
    "link": "/onlylocal/html/530.html"
  },
  {
    "title": "SpongeBob SquarePants: The Kah-Ray-Tay Squid",
    "imgSrc": "/onlylocal/covers/531.png",
    "link": "/onlylocal/html/531.html"
  },
  {
    "title": "SpongeBob SquarePants: WereSquirrel",
    "imgSrc": "/onlylocal/covers/532.png",
    "link": "/onlylocal/html/532.html"
  },
  {
    "title": "SpongeBob SquarePants: Krabby Katch",
    "imgSrc": "/onlylocal/covers/533.png",
    "link": "/onlylocal/html/533.html"
  },
  {
    "title": "Teen Titans GO!: Jump Jousts",
    "imgSrc": "/onlylocal/covers/534.png",
    "link": "/onlylocal/html/534.html"
  },
  {
    "title": "Teen Titans GO!: Jump Jousts 2",
    "imgSrc": "/onlylocal/covers/535.png",
    "link": "/onlylocal/html/535.html"
  },
  {
    "title": "Cat Connection",
    "imgSrc": "/onlylocal/covers/536.png",
    "link": "/onlylocal/html/536.html"
  },
  {
    "title": "Love Letters",
    "imgSrc": "/onlylocal/covers/538.png",
    "link": "/onlylocal/html/538.html"
  },
  {
    "title": "Chiikawa Puzzle",
    "imgSrc": "/onlylocal/covers/539.png",
    "link": "/onlylocal/html/539.html"
  },
  {
    "title": "myTeardrop",
    "imgSrc": "/onlylocal/covers/540.png",
    "link": "/onlylocal/html/540.html"
  },
  {
    "title": "Friday Night Funkin': Pibby: Apocalypse",
    "imgSrc": "/onlylocal/covers/541.png",
    "link": "/onlylocal/html/541.html"
  },
  {
    "title": "Plinko",
    "imgSrc": "/onlylocal/covers/544.png",
    "link": "/onlylocal/html/544.html"
  },
  {
    "title": "Clash Of Vikings",
    "imgSrc": "/onlylocal/covers/545.png",
    "link": "/onlylocal/html/545.html"
  },
  {
    "title": "Recoil",
    "imgSrc": "/onlylocal/covers/546.png",
    "link": "/onlylocal/html/546.html"
  },
  {
    "title": "Baseball Bros",
    "imgSrc": "/onlylocal/covers/547.png",
    "link": "/onlylocal/html/547.html"
  },
  {
    "title": "Sonic the Hedgehog 2: Community's Cut",
    "imgSrc": "/onlylocal/covers/549.png",
    "link": "/onlylocal/html/549.html"
  },
  {
    "title": "Sonic the Hedgehog 3: Angel Island Remastered",
    "imgSrc": "/onlylocal/covers/550.png",
    "link": "/onlylocal/html/550.html"
  },
  {
    "title": "Hypper Sandbox",
    "imgSrc": "/onlylocal/covers/551.png",
    "link": "/onlylocal/html/551.html"
  },
  {
    "title": "Aviamasters",
    "imgSrc": "/onlylocal/covers/552.png",
    "link": "/onlylocal/html/552.html"
  },
  {
    "title": "Rolling Sky",
    "imgSrc": "/onlylocal/covers/553.png",
    "link": "/onlylocal/html/553.html"
  },
  {
    "title": "Friday Night Funkin VS. KAPI",
    "imgSrc": "/onlylocal/covers/555.png",
    "link": "/onlylocal/html/555.html"
  },
  {
    "title": "Friday Night Funkin VS. Sky",
    "imgSrc": "/onlylocal/covers/556.png",
    "link": "/onlylocal/html/556.html"
  },
  {
    "title": "Friday Night Funkin Vs. Cyber Sensation",
    "imgSrc": "/onlylocal/covers/558.png",
    "link": "/onlylocal/html/558.html"
  },
  {
    "title": "Friday Night Funkin vs Shaggy",
    "imgSrc": "/onlylocal/covers/559.png",
    "link": "/onlylocal/html/559.html"
  },
  {
    "title": "BitGun.io",
    "imgSrc": "/onlylocal/covers/561.png",
    "link": "/onlylocal/html/561.html"
  },
  {
    "title": "Boom Slingers: Reboom",
    "imgSrc": "/onlylocal/covers/562.png",
    "link": "/onlylocal/html/562.html"
  },
  {
    "title": "CG FC 25",
    "imgSrc": "/onlylocal/covers/563.png",
    "link": "/onlylocal/html/563.html"
  },
  {
    "title": "Count Masters: Stickman Games",
    "imgSrc": "/onlylocal/covers/564.png",
    "link": "/onlylocal/html/564.html"
  },
  {
    "title": "Dalgona Candy Honeycomb Cookie",
    "imgSrc": "/onlylocal/covers/565.png",
    "link": "/onlylocal/html/565.html"
  },
  {
    "title": "Highway Racer",
    "imgSrc": "/onlylocal/covers/567.png",
    "link": "/onlylocal/html/567.html"
  },
  {
    "title": "Hula Hoop Race",
    "imgSrc": "/onlylocal/covers/569.png",
    "link": "/onlylocal/html/569.html"
  },
  {
    "title": "Jelly Restaurant",
    "imgSrc": "/onlylocal/covers/570.png",
    "link": "/onlylocal/html/570.html"
  },
  {
    "title": "Layers Roll",
    "imgSrc": "/onlylocal/covers/571.png",
    "link": "/onlylocal/html/571.html"
  },
  {
    "title": "Lazy Jumper",
    "imgSrc": "/onlylocal/covers/572.png",
    "link": "/onlylocal/html/572.html"
  },
  {
    "title": "Man Runner 2048",
    "imgSrc": "/onlylocal/covers/573.png",
    "link": "/onlylocal/html/573.html"
  },
  {
    "title": "Pottery Master",
    "imgSrc": "/onlylocal/covers/574.png",
    "link": "/onlylocal/html/574.html"
  },
  {
    "title": "Shovel 3D",
    "imgSrc": "/onlylocal/covers/575.png",
    "link": "/onlylocal/html/575.html"
  },
  {
    "title": "Sky Riders",
    "imgSrc": "/onlylocal/covers/576.png",
    "link": LocalGameEncoder.createEncodedLink("/local games/sky-riders-buk/index.html")
  },
  {
    "title": "Stickman and Guns",
    "imgSrc": "/onlylocal/covers/578.png",
    "link": "/onlylocal/html/578.html"
  },
  {
    "title": "Super Star Car",
    "imgSrc": "/onlylocal/covers/579.png",
    "link": "/onlylocal/html/579.html"
  },
  {
    "title": "Traffic Rider",
    "imgSrc": "/onlylocal/covers/580.png",
    "link": "/onlylocal/html/580.html"
  },
  {
    "title": "Friday Night Funkin': Mario's Madness",
    "imgSrc": "/onlylocal/covers/582.png",
    "link": "/onlylocal/html/582.html"
  },
  {
    "title": "Friday Night Funkin' vs Hypno Lullaby",
    "imgSrc": "/onlylocal/covers/583.png",
    "link": "/onlylocal/html/583.html"
  },
  {
    "title": "Fallout",
    "imgSrc": "/onlylocal/covers/585.png",
    "link": "/onlylocal/html/585.html"
  },
  {
    "title": "The Oregon Trail",
    "imgSrc": "/onlylocal/covers/586.png",
    "link": "/onlylocal/html/586.html"
  },
  {
    "title": "Newgrounds Rumble",
    "imgSrc": "/onlylocal/covers/587.png",
    "link": "/onlylocal/html/587.html"
  },
  {
    "title": "Super Mario 64",
    "imgSrc": "/onlylocal/covers/588.png",
    "link": "/onlylocal/html/588.html"
  },
  {
    "title": "Sonic CD",
    "imgSrc": "/onlylocal/covers/589.png",
    "link": "/onlylocal/html/589.html"
  },
  {
    "title": "Sonic Mania",
    "imgSrc": "/onlylocal/covers/590.png",
    "link": "/onlylocal/html/590.html"
  },
  {
    "title": "Pac Man World",
    "imgSrc": "/onlylocal/covers/592.png",
    "link": "/onlylocal/html/592.html"
  },
  {
    "title": "Pac Man World 2",
    "imgSrc": "/onlylocal/covers/593.png",
    "link": "/onlylocal/html/593.html"
  },
  {
    "title": "Waterworks!",
    "imgSrc": "/onlylocal/covers/594.png",
    "link": "/onlylocal/html/594.html"
  },
  {
    "title": "Shapez.io",
    "imgSrc": "/onlylocal/covers/595.png",
    "link": "/onlylocal/html/595.html"
  },
  {
    "title": "FNF Vs. Hypno's Lullaby v2",
    "imgSrc": "/onlylocal/covers/600.png",
    "link": "/onlylocal/html/600.html"
  },
  {
    "title": "FNF Vs. Sonic.EXE 3.0/4.0",
    "imgSrc": "/onlylocal/covers/601.png",
    "link": "/onlylocal/html/601.html"
  },
  {
    "title": "Doom 2",
    "imgSrc": "/onlylocal/covers/602.png",
    "link": "/onlylocal/html/602.html"
  },
  {
    "title": "Minesweeper Plus",
    "imgSrc": "/onlylocal/covers/604.png",
    "link": "/onlylocal/html/604.html"
  },
  {
    "title": "Friday Night Funkin vs Carol V2",
    "imgSrc": "/onlylocal/covers/610.png",
    "link": "/onlylocal/html/610.html"
  },
  {
    "title": "The Legend of Zelda Ocarina of Time",
    "imgSrc": "/onlylocal/covers/611.png",
    "link": "/onlylocal/html/611.html"
  },
  {
    "title": "The Legend of Zelda Majora's Mask",
    "imgSrc": "/onlylocal/covers/612.png",
    "link": "/onlylocal/html/612.html"
  },
  {
    "title": "Friday Night Funkin' Drop and Roll, but Playable",
    "imgSrc": "/onlylocal/covers/613.png",
    "link": "/onlylocal/html/613.html"
  },
  {
    "title": "Toy Rider",
    "imgSrc": "/onlylocal/covers/614.png",
    "link": "/onlylocal/html/614.html"
  },
  {
    "title": "Friday Night Funkin Vs. Dave and Bambi v3",
    "imgSrc": "/onlylocal/covers/615.png",
    "link": "/onlylocal/html/615.html-a"
  },
  {
    "title": "Friday Night Funkin’ Wednesday's Infidelity",
    "imgSrc": "/onlylocal/covers/616.png",
    "link": "/onlylocal/html/616.html"
  },
  {
    "title": "FNF vs Bob v2.0 (Bob’s Onslaught)",
    "imgSrc": "/onlylocal/covers/618.png",
    "link": "/onlylocal/html/618.html"
  },
  {
    "title": "Friday Night Funkin': Rev-Mixed",
    "imgSrc": "/onlylocal/covers/619.png",
    "link": "/onlylocal/html/619.html"
  },
  {
    "title": "Three Goblets",
    "imgSrc": "/onlylocal/covers/620.png",
    "link": "/onlylocal/html/620.html"
  },
  {
    "title": "Friday Night Funkin': Gumballs",
    "imgSrc": "/onlylocal/covers/621.png",
    "link": "/onlylocal/html/621.html"
  },
  {
    "title": "Get Yoked",
    "imgSrc": "/onlylocal/covers/625.png",
    "link": "/onlylocal/html/625.html"
  },
  {
    "title": "Tag",
    "imgSrc": "/onlylocal/covers/627.png",
    "link": "/onlylocal/html/627.html"
  },
  {
    "title": "Space Funeral",
    "imgSrc": "/onlylocal/covers/630.png",
    "link": "/onlylocal/html/630.html"
  },
  {
    "title": "Friday Night Funkin': VS. Impostor: Alternated",
    "imgSrc": "/onlylocal/covers/633.png",
    "link": "/onlylocal/html/633.html"
  },
  {
    "title": "Friday Night Funkin': Chaos Nightmare - Sonic Vs. Fleetway",
    "imgSrc": "/onlylocal/covers/634.png",
    "link": "/onlylocal/html/634.html"
  },
  {
    "title": "Spelunky Classic HD",
    "imgSrc": "/onlylocal/covers/635.png",
    "link": "/onlylocal/html/635.html"
  },
  {
    "title": "Friday Night Funkin' D-Sides",
    "imgSrc": "/onlylocal/covers/636.png",
    "link": "/onlylocal/html/636.html"
  },
  {
    "title": "Friday Night Funkin' VS Impostor B-Sides",
    "imgSrc": "/onlylocal/covers/639.png",
    "link": "/onlylocal/html/639.html"
  },
  {
    "title": "Mutilate a Doll 2",
    "imgSrc": "/onlylocal/covers/640.png",
    "link": "/onlylocal/html/640.html"
  },
  {
    "title": "Godzilla Daikaiju Battle Royale",
    "imgSrc": "/onlylocal/covers/641.png",
    "link": "/onlylocal/html/641.html"
  },
  {
    "title": "Friday Night Funkin' Sunday Night Suicide: Rookies Edition",
    "imgSrc": "/onlylocal/covers/642.png",
    "link": "/onlylocal/html/642.html"
  },
  {
    "title": "Rio Rex",
    "imgSrc": "/onlylocal/covers/643.png",
    "link": "/onlylocal/html/643.html"
  },
  {
    "title": "Baldi's Basics",
    "imgSrc": "/onlylocal/covers/65.png",
    "link": "/onlylocal/html/65.html"
  },
  {
    "title": "Big Tower Tiny Square",
    "imgSrc": "/onlylocal/covers/67.png",
    "link": "/onlylocal/html/67.html"
  },
  {
    "title": "Big NEON Tower Tiny Square",
    "imgSrc": "/onlylocal/covers/68.png",
    "link": "/onlylocal/html/68.html"
  },
  {
    "title": "Big ICE Tower Tiny Square",
    "imgSrc": "/onlylocal/covers/69.png",
    "link": "/onlylocal/html/69.html"
  },
  {
    "title": "Fireboy and Watergirl 2",
    "imgSrc": "/onlylocal/covers/88.png",
    "link": "/onlylocal/html/88.html"
  },
  {
    "title": "Fireboy and Watergirl 3",
    "imgSrc": "/onlylocal/covers/89.png",
    "link": "/onlylocal/html/89.html"
  },
  {
    "title": "Moto X3M 3",
    "imgSrc": "/onlylocal/covers/98.png",
    "link": "/onlylocal/html/98.html"
  },
  {
    "title": "Moto X3M Spooky",
    "imgSrc": "/onlylocal/covers/99.png",
    "link": "/onlylocal/html/99.html"
  },
	  { "title": "Geometry Dash Lite", "imgSrc": "/onlylocal/covers/27.png", "link": makeScramjetLink("https://geometrydash-lite.io") },
  { "title": "Moto X3M Winter", "imgSrc": "/onlylocal/covers/100.png", "link": "/onlylocal/html/100.html" },
  { "title": "Adventure Capatalist", "imgSrc": "/onlylocal/covers/354.png", "link": "/onlylocal/html/354.html" },
  { "title": "Nijika's Ahoge", "imgSrc": "/onlylocal/covers/447.png", "link": "/onlylocal/html/447.html" },
  { "title": "Animal Crossing-Wild World", "imgSrc": "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDfJ1Cp-9qBb1agO72tRRQ3hec8VHSshl3_J35n6IvzFbMkcv8m45PGZPrXweiJazfOn07XffNOhMEcO-NnwoMiF19pJlHaE8gfnAcujvkgfnoF3dzhb8dkcwD71WaICw_Iq6TlNSwQzABldnDFQqNQyOcFICBkSTo8?key=yj4V8pHW144VjA9YlEbf1Q", "link": LocalGameEncoder.createEncodedLink("/local games/clanimalcrossingwildworld.html") },
  { "title": "Unfair Mario", "imgSrc": "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCgUaI7nQ5klu3Eulq7rXsYBZVZI5837zdWTY4EkNcAGpk4VbAZ15Qq8RiGi02NGomcjWfVbInZ5KFsmMx_Sg6v0u_HJy-JP0N3c_9lZDcnHf3gm3WpsOireEGxI-v6ZcYxBidZjNdLRrgFgzFBR2IiUD-8dpsJxcul?key=yj4V8pHW144VjA9YlEbf1Q", "link": LocalGameEncoder.createEncodedLink("/local games/unfair-mario-gamemonetize/index.html") },

{
    title: "Transporter",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAdn7DCE_8rlKagTuDjkPY-aAi_h6t524LpJiJHh1nyrm6JTdsbcgFSUWi2nDlTooQWoTwgjGy1PaBWXAEvTxdCA2CFwoD-Oh0DdrHFlZEwq26CKMT2--rQX-tVohN4CHBI194QbnecEUogJfh27A-LqmoqnE6wf8PXGA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/transporter_offline/index.html")
},
{
    title: "Drive Monster",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDvO-PDV_DVBlBuRexrMHiBNrCM5pCH6XMgNTetjGUyk034DJk3jbrN6aKHbTFrCK6DXzf3IyMITEyadXAj--xiw_aaktMKTtW0t-qwX0e8rqIMqftIYHbC2hwilp6JlqNRK_I7t1V-7eCpMRL2U0t-6sYKK6UKp953?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_61F6D3F355639936/index.html")
},
{
    title: "Trukking 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAa5p7vFtJwJBBqq61ka0dIpGzu2-UsFMGIdCn_y0BK1FbbBIG9p8ZQV3QJouauZQfW1J1G8mGxgS--aI7pRl09kSzaCQMwfr8BqmjsEi2U4cmPHU1g5rdNAJ7xf3LdYJ398vO1aPxuen7tn3EsYGG0s0M2anOmHKox?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_5FD3C9C84173F88B/index.html")
},
{
    title: "Drive Mad 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCJpizEFzapiUrYeepke3aV1Idu7v_gdS120Eb4Uia6ByMmXHCBEWuOvZLC3LJhT8w-n22RUK4Trq0hngfz3FBf7qxFICEeHsqTT78puhiYfx39KybaELywClEwSOML5-7D7yPCWqwI_GN7IVj0wQUswkgzvdiwB-VTDw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_5DECAAB70F71EA92/index.html")
},
{
    title: "Drive Mad 3",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDfWxOTjQh3nvdeq1P2GPoAdqtvVRE4Hj-uqtU5eDYVrVEQ0utgnmaiTwG0aF8UtHpZFHu_HeZJwETfb15ne0g5IfI0CaCXnoVnPys8LkCZaUUWKeQpusxP-MjRGiiIGfsvHVMimnWJuANVh58P76hFL6oKMG74ELNCOQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_6380C7C8A113965B/index.html")
},
{
    title: "Drive Mad 4",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCdtDQf0ZvNycejgC0Ua2MODKppUeVlgd87bmbKV72w_fJX_8V4H3SJ4W_-77n1rXQn_t6gDpledczyKx9htSPF-AcEDFKXObDq31heGdrj8_we8HgoeT8hKgn09p5RNR2cCC_afrjtfnzay8pgzcVVTlW60Q_VyHoBIQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_5DFEEE25B4B7FA54/index.html")
},
{
    title: "Drive Mad 5",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCJeDzd4_eGJWPA7F9yGPbMRJlLCr80G80kaQvM8G9O2jBi0i2TCdjm-X7lNkyDZ8OzR98AOrFEaQuxjNQ5NneDgVuZfc4cprWgJBPBZLyCQrN_NeKmI_9K9IVH60oq-vxDtD8GEg1YB1L-bbBuj0gI0XLPanQZDnTt_Q?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_642C47A8C1A2D22A/index.html")
},
{
    title: "Drive Mad 6",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVC2GWJg-Qt-7UByxzsDwArLlfv-LXR-fX90M_iTQE86Ss_NqMhMo5INu-TGdED3EQtjPTINzGKwT8HKUcPM8qT2rNtGkgg_WEaSzgAHnNwNDlVvqkOlKm7UQTQUJV69gcYsTavDw_KMt2h2zIK0Nrk2NcExJopCsJae?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_5DEFB9809F1DF18A/index.html")
},
{
    title: "Drive Mad 7",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCrrPEg5TAd3tLeSOubtzI013Eya-W6CLfOjyh1hiAbbPplHCHsP0ZmHIvGcX5sXIIa0fcYgPbFuMAyd5fPfhOc4tM2hqI3OCWMJwJUeqdgi701WNrwV56HOHkZaI45V_BrkrYoHj7BU7ILcmYUvl-GJSIAv1RuzBHaew?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_62635FFF69389BB6/index.html")
},
{
    title: "Drive Mad 8",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAtQXQTXDPFqD0PvU9yRTBPnAe6j1swpa3ifgdvtw0hWX5sPrqIqklDY-OpLk1K7vu_yuXbF5-APFJZyiI27aozgcfMatX9uWvdOyEDrV3AW1ai12z4FXwBbnPQhhlAzcC9f4qPh14GHCgobV9W3TLrh07-vKYlnPKZcg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_6518E1D1F060C2E2/index.html")
},
{
    title: "Drive Mad 9",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDeaxtG9YdNoxK7Z8yvIgZ3LmHQoIuuvdYesF9WmxnjuAHNGMiRNtGRxr-0QRRneNp2y8z30D60bvZ_UzHZ0g9JLdzZqRIQXAIeSqV1ogSbKXkC34MYuf-2FJQ21giqtrtPDtkwhp4_xj0qMrhAU035Qm56dJSeGlH_Gg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_62B9ECA89D0E0332/index.html")
},
{
    title: "Drive Mad 10",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBEVFgz96zKCbiKnRI4bxsc-f40HD40gbyYmixyMOOn0hR0oF20SdrPE5FpoLyt4cL-TDdn1DngWUtgaipHUbSnKTL1MFry6fUb1-o5gPviASB6dUj5XRULCmp-ito42ice6XR08XstFHdHLqEvYaDQER_Jw5VCm5zb?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_62C6ADDFC8478935/index.html")
},
{
    title: "Soccer Game",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVD8k9ezTqWMjKwsfF5txAWY_ozRxLAFp4Hnph6Ut_tSWORtwaFEvOZsEUB5bbw3d2awqAk8j3KksjyoJS_tR7lvIQXBEq5rYkOpvZrnIEcGAlevdUkQZSgmmiMzS3QnILrSA569FaUpKdZmfFFcv1YZf4-yq5LlS76WgA?key=XMoM0FYxMS5kPOJMGtjyBg",
    link: LocalGameEncoder.createEncodedLink("/local games/soccer_game.html")
},
{
    title: "1 On 1 Basketball",
    imgSrc: "/hdmath/1on1basketball.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/1on1basketball/index.html")
},
{
    title: "2048",
    imgSrc: "/hdmath/2048game.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/2048game/index.html")
},
{
    title: "3D Santa Run",
    imgSrc: "/hdmath/3dsantarun.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/3dsantarun/index.html")
},
{
    title: "40xescape",
    imgSrc: "/hdmath/40xescape.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/40xescape/index.html")
},
{
    title: "60 Secondsburgerrun",
    imgSrc: "/hdmath/60secondsburgerrun.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/60secondsburgerrun/index.html")
},
{
    title: "60 Secondssantarun",
    imgSrc: "/hdmath/60secondssantarun.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/60secondssantarun/index.html")
},
{
    title: "8 BALL PRO",
    imgSrc: "/hdmath/8ballpool.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/8ballpool/index.html")
},
{
    title: "Bubble Pop - Addition Game",
    imgSrc: "/hdmath/additionbubblepop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/additionbubblepop/index.html")
},
{
    title: "Additionjeep",
    imgSrc: "/hdmath/additionjeep.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/additionjeep/index.html")
},
{
    title: "airballoonrally",
    imgSrc: "/hdmath/airballoonrally.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/airballoonrally/index.html")
},
{
    title: "Air Hockey",
    imgSrc: "/hdmath/airhockey.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/airhockey/index.html")
},
{
    title: "amazingescapeatlantis",
    imgSrc: "/hdmath/amazingescapeatlantis.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescapeatlantis/index.html")
},
{
    title: "amazingescapecastle",
    imgSrc: "/hdmath/amazingescapecastle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescapecastle/index.html")
},
{
    title: "amazingescapeghosttown",
    imgSrc: "/hdmath/amazingescapeghosttown.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescapeghosttown/index.html")
},
{
    title: "amazingescapeisland",
    imgSrc: "/hdmath/amazingescapeisland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescapeisland/index.html")
},
{
    title: "amazingescapemaze",
    imgSrc: "/hdmath/amazingescapemaze.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescapemaze/index.html")
},
{
    title: "Amazingescapenorthpole",
    imgSrc: "/hdmath/amazingescapenorthpole.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescapenorthpole/index.html")
},
{
    title: "amazingescapepyramid",
    imgSrc: "/hdmath/amazingescapepyramid.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescapepyramid/index.html")
},
{
    title: "amazingescaperuins",
    imgSrc: "/hdmath/amazingescaperuins.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescaperuins/index.html")
},
{
    title: "amazingescapeschool",
    imgSrc: "/hdmath/amazingescapeschool.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescapeschool/index.html")
},
{
    title: "amazingescapespringgarden",
    imgSrc: "/hdmath/amazingescapespringgarden.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amazingescapespringgarden/index.html")
},
{
    title: "AMERICAN FOOTBALL CHALLENGE",
    imgSrc: "/hdmath/americanfootballchallenge.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/americanfootballchallenge/index.html")
},
{
    title: "AMERICAN FOOTBALL KICKS",
    imgSrc: "/hdmath/americanfootballkicks.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/americanfootballkicks/index.html")
},
{
    title: "A missing shepherd",
    imgSrc: "/hdmath/amissingshepherd.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amissingshepherd/index.html")
},
{
    title: "amusepark",
    imgSrc: "/hdmath/amusepark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/amusepark/index.html")
},
{
    title: "Angryanimals",
    imgSrc: "/hdmath/angryanimals.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/angryanimals/index.html")
},
{
    title: "angryanimals2",
    imgSrc: "/hdmath/angryanimals2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/angryanimals2/index.html")
},
{
    title: "anikasodyssey",
    imgSrc: "/hdmath/anikasodyssey.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/anikasodyssey/index.html")
},
{
    title: "animalraceway",
    imgSrc: "/hdmath/animalraceway.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/animalraceway/index.html")
},
{
    title: "Aqua Thief",
    imgSrc: "/hdmath/aquathief.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/aquathief/index.html")
},
{
    title: "Aquatic Rescue",
    imgSrc: "/hdmath/aquaticrescue.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/aquaticrescue/index.html")
},
{
    title: "Are You Human",
    imgSrc: "/hdmath/areyouhuman.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/areyouhuman/index.html")
},
{
    title: "atomicpuzzle",
    imgSrc: "/hdmath/atomicpuzzle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/atomicpuzzle/index.html")
},
{
    title: "Backgammon",
    imgSrc: "/hdmath/backgammon.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/backgammon/index.html")
},
{
    title: "Backyardbaseball",
    imgSrc: "/hdmath/backyardbaseball.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/backyardbaseball/index.html")
},
{
    title: "Badicecream",
    imgSrc: "/hdmath/badicecream.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/badicecream/index.html")
},
{
    title: "bakingapplepie",
    imgSrc: "/hdmath/bakingapplepie.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/bakingapplepie/index.html")
},
{
    title: "Balloonmath",
    imgSrc: "/hdmath/balloonmath.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/balloonmath/index.html")
},
{
    title: "BASEBALL PRO",
    imgSrc: "/hdmath/baseballpro.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/baseballpro/index.html")
},
{
    title: "Basketball Mania",
    imgSrc: "/hdmath/basketballmania.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/basketballmania/index.html")
},
{
    title: "Basketballs",
    imgSrc: "/hdmath/basketballs.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/basketballs/index.html")
},
{
    title: "basketballslevelpack",
    imgSrc: "/hdmath/basketballslevelpack.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/basketballslevelpack/index.html")
},
{
    title: "Basket Goal",
    imgSrc: "/hdmath/basketgoal.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/basketgoal/index.html")
},
{
    title: "Battleship",
    imgSrc: "/hdmath/battleship.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/battleship/index.html")
},
{
    title: "Beach Soccer Hoodamath",
    imgSrc: "/hdmath/beachsoccer.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/beachsoccer/index.html")
},
{
    title: "beachtownescape",
    imgSrc: "/hdmath/beachtownescape.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/beachtownescape/index.html")
},
{
    title: "BigBlockPuzzle",
    imgSrc: "/hdmath/bigblockpuzzle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/bigblockpuzzle/index.html")
},
{
    title: "Bitcoin Clicker",
    imgSrc: "/hdmath/bitcoinclicker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/bitcoinclicker/index.html")
},
{
    title: "Biz Wiz",
    imgSrc: "/hdmath/bizwiz.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/bizwiz/index.html")
},
{
    title: "BlockPuzzle",
    imgSrc: "/hdmath/blockblast.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/blockblast/index.html")
},
{
    title: "blockmaster",
    imgSrc: "/hdmath/blockmaster.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/blockmaster/index.html")
},
{
    title: "bloonstowerdefense",
    imgSrc: "/hdmath/bloonstowerdefense.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/bloonstowerdefense/index.html")
},
{
    title: "bloonstowerdefense2",
    imgSrc: "/hdmath/bloonstowerdefense2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/bloonstowerdefense2/index.html")
},
{
    title: "Bloonstowerdefense 3",
    imgSrc: "/hdmath/bloonstowerdefense3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/bloonstowerdefense3/index.html")
},
{
    title: "Blue and Pink",
    imgSrc: "/hdmath/blueandpink.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/blueandpink/index.html")
},
{
    title: "Gen X Words Quiz",
    imgSrc: "/hdmath/boomerswordsquiz.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/boomerswordsquiz/index.html")
},
{
    title: "breakfastcooking",
    imgSrc: "/hdmath/breakfastcooking.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/breakfastcooking/index.html")
},
{
    title: "Bridge Crossing Game",
    imgSrc: "/hdmath/bridgecrossing.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/bridgecrossing/index.html")
},
{
    title: "briker",
    imgSrc: "/hdmath/briker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/briker/index.html")
},
{
    title: "briker2",
    imgSrc: "/hdmath/briker2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/briker2/index.html")
},
{
    title: "Buildthebridge",
    imgSrc: "/hdmath/buildthebridge.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/buildthebridge/index.html")
},
{
    title: "Burger Time",
    imgSrc: "/hdmath/burgertime.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/burgertime/index.html")
},
{
    title: "businessfun",
    imgSrc: "/hdmath/businessfun.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/businessfun/index.html")
},
{
    title: "Bus Parking",
    imgSrc: "/hdmath/busparking.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/busparking/index.html")
},
{
    title: "Calculus Game 1.1",
    imgSrc: "/hdmath/calculusgame11.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/calculusgame11/index.html")
},
{
    title: "candyfun",
    imgSrc: "/hdmath/candyfun.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/candyfun/index.html")
},
{
    title: "cargoshipment",
    imgSrc: "/hdmath/cargoshipment.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/cargoshipment/index.html")
},
{
    title: "cargoshipmentchicago",
    imgSrc: "/hdmath/cargoshipmentchicago.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/cargoshipmentchicago/index.html")
},
{
    title: "carnivalfun",
    imgSrc: "/hdmath/carnivalfun.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/carnivalfun/index.html")
},
{
    title: "carparkchallenge",
    imgSrc: "/hdmath/carparkchallenge.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/carparkchallenge/index.html")
},
{
    title: "carparkchaos",
    imgSrc: "/hdmath/carparkchaos.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/carparkchaos/index.html")
},
{
    title: "Carrot Crave",
    imgSrc: "/hdmath/carrotcrave.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/carrotcrave/index.html")
},
{
    title: "Caveman",
    imgSrc: "/hdmath/caveman.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/caveman/index.html")
},
{
    title: "chatnoir",
    imgSrc: "/hdmath/chatnoir.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/chatnoir/index.html")
},
{
    title: "Master Checkers",
    imgSrc: "/hdmath/checkers.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/checkers/index.html")
},
{
    title: "Christmas Memory",
    imgSrc: "/hdmath/christmasmemory.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/christmasmemory/index.html")
},
{
    title: "Christmastreelightup",
    imgSrc: "/hdmath/christmastreelightup.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/christmastreelightup/index.html")
},
{
    title: "Civiballs",
    imgSrc: "/hdmath/civiballs.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/civiballs/index.html")
},
{
    title: "Civiballs 2",
    imgSrc: "/hdmath/civiballs2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/civiballs2/index.html")
},
{
    title: "classiccarparking",
    imgSrc: "/hdmath/classiccarparking.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/classiccarparking/index.html")
},
{
    title: "SNAKE",
    imgSrc: "/hdmath/classicsnake.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/classicsnake/index.html")
},
{
    title: "Cliffdiving",
    imgSrc: "/hdmath/cliffdiving.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/cliffdiving/index.html")
},
{
    title: "Climbable Arrow",
    imgSrc: "/hdmath/climbablearrow.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/climbablearrow/index.html")
},
{
    title: "Coffeeshopgame",
    imgSrc: "/hdmath/coffeeshopgame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/coffeeshopgame/index.html")
},
{
    title: "Unity WebGL Player | Color Block Jam",
    imgSrc: "/hdmath/colorblockjam.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/colorblockjam/index.html")
},
{
    title: "colorcleaner",
    imgSrc: "/hdmath/colorcleaner.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/colorcleaner/index.html")
},
{
    title: "Color Flip",
    imgSrc: "/hdmath/colorflip.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/colorflip/index.html")
},
{
    title: "Combination Lock",
    imgSrc: "/hdmath/combinationlock.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/combinationlock/index.html")
},
{
    title: "concertparking",
    imgSrc: "/hdmath/concertparking.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/concertparking/index.html")
},
{
    title: "CoreBall - monkey-type.org",
    imgSrc: "/hdmath/coreball.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/coreball/index.html")
},
{
    title: "Unity WebGL Player | Basketball Blitz",
    imgSrc: "/hdmath/courtclashbasketball.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/courtclashbasketball/index.html")
},
{
    title: "crossword",
    imgSrc: "/hdmath/crossword.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/crossword/index.html")
},
{
    title: "Cubeform",
    imgSrc: "/hdmath/cubeform.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/cubeform/index.html")
},
{
    title: "CubeNet Game",
    imgSrc: "/hdmath/cubenet.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/cubenet/index.html")
},
{
    title: "customcarshop",
    imgSrc: "/hdmath/customcarshop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/customcarshop/index.html")
},
{
    title: "CYCLE SPRINT",
    imgSrc: "/hdmath/cyclesprint.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/cyclesprint/index.html")
},
{
    title: "Dark Room",
    imgSrc: "/hdmath/darkroom.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/darkroom/index.html")
},
{
    title: "deskmovement",
    imgSrc: "/hdmath/deskmovement.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/deskmovement/index.html")
},
{
    title: "Relaxing Games",
    imgSrc: "/hdmath/destressgame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/destressgame/index.html")
},
{
    title: "dicewars",
    imgSrc: "/hdmath/dicewars.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dicewars/index.html")
},
{
    title: "dinercity",
    imgSrc: "/hdmath/dinercity.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dinercity/index.html")
},
{
    title: "Unity WebGL Player | Dip 'n Dice",
    imgSrc: "/hdmath/dipndice.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dipndice/index.html")
},
{
    title: "dobble",
    imgSrc: "/hdmath/dobble.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dobble/index.html")
},
{
    title: "doctoracorn",
    imgSrc: "/hdmath/doctoracorn.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/doctoracorn/index.html")
},
{
    title: "doggnation",
    imgSrc: "/hdmath/doggnation.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/doggnation/index.html")
},
{
    title: "Play Dominoes",
    imgSrc: "/hdmath/dominoes.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dominoes/index.html")
},
{
    title: "donutempire",
    imgSrc: "/hdmath/donutempire.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/donutempire/index.html")
},
{
    title: "Donut Stand",
    imgSrc: "/hdmath/donutstand.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/donutstand/index.html")
},
{
    title: "doughnutsrecipe",
    imgSrc: "/hdmath/doughnutsrecipe.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/doughnutsrecipe/index.html")
},
{
    title: "Draw Surfer",
    imgSrc: "/hdmath/drawsurfer.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/drawsurfer/index.html")
},
{
    title: "Draw The Rest",
    imgSrc: "/hdmath/drawtherest.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/drawtherest/index.html")
},
{
    title: "Draw To Smash!",
    imgSrc: "/hdmath/drawtosmash.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/drawtosmash/index.html")
},
{
    title: "Dressupmath",
    imgSrc: "/hdmath/dressupmath.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dressupmath/index.html")
},
{
    title: "Park your car",
    imgSrc: "/hdmath/driverlesscar.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/driverlesscar/index.html")
},
{
    title: "Dublox",
    imgSrc: "/hdmath/dublox.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dublox/index.html")
},
{
    title: "DUCK DUCK CLICKER",
    imgSrc: "/hdmath/duckduckclicker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/duckduckclicker/index.html")
},
{
    title: "Duck Duck Clicker 3D",
    imgSrc: "/hdmath/duckduckclicker3d.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/duckduckclicker3d/index.html")
},
{
    title: "Wix Games | Duck Life",
    imgSrc: "/hdmath/ducklife.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ducklife/index.html")
},
{
    title: "Wix Games | Duck Life 2",
    imgSrc: "/hdmath/ducklife2worldchampion.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ducklife2worldchampion/index.html")
},
{
    title: "Wix Games | Duck Life 3",
    imgSrc: "/hdmath/ducklife3evolution.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ducklife3evolution/index.html")
},
{
    title: "Wix Games | Duck Life 4",
    imgSrc: "/hdmath/ducklife4.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ducklife4/index.html")
},
{
    title: "Ducklife 5 Treasurehunt",
    imgSrc: "/hdmath/ducklife5treasurehunt.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ducklife5treasurehunt/index.html")
},
{
    title: "Wix Games | Duck Life: Space",
    imgSrc: "/hdmath/ducklife6space.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ducklife6space/index.html")
},
{
    title: "duckthinkoutsidetheflock",
    imgSrc: "/hdmath/duckthinkoutsidetheflock.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/duckthinkoutsidetheflock/index.html")
},
{
    title: "Dunkers",
    imgSrc: "/hdmath/dunkers.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dunkers/index.html")
},
{
    title: "Easter Clicker",
    imgSrc: "/hdmath/easterclicker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/easterclicker/index.html")
},
{
    title: "EASTER MEMORY",
    imgSrc: "/hdmath/eastermemory.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/eastermemory/index.html")
},
{
    title: "Eggy Car",
    imgSrc: "/hdmath/eggycar.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/eggycar/index.html")
},
{
    title: "electricbox",
    imgSrc: "/hdmath/electricbox.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/electricbox/index.html")
},
{
    title: "electricbox2",
    imgSrc: "/hdmath/electricbox2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/electricbox2/index.html")
},
{
    title: "Electron Dash",
    imgSrc: "/hdmath/electrondash.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/electrondash/index.html")
},
{
    title: "Element Merge!",
    imgSrc: "/hdmath/elementmerge.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/elementmerge/index.html")
},
{
    title: "Escape Beijing",
    imgSrc: "/hdmath/escapebeijing.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapebeijing/index.html")
},
{
    title: "Escape Berlin",
    imgSrc: "/hdmath/escapeberlin.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapeberlin/index.html")
},
{
    title: "Escape Cairo",
    imgSrc: "/hdmath/escapecairo.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapecairo/index.html")
},
{
    title: "Escape Istanbul",
    imgSrc: "/hdmath/escapeistanbul.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapeistanbul/index.html")
},
{
    title: "Escape London",
    imgSrc: "/hdmath/escapelondon.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapelondon/index.html")
},
{
    title: "Escape Moscow",
    imgSrc: "/hdmath/escapemoscow.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapemoscow/index.html")
},
{
    title: "escapeplandragoncastle",
    imgSrc: "/hdmath/escapeplandragoncastle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapeplandragoncastle/index.html")
},
{
    title: "escapeplanghosthouse",
    imgSrc: "/hdmath/escapeplanghosthouse.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapeplanghosthouse/index.html")
},
{
    title: "Escapeplannorthpole",
    imgSrc: "/hdmath/escapeplannorthpole.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapeplannorthpole/index.html")
},
{
    title: "escapeplanoffice",
    imgSrc: "/hdmath/escapeplanoffice.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapeplanoffice/index.html")
},
{
    title: "Escape Prague",
    imgSrc: "/hdmath/escapeprague.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapeprague/index.html")
},
{
    title: "Escape Santiago",
    imgSrc: "/hdmath/escapesantiago.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapesantiago/index.html")
},
{
    title: "escapethecandyfactory",
    imgSrc: "/hdmath/escapethecandyfactory.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/escapethecandyfactory/index.html")
},
{
    title: "expertparking",
    imgSrc: "/hdmath/expertparking.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/expertparking/index.html")
},
{
    title: "Factor Feeder",
    imgSrc: "/hdmath/factorfeeder.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/factorfeeder/index.html")
},
{
    title: "factoryballs",
    imgSrc: "/hdmath/factoryballs.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/factoryballs/index.html")
},
{
    title: "factoryballs2",
    imgSrc: "/hdmath/factoryballs2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/factoryballs2/index.html")
},
{
    title: "factoryballs3",
    imgSrc: "/hdmath/factoryballs3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/factoryballs3/index.html")
},
{
    title: "Factory Balls forever",
    imgSrc: "/hdmath/factoryballsforever.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/factoryballsforever/index.html")
},
{
    title: "Factoryballsthechristmasedition",
    imgSrc: "/hdmath/factoryballsthechristmasedition.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/factoryballsthechristmasedition/index.html")
},
{
    title: "Fall Beans",
    imgSrc: "/hdmath/fallbeans.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fallbeans/index.html")
},
{
    title: "FALLING CUBES",
    imgSrc: "/hdmath/fallingcubes.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fallingcubes/index.html")
},
{
    title: "Fancy Diver",
    imgSrc: "/hdmath/fancydiver.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fancydiver/index.html")
},
{
    title: "fantasticchefblueberrymuffins",
    imgSrc: "/hdmath/fantasticchefblueberrymuffins.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fantasticchefblueberrymuffins/index.html")
},
{
    title: "fantasticchefchocolatecake",
    imgSrc: "/hdmath/fantasticchefchocolatecake.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fantasticchefchocolatecake/index.html")
},
{
    title: "fantasticchefpeachcobbler",
    imgSrc: "/hdmath/fantasticchefpeachcobbler.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fantasticchefpeachcobbler/index.html")
},
{
    title: "fantasticcontraption2",
    imgSrc: "/hdmath/fantasticcontraption2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fantasticcontraption2/index.html")
},
{
    title: "Farm Harvest Multiplication Game",
    imgSrc: "/hdmath/farmharvestmultiplicationgame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/farmharvestmultiplicationgame/index.html")
},
{
    title: "Feed the Figures",
    imgSrc: "/hdmath/feedthefigures.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/feedthefigures/index.html")
},
{
    title: "Feed the Figures 2",
    imgSrc: "/hdmath/feedthefigures2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/feedthefigures2/index.html")
},
{
    title: "Find HQ Backyard Mobile Game",
    imgSrc: "/hdmath/findhqbackyard.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqbackyard/index.html")
},
{
    title: "findhqbeachhouse",
    imgSrc: "/hdmath/findhqbeachhouse.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqbeachhouse/index.html")
},
{
    title: "findhqbowlingalley",
    imgSrc: "/hdmath/findhqbowlingalley.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqbowlingalley/index.html")
},
{
    title: "findhqcamp",
    imgSrc: "/hdmath/findhqcamp.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqcamp/index.html")
},
{
    title: "findhqcarnival",
    imgSrc: "/hdmath/findhqcarnival.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqcarnival/index.html")
},
{
    title: "Find HQ Castle Mobile Game",
    imgSrc: "/hdmath/findhqcastle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqcastle/index.html")
},
{
    title: "Find HQ Cave Mobile Game",
    imgSrc: "/hdmath/findhqcave.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqcave/index.html")
},
{
    title: "Find HQ Denver",
    imgSrc: "/hdmath/findhqdenver.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqdenver/index.html")
},
{
    title: "findhqfarm",
    imgSrc: "/hdmath/findhqfarm.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqfarm/index.html")
},
{
    title: "findhqfirestation",
    imgSrc: "/hdmath/findhqfirestation.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqfirestation/index.html")
},
{
    title: "Findhqfunhouse",
    imgSrc: "/hdmath/findhqfunhouse.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqfunhouse/index.html")
},
{
    title: "findhqgamecenter",
    imgSrc: "/hdmath/findhqgamecenter.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqgamecenter/index.html")
},
{
    title: "Find my HQ Glacier National Park",
    imgSrc: "/hdmath/findhqglaciernationalpark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqglaciernationalpark/index.html")
},
{
    title: "Find my HQ Great Smoky Mountains",
    imgSrc: "/hdmath/findhqgreatsmokymountains.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqgreatsmokymountains/index.html")
},
{
    title: "findhqgym",
    imgSrc: "/hdmath/findhqgym.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqgym/index.html")
},
{
    title: "Find HQ Honolulu",
    imgSrc: "/hdmath/findhqhonolulu.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqhonolulu/index.html")
},
{
    title: "findhqhospital",
    imgSrc: "/hdmath/findhqhospital.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqhospital/index.html")
},
{
    title: "Find my HQ Joshua Three",
    imgSrc: "/hdmath/findhqjoshuatree.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqjoshuatree/index.html")
},
{
    title: "findhqlab",
    imgSrc: "/hdmath/findhqlab.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqlab/index.html")
},
{
    title: "findhqlibrary",
    imgSrc: "/hdmath/findhqlibrary.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqlibrary/index.html")
},
{
    title: "findhqlighthouse",
    imgSrc: "/hdmath/findhqlighthouse.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqlighthouse/index.html")
},
{
    title: "Findhqlosangeles",
    imgSrc: "/hdmath/findhqlosangeles.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqlosangeles/index.html")
},
{
    title: "Find my HQ Miami",
    imgSrc: "/hdmath/findhqmiami.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqmiami/index.html")
},
{
    title: "Find HQ Nashville",
    imgSrc: "/hdmath/findhqnashville.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqnashville/index.html")
},
{
    title: "Find HQ Neighborhood Mobile Game",
    imgSrc: "/hdmath/findhqneighborhood.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqneighborhood/index.html")
},
{
    title: "Find my HQ New York",
    imgSrc: "/hdmath/findhqnewyork.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqnewyork/index.html")
},
{
    title: "findhqpirateship",
    imgSrc: "/hdmath/findhqpirateship.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqpirateship/index.html")
},
{
    title: "Find my HQ San Francisco",
    imgSrc: "/hdmath/findhqsanfrancisco.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqsanfrancisco/index.html")
},
{
    title: "Find HQ Santa Fe",
    imgSrc: "/hdmath/findhqsantafe.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqsantafe/index.html")
},
{
    title: "findhqskilodge",
    imgSrc: "/hdmath/findhqskilodge.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqskilodge/index.html")
},
{
    title: "findhqspacelab",
    imgSrc: "/hdmath/findhqspacelab.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqspacelab/index.html")
},
{
    title: "findhqtemple",
    imgSrc: "/hdmath/findhqtemple.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqtemple/index.html")
},
{
    title: "findhqtheforest",
    imgSrc: "/hdmath/findhqtheforest.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqtheforest/index.html")
},
{
    title: "findhqthehotel",
    imgSrc: "/hdmath/findhqthehotel.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqthehotel/index.html")
},
{
    title: "findhqthemall",
    imgSrc: "/hdmath/findhqthemall.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqthemall/index.html")
},
{
    title: "findhqthepyramid",
    imgSrc: "/hdmath/findhqthepyramid.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqthepyramid/index.html")
},
{
    title: "findhqtheresort",
    imgSrc: "/hdmath/findhqtheresort.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqtheresort/index.html")
},
{
    title: "findhqtheschool",
    imgSrc: "/hdmath/findhqtheschool.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqtheschool/index.html")
},
{
    title: "findhqthetheater",
    imgSrc: "/hdmath/findhqthetheater.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqthetheater/index.html")
},
{
    title: "Find my HQ Washington DC",
    imgSrc: "/hdmath/findhqwashingtondc.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqwashingtondc/index.html")
},
{
    title: "Find my HQ Yellowstone",
    imgSrc: "/hdmath/findhqyellowstone.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqyellowstone/index.html")
},
{
    title: "Find my HQ Yosemite",
    imgSrc: "/hdmath/findhqyosemite.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findhqyosemite/index.html")
},
{
    title: "Find Me",
    imgSrc: "/hdmath/findme.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findme/index.html")
},
{
    title: "Find my baseball",
    imgSrc: "/hdmath/findmybaseballbathroom.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findmybaseballbathroom/index.html")
},
{
    title: "Find my beachball",
    imgSrc: "/hdmath/findmybeachballbeach.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findmybeachballbeach/index.html")
},
{
    title: "Find my dodgeball",
    imgSrc: "/hdmath/findmydodgeballkitchen.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findmydodgeballkitchen/index.html")
},
{
    title: "Find my football",
    imgSrc: "/hdmath/findmyfootballhotel.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findmyfootballhotel/index.html")
},
{
    title: "Find my soccer ball",
    imgSrc: "/hdmath/findmysoccerballalcatraz.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findmysoccerballalcatraz/index.html")
},
{
    title: "Find my softball",
    imgSrc: "/hdmath/findmysoftballbackyard.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findmysoftballbackyard/index.html")
},
{
    title: "Find my volleyball",
    imgSrc: "/hdmath/findmyvolleyballnewyork.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/findmyvolleyballnewyork/index.html")
},
{
    title: "Fireboyandwatergirlforesttemple 3",
    imgSrc: "/hdmath/fireboyandwatergirlforesttemple3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fireboyandwatergirlforesttemple3/index.html")
},
{
    title: "Fireboyandwatergirlinthelighttemple 2",
    imgSrc: "/hdmath/fireboyandwatergirlinthelighttemple2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fireboyandwatergirlinthelighttemple2/index.html")
},
{
    title: "Flappyfactors",
    imgSrc: "/hdmath/flappyfactors.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/flappyfactors/index.html")
},
{
    title: "Flappymultiples",
    imgSrc: "/hdmath/flappymultiples.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/flappymultiples/index.html")
},
{
    title: "Christmas Furious",
    imgSrc: "/hdmath/flappyreindeer.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/flappyreindeer/index.html")
},
{
    title: "Flip Duck",
    imgSrc: "/hdmath/flipduck.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/flipduck/index.html")
},
{
    title: "Flush",
    imgSrc: "/hdmath/flush.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/flush/index.html")
},
{
    title: "foodtruckfun",
    imgSrc: "/hdmath/foodtruckfun.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/foodtruckfun/index.html")
},
{
    title: "Footgolf Evolution",
    imgSrc: "/hdmath/footgolf.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/footgolf/index.html")
},
{
    title: "Fourcolors",
    imgSrc: "/hdmath/fourcolors.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fourcolors/index.html")
},
{
    title: "Fraction poker",
    imgSrc: "/hdmath/fractionpoker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fractionpoker/index.html")
},
{
    title: "Fractions Timed Tests",
    imgSrc: "/hdmath/fractionstimedtests.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fractionstimedtests/index.html")
},
{
    title: "Freaking Math",
    imgSrc: "/hdmath/freakingmath.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/freakingmath/index.html")
},
{
    title: "FREE CELL",
    imgSrc: "/hdmath/freecellsolitaire.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/freecellsolitaire/index.html")
},
{
    title: "Freekicktraining",
    imgSrc: "/hdmath/freekicktraining.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/freekicktraining/index.html")
},
{
    title: "Frog Corral",
    imgSrc: "/hdmath/frogcorral.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/frogcorral/index.html")
},
{
    title: "Frog Leap at HoodaGames.com",
    imgSrc: "/hdmath/frogleap.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/frogleap/index.html")
},
{
    title: "fullmoon",
    imgSrc: "/hdmath/fullmoon.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/fullmoon/index.html")
},
{
    title: "Gen Z Words Quiz",
    imgSrc: "/hdmath/genzwordsquiz.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/genzwordsquiz/index.html")
},
{
    title: "Geometry Rash",
    imgSrc: "/hdmath/geometryrash.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/geometryrash/index.html")
},
{
    title: "Germies!",
    imgSrc: "/hdmath/germies.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/germies/index.html")
},
{
    title: "gingerbreadhouseescape",
    imgSrc: "/hdmath/gingerbreadhouseescape.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/gingerbreadhouseescape/index.html")
},
{
    title: "Gingerbread Maker",
    imgSrc: "/hdmath/gingerbreadmaker.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/gingerbreadmaker/index.html")
},
{
    title: "Unity WebGL Player | Glitch",
    imgSrc: "/hdmath/glitch.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/glitch/index.html")
},
{
    title: "Goatcrossing",
    imgSrc: "/hdmath/goatcrossing.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/goatcrossing/index.html")
},
{
    title: "Goldburgertogo",
    imgSrc: "/hdmath/goldburgertogo.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/goldburgertogo/index.html")
},
{
    title: "Golf Field 2",
    imgSrc: "/hdmath/golffield2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/golffield2/index.html")
},
{
    title: "Grammar Fun",
    imgSrc: "/hdmath/grammarfun.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/grammarfun/index.html")
},
{
    title: "grammarninja",
    imgSrc: "/hdmath/grammarninja.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/grammarninja/index.html")
},
{
    title: "Graveyard Snake",
    imgSrc: "/hdmath/graveyardsnake.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/graveyardsnake/index.html")
},
{
    title: "Grayscaleescapechristmas",
    imgSrc: "/hdmath/grayscaleescapechristmas.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/grayscaleescapechristmas/index.html")
},
{
    title: "Great Adviser",
    imgSrc: "/hdmath/greatadviser.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/greatadviser/index.html")
},
{
    title: "Hooda Grow Castle",
    imgSrc: "/hdmath/growcastle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growcastle/index.html")
},
{
    title: "growcube",
    imgSrc: "/hdmath/growcube.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growcube/index.html")
},
{
    title: "Grow farm",
    imgSrc: "/hdmath/growfarm.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growfarm/index.html")
},
{
    title: "growisland",
    imgSrc: "/hdmath/growisland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growisland/index.html")
},
{
    title: "Growmi",
    imgSrc: "/hdmath/growmi.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growmi/index.html")
},
{
    title: "grownanovol3",
    imgSrc: "/hdmath/grownanovol3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/grownanovol3/index.html")
},
{
    title: "growpark",
    imgSrc: "/hdmath/growpark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growpark/index.html")
},
{
    title: "Grow school",
    imgSrc: "/hdmath/growschool.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growschool/index.html")
},
{
    title: "growtower",
    imgSrc: "/hdmath/growtower.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growtower/index.html")
},
{
    title: "Growtree",
    imgSrc: "/hdmath/growtree.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growtree/index.html")
},
{
    title: "growvalley",
    imgSrc: "/hdmath/growvalley.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growvalley/index.html")
},
{
    title: "Grow Water Park",
    imgSrc: "/hdmath/growwaterpark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growwaterpark/index.html")
},
{
    title: "Hooda Grow Zoo",
    imgSrc: "/hdmath/growzoo.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/growzoo/index.html")
},
{
    title: "Guess Word",
    imgSrc: "/hdmath/guessword.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/guessword/index.html")
},
{
    title: "HALLOWEEN MEMORY",
    imgSrc: "/hdmath/halloweenmemory.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/halloweenmemory/index.html")
},
{
    title: "Happy Filled Glass",
    imgSrc: "/hdmath/happyfilledglass.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/happyfilledglass/index.html")
},
{
    title: "Happy Filled Glass 2",
    imgSrc: "/hdmath/happyfilledglass2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/happyfilledglass2/index.html")
},
{
    title: "Happy Filled Glass 3",
    imgSrc: "/hdmath/happyfilledglass3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/happyfilledglass3/index.html")
},
{
    title: "Happy Filled Glass 4",
    imgSrc: "/hdmath/happyfilledglass4.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/happyfilledglass4/index.html")
},
{
    title: "happymart",
    imgSrc: "/hdmath/happymart.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/happymart/index.html")
},
{
    title: "happytower",
    imgSrc: "/hdmath/happytower.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/happytower/index.html")
},
{
    title: "Head Soccer 2022",
    imgSrc: "/hdmath/headsoccer.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/headsoccer/index.html")
},
{
    title: "Head Soccer 2026",
    imgSrc: "/hdmath/headsoccer2026.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/headsoccer2026/index.html")
},
{
    title: "Hex Wars",
    imgSrc: "/hdmath/hexwars.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hexwars/index.html")
},
{
    title: "Hide Caesar Hooda",
    imgSrc: "/hdmath/hidecaesar.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hidecaesar/index.html")
},
{
    title: "HOCKEY SHOOTOUT",
    imgSrc: "/hdmath/hockeyshootout.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hockeyshootout/index.html")
},
{
    title: "homesheephome",
    imgSrc: "/hdmath/homesheephome.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/homesheephome/index.html")
},
{
    title: "Hooda Bridge - On Any Device",
    imgSrc: "/hdmath/hoodabridge.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodabridge/index.html")
},
{
    title: "Hooda Dissection",
    imgSrc: "/hdmath/hoodadissection.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodadissection/index.html")
},
{
    title: "Hoodaescape 3 Rdgradefieldtripaquarium",
    imgSrc: "/hdmath/hoodaescape3rdgradefieldtripaquarium.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape3rdgradefieldtripaquarium/index.html")
},
{
    title: "Hoodaescape 3 Rdgradefieldtriparcade",
    imgSrc: "/hdmath/hoodaescape3rdgradefieldtriparcade.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape3rdgradefieldtriparcade/index.html")
},
{
    title: "Hoodaescape 3 Rdgradefieldtripbeach",
    imgSrc: "/hdmath/hoodaescape3rdgradefieldtripbeach.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape3rdgradefieldtripbeach/index.html")
},
{
    title: "Hoodaescape 3 Rdgradefieldtripchickenfarm",
    imgSrc: "/hdmath/hoodaescape3rdgradefieldtripchickenfarm.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape3rdgradefieldtripchickenfarm/index.html")
},
{
    title: "Hoodaescape 3 Rdgradefieldtripcookiefactory",
    imgSrc: "/hdmath/hoodaescape3rdgradefieldtripcookiefactory.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape3rdgradefieldtripcookiefactory/index.html")
},
{
    title: "Hoodaescape 3 Rdgradefieldtripdinoland",
    imgSrc: "/hdmath/hoodaescape3rdgradefieldtripdinoland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape3rdgradefieldtripdinoland/index.html")
},
{
    title: "Hoodaescape 3 Rdgradefieldtripicecreamshop",
    imgSrc: "/hdmath/hoodaescape3rdgradefieldtripicecreamshop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape3rdgradefieldtripicecreamshop/index.html")
},
{
    title: "Hoodaescape 3 Rdgradefieldtripsummercamp",
    imgSrc: "/hdmath/hoodaescape3rdgradefieldtripsummercamp.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape3rdgradefieldtripsummercamp/index.html")
},
{
    title: "Hoodaescape 6 Thgradefieldtripairfield",
    imgSrc: "/hdmath/hoodaescape6thgradefieldtripairfield.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape6thgradefieldtripairfield/index.html")
},
{
    title: "Hoodaescape 6 Thgradefieldtripancientruins",
    imgSrc: "/hdmath/hoodaescape6thgradefieldtripancientruins.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape6thgradefieldtripancientruins/index.html")
},
{
    title: "Hoodaescape 6 Thgradefieldtripcastle",
    imgSrc: "/hdmath/hoodaescape6thgradefieldtripcastle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape6thgradefieldtripcastle/index.html")
},
{
    title: "Hoodaescape 6 Thgradefieldtripmuseum",
    imgSrc: "/hdmath/hoodaescape6thgradefieldtripmuseum.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape6thgradefieldtripmuseum/index.html")
},
{
    title: "Hoodaescape 6 Thgradefieldtripnaturepark",
    imgSrc: "/hdmath/hoodaescape6thgradefieldtripnaturepark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape6thgradefieldtripnaturepark/index.html")
},
{
    title: "Hoodaescape 6 Thgradefieldtrippyramid",
    imgSrc: "/hdmath/hoodaescape6thgradefieldtrippyramid.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape6thgradefieldtrippyramid/index.html")
},
{
    title: "Hoodaescape 6 Thgradefieldtriptrampolinepark",
    imgSrc: "/hdmath/hoodaescape6thgradefieldtriptrampolinepark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape6thgradefieldtriptrampolinepark/index.html")
},
{
    title: "Hoodaescape 6 Thgradefieldtripwaterpark",
    imgSrc: "/hdmath/hoodaescape6thgradefieldtripwaterpark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape6thgradefieldtripwaterpark/index.html")
},
{
    title: "Hoodaescape 6 Thgradefieldtripzoo",
    imgSrc: "/hdmath/hoodaescape6thgradefieldtripzoo.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescape6thgradefieldtripzoo/index.html")
},
{
    title: "Hoodaescapeadelaide 2024",
    imgSrc: "/hdmath/hoodaescapeadelaide2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeadelaide2024/index.html")
},
{
    title: "Escape Airfield",
    imgSrc: "/hdmath/hoodaescapeairfield.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeairfield/index.html")
},
{
    title: "Escape Alabama",
    imgSrc: "/hdmath/hoodaescapealabama.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapealabama/index.html")
},
{
    title: "Hoodaescapealabama 2022",
    imgSrc: "/hdmath/hoodaescapealabama2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapealabama2022/index.html")
},
{
    title: "Escape Alaska",
    imgSrc: "/hdmath/hoodaescapealaska.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapealaska/index.html")
},
{
    title: "Hoodaescapealaska 2022",
    imgSrc: "/hdmath/hoodaescapealaska2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapealaska2022/index.html")
},
{
    title: "Hoodaescapealbuquerque 2023",
    imgSrc: "/hdmath/hoodaescapealbuquerque2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapealbuquerque2023/index.html")
},
{
    title: "Hoodaescapeappleorchard 2023",
    imgSrc: "/hdmath/hoodaescapeappleorchard2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeappleorchard2023/index.html")
},
{
    title: "Hoodaescapeaquarium 2024",
    imgSrc: "/hdmath/hoodaescapeaquarium2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeaquarium2024/index.html")
},
{
    title: "Escape Arizona",
    imgSrc: "/hdmath/hoodaescapearizona.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapearizona/index.html")
},
{
    title: "Hoodaescapearizona 2022",
    imgSrc: "/hdmath/hoodaescapearizona2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapearizona2022/index.html")
},
{
    title: "Escape Arkansas",
    imgSrc: "/hdmath/hoodaescapearkansas.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapearkansas/index.html")
},
{
    title: "Hoodaescapearkansas 2022",
    imgSrc: "/hdmath/hoodaescapearkansas2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapearkansas2022/index.html")
},
{
    title: "Hoodaescapeartmuseum 2023",
    imgSrc: "/hdmath/hoodaescapeartmuseum2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeartmuseum2023/index.html")
},
{
    title: "Hoodaescapeatlanta 2023",
    imgSrc: "/hdmath/hoodaescapeatlanta2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeatlanta2023/index.html")
},
{
    title: "Escape Augusta",
    imgSrc: "/hdmath/hoodaescapeaugusta.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeaugusta/index.html")
},
{
    title: "Hoodaescapeaustin 2023",
    imgSrc: "/hdmath/hoodaescapeaustin2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeaustin2023/index.html")
},
{
    title: "Hoodaescapeaustraliancapitalterritory 2024",
    imgSrc: "/hdmath/hoodaescapeaustraliancapitalterritory2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeaustraliancapitalterritory2024/index.html")
},
{
    title: "Escape Auto Factory",
    imgSrc: "/hdmath/hoodaescapeautofactory.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeautofactory/index.html")
},
{
    title: "Hoodaescapeautoshop",
    imgSrc: "/hdmath/hoodaescapeautoshop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeautoshop/index.html")
},
{
    title: "Hoodaescapeballpark 2023",
    imgSrc: "/hdmath/hoodaescapeballpark2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeballpark2023/index.html")
},
{
    title: "Hoodaescapebaltimore 2023",
    imgSrc: "/hdmath/hoodaescapebaltimore2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapebaltimore2023/index.html")
},
{
    title: "Hoodaescapebirthdayparty 2024",
    imgSrc: "/hdmath/hoodaescapebirthdayparty2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapebirthdayparty2024/index.html")
},
{
    title: "Escape Boise",
    imgSrc: "/hdmath/hoodaescapeboise.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeboise/index.html")
},
{
    title: "Hoodaescapeboston 2023",
    imgSrc: "/hdmath/hoodaescapeboston2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeboston2023/index.html")
},
{
    title: "Hoodaescapebowling 2024",
    imgSrc: "/hdmath/hoodaescapebowling2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapebowling2024/index.html")
},
{
    title: "Hoodaescapebrisbane 2024",
    imgSrc: "/hdmath/hoodaescapebrisbane2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapebrisbane2024/index.html")
},
{
    title: "Escape Bullet Train",
    imgSrc: "/hdmath/hoodaescapebullettrain.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapebullettrain/index.html")
},
{
    title: "Hoodaescapecabin 2023",
    imgSrc: "/hdmath/hoodaescapecabin2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecabin2023/index.html")
},
{
    title: "Hoodaescapecalgary 2024",
    imgSrc: "/hdmath/hoodaescapecalgary2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecalgary2024/index.html")
},
{
    title: "Escape California",
    imgSrc: "/hdmath/hoodaescapecalifornia.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecalifornia/index.html")
},
{
    title: "Hoodaescapecalifornia 2022",
    imgSrc: "/hdmath/hoodaescapecalifornia2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecalifornia2022/index.html")
},
{
    title: "Hoodaescapecamp 2023",
    imgSrc: "/hdmath/hoodaescapecamp2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecamp2023/index.html")
},
{
    title: "Hoodaescapecentralpark 2024",
    imgSrc: "/hdmath/hoodaescapecentralpark2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecentralpark2024/index.html")
},
{
    title: "Hoodaescapecharlotte 2023",
    imgSrc: "/hdmath/hoodaescapecharlotte2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecharlotte2023/index.html")
},
{
    title: "Hooda Escape Cheyenne",
    imgSrc: "/hdmath/hoodaescapecheyenne.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecheyenne/index.html")
},
{
    title: "Hoodaescapechicago 2023",
    imgSrc: "/hdmath/hoodaescapechicago2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapechicago2023/index.html")
},
{
    title: "Escape Colorado",
    imgSrc: "/hdmath/hoodaescapecolorado.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecolorado/index.html")
},
{
    title: "Hoodaescapecolorado 2022",
    imgSrc: "/hdmath/hoodaescapecolorado2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecolorado2022/index.html")
},
{
    title: "Hoodaescapecoloradosprings 2023",
    imgSrc: "/hdmath/hoodaescapecoloradosprings2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecoloradosprings2023/index.html")
},
{
    title: "Escape Columbia",
    imgSrc: "/hdmath/hoodaescapecolumbia.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecolumbia/index.html")
},
{
    title: "Hoodaescapecolumbus 2023",
    imgSrc: "/hdmath/hoodaescapecolumbus2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecolumbus2023/index.html")
},
{
    title: "Hoodaescapeconcertvenue 2023",
    imgSrc: "/hdmath/hoodaescapeconcertvenue2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeconcertvenue2023/index.html")
},
{
    title: "Escape Connecticut",
    imgSrc: "/hdmath/hoodaescapeconnecticut.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeconnecticut/index.html")
},
{
    title: "Hoodaescapeconnecticut 2022",
    imgSrc: "/hdmath/hoodaescapeconnecticut2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeconnecticut2022/index.html")
},
{
    title: "Hoodaescapecornmaze",
    imgSrc: "/hdmath/hoodaescapecornmaze.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecornmaze/index.html")
},
{
    title: "Hoodaescapecornmaze 2023",
    imgSrc: "/hdmath/hoodaescapecornmaze2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecornmaze2023/index.html")
},
{
    title: "Hoodaescapecountyfair 2023",
    imgSrc: "/hdmath/hoodaescapecountyfair2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapecountyfair2023/index.html")
},
{
    title: "Hoodaescapedallas 2023",
    imgSrc: "/hdmath/hoodaescapedallas2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapedallas2023/index.html")
},
{
    title: "Hoodaescapedarwin 2024",
    imgSrc: "/hdmath/hoodaescapedarwin2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapedarwin2024/index.html")
},
{
    title: "Escape Delaware",
    imgSrc: "/hdmath/hoodaescapedelaware.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapedelaware/index.html")
},
{
    title: "Hoodaescapedelaware 2022",
    imgSrc: "/hdmath/hoodaescapedelaware2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapedelaware2022/index.html")
},
{
    title: "Hoodaescapedenver 2023",
    imgSrc: "/hdmath/hoodaescapedenver2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapedenver2023/index.html")
},
{
    title: "Hoodaescapedetroit 2023",
    imgSrc: "/hdmath/hoodaescapedetroit2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapedetroit2023/index.html")
},
{
    title: "Hoodaescapedogpark 2024",
    imgSrc: "/hdmath/hoodaescapedogpark2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapedogpark2024/index.html")
},
{
    title: "Hoodaescapeeasteregghunt 2024",
    imgSrc: "/hdmath/hoodaescapeeasteregghunt2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeeasteregghunt2024/index.html")
},
{
    title: "Hoodaescapeedmonton 2024",
    imgSrc: "/hdmath/hoodaescapeedmonton2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeedmonton2024/index.html")
},
{
    title: "Hoodaescapeelpaso 2023",
    imgSrc: "/hdmath/hoodaescapeelpaso2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeelpaso2023/index.html")
},
{
    title: "Hoodaescapefamilybbq 2023",
    imgSrc: "/hdmath/hoodaescapefamilybbq2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapefamilybbq2023/index.html")
},
{
    title: "Hoodaescapefarm 2023",
    imgSrc: "/hdmath/hoodaescapefarm2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapefarm2023/index.html")
},
{
    title: "Hoodaescapefbi 2024",
    imgSrc: "/hdmath/hoodaescapefbi2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapefbi2024/index.html")
},
{
    title: "Hoodaescapefirestation 2024",
    imgSrc: "/hdmath/hoodaescapefirestation2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapefirestation2024/index.html")
},
{
    title: "Hooda Escape Fisherman Island Mobile Game",
    imgSrc: "/hdmath/hoodaescapefishermanisland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapefishermanisland/index.html")
},
{
    title: "Escape Florida",
    imgSrc: "/hdmath/hoodaescapeflorida.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeflorida/index.html")
},
{
    title: "Hoodaescapeflorida 2022",
    imgSrc: "/hdmath/hoodaescapeflorida2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeflorida2022/index.html")
},
{
    title: "Hoodaescapefootballstadium 2023",
    imgSrc: "/hdmath/hoodaescapefootballstadium2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapefootballstadium2023/index.html")
},
{
    title: "Hoodaescapefortworth 2023",
    imgSrc: "/hdmath/hoodaescapefortworth2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapefortworth2023/index.html")
},
{
    title: "Hoodaescapefresno 2023",
    imgSrc: "/hdmath/hoodaescapefresno2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapefresno2023/index.html")
},
{
    title: "Hooda Escape Fyre Festival",
    imgSrc: "/hdmath/hoodaescapefyrefestival.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapefyrefestival/index.html")
},
{
    title: "Hoodaescapegardenmaze 2023",
    imgSrc: "/hdmath/hoodaescapegardenmaze2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapegardenmaze2023/index.html")
},
{
    title: "Escape Georgia",
    imgSrc: "/hdmath/hoodaescapegeorgia.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapegeorgia/index.html")
},
{
    title: "Hoodaescapegeorgia 2022",
    imgSrc: "/hdmath/hoodaescapegeorgia2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapegeorgia2022/index.html")
},
{
    title: "Hoodaescapeghosthouse",
    imgSrc: "/hdmath/hoodaescapeghosthouse.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeghosthouse/index.html")
},
{
    title: "Hooda Escape Grandma's House Mobile Game",
    imgSrc: "/hdmath/hoodaescapegrandmashouse.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapegrandmashouse/index.html")
},
{
    title: "Hoodaescapehamilton 2024",
    imgSrc: "/hdmath/hoodaescapehamilton2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapehamilton2024/index.html")
},
{
    title: "Hoodaescapehauntedhouse 2023",
    imgSrc: "/hdmath/hoodaescapehauntedhouse2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapehauntedhouse2023/index.html")
},
{
    title: "Escape Hawaii",
    imgSrc: "/hdmath/hoodaescapehawaii.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapehawaii/index.html")
},
{
    title: "Hoodaescapehawaii 2022",
    imgSrc: "/hdmath/hoodaescapehawaii2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapehawaii2022/index.html")
},
{
    title: "Hoodaescapehike 2023",
    imgSrc: "/hdmath/hoodaescapehike2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapehike2023/index.html")
},
{
    title: "Hoodaescapehobart 2024",
    imgSrc: "/hdmath/hoodaescapehobart2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapehobart2024/index.html")
},
{
    title: "Hoodaescapehomecoming 2023",
    imgSrc: "/hdmath/hoodaescapehomecoming2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapehomecoming2023/index.html")
},
{
    title: "Hoodaescapehouston 2023",
    imgSrc: "/hdmath/hoodaescapehouston2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapehouston2023/index.html")
},
{
    title: "Hooda Escape Hunting Lodge Mobile Game",
    imgSrc: "/hdmath/hoodaescapehuntinglodge.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapehuntinglodge/index.html")
},
{
    title: "Hoodaescapeicecreamshop",
    imgSrc: "/hdmath/hoodaescapeicecreamshop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeicecreamshop/index.html")
},
{
    title: "Hoodaescapeiceskating 2023",
    imgSrc: "/hdmath/hoodaescapeiceskating2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeiceskating2023/index.html")
},
{
    title: "Escape Idaho",
    imgSrc: "/hdmath/hoodaescapeidaho.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeidaho/index.html")
},
{
    title: "Hoodaescapeidaho 2022",
    imgSrc: "/hdmath/hoodaescapeidaho2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeidaho2022/index.html")
},
{
    title: "Escape Illinois",
    imgSrc: "/hdmath/hoodaescapeillinois.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeillinois/index.html")
},
{
    title: "Hoodaescapeillinois 2022",
    imgSrc: "/hdmath/hoodaescapeillinois2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeillinois2022/index.html")
},
{
    title: "Escape Indiana",
    imgSrc: "/hdmath/hoodaescapeindiana.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeindiana/index.html")
},
{
    title: "Hoodaescapeindiana 2022",
    imgSrc: "/hdmath/hoodaescapeindiana2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeindiana2022/index.html")
},
{
    title: "Escape Indianapolis",
    imgSrc: "/hdmath/hoodaescapeindianapolis.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeindianapolis/index.html")
},
{
    title: "Hoodaescapeindianapolis 2023",
    imgSrc: "/hdmath/hoodaescapeindianapolis2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeindianapolis2023/index.html")
},
{
    title: "Escape Iowa",
    imgSrc: "/hdmath/hoodaescapeiowa.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeiowa/index.html")
},
{
    title: "Hoodaescapeiowa 2022",
    imgSrc: "/hdmath/hoodaescapeiowa2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeiowa2022/index.html")
},
{
    title: "Escape Jackson",
    imgSrc: "/hdmath/hoodaescapejackson.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapejackson/index.html")
},
{
    title: "Hoodaescapejacksonville 2023",
    imgSrc: "/hdmath/hoodaescapejacksonville2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapejacksonville2023/index.html")
},
{
    title: "Escape Jersey Shore",
    imgSrc: "/hdmath/hoodaescapejerseyshore.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapejerseyshore/index.html")
},
{
    title: "Escape Juneau",
    imgSrc: "/hdmath/hoodaescapejuneau.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapejuneau/index.html")
},
{
    title: "Hoodaescapejungle 2024",
    imgSrc: "/hdmath/hoodaescapejungle2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapejungle2024/index.html")
},
{
    title: "Escape Kansas",
    imgSrc: "/hdmath/hoodaescapekansas.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapekansas/index.html")
},
{
    title: "Hoodaescapekansas 2022",
    imgSrc: "/hdmath/hoodaescapekansas2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapekansas2022/index.html")
},
{
    title: "Hoodaescapekansascity 2023",
    imgSrc: "/hdmath/hoodaescapekansascity2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapekansascity2023/index.html")
},
{
    title: "Escape Kentucky",
    imgSrc: "/hdmath/hoodaescapekentucky.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapekentucky/index.html")
},
{
    title: "Hoodaescapekentucky 2022",
    imgSrc: "/hdmath/hoodaescapekentucky2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapekentucky2022/index.html")
},
{
    title: "Escape King's Landing",
    imgSrc: "/hdmath/hoodaescapekingslanding.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapekingslanding/index.html")
},
{
    title: "Hoodaescapekitchener 2024",
    imgSrc: "/hdmath/hoodaescapekitchener2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapekitchener2024/index.html")
},
{
    title: "Hoodaescapelasvegas 2023",
    imgSrc: "/hdmath/hoodaescapelasvegas2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapelasvegas2023/index.html")
},
{
    title: "Hoodaescapelazyriver 2023",
    imgSrc: "/hdmath/hoodaescapelazyriver2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapelazyriver2023/index.html")
},
{
    title: "Hoodaescapelibrary 2024",
    imgSrc: "/hdmath/hoodaescapelibrary2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapelibrary2024/index.html")
},
{
    title: "Hoodaescapelondon 2024",
    imgSrc: "/hdmath/hoodaescapelondon2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapelondon2024/index.html")
},
{
    title: "Hoodaescapelosangeles 2023",
    imgSrc: "/hdmath/hoodaescapelosangeles2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapelosangeles2023/index.html")
},
{
    title: "Escape Louisiana",
    imgSrc: "/hdmath/hoodaescapelouisiana.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapelouisiana/index.html")
},
{
    title: "Hoodaescapelouisiana 2022",
    imgSrc: "/hdmath/hoodaescapelouisiana2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapelouisiana2022/index.html")
},
{
    title: "Hoodaescapelouisville 2023",
    imgSrc: "/hdmath/hoodaescapelouisville2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapelouisville2023/index.html")
},
{
    title: "Hoodaescapemaine 2022",
    imgSrc: "/hdmath/hoodaescapemaine2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemaine2022/index.html")
},
{
    title: "Hoodaescapemaryland 2022",
    imgSrc: "/hdmath/hoodaescapemaryland2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemaryland2022/index.html")
},
{
    title: "Escape Massachusetts",
    imgSrc: "/hdmath/hoodaescapemassachusetts.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemassachusetts/index.html")
},
{
    title: "Hoodaescapemassachusetts 2022",
    imgSrc: "/hdmath/hoodaescapemassachusetts2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemassachusetts2022/index.html")
},
{
    title: "Hooda Escape Math Mansion Mobile Game",
    imgSrc: "/hdmath/hoodaescapemathmansion.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemathmansion/index.html")
},
{
    title: "Hoodaescapemelbourne 2024",
    imgSrc: "/hdmath/hoodaescapemelbourne2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemelbourne2024/index.html")
},
{
    title: "Hoodaescapememphis 2023",
    imgSrc: "/hdmath/hoodaescapememphis2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapememphis2023/index.html")
},
{
    title: "Hoodaescapemesa 2023",
    imgSrc: "/hdmath/hoodaescapemesa2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemesa2023/index.html")
},
{
    title: "Escape Michigan",
    imgSrc: "/hdmath/hoodaescapemichigan.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemichigan/index.html")
},
{
    title: "Hoodaescapemichigan 2022",
    imgSrc: "/hdmath/hoodaescapemichigan2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemichigan2022/index.html")
},
{
    title: "Hoodaescapemilwaukee 2023",
    imgSrc: "/hdmath/hoodaescapemilwaukee2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemilwaukee2023/index.html")
},
{
    title: "Escape Minnesota",
    imgSrc: "/hdmath/hoodaescapeminnesota.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeminnesota/index.html")
},
{
    title: "Hoodaescapeminnesota 2022",
    imgSrc: "/hdmath/hoodaescapeminnesota2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeminnesota2022/index.html")
},
{
    title: "Escape Mississippi",
    imgSrc: "/hdmath/hoodaescapemississippi.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemississippi/index.html")
},
{
    title: "Hoodaescapemississippi 2022",
    imgSrc: "/hdmath/hoodaescapemississippi2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemississippi2022/index.html")
},
{
    title: "Escape Missouri",
    imgSrc: "/hdmath/hoodaescapemissouri.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemissouri/index.html")
},
{
    title: "Hoodaescapemissouri 2022",
    imgSrc: "/hdmath/hoodaescapemissouri2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemissouri2022/index.html")
},
{
    title: "Escape Montana",
    imgSrc: "/hdmath/hoodaescapemontana.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemontana/index.html")
},
{
    title: "Hoodaescapemontana 2022",
    imgSrc: "/hdmath/hoodaescapemontana2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemontana2022/index.html")
},
{
    title: "Hoodaescapemontreal 2024",
    imgSrc: "/hdmath/hoodaescapemontreal2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemontreal2024/index.html")
},
{
    title: "Escape Motorhome",
    imgSrc: "/hdmath/hoodaescapemotorhome.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapemotorhome/index.html")
},
{
    title: "Hoodaescapenashville 2023",
    imgSrc: "/hdmath/hoodaescapenashville2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenashville2023/index.html")
},
{
    title: "Hoodaescapenaturewalk 2023",
    imgSrc: "/hdmath/hoodaescapenaturewalk2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenaturewalk2023/index.html")
},
{
    title: "Escape Nebraska",
    imgSrc: "/hdmath/hoodaescapenebraska.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenebraska/index.html")
},
{
    title: "Hoodaescapenebraska 2022",
    imgSrc: "/hdmath/hoodaescapenebraska2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenebraska2022/index.html")
},
{
    title: "Escape Nevada",
    imgSrc: "/hdmath/hoodaescapenevada.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenevada/index.html")
},
{
    title: "Hoodaescapenevada 2022",
    imgSrc: "/hdmath/hoodaescapenevada2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenevada2022/index.html")
},
{
    title: "hoodaescapeneverland",
    imgSrc: "/hdmath/hoodaescapeneverland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeneverland/index.html")
},
{
    title: "Escape New Hampshire",
    imgSrc: "/hdmath/hoodaescapenewhampshire.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewhampshire/index.html")
},
{
    title: "Hoodaescapenewhampshire 2022",
    imgSrc: "/hdmath/hoodaescapenewhampshire2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewhampshire2022/index.html")
},
{
    title: "Escape New Jersey",
    imgSrc: "/hdmath/hoodaescapenewjersey.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewjersey/index.html")
},
{
    title: "Hoodaescapenewjersey 2022",
    imgSrc: "/hdmath/hoodaescapenewjersey2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewjersey2022/index.html")
},
{
    title: "Escape New Mexico",
    imgSrc: "/hdmath/hoodaescapenewmexico.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewmexico/index.html")
},
{
    title: "Hoodaescapenewmexico 2022",
    imgSrc: "/hdmath/hoodaescapenewmexico2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewmexico2022/index.html")
},
{
    title: "Hoodaescapenewyearseve 2023",
    imgSrc: "/hdmath/hoodaescapenewyearseve2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewyearseve2023/index.html")
},
{
    title: "Escape New York",
    imgSrc: "/hdmath/hoodaescapenewyork.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewyork/index.html")
},
{
    title: "Hoodaescapenewyork 2022",
    imgSrc: "/hdmath/hoodaescapenewyork2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewyork2022/index.html")
},
{
    title: "Hoodaescapenewyorkcity 2023",
    imgSrc: "/hdmath/hoodaescapenewyorkcity2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenewyorkcity2023/index.html")
},
{
    title: "Escape North Carolina",
    imgSrc: "/hdmath/hoodaescapenorthcarolina.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenorthcarolina/index.html")
},
{
    title: "Hoodaescapenorthcarolina 2022",
    imgSrc: "/hdmath/hoodaescapenorthcarolina2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenorthcarolina2022/index.html")
},
{
    title: "Escape North Dakota",
    imgSrc: "/hdmath/hoodaescapenorthdakota.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenorthdakota/index.html")
},
{
    title: "Hoodaescapenorthdakota 2022",
    imgSrc: "/hdmath/hoodaescapenorthdakota2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenorthdakota2022/index.html")
},
{
    title: "Hoodaescapenorthpole 2023",
    imgSrc: "/hdmath/hoodaescapenorthpole2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapenorthpole2023/index.html")
},
{
    title: "Escape Ohio",
    imgSrc: "/hdmath/hoodaescapeohio.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeohio/index.html")
},
{
    title: "Hoodaescapeohio 2022",
    imgSrc: "/hdmath/hoodaescapeohio2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeohio2022/index.html")
},
{
    title: "Escape Oklahoma",
    imgSrc: "/hdmath/hoodaescapeoklahoma.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeoklahoma/index.html")
},
{
    title: "Hoodaescapeoklahoma 2022",
    imgSrc: "/hdmath/hoodaescapeoklahoma2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeoklahoma2022/index.html")
},
{
    title: "Hoodaescapeoklahomacity 2023",
    imgSrc: "/hdmath/hoodaescapeoklahomacity2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeoklahomacity2023/index.html")
},
{
    title: "Hooda Escape Olympia",
    imgSrc: "/hdmath/hoodaescapeolympia.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeolympia/index.html")
},
{
    title: "Escape Oregon",
    imgSrc: "/hdmath/hoodaescapeoregon.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeoregon/index.html")
},
{
    title: "Hoodaescapeoregon 2022",
    imgSrc: "/hdmath/hoodaescapeoregon2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeoregon2022/index.html")
},
{
    title: "Hoodaescapeottawa 2024",
    imgSrc: "/hdmath/hoodaescapeottawa2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeottawa2024/index.html")
},
{
    title: "Hoodaescapeparade 2023",
    imgSrc: "/hdmath/hoodaescapeparade2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeparade2023/index.html")
},
{
    title: "Escape Pennsylvania",
    imgSrc: "/hdmath/hoodaescapepennsylvania.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapepennsylvania/index.html")
},
{
    title: "Hoodaescapepennsylvania 2022",
    imgSrc: "/hdmath/hoodaescapepennsylvania2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapepennsylvania2022/index.html")
},
{
    title: "Hoodaescapeperth 2024",
    imgSrc: "/hdmath/hoodaescapeperth2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeperth2024/index.html")
},
{
    title: "Hoodaescapepettingzoo 2024",
    imgSrc: "/hdmath/hoodaescapepettingzoo2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapepettingzoo2024/index.html")
},
{
    title: "Hoodaescapephiladelphia 2023",
    imgSrc: "/hdmath/hoodaescapephiladelphia2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapephiladelphia2023/index.html")
},
{
    title: "Escape Phoenix",
    imgSrc: "/hdmath/hoodaescapephoenix.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapephoenix/index.html")
},
{
    title: "Hoodaescapephoenix 2023",
    imgSrc: "/hdmath/hoodaescapephoenix2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapephoenix2023/index.html")
},
{
    title: "Hoodaescapepizzashop 2024",
    imgSrc: "/hdmath/hoodaescapepizzashop2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapepizzashop2024/index.html")
},
{
    title: "Hoodaescapeplayground 2024",
    imgSrc: "/hdmath/hoodaescapeplayground2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeplayground2024/index.html")
},
{
    title: "Hoodaescapepolicestation 2024",
    imgSrc: "/hdmath/hoodaescapepolicestation2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapepolicestation2024/index.html")
},
{
    title: "Hoodaescapeportland 2023",
    imgSrc: "/hdmath/hoodaescapeportland2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeportland2023/index.html")
},
{
    title: "Hoodaescapeprison 2023",
    imgSrc: "/hdmath/hoodaescapeprison2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeprison2023/index.html")
},
{
    title: "Hoodaescapepumpkinpatch 2023",
    imgSrc: "/hdmath/hoodaescapepumpkinpatch2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapepumpkinpatch2023/index.html")
},
{
    title: "Hoodaescapequebeccity 2024",
    imgSrc: "/hdmath/hoodaescapequebeccity2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapequebeccity2024/index.html")
},
{
    title: "Hoodaescaperedroom 2024",
    imgSrc: "/hdmath/hoodaescaperedroom2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescaperedroom2024/index.html")
},
{
    title: "hoodaescaperedsgrandmashouse",
    imgSrc: "/hdmath/hoodaescaperedsgrandmashouse.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescaperedsgrandmashouse/index.html")
},
{
    title: "Hoodaescaperhodeisland",
    imgSrc: "/hdmath/hoodaescaperhodeisland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescaperhodeisland/index.html")
},
{
    title: "Hoodaescaperhodeisland 2022",
    imgSrc: "/hdmath/hoodaescaperhodeisland2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescaperhodeisland2022/index.html")
},
{
    title: "Escape Rocket Ship",
    imgSrc: "/hdmath/hoodaescaperocketship.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescaperocketship/index.html")
},
{
    title: "Escape Sacramento",
    imgSrc: "/hdmath/hoodaescapesacramento.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesacramento/index.html")
},
{
    title: "Hoodaescapesacramento 2023",
    imgSrc: "/hdmath/hoodaescapesacramento2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesacramento2023/index.html")
},
{
    title: "Escape Salem",
    imgSrc: "/hdmath/hoodaescapesalem.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesalem/index.html")
},
{
    title: "Hoodaescapesanantonio 2023",
    imgSrc: "/hdmath/hoodaescapesanantonio2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesanantonio2023/index.html")
},
{
    title: "Hoodaescapesandiego 2023",
    imgSrc: "/hdmath/hoodaescapesandiego2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesandiego2023/index.html")
},
{
    title: "Hoodaescapesanfrancisco 2023",
    imgSrc: "/hdmath/hoodaescapesanfrancisco2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesanfrancisco2023/index.html")
},
{
    title: "Hoodaescapesanjose 2023",
    imgSrc: "/hdmath/hoodaescapesanjose2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesanjose2023/index.html")
},
{
    title: "Hoodaescapesciencemuseum 2023",
    imgSrc: "/hdmath/hoodaescapesciencemuseum2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesciencemuseum2023/index.html")
},
{
    title: "Hoodaescapeseattle 2023",
    imgSrc: "/hdmath/hoodaescapeseattle2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeseattle2023/index.html")
},
{
    title: "hoodaescapesherwoodforest",
    imgSrc: "/hdmath/hoodaescapesherwoodforest.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesherwoodforest/index.html")
},
{
    title: "Hoodaescapeshoppingmall 2023",
    imgSrc: "/hdmath/hoodaescapeshoppingmall2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeshoppingmall2023/index.html")
},
{
    title: "hoodaescapeskatepark",
    imgSrc: "/hdmath/hoodaescapeskatepark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeskatepark/index.html")
},
{
    title: "Hoodaescapeskilodge 2024",
    imgSrc: "/hdmath/hoodaescapeskilodge2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeskilodge2024/index.html")
},
{
    title: "Hoodaescapesnowstorm 2024",
    imgSrc: "/hdmath/hoodaescapesnowstorm2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesnowstorm2024/index.html")
},
{
    title: "Escape South Carolina",
    imgSrc: "/hdmath/hoodaescapesouthcarolina.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesouthcarolina/index.html")
},
{
    title: "Hoodaescapesouthcarolina 2022",
    imgSrc: "/hdmath/hoodaescapesouthcarolina2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesouthcarolina2022/index.html")
},
{
    title: "Escape South Dakota",
    imgSrc: "/hdmath/hoodaescapesouthdakota.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesouthdakota/index.html")
},
{
    title: "Hoodaescapesouthdakota 2022",
    imgSrc: "/hdmath/hoodaescapesouthdakota2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesouthdakota2022/index.html")
},
{
    title: "Hooda Escape Spooky Farm Mobile Game",
    imgSrc: "/hdmath/hoodaescapespookyfarm.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapespookyfarm/index.html")
},
{
    title: "Hoodaescapespringgarden 2024",
    imgSrc: "/hdmath/hoodaescapespringgarden2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapespringgarden2024/index.html")
},
{
    title: "Escape Submarine",
    imgSrc: "/hdmath/hoodaescapesubmarine.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesubmarine/index.html")
},
{
    title: "Hoodaescapesubway 2024",
    imgSrc: "/hdmath/hoodaescapesubway2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesubway2024/index.html")
},
{
    title: "Hoodaescapesummerschool 2023",
    imgSrc: "/hdmath/hoodaescapesummerschool2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesummerschool2023/index.html")
},
{
    title: "Hoodaescapesydney 2024",
    imgSrc: "/hdmath/hoodaescapesydney2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapesydney2024/index.html")
},
{
    title: "Escape Tallahassee",
    imgSrc: "/hdmath/hoodaescapetallahassee.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetallahassee/index.html")
},
{
    title: "Escape Tennessee",
    imgSrc: "/hdmath/hoodaescapetennessee.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetennessee/index.html")
},
{
    title: "Hoodaescapetennessee 2022",
    imgSrc: "/hdmath/hoodaescapetennessee2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetennessee2022/index.html")
},
{
    title: "Escape Texas",
    imgSrc: "/hdmath/hoodaescapetexas.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetexas/index.html")
},
{
    title: "Hoodaescapetexas 2022",
    imgSrc: "/hdmath/hoodaescapetexas2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetexas2022/index.html")
},
{
    title: "Hoodaescapethanksgiving 2023",
    imgSrc: "/hdmath/hoodaescapethanksgiving2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapethanksgiving2023/index.html")
},
{
    title: "hoodaescapethewickedstepsisters",
    imgSrc: "/hdmath/hoodaescapethewickedstepsisters.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapethewickedstepsisters/index.html")
},
{
    title: "Escape Topeka",
    imgSrc: "/hdmath/hoodaescapetopeka.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetopeka/index.html")
},
{
    title: "Hoodaescapetoronto 2024",
    imgSrc: "/hdmath/hoodaescapetoronto2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetoronto2024/index.html")
},
{
    title: "hoodaescapetrainstation",
    imgSrc: "/hdmath/hoodaescapetrainstation.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetrainstation/index.html")
},
{
    title: "Hoodaescapetrampolinepark 2024",
    imgSrc: "/hdmath/hoodaescapetrampolinepark2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetrampolinepark2024/index.html")
},
{
    title: "Hoodaescapetrickortreat 2023",
    imgSrc: "/hdmath/hoodaescapetrickortreat2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetrickortreat2023/index.html")
},
{
    title: "Hoodaescapetucson 2023",
    imgSrc: "/hdmath/hoodaescapetucson2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapetucson2023/index.html")
},
{
    title: "Escape Ufo",
    imgSrc: "/hdmath/hoodaescapeufo.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeufo/index.html")
},
{
    title: "Escape Utah",
    imgSrc: "/hdmath/hoodaescapeutah.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeutah/index.html")
},
{
    title: "Hoodaescapeutah 2022",
    imgSrc: "/hdmath/hoodaescapeutah2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapeutah2022/index.html")
},
{
    title: "Hoodaescapevalentinesday 2024",
    imgSrc: "/hdmath/hoodaescapevalentinesday2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapevalentinesday2024/index.html")
},
{
    title: "Hoodaescapevancouver 2024",
    imgSrc: "/hdmath/hoodaescapevancouver2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapevancouver2024/index.html")
},
{
    title: "Escape Vermont",
    imgSrc: "/hdmath/hoodaescapevermont.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapevermont/index.html")
},
{
    title: "Hoodaescapevermont 2022",
    imgSrc: "/hdmath/hoodaescapevermont2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapevermont2022/index.html")
},
{
    title: "Escape Virginia",
    imgSrc: "/hdmath/hoodaescapevirginia.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapevirginia/index.html")
},
{
    title: "Hoodaescapevirginia 2022",
    imgSrc: "/hdmath/hoodaescapevirginia2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapevirginia2022/index.html")
},
{
    title: "Escape Washington",
    imgSrc: "/hdmath/hoodaescapewashington.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewashington/index.html")
},
{
    title: "Hoodaescapewashington 2022",
    imgSrc: "/hdmath/hoodaescapewashington2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewashington2022/index.html")
},
{
    title: "Hoodaescapewashingtondc 2023",
    imgSrc: "/hdmath/hoodaescapewashingtondc2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewashingtondc2023/index.html")
},
{
    title: "Hooda Escape Water Park Mobile Game",
    imgSrc: "/hdmath/hoodaescapewaterpark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewaterpark/index.html")
},
{
    title: "Hoodaescapewaterpark 2023",
    imgSrc: "/hdmath/hoodaescapewaterpark2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewaterpark2023/index.html")
},
{
    title: "West Virginia",
    imgSrc: "/hdmath/hoodaescapewestvirginia.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewestvirginia/index.html")
},
{
    title: "Hoodaescapewestvirginia 2022",
    imgSrc: "/hdmath/hoodaescapewestvirginia2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewestvirginia2022/index.html")
},
{
    title: "Hoodaescapewinnipeg 2024",
    imgSrc: "/hdmath/hoodaescapewinnipeg2024.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewinnipeg2024/index.html")
},
{
    title: "Escape Wisconsin",
    imgSrc: "/hdmath/hoodaescapewisconsin.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewisconsin/index.html")
},
{
    title: "Hoodaescapewisconsin 2022",
    imgSrc: "/hdmath/hoodaescapewisconsin2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewisconsin2022/index.html")
},
{
    title: "hoodaescapewithaladdinslamp",
    imgSrc: "/hdmath/hoodaescapewithaladdinslamp.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithaladdinslamp/index.html")
},
{
    title: "hoodaescapewithbeauty",
    imgSrc: "/hdmath/hoodaescapewithbeauty.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithbeauty/index.html")
},
{
    title: "hoodaescapewithfrank",
    imgSrc: "/hdmath/hoodaescapewithfrank.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithfrank/index.html")
},
{
    title: "hoodaescapewithgoldilocks",
    imgSrc: "/hdmath/hoodaescapewithgoldilocks.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithgoldilocks/index.html")
},
{
    title: "Hans and Grettel",
    imgSrc: "/hdmath/hoodaescapewithhanselandgretel.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithhanselandgretel/index.html")
},
{
    title: "hoodaescapewithjack",
    imgSrc: "/hdmath/hoodaescapewithjack.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithjack/index.html")
},
{
    title: "hoodaescapewithrapunzel",
    imgSrc: "/hdmath/hoodaescapewithrapunzel.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithrapunzel/index.html")
},
{
    title: "hoodaescapewithsnowwhite",
    imgSrc: "/hdmath/hoodaescapewithsnowwhite.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithsnowwhite/index.html")
},
{
    title: "Escape with Spooky",
    imgSrc: "/hdmath/hoodaescapewithspooky.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithspooky/index.html")
},
{
    title: "hoodaescapewithtom",
    imgSrc: "/hdmath/hoodaescapewithtom.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewithtom/index.html")
},
{
    title: "hoodaescapewonderland",
    imgSrc: "/hdmath/hoodaescapewonderland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewonderland/index.html")
},
{
    title: "Escape Wyoming",
    imgSrc: "/hdmath/hoodaescapewyoming.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewyoming/index.html")
},
{
    title: "Hoodaescapewyoming 2022",
    imgSrc: "/hdmath/hoodaescapewyoming2022.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapewyoming2022/index.html")
},
{
    title: "Hoodaescapezoo 2023",
    imgSrc: "/hdmath/hoodaescapezoo2023.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaescapezoo2023/index.html")
},
{
    title: "hoodafindhqdonutshop",
    imgSrc: "/hdmath/hoodafindhqdonutshop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodafindhqdonutshop/index.html")
},
{
    title: "hoodafindhqfort",
    imgSrc: "/hdmath/hoodafindhqfort.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodafindhqfort/index.html")
},
{
    title: "hoodafindhqpark",
    imgSrc: "/hdmath/hoodafindhqpark.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodafindhqpark/index.html")
},
{
    title: "hoodafindhqpolicestation",
    imgSrc: "/hdmath/hoodafindhqpolicestation.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodafindhqpolicestation/index.html")
},
{
    title: "hoodafindhqsubway",
    imgSrc: "/hdmath/hoodafindhqsubway.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodafindhqsubway/index.html")
},
{
    title: "Hooda Grow Aquarium",
    imgSrc: "/hdmath/hoodagrowaquarium.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodagrowaquarium/index.html")
},
{
    title: "hoodagrowcanyon",
    imgSrc: "/hdmath/hoodagrowcanyon.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodagrowcanyon/index.html")
},
{
    title: "Hooda Grow City",
    imgSrc: "/hdmath/hoodagrowcity.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodagrowcity/index.html")
},
{
    title: "hoodagrowmountain",
    imgSrc: "/hdmath/hoodagrowmountain.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodagrowmountain/index.html")
},
{
    title: "Hooda Grow Rocket",
    imgSrc: "/hdmath/hoodagrowrocket.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodagrowrocket/index.html")
},
{
    title: "Hoodamathdefense",
    imgSrc: "/hdmath/hoodamathdefense.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathdefense/index.html")
},
{
    title: "hoodamathescaperoomalbany",
    imgSrc: "/hdmath/hoodamathescaperoomalbany.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomalbany/index.html")
},
{
    title: "Hooda Escape Annapolis",
    imgSrc: "/hdmath/hoodamathescaperoomannapolis.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomannapolis/index.html")
},
{
    title: "Hooda Escape",
    imgSrc: "/hdmath/hoodamathescaperoomatlanta.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomatlanta/index.html")
},
{
    title: "Hooda Escape Austin",
    imgSrc: "/hdmath/hoodamathescaperoomaustin.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomaustin/index.html")
},
{
    title: "Hooda Escape Room Baton Rouge",
    imgSrc: "/hdmath/hoodamathescaperoombatonrouge.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoombatonrouge/index.html")
},
{
    title: "Escape Room Bismarck",
    imgSrc: "/hdmath/hoodamathescaperoombismarck.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoombismarck/index.html")
},
{
    title: "Hooda Escape Room Boston",
    imgSrc: "/hdmath/hoodamathescaperoomboston.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomboston/index.html")
},
{
    title: "Hooda Escape Carson City",
    imgSrc: "/hdmath/hoodamathescaperoomcarsoncity.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomcarsoncity/index.html")
},
{
    title: "Hooda Escape Charleston",
    imgSrc: "/hdmath/hoodamathescaperoomcharleston.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomcharleston/index.html")
},
{
    title: "Hooda Escape Columbus",
    imgSrc: "/hdmath/hoodamathescaperoomcolumbus.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomcolumbus/index.html")
},
{
    title: "Fiond HQ Concord",
    imgSrc: "/hdmath/hoodamathescaperoomconcord.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomconcord/index.html")
},
{
    title: "Escape Room Des Moines",
    imgSrc: "/hdmath/hoodamathescaperoomdesmoines.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomdesmoines/index.html")
},
{
    title: "Hooda Escape Dover",
    imgSrc: "/hdmath/hoodamathescaperoomdover.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomdover/index.html")
},
{
    title: "Hooda Escape Frankfort",
    imgSrc: "/hdmath/hoodamathescaperoomfrankfort.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomfrankfort/index.html")
},
{
    title: "Hooda Escape Harrisburg",
    imgSrc: "/hdmath/hoodamathescaperoomharrisburg.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomharrisburg/index.html")
},
{
    title: "Hooda Math Escape Room Hartford",
    imgSrc: "/hdmath/hoodamathescaperoomhartford.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomhartford/index.html")
},
{
    title: "Hooda Escape Helena",
    imgSrc: "/hdmath/hoodamathescaperoomhelena.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomhelena/index.html")
},
{
    title: "Hooda Escape Jefferson City",
    imgSrc: "/hdmath/hoodamathescaperoomjeffersoncity.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomjeffersoncity/index.html")
},
{
    title: "Escape Lansing",
    imgSrc: "/hdmath/hoodamathescaperoomlansing.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomlansing/index.html")
},
{
    title: "Escape Room Lincoln",
    imgSrc: "/hdmath/hoodamathescaperoomlincoln.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomlincoln/index.html")
},
{
    title: "Hooda Escape Montgomery",
    imgSrc: "/hdmath/hoodamathescaperoommontgomery.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoommontgomery/index.html")
},
{
    title: "Hooda Escape Montpelier",
    imgSrc: "/hdmath/hoodamathescaperoommontpelier.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoommontpelier/index.html")
},
{
    title: "Hooda Escape Room Oklahoma City",
    imgSrc: "/hdmath/hoodamathescaperoomoklahomacity.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomoklahomacity/index.html")
},
{
    title: "Hooda Escape Pierre",
    imgSrc: "/hdmath/hoodamathescaperoompierre.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoompierre/index.html")
},
{
    title: "Hooda Escape Room Providence",
    imgSrc: "/hdmath/hoodamathescaperoomprovidence.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomprovidence/index.html")
},
{
    title: "Escape Room PSL",
    imgSrc: "/hdmath/hoodamathescaperoompsl.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoompsl/index.html")
},
{
    title: "Hooda Escape Raleigh",
    imgSrc: "/hdmath/hoodamathescaperoomraleigh.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomraleigh/index.html")
},
{
    title: "Hooda Escape Richmond",
    imgSrc: "/hdmath/hoodamathescaperoomrichmond.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomrichmond/index.html")
},
{
    title: "Hooda Escape Salt Lake City",
    imgSrc: "/hdmath/hoodamathescaperoomsaltlakecity.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomsaltlakecity/index.html")
},
{
    title: "Hooda Escape Springfield",
    imgSrc: "/hdmath/hoodamathescaperoomspringfield.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomspringfield/index.html")
},
{
    title: "Hooda Escape St Paul",
    imgSrc: "/hdmath/hoodamathescaperoomstpaul.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomstpaul/index.html")
},
{
    title: "Hooda Escape Trenton",
    imgSrc: "/hdmath/hoodamathescaperoomtrenton.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodamathescaperoomtrenton/index.html")
},
{
    title: "Hooda Remover",
    imgSrc: "/hdmath/hoodaremover.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaremover/index.html")
},
{
    title: "Hooda Room Escape 1",
    imgSrc: "/hdmath/hoodaroomescape1.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaroomescape1/index.html")
},
{
    title: "Hooda Room Escape 2",
    imgSrc: "/hdmath/hoodaroomescape2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaroomescape2/index.html")
},
{
    title: "Room Escape 3",
    imgSrc: "/hdmath/hoodaroomescape3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaroomescape3/index.html")
},
{
    title: "Room Escape 4",
    imgSrc: "/hdmath/hoodaroomescape4.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaroomescape4/index.html")
},
{
    title: "Room Escape 5",
    imgSrc: "/hdmath/hoodaroomescape5.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodaroomescape5/index.html")
},
{
    title: "Hoodasdrivethru",
    imgSrc: "/hdmath/hoodasdrivethru.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodasdrivethru/index.html")
},
{
    title: "Slice",
    imgSrc: "/hdmath/hoodasliceit.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodasliceit/index.html")
},
{
    title: "Hooda Stacker Game",
    imgSrc: "/hdmath/hoodastacker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodastacker/index.html")
},
{
    title: "Hooda Stacker 2",
    imgSrc: "/hdmath/hoodastacker2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodastacker2/index.html")
},
{
    title: "Hooda Tiny Fishing",
    imgSrc: "/hdmath/hoodatinyfishing.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodatinyfishing/index.html")
},
{
    title: "Tunnel",
    imgSrc: "/hdmath/hoodatunnel.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodatunnel/index.html")
},
{
    title: "hoodawhat",
    imgSrc: "/hdmath/hoodawhat.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodawhat/index.html")
},
{
    title: "hoodawhat2",
    imgSrc: "/hdmath/hoodawhat2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoodawhat2/index.html")
},
{
    title: "Hoo Goo Game",
    imgSrc: "/hdmath/hoogoo.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hoogoo/index.html")
},
{
    title: "Hotel Hooda",
    imgSrc: "/hdmath/hotelhooda.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hotelhooda/index.html")
},
{
    title: "Hot Java",
    imgSrc: "/hdmath/hotjava.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/hotjava/index.html")
},
{
    title: "House Painter",
    imgSrc: "/hdmath/housepainter.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/housepainter/index.html")
},
{
    title: "Howsmartareyou",
    imgSrc: "/hdmath/howsmartareyou.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/howsmartareyou/index.html")
},
{
    title: "Ice Cream Truck",
    imgSrc: "/hdmath/icecreamtruck.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/icecreamtruck/index.html")
},
{
    title: "Icy Purple Head 2",
    imgSrc: "/hdmath/icypurplehead2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/icypurplehead2/index.html")
},
{
    title: "Icy Purple Head",
    imgSrc: "/hdmath/icypurplehead3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/icypurplehead3/index.html")
},
{
    title: "Created with GameMaker Studio 2",
    imgSrc: "/hdmath/idlebreakout.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/idlebreakout/index.html")
},
{
    title: "Innkeeper",
    imgSrc: "/hdmath/innkeeper.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/innkeeper/index.html")
},
{
    title: "Integers Timed Tests",
    imgSrc: "/hdmath/integerstimedtests.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/integerstimedtests/index.html")
},
{
    title: "Integertilt",
    imgSrc: "/hdmath/integertilt.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/integertilt/index.html")
},
{
    title: "intospace",
    imgSrc: "/hdmath/intospace.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/intospace/index.html")
},
{
    title: "Jelly Slice",
    imgSrc: "/hdmath/jellyslice.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/jellyslice/index.html")
},
{
    title: "KLONDIKE",
    imgSrc: "/hdmath/klondikesolitaire.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/klondikesolitaire/index.html")
},
{
    title: "Lava Snake",
    imgSrc: "/hdmath/lavasnake.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/lavasnake/index.html")
},
{
    title: "Learntofly",
    imgSrc: "/hdmath/learntofly.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/learntofly/index.html")
},
{
    title: "Learntofly 3",
    imgSrc: "/hdmath/learntofly3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/learntofly3/index.html")
},
{
    title: "Learntoflyidle",
    imgSrc: "/hdmath/learntoflyidle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/learntoflyidle/index.html")
},
{
    title: "Lemonade Stand",
    imgSrc: "/hdmath/lemonadestand.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/lemonadestand/index.html")
},
{
    title: "Trap Path",
    imgSrc: "/hdmath/leveldeviltrappath.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/leveldeviltrappath/index.html")
},
{
    title: "lightbot",
    imgSrc: "/hdmath/lightbot.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/lightbot/index.html")
},
{
    title: "Lighto",
    imgSrc: "/hdmath/lighto.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/lighto/index.html")
},
{
    title: "linebounder",
    imgSrc: "/hdmath/linebounder.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/linebounder/index.html")
},
{
    title: "Line To Bathroom",
    imgSrc: "/hdmath/linetobathroom.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/linetobathroom/index.html")
},
{
    title: "Line to Cashier",
    imgSrc: "/hdmath/linetocashier.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/linetocashier/index.html")
},
{
    title: "liquidmeasure",
    imgSrc: "/hdmath/liquidmeasure.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/liquidmeasure/index.html")
},
{
    title: "Liquid Sort",
    imgSrc: "/hdmath/liquidsort.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/liquidsort/index.html")
},
{
    title: "Loot the King",
    imgSrc: "/hdmath/loottheking.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/loottheking/index.html")
},
{
    title: "Losthead",
    imgSrc: "/hdmath/losthead.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/losthead/index.html")
},
{
    title: "loveballs",
    imgSrc: "/hdmath/loveballs.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/loveballs/index.html")
},
{
    title: "Low's adventures",
    imgSrc: "/hdmath/lowsadventures.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/lowsadventures/index.html")
},
{
    title: "Low's Adventures 2",
    imgSrc: "/hdmath/lowsadventures2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/lowsadventures2/index.html")
},
{
    title: "Low's Adventures 3",
    imgSrc: "/hdmath/lowsadventures3.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/lowsadventures3/index.html")
},
{
    title: "Magicpen",
    imgSrc: "/hdmath/magicpen.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/magicpen/index.html")
},
{
    title: "Magicpen 2",
    imgSrc: "/hdmath/magicpen2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/magicpen2/index.html")
},
{
    title: "makechallah",
    imgSrc: "/hdmath/makechallah.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/makechallah/index.html")
},
{
    title: "makechocolatecake",
    imgSrc: "/hdmath/makechocolatecake.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/makechocolatecake/index.html")
},
{
    title: "Mancala Game",
    imgSrc: "/hdmath/mancala.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mancala/index.html")
},
{
    title: "mansionmogul",
    imgSrc: "/hdmath/mansionmogul.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mansionmogul/index.html")
},
{
    title: "Math Duck",
    imgSrc: "/hdmath/mathduck.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mathduck/index.html")
},
{
    title: "Math Timed Tests",
    imgSrc: "/hdmath/mathtimedtests.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mathtimedtests/index.html")
},
{
    title: "Math Timed Tests 2",
    imgSrc: "/hdmath/mathtimedtests2.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mathtimedtests2/index.html")
},
{
    title: "mealmasters",
    imgSrc: "/hdmath/mealmasters.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mealmasters/index.html")
},
{
    title: "mealmasters2",
    imgSrc: "/hdmath/mealmasters2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mealmasters2/index.html")
},
{
    title: "mealmasters3",
    imgSrc: "/hdmath/mealmasters3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mealmasters3/index.html")
},
{
    title: "measureandmixblueberrymuffins",
    imgSrc: "/hdmath/measureandmixblueberrymuffins.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/measureandmixblueberrymuffins/index.html")
},
{
    title: "measureandmixchocolatecake",
    imgSrc: "/hdmath/measureandmixchocolatecake.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/measureandmixchocolatecake/index.html")
},
{
    title: "measureandmixchocolatechipcookies",
    imgSrc: "/hdmath/measureandmixchocolatechipcookies.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/measureandmixchocolatechipcookies/index.html")
},
{
    title: "measureandmixdonuts",
    imgSrc: "/hdmath/measureandmixdonuts.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/measureandmixdonuts/index.html")
},
{
    title: "measureandmixfudgebrownies",
    imgSrc: "/hdmath/measureandmixfudgebrownies.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/measureandmixfudgebrownies/index.html")
},
{
    title: "measureandmixpancakes",
    imgSrc: "/hdmath/measureandmixpancakes.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/measureandmixpancakes/index.html")
},
{
    title: "measureandmixpretzels",
    imgSrc: "/hdmath/measureandmixpretzels.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/measureandmixpretzels/index.html")
},
{
    title: "CityMall",
    imgSrc: "/hdmath/megamallmadness.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/megamallmadness/index.html")
},
{
    title: "Melody's Adventure",
    imgSrc: "/hdmath/melodysadventure.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/melodysadventure/index.html")
},
{
    title: "Miniclipbaseball",
    imgSrc: "/hdmath/miniclipbaseball.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/miniclipbaseball/index.html")
},
{
    title: "Mini Golf",
    imgSrc: "/hdmath/minigolf.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/minigolf/index.html")
},
{
    title: "Miniputt",
    imgSrc: "/hdmath/miniputt.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/miniputt/index.html")
},
{
    title: "miniputt2",
    imgSrc: "/hdmath/miniputt2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/miniputt2/index.html")
},
{
    title: "Miniputt 3",
    imgSrc: "/hdmath/miniputt3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/miniputt3/index.html")
},
{
    title: "minitrain",
    imgSrc: "/hdmath/minitrain.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/minitrain/index.html")
},
{
    title: "Mixedworld",
    imgSrc: "/hdmath/mixedworld.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mixedworld/index.html")
},
{
    title: "Moborz",
    imgSrc: "/hdmath/moborz.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/moborz/index.html")
},
{
    title: "Monsterland",
    imgSrc: "/hdmath/monsterland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/monsterland/index.html")
},
{
    title: "montgolfier",
    imgSrc: "/hdmath/montgolfier.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/montgolfier/index.html")
},
{
    title: "motorcycletycoon",
    imgSrc: "/hdmath/motorcycletycoon.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/motorcycletycoon/index.html")
},
{
    title: "mountain bike runner",
    imgSrc: "/hdmath/mountainbikerunner.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mountainbikerunner/index.html")
},
{
    title: "Mouse Trap Game",
    imgSrc: "/hdmath/mousetrap.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mousetrap/index.html")
},
{
    title: "Move The Pin",
    imgSrc: "/hdmath/movethepin.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/movethepin/index.html")
},
{
    title: "Mr. Smith",
    imgSrc: "/hdmath/mrsmithpicsandwords.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mrsmithpicsandwords/index.html")
},
{
    title: "Bubble Pop - Multiplication Game",
    imgSrc: "/hdmath/multiplicationbubblepop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/multiplicationbubblepop/index.html")
},
{
    title: "Multiplication",
    imgSrc: "/hdmath/multiplicationgame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/multiplicationgame/index.html")
},
{
    title: "Multiplication Skydiver Game",
    imgSrc: "/hdmath/multiplicationskydiver.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/multiplicationskydiver/index.html")
},
{
    title: "Munchie Bob",
    imgSrc: "/hdmath/munchiebob.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/munchiebob/index.html")
},
{
    title: "mustescapelighthouseisland",
    imgSrc: "/hdmath/mustescapelighthouseisland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapelighthouseisland/index.html")
},
{
    title: "mustescapethebakery",
    imgSrc: "/hdmath/mustescapethebakery.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethebakery/index.html")
},
{
    title: "mustescapetheburgerjoint",
    imgSrc: "/hdmath/mustescapetheburgerjoint.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapetheburgerjoint/index.html")
},
{
    title: "mustescapethecastle",
    imgSrc: "/hdmath/mustescapethecastle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethecastle/index.html")
},
{
    title: "mustescapetheclocktower",
    imgSrc: "/hdmath/mustescapetheclocktower.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapetheclocktower/index.html")
},
{
    title: "mustescapethefactory",
    imgSrc: "/hdmath/mustescapethefactory.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethefactory/index.html")
},
{
    title: "mustescapethefarm",
    imgSrc: "/hdmath/mustescapethefarm.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethefarm/index.html")
},
{
    title: "mustescapethefortress",
    imgSrc: "/hdmath/mustescapethefortress.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethefortress/index.html")
},
{
    title: "mustescapetheicecastle",
    imgSrc: "/hdmath/mustescapetheicecastle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapetheicecastle/index.html")
},
{
    title: "mustescapetheicecave",
    imgSrc: "/hdmath/mustescapetheicecave.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapetheicecave/index.html")
},
{
    title: "mustescapetheisland",
    imgSrc: "/hdmath/mustescapetheisland.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapetheisland/index.html")
},
{
    title: "mustescapethemuseum",
    imgSrc: "/hdmath/mustescapethemuseum.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethemuseum/index.html")
},
{
    title: "mustescapethepetshop",
    imgSrc: "/hdmath/mustescapethepetshop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethepetshop/index.html")
},
{
    title: "mustescapetheplayground",
    imgSrc: "/hdmath/mustescapetheplayground.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapetheplayground/index.html")
},
{
    title: "mustescapetherooftop",
    imgSrc: "/hdmath/mustescapetherooftop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapetherooftop/index.html")
},
{
    title: "mustescapethesewer",
    imgSrc: "/hdmath/mustescapethesewer.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethesewer/index.html")
},
{
    title: "Mustescapetheshoppingmall",
    imgSrc: "/hdmath/mustescapetheshoppingmall.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapetheshoppingmall/index.html")
},
{
    title: "mustescapethesubway",
    imgSrc: "/hdmath/mustescapethesubway.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethesubway/index.html")
},
{
    title: "mustescapethetemple",
    imgSrc: "/hdmath/mustescapethetemple.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethetemple/index.html")
},
{
    title: "mustescapethewizardscastle",
    imgSrc: "/hdmath/mustescapethewizardscastle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/mustescapethewizardscastle/index.html")
},
{
    title: "Neon_Rocket",
    imgSrc: "/hdmath/neonrocket.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/neonrocket/index.html")
},
{
    title: "Ninja Balloons",
    imgSrc: "/hdmath/ninjaballoons.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ninjaballoons/index.html")
},
{
    title: "Ninja Frog Web",
    imgSrc: "/hdmath/ninjafrog.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ninjafrog/index.html")
},
{
    title: "ninjapainter",
    imgSrc: "/hdmath/ninjapainter.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ninjapainter/index.html")
},
{
    title: "ninjapainter2",
    imgSrc: "/hdmath/ninjapainter2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/ninjapainter2/index.html")
},
{
    title: "Number Eaters",
    imgSrc: "/hdmath/numbereaters.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/numbereaters/index.html")
},
{
    title: "NumberSnake",
    imgSrc: "/hdmath/numbersnake.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/numbersnake/index.html")
},
{
    title: "Oblong Game",
    imgSrc: "/hdmath/oblong.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/oblong/index.html")
},
{
    title: "Omit Orange",
    imgSrc: "/hdmath/omitorange.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/omitorange/index.html")
},
{
    title: "Omit Orange 2",
    imgSrc: "/hdmath/omitorange2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/omitorange2/index.html")
},
{
    title: "Open Restaurant",
    imgSrc: "/hdmath/openrestaurant.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/openrestaurant/index.html")
},
{
    title: "Oppositeday",
    imgSrc: "/hdmath/oppositeday.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/oppositeday/index.html")
},
{
    title: "Oppositeday 2",
    imgSrc: "/hdmath/oppositeday2.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/oppositeday2/index.html")
},
{
    title: "orange",
    imgSrc: "/hdmath/orange.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/orange/index.html")
},
{
    title: "paintersguild",
    imgSrc: "/hdmath/paintersguild.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/paintersguild/index.html")
},
{
    title: "Papalouie",
    imgSrc: "/hdmath/papalouie.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/papalouie/index.html")
},
{
    title: "Papalouie 2",
    imgSrc: "/hdmath/papalouie2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/papalouie2/index.html")
},
{
    title: "Papalouie 3",
    imgSrc: "/hdmath/papalouie3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/papalouie3/index.html")
},
{
    title: "Papaspizzeria",
    imgSrc: "/hdmath/papaspizzeria.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/papaspizzeria/index.html")
},
{
    title: "Parkingfury",
    imgSrc: "/hdmath/parkingfury.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/parkingfury/index.html")
},
{
    title: "parkingfury2",
    imgSrc: "/hdmath/parkingfury2.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/parkingfury2/index.html")
},
{
    title: "Parkingfury 3",
    imgSrc: "/hdmath/parkingfury3.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/parkingfury3/index.html")
},
{
    title: "parkinglot",
    imgSrc: "/hdmath/parkinglot.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/parkinglot/index.html")
},
{
    title: "parkinglot2",
    imgSrc: "/hdmath/parkinglot2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/parkinglot2/index.html")
},
{
    title: "parkinglot3",
    imgSrc: "/hdmath/parkinglot3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/parkinglot3/index.html")
},
{
    title: "parkingvirtuoso",
    imgSrc: "/hdmath/parkingvirtuoso.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/parkingvirtuoso/index.html")
},
{
    title: "PENALTY KICKS",
    imgSrc: "/hdmath/penaltykicks.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/penaltykicks/index.html")
},
{
    title: "Penalty Mania",
    imgSrc: "/hdmath/penaltymania.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/penaltymania/index.html")
},
{
    title: "penguinpass",
    imgSrc: "/hdmath/penguinpass.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/penguinpass/index.html")
},
{
    title: "pentapuzzle",
    imgSrc: "/hdmath/pentapuzzle.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/pentapuzzle/index.html")
},
{
    title: "Pet Stand",
    imgSrc: "/hdmath/petstand.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/petstand/index.html")
},
{
    title: "Phantomb",
    imgSrc: "/hdmath/phantomb.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/phantomb/index.html")
},
{
    title: "phit",
    imgSrc: "/hdmath/phit.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/phit/index.html")
},
{
    title: "Piano Tiles - Multiple Songs, Fixed Score",
    imgSrc: "/hdmath/pianotiles.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/pianotiles/index.html")
},
{
    title: "Pirate Treasure Quotient Game",
    imgSrc: "/hdmath/piratetreasurequotientgame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/piratetreasurequotientgame/index.html")
},
{
    title: "Pizza Party",
    imgSrc: "/hdmath/pizzaparty.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/pizzaparty/index.html")
},
{
    title: "planetf",
    imgSrc: "/hdmath/planetf.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/planetf/index.html")
},
{
    title: "Poker Dice Solitaire",
    imgSrc: "/hdmath/pokerdicesolitaire.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/pokerdicesolitaire/index.html")
},
{
    title: "Popcorn Master",
    imgSrc: "/hdmath/popcornmaster.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/popcornmaster/index.html")
},
{
    title: "Popsicle Clicker",
    imgSrc: "/hdmath/popsicleclicker.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/popsicleclicker/index.html")
},
{
    title: "Prime Factor Tree Game",
    imgSrc: "/hdmath/primefactortreegame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/primefactortreegame/index.html")
},
{
    title: "Princessmath",
    imgSrc: "/hdmath/princessmath.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/princessmath/index.html")
},
{
    title: "proseandmotion",
    imgSrc: "/hdmath/proseandmotion.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/proseandmotion/index.html")
},
{
    title: "Pumpkin Patch Multiplication Hunt",
    imgSrc: "/hdmath/pumpkinpatchmultiplication.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/pumpkinpatchmultiplication/index.html")
},
{
    title: "Puppet Hockey Battle",
    imgSrc: "/hdmath/puppethockey.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/puppethockey/index.html")
},
{
    title: "pursuitofhat",
    imgSrc: "/hdmath/pursuitofhat.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/pursuitofhat/index.html")
},
{
    title: "pursuitofhat2",
    imgSrc: "/hdmath/pursuitofhat2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/pursuitofhat2/index.html")
},
{
    title: "PYRAMID SOLITAIRE",
    imgSrc: "/hdmath/pyramidsolitaire.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/pyramidsolitaire/index.html")
},
{
    title: "Rabbit Run Web",
    imgSrc: "/hdmath/rabbitrunadventure.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rabbitrunadventure/index.html")
},
{
    title: "rainwords",
    imgSrc: "/hdmath/rainwords.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rainwords/index.html")
},
{
    title: "realestatefun",
    imgSrc: "/hdmath/realestatefun.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/realestatefun/index.html")
},
{
    title: "Rearrange Letters",
    imgSrc: "/hdmath/rearrangeletters.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rearrangeletters/index.html")
},
{
    title: "recordshoptycoon",
    imgSrc: "/hdmath/recordshoptycoon.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/recordshoptycoon/index.html")
},
{
    title: "Redball 1",
    imgSrc: "/hdmath/redball1.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/redball1/index.html")
},
{
    title: "Redball 4 Volume 2",
    imgSrc: "/hdmath/redball4volume2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/redball4volume2/index.html")
},
{
    title: "redball4volume3",
    imgSrc: "/hdmath/redball4volume3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/redball4volume3/index.html")
},
{
    title: "redremover",
    imgSrc: "/hdmath/redremover.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/redremover/index.html")
},
{
    title: "redremoverplayerpack",
    imgSrc: "/hdmath/redremoverplayerpack.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/redremoverplayerpack/index.html")
},
{
    title: "Resizer",
    imgSrc: "/hdmath/resizer.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/resizer/index.html")
},
{
    title: "resortempire",
    imgSrc: "/hdmath/resortempire.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/resortempire/index.html")
},
{
    title: "Pong Classic",
    imgSrc: "/hdmath/retropingpong.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/retropingpong/index.html")
},
{
    title: "Snake Game with Eating Sound (640x480)",
    imgSrc: "/hdmath/retrosnake.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/retrosnake/index.html")
},
{
    title: "reverseparking",
    imgSrc: "/hdmath/reverseparking.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/reverseparking/index.html")
},
{
    title: "REVERSI",
    imgSrc: "/hdmath/reversi.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/reversi/index.html")
},
{
    title: "Rise Higher",
    imgSrc: "/hdmath/risehigher.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/risehigher/index.html")
},
{
    title: "roadshops",
    imgSrc: "/hdmath/roadshops.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/roadshops/index.html")
},
{
    title: "Unity WebGL Player | Rodha",
    imgSrc: "/hdmath/rodha.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rodha/index.html")
},
{
    title: "Rollercoastercreator",
    imgSrc: "/hdmath/rollercoastercreator.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rollercoastercreator/index.html")
},
{
    title: "rollercoastercreator2",
    imgSrc: "/hdmath/rollercoastercreator2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rollercoastercreator2/index.html")
},
{
    title: "ROLLING BALL 3D",
    imgSrc: "/hdmath/rollingball3d.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rollingball3d/index.html")
},
{
    title: "rootcollector",
    imgSrc: "/hdmath/rootcollector.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rootcollector/index.html")
},
{
    title: "Rotateandroll",
    imgSrc: "/hdmath/rotateandroll.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rotateandroll/index.html")
},
{
    title: "rotateandrollplayerspack",
    imgSrc: "/hdmath/rotateandrollplayerspack.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/rotateandrollplayerspack/index.html")
},
{
    title: "Run 2",
    imgSrc: "/hdmath/run2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/run2/index.html")
},
{
    title: "Sandgrid",
    imgSrc: "/hdmath/sandgrid.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/sandgrid/index.html")
},
{
    title: "Sand Trap - Put It in the Pail",
    imgSrc: "/hdmath/sandtrap.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/sandtrap/index.html")
},
{
    title: "Santarun 2",
    imgSrc: "/hdmath/santarun2.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/santarun2/index.html")
},
{
    title: "Santarun 3",
    imgSrc: "/hdmath/santarun3.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/santarun3/index.html")
},
{
    title: "Savemyrobotos",
    imgSrc: "/hdmath/savemyrobotos.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/savemyrobotos/index.html")
},
{
    title: "shopempire2",
    imgSrc: "/hdmath/shopempire2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/shopempire2/index.html")
},
{
    title: "shoppingcartdash",
    imgSrc: "/hdmath/shoppingcartdash.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/shoppingcartdash/index.html")
},
{
    title: "shoppingcity",
    imgSrc: "/hdmath/shoppingcity.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/shoppingcity/index.html")
},
{
    title: "shoppingcorner",
    imgSrc: "/hdmath/shoppingcorner.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/shoppingcorner/index.html")
},
{
    title: "Shopping Mall",
    imgSrc: "/hdmath/shoppingmall.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/shoppingmall/index.html")
},
{
    title: "shoppingstreet",
    imgSrc: "/hdmath/shoppingstreet.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/shoppingstreet/index.html")
},
{
    title: "Shortcut Run",
    imgSrc: "/hdmath/shortcutrace.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/shortcutrace/index.html")
},
{
    title: "Skate King",
    imgSrc: "/hdmath/skateking.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/skateking/index.html")
},
{
    title: "Skater Math",
    imgSrc: "/hdmath/skatermath.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/skatermath/index.html")
},
{
    title: "Skimaniacs",
    imgSrc: "/hdmath/skimaniacs.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/skimaniacs/index.html")
},
{
    title: "Ski Slopes Hoodamath",
    imgSrc: "/hdmath/skislopes.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/skislopes/index.html")
},
{
    title: "SkySpeedster",
    imgSrc: "/hdmath/skyspeedster.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/skyspeedster/index.html")
},
{
    title: "SLALOM SKI SIMULATOR",
    imgSrc: "/hdmath/slalomski.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/slalomski/index.html")
},
{
    title: "Slither Math",
    imgSrc: "/hdmath/slithermath.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/slithermath/index.html")
},
{
    title: "Slopeinterceptsurround",
    imgSrc: "/hdmath/slopeinterceptsurround.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/slopeinterceptsurround/index.html")
},
{
    title: "Slope Run Unblocked - ubg235 GC",
    imgSrc: "/hdmath/sloperun.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/sloperun/index.html")
},
{
    title: "SNAKE AND LADDERS",
    imgSrc: "/hdmath/snakesandladders.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/snakesandladders/index.html")
},
{
    title: "Snaketrap",
    imgSrc: "/hdmath/snaketrap.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/snaketrap/index.html")
},
{
    title: "sneakycastleescape",
    imgSrc: "/hdmath/sneakycastleescape.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/sneakycastleescape/index.html")
},
{
    title: "Snoring",
    imgSrc: "/hdmath/snoring.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/snoring/index.html")
},
{
    title: "Snoring Wild West",
    imgSrc: "/hdmath/snoringwildwest.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/snoringwildwest/index.html")
},
{
    title: "Snoring Winter Edition",
    imgSrc: "/hdmath/snoringwinteredition.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/snoringwinteredition/index.html")
},
{
    title: "Snowline",
    imgSrc: "/hdmath/snowline.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/snowline/index.html")
},
{
    title: "Snowline 2",
    imgSrc: "/hdmath/snowline2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/snowline2/index.html")
},
{
    title: "Snow Rider 3D - Thrilling Skiing Adventure Game",
    imgSrc: "/hdmath/snowrider3d.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/snowrider3d/index.html")
},
{
    title: "soccerballs2",
    imgSrc: "/hdmath/soccerballs2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/soccerballs2/index.html")
},
{
    title: "soccerballs2levelpack",
    imgSrc: "/hdmath/soccerballs2levelpack.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/soccerballs2levelpack/index.html")
},
{
    title: "Soccerstar",
    imgSrc: "/hdmath/soccerstar.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/soccerstar/index.html")
},
{
    title: "Space Miner",
    imgSrc: "/hdmath/spaceminer.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/spaceminer/index.html")
},
{
    title: "Speed Cube",
    imgSrc: "/hdmath/speedcube.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/speedcube/index.html")
},
{
    title: "Spill The Sand",
    imgSrc: "/hdmath/spillthesand.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/spillthesand/index.html")
},
{
    title: "spinnersluck",
    imgSrc: "/hdmath/spinnersluck.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/spinnersluck/index.html")
},
{
    title: "Split Ball Game",
    imgSrc: "/hdmath/splitball.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/splitball/index.html")
},
{
    title: "Sportsheadsbasketball",
    imgSrc: "/hdmath/sportsheadsbasketball.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/sportsheadsbasketball/index.html")
},
{
    title: "springgardenescape",
    imgSrc: "/hdmath/springgardenescape.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/springgardenescape/index.html")
},
{
    title: "sprout",
    imgSrc: "/hdmath/sprout.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/sprout/index.html")
},
{
    title: "Stacky Duck",
    imgSrc: "/hdmath/stackyduck.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/stackyduck/index.html")
},
{
    title: "starlight",
    imgSrc: "/hdmath/starlight.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/starlight/index.html")
},
{
    title: "starlight2",
    imgSrc: "/hdmath/starlight2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/starlight2/index.html")
},
{
    title: "Stick Samurai",
    imgSrc: "/hdmath/stickninja.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/stickninja/index.html")
},
{
    title: "STREET BASKETBALL",
    imgSrc: "/hdmath/streetbasketball.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/streetbasketball/index.html")
},
{
    title: "Sugar Sugar",
    imgSrc: "/hdmath/sugarsugar.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/sugarsugar/index.html")
},
{
    title: "sugarsugar3",
    imgSrc: "/hdmath/sugarsugar3.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/sugarsugar3/index.html")
},
{
    title: "Suitup",
    imgSrc: "/hdmath/suitup.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/suitup/index.html")
},
{
    title: "Super Santa Kicker",
    imgSrc: "/hdmath/supersantakicker.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/supersantakicker/index.html")
},
{
    title: "superstacker",
    imgSrc: "/hdmath/superstacker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/superstacker/index.html")
},
{
    title: "Superstacker 2",
    imgSrc: "/hdmath/superstacker2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/superstacker2/index.html")
},
{
    title: "SWEETY MEMORY",
    imgSrc: "/hdmath/sweetymemory.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/sweetymemory/index.html")
},
{
    title: "Swing Monkey",
    imgSrc: "/hdmath/swingmonkey.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/swingmonkey/index.html")
},
{
    title: "Swing Robber",
    imgSrc: "/hdmath/swingrobber.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/swingrobber/index.html")
},
{
    title: "Tanukisunset",
    imgSrc: "/hdmath/tanukisunset.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/tanukisunset/index.html")
},
{
    title: "Tap Supermarket",
    imgSrc: "/hdmath/tapsupermarket.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/tapsupermarket/index.html")
},
{
    title: "Crazy Tennis",
    imgSrc: "/hdmath/taptaptennis.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/taptaptennis/index.html")
},
{
    title: "Targetsoe",
    imgSrc: "/hdmath/targetsoe.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/targetsoe/index.html")
},
{
    title: "Teleporting Kittens",
    imgSrc: "/hdmath/teleportingkittens.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/teleportingkittens/index.html")
},
{
    title: "tenpinbowling",
    imgSrc: "/hdmath/tenpinbowling.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/tenpinbowling/index.html")
},
{
    title: "thanksgivingturkey",
    imgSrc: "/hdmath/thanksgivingturkey.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/thanksgivingturkey/index.html")
},
{
    title: "theconstructor",
    imgSrc: "/hdmath/theconstructor.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/theconstructor/index.html")
},
{
    title: "Themehotel",
    imgSrc: "/hdmath/themehotel.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/themehotel/index.html")
},
{
    title: "thetravellingsalesman",
    imgSrc: "/hdmath/thetravellingsalesman.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/thetravellingsalesman/index.html")
},
{
    title: "Tictactoe",
    imgSrc: "/hdmath/tictactoe.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/tictactoe/index.html")
},
{
    title: "Timepunch",
    imgSrc: "/hdmath/timepunch.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/timepunch/index.html")
},
{
    title: "Timmy's Gems",
    imgSrc: "/hdmath/timmysgems.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/timmysgems/index.html")
},
{
    title: "tinysasters",
    imgSrc: "/hdmath/tinysasters.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/tinysasters/index.html")
},
{
    title: "TOUCHDOWN RUSH",
    imgSrc: "/hdmath/touchdownrush.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/touchdownrush/index.html")
},
{
    title: "Touch Shapes",
    imgSrc: "/hdmath/touchshapes.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/touchshapes/index.html")
},
{
    title: "tradewest",
    imgSrc: "/hdmath/tradewest.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/tradewest/index.html")
},
{
    title: "Train X7 Memory Game",
    imgSrc: "/hdmath/trainx7.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/trainx7/index.html")
},
{
    title: "Transformationgolf",
    imgSrc: "/hdmath/transformationgolf.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/transformationgolf/index.html")
},
{
    title: "Transformation Golf 2",
    imgSrc: "/hdmath/transformationgolf2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/transformationgolf2/index.html")
},
{
    title: "Transforming Blockies",
    imgSrc: "/hdmath/transformingblockies.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/transformingblockies/index.html")
},
{
    title: "tributetogrow",
    imgSrc: "/hdmath/tributetogrow.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/tributetogrow/index.html")
},
{
    title: "TRIPEAKS SOLITAIRE",
    imgSrc: "/hdmath/tripeakssolitaire.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/tripeakssolitaire/index.html")
},
{
    title: "Tronix",
    imgSrc: "/hdmath/tronix.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/tronix/index.html")
},
{
    title: "truckstopparking",
    imgSrc: "/hdmath/truckstopparking.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/truckstopparking/index.html")
},
{
    title: "Turkeyfling",
    imgSrc: "/hdmath/turkeyfling.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/turkeyfling/index.html")
},
{
    title: "Unloop",
    imgSrc: "/hdmath/unloop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/unloop/index.html")
},
{
    title: "Unscrew It!",
    imgSrc: "/hdmath/unscrewit.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/unscrewit/index.html")
},
{
    title: "useboxmen",
    imgSrc: "/hdmath/useboxmen.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/useboxmen/index.html")
},
{
    title: "villagefun",
    imgSrc: "/hdmath/villagefun.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/villagefun/index.html")
},
{
    title: "wackywordsearch",
    imgSrc: "/hdmath/wackywordsearch.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wackywordsearch/index.html")
},
{
    title: "Watermelon",
    imgSrc: "/hdmath/watermelongame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/watermelongame/index.html")
},
{
    title: "River Tube Racing",
    imgSrc: "/hdmath/waterrider3d.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/waterrider3d/index.html")
},
{
    title: "What Animal Are You?",
    imgSrc: "/hdmath/whatanimalareyou.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/whatanimalareyou/index.html")
},
{
    title: "Whatdowedonow",
    imgSrc: "/hdmath/whatdowedonow.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/whatdowedonow/index.html")
},
{
    title: "wheely4",
    imgSrc: "/hdmath/wheely4.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wheely4/index.html")
},
{
    title: "wheely5",
    imgSrc: "/hdmath/wheely5.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wheely5/index.html")
},
{
    title: "wheely8",
    imgSrc: "/hdmath/wheely8.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wheely8/index.html")
},
{
    title: "windfalltycoon",
    imgSrc: "/hdmath/windfalltycoon.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/windfalltycoon/index.html")
},
{
    title: "Wonderputt",
    imgSrc: "/hdmath/wonderputt.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wonderputt/index.html")
},
{
    title: "wordbuilder",
    imgSrc: "/hdmath/wordbuilder.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wordbuilder/index.html")
},
{
    title: "wordfinder",
    imgSrc: "/hdmath/wordfinder.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wordfinder/index.html")
},
{
    title: "wordmaster",
    imgSrc: "/hdmath/wordmaster.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wordmaster/index.html")
},
{
    title: "wordmatching",
    imgSrc: "/hdmath/wordmatching.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wordmatching/index.html")
},
{
    title: "wordplex",
    imgSrc: "/hdmath/wordplex.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wordplex/index.html")
},
{
    title: "wordpop",
    imgSrc: "/hdmath/wordpop.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wordpop/index.html")
},
{
    title: "wordsearch2000",
    imgSrc: "/hdmath/wordsearch2000.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wordsearch2000/index.html")
},
{
    title: "wordtower",
    imgSrc: "/hdmath/wordtower.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/wordtower/index.html")
},
{
    title: "worldclasschefitaly",
    imgSrc: "/hdmath/worldclasschefitaly.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/worldclasschefitaly/index.html")
},
{
    title: "worldclasschefturkey",
    imgSrc: "/hdmath/worldclasschefturkey.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/worldclasschefturkey/index.html")
},
{
    title: "worldclasschefusa",
    imgSrc: "/hdmath/worldclasschefusa.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/worldclasschefusa/index.html")
},
{
    title: "Worldshardestgame",
    imgSrc: "/hdmath/worldshardestgame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/worldshardestgame/index.html")
},
{
    title: "Worms",
    imgSrc: "/hdmath/worms.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/worms/index.html")
},
{
    title: "Zen Words",
    imgSrc: "/hdmath/zenwords.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/zenwords/index.html")
},
{
    title: "67 Clicker",
    imgSrc: "/hdmath/67clicker.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/67clicker.html")
},
{
    title: "67 Clicker Rizzmas (1)",
    imgSrc: "/hdmath/67clickerrizzmas.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/67clickerrizzmas.html")
},
{
    title: "Algebra Run v1",
    imgSrc: "/hdmath/algebrarun.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/algebrarun.html")
},
{
    title: "Algebra Run Lite V1",
    imgSrc: "/hdmath/algebrarunlite.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/algebrarunlite.html")
},
{
    title: "Algebra Run  Meltdown",
    imgSrc: "/hdmath/algebrarunmeltdown.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/algebrarunmeltdown.html")
},
{
    title: "Algebra Run World Toxic Factory",
    imgSrc: "/hdmath/algebrarunworldtoxicfactory.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/algebrarunworldtoxicfactory.html")
},
{
    title: "Candy Clicker",
    imgSrc: "/hdmath/candyclicker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/candyclicker.html")
},
{
    title: "Candy Clicker 2",
    imgSrc: "/hdmath/candyclicker2.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/candyclicker2.html")
},
{
    title: "Capybara Clicker â",
    imgSrc: "/hdmath/capybaraclicker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/capybaraclicker.html")
},
{
    title: "Cookie Clicker v2",
    imgSrc: "/hdmath/cookieclicker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/cookieclicker.html")
},
{
    title: "DINO GAME :D",
    imgSrc: "/hdmath/dinogame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dinogame.html")
},
{
    title: "Dreidel Game",
    imgSrc: "/hdmath/dreidelgame.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/dreidelgame.html")
},
{
    title: "Flappy Bird!",
    imgSrc: "/hdmath/flappybird.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/flappybird.html")
},
{
    title: "Getting Over It v1",
    imgSrc: "/hdmath/gettingoverit.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/gettingoverit.html")
},
{
    title: "project",
    imgSrc: "/hdmath/helixjump.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/helixjump.html")
},
{
    title: "Infinite Craft (5000+ Merges)",
    imgSrc: "/hdmath/infinitecraft.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/infinitecraft.html")
},
{
    title: "Italian_Brainrot_Clicker_FULLSAVE",
    imgSrc: "/hdmath/italianbrainrotclicker.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/italianbrainrotclicker.html")
},
{
    title: "Little Alchemy",
    imgSrc: "/hdmath/littlealchemy.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/littlealchemy.html")
},
{
    title: "Pop the Lock 2",
    imgSrc: "/hdmath/popthelock.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/popthelock.html")
},
{
    title: "Hooda's Soflo Wheelie Life",
    imgSrc: "/hdmath/soflowheelielife.png",
    link: LocalGameEncoder.createEncodedLink("/hdmath/soflowheelielife.html")
},
{
    title: "Stack Game",
    imgSrc: "/hdmath/stackgame.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/stackgame.html")
},
{
    title: "Whopper Clicker",
    imgSrc: "/hdmath/whopperclicker.jpg",
    link: LocalGameEncoder.createEncodedLink("/hdmath/whopperclicker.html")
}
   ];
export { gamesData };
