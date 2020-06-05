

var 
    Apple = 40,
    Wheat = 35,
    GreenOnion = 45,
    Milk = 50,
    Rice = 40,
    Egg = 45,
    Onion = 45,
    Tomato = 40,
    Potato = 45,
    Carrot = 45,
    Wasabi = 60,
    Ginger = 65,
    Soybean = 70,
    Mushroom = 80,
    Cabbage = 75,
    Matsutake = 125,
    Corn = 55,
    Chestnut = 90,
    JapanesePepper = 60,
    ChineseRedPepper = 100,
    Truffles = 235,
    Avocado = 145,
    PheasantMeat = 42,
    RabbitMeat = 55,
    RavenMeat = 37,
    AyuSweetfish = 25,
    BadgerMeat = 71,
    DuckMeat = 62,
    SunfishMeat = 31,
    BoarMeat = 79,
    RainbowTrout = 33,
    Squab = 75,
    Venison = 92,
    Eel = 41,
    WoodcockMeat = 152,
    Softshell = 44,
    BearMeat = 117,
    Piranha = 49,
    BisonMeat = 111,
    CrocodileMeat = 50,
    KangarooMeat = 107,
    Tuna = 85,
    OstrichMeat = 67,
    SharkMeat = 50, //substitute
    CamelMeat = 50, //substitute
    ElkMeat = 50; //substitute


var	PheasantConsomme      = {PheasantMeat:1                                                     } ;
var	PheasantRamen         = {PheasantMeat:2,GreenOnion:2,Wheat:2,Egg:2                          } ;
var	PheasantEggonRice     = {PheasantMeat:6,Egg:3,Wheat:3,Onion:4                               } ;
var	FriedRabbit           = {RabbitMeat:2,Wheat:3,Egg:3                                         } ;
var	Cider                 = {Apple:6                                                            } ;
var	RabbitCiderSoup       = {RabbitMeat:3,Cider:1,Onion:3,Carrot:3                              } ;
var	Butter                = {Milk:5                                                             } ;
var	RabbitRoyale          = {RabbitMeat:6,Butter:1,Egg:3,PheasantConsomme:1                     } ;
var	ApplePie              = {Apple:4,Butter:1,Wheat:3,Egg:3                                     } ;
var	RavenMeatPie          = {RavenMeat:2,Wheat:2,Tomato:2,Potato:2                              } ;
var	WhiteSauce            = {Milk:2,Butter:1,Wheat:3,PheasantConsomme:1                         } ;
var	RavenStew             = {RavenMeat:6,Carrot:3,Onion:4,WhiteSauce:1                          } ;
var	GrilledAyu            = {AyuSweetfish:5                                                     } ;
var	AyuRice               = {GrilledAyu:2,Rice:4,Ginger:4,GreenOnion:9                          } ;
var	Vinegar               = {Rice:6                                                             } ;
var	Sumeshi               = {Vinegar:1,Rice:4                                                   } ;
var	AyuSushi              = {AyuSweetfish:7,Sumeshi:1,Wasabi:7                                  } ;
var	Tofu                  = {Soybean:6                                                          } ;
var	BadgerSukiyaki        = {BadgerMeat:2,Tofu:1,Mushroom:4,GreenOnion:5                        } ;
var	BadgerSpareRibs       = {BadgerMeat:2,Potato:4,Carrot:3                                     } ;
var	Miso                  = {Soybean:11                                                         } ;
var	TanukiSoup            = {BadgerMeat:7,Miso:1,Carrot:3,GreenOnion:8                          } ;
var	SmokedDuck            = {DuckMeat:2,Cabbage:5                                               } ;
var	DuckHotpot            = {DuckMeat:7,GreenOnion:9,Mushroom:8,Tofu:1                          } ;
var	SunfishSushi          = {SunfishMeat:14,Sumeshi:1,Ginger:6,GreenOnion:6                     } ;
var	FriedSunfish          = {SunfishMeat:3,Wheat:4,Egg:4                                        } ;
var	SunfishTripe          = {SunfishMeat:7,Tomato:4,PheasantConsomme:1                          } ;
var	BoarBacon             = {BoarMeat:2                                                         } ;
var	BoarHotpot            = {BoarMeat:8,Tofu:1,GreenOnion:12,Miso:1                             } ;
var	GingerBoar            = {BoarMeat:3,Apple:5,Ginger:7,Cabbage:5                              } ;
var	BoarRamen             = {BoarMeat:3,Corn:7,GreenOnion:8,Wheat:5                             } ;
var	BoarOnRice            = {BoarMeat:3,Rice:5,Egg:4                                            } ;
var	SteamedTrout          = {RainbowTrout:3,BoarBacon:1,Onion:7,Mushroom:4                      } ;
var	TroutMeuniere         = {RainbowTrout:16,Butter:2,Potato:9,Carrot:6                         } ;
var	Cheese                = {Milk:12                                                            } ;
var	SavorySquabUdon       = {Squab:2,Wheat:7,Ginger:4,GreenOnion:6                              } ;
var	HamamMahshi           = {Squab:9,Rice:15,Carrot:8,Potato:13                                 } ;
var	GrilledSquab          = {Squab:5,Butter:2,PheasantConsomme:2,Ginger:5                       } ;
var	MatsutakeBaconPasta   = {Matsutake:5,BoarBacon:1,WhiteSauce:1,Wheat:7                       } ;
var	MatsutakeChestnutRice = {Matsutake:5,Chestnut:5,Rice:6,Carrot:6                             } ;
var	ChestnutPotatoes      = {Chestnut:6,Apple:10                                                } ;
var	CornPizza             = {Corn:10,Tomato:11,Cheese:2,Wheat:11                                } ;
var	SmokedPepperVenison   = {Venison:2,JapanesePepper:5                                         } ;
var	MountainMapoTofu      = {Venison:3,GreenOnion:9,Tofu:1,JapanesePepper:6                     } ;
var	SmokedMeatPlatter     = {BoarBacon:1,SmokedPepperVenison:1,SmokedDuck:1                     } ;
var	VenisonCurrySoup      = {Venison:9,PheasantConsomme:2,Potato:13,Carrot:8                    } ;
var	WildGamePizza         = {CornPizza:1,SmokedPepperVenison:1,BoarBacon:1,FriedRabbit:2        } ;
var	VenisonMeatSauce      = {Venison:3,Tomato:9,Carrot:8,PheasantConsomme:2                     } ;
var	EelOmelet             = {Eel:4,Egg:9                                                        } ;
var	EelonRice             = {Eel:16,Rice:13,JapanesePepper:11                                   } ;
var	RoastWoodcock         = {WoodcockMeat:2,Carrot:7,Potato:10                                  } ;
var	BecassePie            = {WoodcockMeat:7,Egg:10,Wheat:13,Butter:2                            } ;
var	SoftshellHotpot       = {Softshell:8,GreenOnion:6,Ginger:5,Carrot:5                         } ;
var	SoftshellRice         = {SoftshellHotpot:2,Egg:10,Rice:11,GreenOnion:16                     } ;
var	BearHotpot            = {BearMeat:3,Tofu:2,Mushroom:12,Carrot:10                            } ;
var	BarbecuedBear         = {BearMeat:2,JapanesePepper:5,Miso:1,GreenOnion:11                   } ;
var	UnagiSushi            = {Eel:7,Sumeshi:2,Wasabi:14                                          } ;
var	SushiPlatter          = {AyuSushi:1,SunfishSushi:1,UnagiSushi:1,EelOmelet:1                 } ;
var	WildGamePlatter       = {PheasantMeat:12,BearMeat:4,Venison:6,BoarMeat:6                    } ;
var	BearVenisonRagout     = {BearMeat:5,VenisonMeatSauce:1,Wheat:8                              } ;
var	VenisonBoudinNoir     = {Venison:6,BoarMeat:6,Cider:3,Milk:20                               } ;
var	Bread                 = {Wheat:20                                                           } ;
var	WildGameSundubu       = {BoarHotpot:1,Squab:8,ChineseRedPepper:10,Tofu:2                    } ;
var	RusticSauce           = {Tomato:11,Carrot:10,Onion:11,Apple:15                              } ;
var	DuckCroquettes        = {DuckMeat:7,RusticSauce:2,Potato:16,Wheat:8                         } ;
var	AmazonCurry           = {Piranha:14,VenisonCurrySoup:1,ChineseRedPepper:22,Rice:25          } ;
var	PiranhaGratin         = {Piranha:8,RavenStew:1,Cheese:1,Onion:17                            } ;
var	PizzaAmazzona         = {AmazonCurry:1,CornPizza:1,Cheese:2                                 } ;
var	RusticOrigui          = {DuckMeat:3,PheasantMeat:7,RavenMeat:6,Miso:2                       } ;
var	WildGrillsteak        = {BisonMeat:4,Carrot:12                                              } ;
var	BisonBurger           = {WildGrillsteak:2,Bread:2,Cabbage:22,Cheese:1                       } ;
var	BisonStew             = {BisonMeat:7,Carrot:5,Onion:10,Potato:21                            } ;
var	MatagiSkewers         = {Squab:5,RavenMeat:5,WoodcockMeat:5,GreenOnion:15                   } ;
var	CrocodileWings        = {CrocodileMeat:5,Wheat:7,Cabbage:13                                 } ;
var	CrocodileCarpaccio    = {CrocodileMeat:12,Cabbage:7,Tomato:7                                } ;
var	TruffleRisotto        = {Truffles:17,CrocodileMeat:5,SoftshellRice:1,GreenOnion:10          } ;
var	KangaBangas           = {KangarooMeat:4                                                     } ;
var	OutbackDog            = {KangaBangas:2,Bread:1,VenisonMeatSauce:1,Potato:18                 } ;
var	KangarooSteak         = {KangarooMeat:7,Potato:12,Carrot:12                                 } ;
var	FoieGrasSandwich      = {Bread:2,DuckMeat:7,KangarooSteak:2,Truffles:19                     } ;
var	OrganicSalad          = {Tomato:16,SmokedDuck:2,Egg:16,Avocado:18                           } ;
var	TunaSalad             = {OrganicSalad:1,Tuna:11,Onion:12,Wasabi:12                          } ;
var	TunaCutlet            = {Tuna:7,Cabbage:10,Wheat:12,RusticSauce:1                           } ;
var	TunaBurger            = {TunaCutlet:2,Bread:2,Wasabi:15,Cheese:2                            } ;
var	OstrichTartare        = {Egg:12,Truffles:8,OstrichMeat:4                                    } ;
var	SavannaStew           = {OstrichMeat:14,Carrot:25,Potato:25,PheasantConsomme:2              } ;
var	WildLasagna           = {SavannaStew:1,BearVenisonRagout:1,Cheese:2,Wheat:15                } ;
var	BoiledSharkFin        = {SharkMeat:12,Ginger:10,Vinegar:2,PheasantConsomme:2                } ;
var	SharkFinDumplings     = {SharkMeat:6,Ginger:8,Wheat:8,BoarMeat:3                            } ;
var	HammerheadAquapazza   = {SharkMeat:15,GrilledAyu:2,TroutMeuniere:2,Tomato:20                } ;
var	AvocadoCake           = {Avocado:20,Cheese:1,Wheat:15,Butter:1                              } ;
var	CamelKebabs           = {CamelMeat:4,Bread:1,Cabbage:7,Tomato:9                             } ;
var	DesertYukgaejang      = {CamelMeat:12,BoarHotpot:2,ChineseRedPepper:20,GreenOnion:18        } ;
var	CamelNachos           = {CamelMeat:7,OrganicSalad:1,Corn:20,ChineseRedPepper:12             } ;
var	CamelCouscous         = {CamelMeat:7,Wheat:12,KangaBangas:2,Tomato:12                       } ;
var	ElkTacos              = {ElkMeat:7,VenisonMeatSauce:1,Corn:15,Cabbage:15                    } ;
var	StewedElkTendons      = {BoiledSharkFin:2,ElkMeat:15,Ginger:30                              } ;
var	ElkMeatballs          = {ElkMeat:4,Potato:12                                                } ;
var	ElkWellington         = {ElkMeat:10,Wheat:20,FoieGrasSandwich:1,Butter:2                    } ;
var	FoTiaoQiang           = {StewedElkTendons:1,MatagiSkewers:2,DuckHotpot:1,SmokedMeatPlatter:3} ;

var produce = [
    'Apple' ,
    'Wheat' ,
    'GreenOnion' ,
    'Milk' ,
    'Rice' ,
    'Egg' ,
    'Onion' ,
    'Tomato' ,
    'Potato' ,
    'Carrot' ,
    'Wasabi' ,
    'Ginger' ,
    'Soybean' ,
    'Mushroom' ,
    'Cabbage' ,
    'Matsutake' ,
    'Corn' ,
    'Chestnut' ,
    'JapanesePepper' ,
    'ChineseRedPepper' ,
    'Truffles' ,
    'Avocado' 
]
var meat = [ //24
    'PheasantMeat'  ,
    'RabbitMeat'    ,
    'RavenMeat'     ,
    'AyuSweetfish'  ,
    'BadgerMeat'    ,
    'DuckMeat'      ,
    'SunfishMeat'   ,
    'BoarMeat'      ,
    'RainbowTrout'  ,
    'Squab'         ,
    'Venison'       ,
    'Eel'           ,
    'WoodcockMeat'  ,
    'Softshell'     ,
    'BearMeat'      ,
    'Piranha'       ,
    'BisonMeat'     ,
    'CrocodileMeat' ,
    'KangarooMeat'  ,
    'Tuna'          ,
    'OstrichMeat'   ,
    'SharkMeat'     , //substitute
    'CamelMeat'     , //substitute
    'ElkMeat'    /* sub */ 
]
var boil =  [   //26 units
    'PheasantConsomme'   ,
    'PheasantRamen'   ,
    'RabbitCiderSoup'   ,
    'RavenStew'   ,
    'WhiteSauce'   ,
    'BadgerSukiyaki'   ,
    'TanukiSoup'   ,
    'DuckHotpot'   ,
    'SunfishTripe'   ,
    'BoarHotpot'   ,
    'BoarRamen'   ,
    'SavorySquabUdon'   ,
    'MountainMapoTofu'   ,
    'VenisonCurrySoup'   ,
    'VenisonMeatSauce'   ,
    'SoftshellHotpot'   ,
    'SoftshellRice'   ,
    'BearHotpot'   ,
    'WildGameSundubu'   ,
    'AmazonCurry'   ,
    'BisonStew'   ,
    'TruffleRisotto'   ,
    'SavannaStew'   ,
    'BoiledSharkFin'   ,
    'HammerheadAquapazza'   ,
    'DesertYukgaejang'   ,
]
var cook =  [ //25 units
    'ApplePie'     ,
    'RavenMeatPie'     ,
    'GrilledAyu'     ,
    'BadgerSpareRibs'     ,
    'GingerBoar'     ,
    'SteamedTrout'     ,
    'TroutMeuniere'     ,
    'HamamMahshi'     ,
    'GrilledSquab'     ,
    'CornPizza'     ,
    'WildGamePizza'     ,
    'EelOmelet'     ,
    'EelonRice'     ,
    'RoastWoodcock'     ,
    'BecassePie'     ,
    'BarbecuedBear'     ,
    'WildGamePlatter'     ,
    'Bread'     ,
    'PiranhaGratin'     ,
    'PizzaAmazzona'     ,
    'WildGrillsteak'     ,
    'MatagiSkewers'     ,
    'KangarooSteak'     ,
    'WildLasagna'     ,
    'SharkFinDumplings'     ,
]
var proc = [ //13 units
    'Cider'   ,
    'Butter'   ,
    'Vinegar'   ,
    'Tofu'   ,
    'SmokedDuck'   ,
    'BoarBacon'   ,
    'SmokedPepperVenison'   ,
    'ChestnutPotatoes'   ,
    'RusticSauce'   ,
    'KangaBangas'   ,
    'OstrichTartare'   ,
    'Miso'   ,
    'Cheese'   ,
]
var other = [ //36 units
    'PheasantEggonRice'     ,
    'FriedRabbit'           ,
    'RabbitRoyale'          ,
    'AyuRice'               ,
    'Sumeshi'               ,
    'AyuSushi'              ,
    'SunfishSushi'          ,
    'FriedSunfish'          ,
    'BoarOnRice'            ,
    'MatsutakeBaconPasta'   ,
    'MatsutakeChestnutRice' ,
    'SmokedMeatPlatter'     ,
    'SushiPlatter'          ,
    'UnagiSushi'            ,
    'BearVenisonRagout'     ,
    'VenisonBoudinNoir'     ,
    'DuckCroquettes'        ,
    'RusticOrigui'          ,
    'BisonBurger'           ,
    'CrocodileWings'        ,
    'OutbackDog'            ,
    'CrocodileCarpaccio'    ,
    'FoieGrasSandwich'      ,
    'OrganicSalad'          ,
    'TunaSalad'             ,
    'TunaCutlet'            ,
    'TunaBurger'            ,
    'AvocadoCake'           ,
    'CamelKebabs'           ,
    'CamelNachos'           ,
    'CamelCouscous'         ,
    'ElkTacos'              ,
    'StewedElkTendons'      ,
    'ElkMeatballs'          ,
    'ElkWellington'         ,
    'FoTiaoQiang'           ,
]

function mT(x, s) {
    var result = "<table>";
    result += "<tr><th colspan='2'>" ;
    var lx = x.length;
    result += s;
    result += "</th></tr>"
    result += "<tr><th>Item</th>";
    result += "<th>#</th>";
    function nwc(x) {
        /*Add Commas for every thousand value*/
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    for (var i = 0; i < lx; i++) {
    result += "<tr>";
        for (var j = 0; j < x[i].length; j++) {
            jr = nwc(x[i][j]);
            result += "<td>" + jr + "</td>";
        }
        result += "</tr>"
    }
    
    result += "</table>";
    return result;
}//mT "makeTable"

var producedm = document.getElementById("produce");
var meatdm = document.getElementById("meat");
var cookdm = document.getElementById("cook");
var boildm = document.getElementById("boil");
var procdm = document.getElementById("proc");
var otherdm = document.getElementById("other");

//create HTML table from the array eg : [ [0][1], [0][1], [0][1] ]
function o2c(l_)    {
    window.arr;//slot for o2c function
    //Object to Array to Table
    /* 
    l_ = array that contains the object names
    arr = the new array to place all the elements */

        arr = [];
        
        let lind = l_.length;
        for (let a=0; a<lind; a++) {
            ob_ar = Object.entries(l_[a][0])
            for (let i=0; i<ob_ar.length; i++) {
                ob_ar[i][1] *= l_[a][1];
            }
            arr = arr.concat(ob_ar);    
        } //convert objects to array

        function ob(a)   {return window[arr[a][0]]} //return key
        function ze(a)   {return arr[a][1]} //return value
        let arrlen = arr.length;
        for (let a=0; a<arrlen; a++) {
            let x = ob(a), z = ze(a);
            if ((typeof x) === "object" ) {
                let con_ar = Object.entries(x);
                for (let i=0; i<con_ar.length; i++) {
                    (con_ar[i][1]) *= z;
                }
                arr = arr.concat(con_ar);
            }
        }   //Check if a term is an object, then send it to first layer of the array.
        arr = arr.sort()

        for (let i=0; i<arr.length; i++) {//merge identical items; i = index of first element
            for (let l=i+1; l<arr.length; l++) { //the one being compared starts after the first element's position
                if (arr[i][0] === arr[l][0]) {//if the names are identical
                    arr[i][1] += arr[l][1];  //add both values together, then,
                    arr.splice(l,1); //remove the latter element from the array.
                    l--; //to compensate for the left-shifting after removing one array element.
                }
            } 
        }
        window.otherarr = [];
        window.boilarr = [];
        window.cookarr = [];
        window.procarr = [];
        window.meatarr = [];
        window.producearr = [];
        

        for (let i = 0; i < arr.length; i++) {
            let a = arr[i][0];
            let n = arr[i][1];
            let b = arr[i][0].replace(/([A-Z])/g, ' $1').trim();
            console.log(b);
            let ab = [b, n]
            if (other.includes(a) == true) {
                otherarr.push(ab);
            }   else if (boil.includes(a) == true) {
                boilarr.push(ab);
            }   else if (cook.includes(a) == true) {
                cookarr.push(ab);
            }   else if (meat.includes(a) == true) {
                meatarr.push(ab);
            }   else if (produce.includes(a) == true) {
                producearr.push(ab);
            }   else    {
                procarr.push(ab);
            }
        }
        
    let nu = function (a, b) { return a[1] - b[1]; }; 
    // arr.sort();
    if (producearr.length != 0) {producedm.innerHTML = mT(producearr, "Produce");}
    if (meatarr.length != 0) {meatdm.innerHTML = mT(meatarr, "Game Meat");}
    if (cookarr.length != 0) {cookdm.innerHTML = mT(cookarr,"Cooked");}
    if (boilarr.length != 0) {boildm.innerHTML = mT(boilarr, "Boiled");}
    if (procarr.length != 0) {procdm.innerHTML = mT(procarr, "Processed");}
    if (otherarr.length != 0) {otherdm.innerHTML = mT(otherarr, "Other");}
}



var iclass = document.getElementsByClassName("ins");
var sclass = document.getElementsByClassName("sleck");
var si = sclass.length;
function clearT() {
        meatdm.innerHTML = "";
        producedm.innerHTML = "";
        cookdm.innerHTML = "";
        boildm.innerHTML = "";
        procdm.innerHTML = "";
        otherdm.innerHTML = "";  
}
function calcu()  {
    let z = 0;
    window.calc = [];
    for (let b=0; b<si; b++) {
        x = sclass[b].value.replace(/\s/g,'');
        y = iclass[b].value;
        if (typeof window[x] == "object" && y !=0)   {
            calc.push([window[x],y]);
            z += 1;
        }
    }
    
    if (z > 0) {
        clearT();
        o2c(calc);
    }
}
function clr()  {
    for (let c = 0; c < si; c++) {
        sclass[c].value = "";
        iclass[c].value = 1;
    }
} // clear the entire input list


//show the recipe selection list
var toggle = 0;
var insidedm = document.getElementById("inside");
function show() {
    if (toggle == 0) {
        insidedm.style.transform = "scaleY(1)" ;
        toggle++;
    }   else    {
        insidedm.style.transform = "scaleY(0)" ;
        toggle--;
    }
}

var datal = document.getElementById("dataml");
var datas = datal.children;
// datas = for (let i = 0; i < datas.length; i++) {}
var dtarr = new Array;
for (let i=0; i<datas.length; i++) {
    dtarr.push(datas[i].value);     
}
for (i = 0; i < si; i++) {
    sclass[i].addEventListener('change', function () {
        if (dtarr.includes(this.value) === true )  {
            console.log(this.value)
        }        // logs the className of my_element
    })
}


