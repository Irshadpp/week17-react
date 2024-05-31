let items = [
  // 20240531101048
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.2587531&lng=75.78041&restaurantId=382724&catalog_qa=undefined&submitAction=ENTER

{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            "text": "New Malabar Family Restaurant",
            "headerStyling": {
              "textColor": "text_Highest_Emphasis",
              "textVariant": "header_H3_Black"
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            "tabs": [
              {
                "id": "Order Online",
                "title": "Order Online"
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "382724",
              "name": "New Malabar Family Restaurant",
              "city": "Kozhikode",
              "slugs": {
                "restaurant": "new-malabar-family-restaurant-mavoor-mavoor",
                "city": "kozhikode"
              },
              "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              "cloudinaryImageId": "dypfwfzd1seuqyanabsv",
              "locality": "Karaparamba",
              "areaName": "Bilathikkulam",
              "costForTwo": "30000",
              "costForTwoMessage": "₹300 for two",
              "cuisines": [
                "Chinese",
                "North Indian"
              ],
              "avgRating": 4.4,
              "feeDetails": {
                "restaurantId": "382724",
                "fees": [
                  {
                    "name": "TYPE_DISTANCE",
                    "fee": 2600
                  },
                  {
                    "name": "TYPE_TIME"
                  }
                ],
                "totalFee": 2600,
                "title": "Delivery Charge",
                "amount": "2600",
                "icon": "v1648635511/Delivery_fee_new_cjxumu",
                "message": "Order above 149 for discounted delivery fee"
              },
              "parentId": "251724",
              "avgRatingString": "4.4",
              "totalRatingsString": "5K+ ratings",
              "sla": {
                "restaurantId": "382724",
                "deliveryTime": 21,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 25,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "stressFactor": 1,
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "zoneId": 679,
                "slaString": "20-25 MINS",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-05-31 23:00:00",
                "visibility": true,
                "opened": true,
                "restaurantClosedMeta": {
                  
                }
              },
              "aggregatedDiscountInfo": {
                "header": "FLAT40 off",
                "shortDescriptionList": [
                  {
                    "meta": "FLAT40 off | Use FLATDEAL",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "FLAT40 off | Use FLATDEAL",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Flat ₹50 off | Above ₹600",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {
                
              },
              "slugString": "new-malabar-family-restaurant-mavoor-mavoor",
              "isOpen": true,
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "2/264-ABC, KARAPARAMBA P O,KOZHIKODE NORTH CIRCLE,KOZHIKODE-673010"
                },
                {
                  "title": "Cuisines",
                  "message": "Chinese,North Indian"
                }
              ],
              "totalRatings": 5000,
              "aggregatedDiscountInfoV2": {
                "header": "FLAT40 off",
                "shortDescriptionList": [
                  {
                    "meta": "FLAT40 off | Use FLATDEAL",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "FLAT40 off | Use FLATDEAL",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Flat ₹50 off | Above ₹600",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "nudgeBanners": [
                {
                  "minValue": 349,
                  "maxValue": 499,
                  "priority": 1,
                  "couponCode": "FLATDEAL",
                  "discountInfo": {
                    "discountType": "Flat",
                    "value": 40
                  },
                  "lockedMessage": "Add items worth ₹<amount> to save ₹40 | Code FLATDEAL",
                  "unlockedMessage": "FLATDEAL Coupon Unlocked! Use it to save ₹40",
                  "logoCtx": {
                    
                  }
                }
              ],
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/382724"
              },
              "expectationNotifiers": [
                {
                  "text": "Order above 149 for discounted delivery fee",
                  "icon": {
                    "imageId": "v1648635511/Delivery_fee_new_cjxumu"
                  },
                  "popup": {
                    "cta": {
                      
                    }
                  },
                  "type": "DISTANCE_FEE_NON_FOOD_LM",
                  "enrichedText": "Order above 149 for discounted delivery fee",
                  "halfCardPopup": {
                    "halfCardPopupHeader": {
                      
                    }
                  },
                  "trailingIcon": {
                    
                  }
                }
              ],
              "ratingSlab": "RATING_SLAB_5",
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "hasBestsellerItems": true,
              "cartOrderabilityNudgeBanner": {
                "parameters": {
                  
                },
                "presentation": {
                  
                }
              },
              "latLong": "11.287011,75.781088",
              "backgroundImageOverlayInfo": {
                
              }
            },
            "analytics": {
              
            }
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            "sectionId": "POP_UP_CROUTON_MENU"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "columns": 5,
              "horizontalScrollEnabled": true,
              "itemSpacing": 12,
              "lineSpacing": 10,
              "widgetPadding": {
                
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 10,
                  "right": 10,
                  "bottom": 16
                }
              },
              "scrollBar": {
                
              }
            },
            "id": "offerCollectionWidget_UX4",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                "offers": [
                  {
                    "info": {
                      "header": "FLAT ₹40 OFF",
                      "offerTag": "FLAT DEAL",
                      "offerTagColor": "#E46D47",
                      "offerIds": [
                        "9ce3817d-c3df-40ab-a184-360702b7980d"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE FLATDEAL",
                      "description": "ABOVE ₹499",
                      "offerType": "offers",
                      "restId": "382724",
                      "offerLogo": "offers/generic",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "FLAT ₹50 OFF",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/1b1104b6-5df9-4176-8d9b-413c90e3e7e7_ICICI.png",
                      "offerIds": [
                        "dbc356ca-b9f5-4a6f-b36a-1e3642b72055"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "NO CODE REQUIRED",
                      "description": "ABOVE ₹600",
                      "offerType": "offers",
                      "restId": "382724",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/1b1104b6-5df9-4176-8d9b-413c90e3e7e7_ICICI.png",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "20% OFF UPTO ₹125",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/dfb04dfd-509e-4fe2-896f-75e78e398330_Kotak.png",
                      "offerIds": [
                        "686370b9-7afb-435f-a8c9-c6f29cc3ac54"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE KOTAK811",
                      "description": "ABOVE ₹499",
                      "offerType": "offers",
                      "restId": "382724",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/dfb04dfd-509e-4fe2-896f-75e78e398330_Kotak.png",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "15% OFF UPTO ₹150",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/52c92297-cc3d-4ba0-884a-0b95c20d6894_HSBC.png",
                      "offerIds": [
                        "f46211eb-0271-4869-b931-c4e2fe8d5ae8"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE HSBCFEST",
                      "description": "ABOVE ₹499",
                      "offerType": "offers",
                      "restId": "382724",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/52c92297-cc3d-4ba0-884a-0b95c20d6894_HSBC.png",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "15% OFF UPTO ₹300",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/5/2/91510830-7b39-403d-ba59-977874e710d7_Citi.png",
                      "offerIds": [
                        "fcc23178-93ee-4f52-b558-67e5ec8bf848"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE CITIFOODIE",
                      "description": "ABOVE ₹1200",
                      "offerType": "offers",
                      "restId": "382724",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/5/2/91510830-7b39-403d-ba59-977874e710d7_Citi.png",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  }
                ],
                "habitMilestoneInfo": {
                  "callout": {
                    
                  }
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    
                  }
                }
              }
            }
          }
        }
      },
      {
        "groupedCard": {
          "cardGroupMap": {
            "REGULAR": {
              "cards": [
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      "badges": {
                        
                      },
                      "vegOnlyDetails": {
                        "imageId": "AutoVegOnly_qkjowj",
                        "title": "Showing only vegetarian options.",
                        "description": "Tap on the VEG ONLY button to turn off the setting"
                      },
                      "topRatedFilter": {
                        "attributes": {
                          "displayText": "Ratings 4.0+"
                        }
                      },
                      "kidsCategoryFilter": {
                        "attributes": {
                          "displayText": "Kids Favourites",
                          "tooltip": {
                            "enabled": true,
                            "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                          }
                        }
                      },
                      "vegFilter": {
                        "attributes": {
                          "displayText": "VEG"
                        }
                      },
                      "nonvegFilter": {
                        "attributes": {
                          "displayText": "NONVEG"
                        }
                      }
                    },
                    "relevance": {
                      "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      "sectionId": "MENU_FILTER_TOGGLE"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Recommended",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332881",
                              "name": "Appam",
                              "category": "Bread",
                              "description": "A delectable and flavorful bread that will tantalize your taste buds with its soft and fluffy texture.",
                              "imageId": "hhewe8euel4yjsys2som",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "686 ratings",
                                  "ratingCountV2": "686"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332874",
                              "name": "Kerala Paratha",
                              "category": "Bread",
                              "description": "Serves 1 | A flavorful and flaky Indian bread that is simply irresistible.",
                              "imageId": "weofelredvnobqia4na1",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1600,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "968 ratings",
                                  "ratingCountV2": "968"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332885",
                              "name": "Puttu",
                              "category": "Bread",
                              "description": "A steamed, flavourful bread that is a staple food in Southern India. Serves 1",
                              "imageId": "z6mahfzmskhejdaqflx5",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "284 ratings",
                                  "ratingCountV2": "284"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332910",
                              "name": "Nool Puttu",
                              "category": "Bread",
                              "description": "A delectable vegetarian treat from South India, this bread-like dish is sure to tantalize your taste buds with its unique flavors.",
                              "imageId": "zxhh6atkzq4hemlysrvk",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "230 ratings",
                                  "ratingCountV2": "230"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332891",
                              "name": "Ari Pathiri",
                              "category": "Bread",
                              "description": "Soft and flavorful bread that perfectly complements any dish. Serves 1-24",
                              "imageId": "wrhfvk4evobxwpzkg6pr",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "117 ratings",
                                  "ratingCountV2": "117"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332877",
                              "name": "Wheat Paratha",
                              "category": "Bread",
                              "description": "A delectable bread made with wheat flour perfect for a wholesome meal. Serves 1",
                              "imageId": "htyzagq5ujtjqueigknr",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "387 ratings",
                                  "ratingCountV2": "387"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332888",
                              "name": "Nice Pathiri",
                              "category": "Bread",
                              "description": "Serves 1 | Hand made.",
                              "imageId": "wlije3m6ib0g8mcvnswu",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "190 ratings",
                                  "ratingCountV2": "190"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75607045",
                              "name": "5 Nice Pathri + Chicken Curry [2pcs]",
                              "category": "Malabar Special Combo",
                              "description": "An irresistible Malabar combo featuring aromatic chicken curry and 5 delightful pathris. Serves 1",
                              "imageId": "mixacx83sifdjtx9muve",
                              "inStock": 1,
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "135 ratings",
                                  "ratingCountV2": "135"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71127850",
                              "name": "Egg Curry",
                              "category": "Breakfast",
                              "description": "A flavorsome and comforting breakfast choice featuring wholesome eggs simmered in a rich and aromatic curry.",
                              "imageId": "bfqzditqijdsj2wheafe",
                              "inStock": 1,
                              "price": 5000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "EGG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "287 ratings",
                                  "ratingCountV2": "287"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71938440",
                              "name": "Veg Stew",
                              "category": "Breakfast",
                              "description": "A hearty breakfast option brimming with a perfect blend of flavors and textures.",
                              "imageId": "devc0whd5kfxirjd7jts",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 5000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "330 ratings",
                                  "ratingCountV2": "330"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332925",
                              "name": "Kadala Curry",
                              "category": "Breakfast",
                              "description": "A flavorful and hearty South Indian breakfast specialty that will leave you craving for more.",
                              "imageId": "b035bb68acddd25fcedd08ab5de9a321",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 5000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "122 ratings",
                                  "ratingCountV2": "122"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71127818",
                              "name": "Pazam Pori",
                              "category": "Snacks",
                              "description": "A mouthwatering veg snack that combines crispiness and softness in one delectable bite.",
                              "imageId": "linpcsuo1hlujjfpf50f",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "114 ratings",
                                  "ratingCountV2": "114"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332968",
                              "name": "Beef Nadan Fry",
                              "category": "Beef",
                              "description": "Serves 1 | (Serves 1)",
                              "imageId": "q4gninylw2t03f9xto06",
                              "inStock": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "148 ratings",
                                  "ratingCountV2": "148"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332883",
                              "name": "Ayila Mulakittathu",
                              "category": "Fish",
                              "description": "A flavorful and aromatic fish-based delicacy, bursting with distinct flavors that'll leave you craving for more.",
                              "imageId": "4595634dd01fb10a1630c4f9d23a5f3b",
                              "inStock": 1,
                              "price": 9500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "74 ratings",
                                  "ratingCountV2": "74"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332924",
                              "name": "Chicken Varutharachathu",
                              "category": "Chicken",
                              "description": "A flavorful and aromatic chicken dish that will tantalize your taste buds with its rich and indulgent flavors.",
                              "imageId": "vwlzzisoawotqzxduesa",
                              "inStock": 1,
                              "price": 16500,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226635",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Quarter",
                                        "default": 1,
                                        "id": "33708188",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Half",
                                        "price": 15000,
                                        "id": "33708189",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 34000,
                                        "id": "33708190",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "278 ratings",
                                  "ratingCountV2": "278"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "type": "CATEGORY_TYPE_RECOMMENDED"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Chicken",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332924",
                              "name": "Chicken Varutharachathu",
                              "category": "Chicken",
                              "description": "A flavorful and aromatic chicken dish that will tantalize your taste buds with its rich and indulgent flavors.",
                              "imageId": "vwlzzisoawotqzxduesa",
                              "inStock": 1,
                              "price": 16500,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226635",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Quarter",
                                        "default": 1,
                                        "id": "33708188",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Half",
                                        "price": 15000,
                                        "id": "33708189",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 34000,
                                        "id": "33708190",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "278 ratings",
                                  "ratingCountV2": "278"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "140024358",
                              "name": "Chicken Mulakittath",
                              "category": "Chicken",
                              "inStock": 1,
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "133793458",
                              "name": "Chicken Shawaya (F)+2nos Kubboos",
                              "category": "Chicken",
                              "price": 57500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332933",
                              "name": "Chicken Kondattam",
                              "category": "Chicken",
                              "description": "A succulent and flavorful chicken dish that will tantalize your taste buds with its vibrant and enticing flavors.",
                              "imageId": "fnknremo6giceibgz34x",
                              "price": 32000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226638",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708195",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 20000,
                                        "id": "33708196",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "31 ratings",
                                  "ratingCountV2": "31"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332919",
                              "name": "Chicken Malabari",
                              "category": "Chicken",
                              "description": "A tantalizing chicken dish bursting with rich flavors inspired by the vibrant cuisine of Malabar.",
                              "imageId": "lmzo7xxwbwdtt0ahgvjr",
                              "price": 31500,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226633",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708184",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 22000,
                                        "id": "33708185",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "39 ratings",
                                  "ratingCountV2": "39"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332914",
                              "name": "Chicken Tikka Masala",
                              "category": "Chicken",
                              "description": "A savory and flavorful chicken dish with a rich, creamy sauce.",
                              "price": 36000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226631",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708180",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 25800,
                                        "id": "33708181",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.4",
                                  "ratingCount": "21 ratings",
                                  "ratingCountV2": "21"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332917",
                              "name": "Chicken Chettinadu",
                              "category": "Chicken",
                              "description": "A succulent and flavorful chicken dish that celebrates the rich culinary heritage of Chettinadu.",
                              "price": 31000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226632",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708182",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 22000,
                                        "id": "33708183",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "28 ratings",
                                  "ratingCountV2": "28"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332912",
                              "name": "Chicken Tikka",
                              "category": "Chicken",
                              "description": "Deliciously marinated and grilled chicken, a true delight for meat lovers!",
                              "imageId": "q0d7oj1mvkpxdxbfuf7x",
                              "price": 34000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226630",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708178",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 24000,
                                        "id": "33708179",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "30 ratings",
                                  "ratingCountV2": "30"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332927",
                              "name": "Chicken Manchurian",
                              "category": "Chicken",
                              "description": "A delectable and flavorful chicken dish bursting with Oriental flavors.",
                              "price": 31000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226636",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708191",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 19000,
                                        "id": "33708192",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.5",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332938",
                              "name": "Chilly Chicken",
                              "category": "Chicken",
                              "description": "A delectable chicken dish with a satisfying crunch and bold flavors. Serves 1",
                              "imageId": "crrjj6btnwqgwbjr4l7s",
                              "price": 31000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226640",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708199",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 20000,
                                        "id": "33708200",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "42 ratings",
                                  "ratingCountV2": "42"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332958",
                              "name": "Pepper Chicken",
                              "category": "Chicken",
                              "description": "Tender chicken cooked with a flavorful blend of herbs and spices. Serves 1",
                              "price": 32000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226645",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708210",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 22000,
                                        "id": "33708211",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "42 ratings",
                                  "ratingCountV2": "42"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332909",
                              "name": "Al Faham Chicken",
                              "category": "Chicken",
                              "description": "Serves 1 | Tender, juicy chicken grilled to perfection with flavorful seasonings. Serves 1-2",
                              "imageId": "jv3ajhytoqd6irlxdtol",
                              "price": 17500,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226629",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half (2 Kuboos)",
                                        "price": 14500,
                                        "default": 1,
                                        "id": "33708176",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Quarter (1 Kuboos)",
                                        "id": "33708175",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full (4 Kuboos)",
                                        "price": 42000,
                                        "id": "33708177",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "314 ratings",
                                  "ratingCountV2": "314"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332954",
                              "name": "Butter Chicken [Half]",
                              "category": "Chicken",
                              "description": "Serves 1 | A succulent chicken dish with rich buttery flavors. Serves 1-109",
                              "imageId": "z0j6kzk5ny1yvusxh288",
                              "price": 32000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226644",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708208",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 22000,
                                        "id": "33708209",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "62 ratings",
                                  "ratingCountV2": "62"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332922",
                              "name": "Kadai Chicken",
                              "category": "Chicken",
                              "description": "Mouthwatering chicken cooked in a flavorful blend of aromatic spices and cooked to perfection.",
                              "price": 31000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226634",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708186",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 20000,
                                        "id": "33708187",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "15 ratings",
                                  "ratingCountV2": "15"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332948",
                              "name": "Chicken Sukka [7 Pieces]",
                              "category": "Chicken",
                              "description": "Serves 1 | A succulent and flavorsome chicken dish, bursting with rich aromatic flavors that will tantalize your taste buds.",
                              "price": 32000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226643",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708206",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 20000,
                                        "id": "33708207",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "14 ratings",
                                  "ratingCountV2": "14"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332935",
                              "name": "Ginger Chicken",
                              "category": "Chicken",
                              "description": "Indulge in a delectable chicken dish bursting with the aromatic flavor of ginger.",
                              "price": 31000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226639",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708197",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 19000,
                                        "id": "33708198",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "17 ratings",
                                  "ratingCountV2": "17"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332941",
                              "name": "Garlic Chicken",
                              "category": "Chicken",
                              "description": "A delectable chicken dish infused with the aromatic flavors of garlic.",
                              "price": 32000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226641",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708201",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 22000,
                                        "id": "33708202",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332930",
                              "name": "Chicken Kurma",
                              "category": "Chicken",
                              "description": "A flavorful and aromatic chicken dish cooked in a rich and creamy sauce.",
                              "price": 31000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226637",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708193",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 19000,
                                        "id": "33708194",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "17 ratings",
                                  "ratingCountV2": "17"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "139774811",
                              "name": "Chicken Varattiyath (H)",
                              "category": "Chicken",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "131487068",
                              "name": "Kanthari Chicken (Gravy)",
                              "category": "Chicken",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332943",
                              "name": "Chicken 65",
                              "category": "Chicken",
                              "description": "A succulent and flavorful chicken dish that will leave your taste buds craving for more.",
                              "imageId": "hggxsruuyxtcq3dgg2cy",
                              "price": 17000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "11489496",
                                    "name": "Chicken 65",
                                    "variations": [
                                      {
                                        "name": "Quarter",
                                        "default": 1,
                                        "id": "37811477",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Half",
                                        "price": 12000,
                                        "id": "37811478",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 32000,
                                        "id": "37811479",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "170 ratings",
                                  "ratingCountV2": "170"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332906",
                              "name": "Tandoori Chicken",
                              "category": "Chicken",
                              "description": "Deliciously marinated chicken cooked to perfection in a traditional tandoor oven.",
                              "imageId": "an8akaoxlmlnsgicwoxu",
                              "price": 17500,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226628",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Quarter",
                                        "default": 1,
                                        "id": "33708172",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Half",
                                        "price": 15000,
                                        "id": "33708173",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 42000,
                                        "id": "33708174",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "67 ratings",
                                  "ratingCountV2": "67"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "105284718",
                              "name": "Peri Peri Al Faham",
                              "category": "Chicken",
                              "description": "Peri peri alfaham,slightly spicy item,\nadd with : mayonice, mint chatny and kubbus",
                              "price": 18000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "22317477",
                                    "name": "Peri Peri Al Faham",
                                    "variations": [
                                      {
                                        "name": "Quarter",
                                        "default": 1,
                                        "id": "72942370",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Half",
                                        "price": 15000,
                                        "id": "72942371",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 43000,
                                        "id": "72942372",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "47 ratings",
                                  "ratingCountV2": "47"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "120203574",
                              "name": "Kanthari Alfham",
                              "category": "Chicken",
                              "description": "A tantalizing chicken dish bursting with flavor from Kanthari Alfham.",
                              "price": 18000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "29867783",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Quarter",
                                        "default": 1,
                                        "id": "93318805",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Half",
                                        "price": 16000,
                                        "id": "93318806",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 43000,
                                        "id": "93318807",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "6 ratings",
                                  "ratingCountV2": "6"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "86568142",
                              "name": "Chicken Dry Fry ( C D F )",
                              "category": "Chicken",
                              "description": "Satisfy your cravings with this delectable, flavorful chicken dish that is sure to leave you wanting more!",
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "54 ratings",
                                  "ratingCountV2": "54"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332950",
                              "name": "Kada Dry Fry",
                              "category": "Chicken",
                              "description": "A succulent and flavorful chicken dish expertly fried to perfection, bursting with tantalizing spices and rich flavors.",
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "18 ratings",
                                  "ratingCountV2": "18"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332953",
                              "name": "Kada Masala",
                              "category": "Chicken",
                              "description": "A delectable chicken delight with a rich and aromatic blend of flavors.",
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.5",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "132279325",
                              "name": "Chicken Kanthari - Gravy",
                              "category": "Chicken",
                              "description": "Small 7 Pcs",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Bread",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332881",
                              "name": "Appam",
                              "category": "Bread",
                              "description": "A delectable and flavorful bread that will tantalize your taste buds with its soft and fluffy texture.",
                              "imageId": "hhewe8euel4yjsys2som",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "686 ratings",
                                  "ratingCountV2": "686"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332874",
                              "name": "Kerala Paratha",
                              "category": "Bread",
                              "description": "Serves 1 | A flavorful and flaky Indian bread that is simply irresistible.",
                              "imageId": "weofelredvnobqia4na1",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1600,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "968 ratings",
                                  "ratingCountV2": "968"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332885",
                              "name": "Puttu",
                              "category": "Bread",
                              "description": "A steamed, flavourful bread that is a staple food in Southern India. Serves 1",
                              "imageId": "z6mahfzmskhejdaqflx5",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "284 ratings",
                                  "ratingCountV2": "284"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332910",
                              "name": "Nool Puttu",
                              "category": "Bread",
                              "description": "A delectable vegetarian treat from South India, this bread-like dish is sure to tantalize your taste buds with its unique flavors.",
                              "imageId": "zxhh6atkzq4hemlysrvk",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "230 ratings",
                                  "ratingCountV2": "230"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332891",
                              "name": "Ari Pathiri",
                              "category": "Bread",
                              "description": "Soft and flavorful bread that perfectly complements any dish. Serves 1-24",
                              "imageId": "wrhfvk4evobxwpzkg6pr",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "117 ratings",
                                  "ratingCountV2": "117"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332877",
                              "name": "Wheat Paratha",
                              "category": "Bread",
                              "description": "A delectable bread made with wheat flour perfect for a wholesome meal. Serves 1",
                              "imageId": "htyzagq5ujtjqueigknr",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "387 ratings",
                                  "ratingCountV2": "387"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332888",
                              "name": "Nice Pathiri",
                              "category": "Bread",
                              "description": "Serves 1 | Hand made.",
                              "imageId": "wlije3m6ib0g8mcvnswu",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "190 ratings",
                                  "ratingCountV2": "190"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "130547213",
                              "name": "Kizhi Porotta Chicken",
                              "category": "Bread",
                              "description": "Porotta 2 nos",
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "12 ratings",
                                  "ratingCountV2": "12"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332908",
                              "name": "Chapati (1 Pc)",
                              "category": "Bread",
                              "description": "Serves 1 | Hand made.",
                              "imageId": "gc9nnglopxmpfgjp1drv",
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "196 ratings",
                                  "ratingCountV2": "196"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332903",
                              "name": "Butter Naan",
                              "category": "Bread",
                              "imageId": "rqkga0iozbgj1pk1sft1",
                              "isVeg": 1,
                              "price": 3500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "94 ratings",
                                  "ratingCountV2": "94"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332901",
                              "name": "Naan",
                              "category": "Bread",
                              "description": "A flavorful and savory Indian bread that pairs perfectly with a variety of vegetarian dishes.",
                              "isVeg": 1,
                              "price": 3000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332898",
                              "name": "Butter Roti",
                              "category": "Bread",
                              "description": "A flavorsome and delectable bread, prepared with a hint of rich and creamy butter, perfect to complement any meal.",
                              "isVeg": 1,
                              "price": 2700,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "25 ratings",
                                  "ratingCountV2": "25"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332894",
                              "name": "Roti",
                              "category": "Bread",
                              "description": "A mouthwatering veg bread that is soft, fluffy, and packed with delightful flavors.",
                              "isVeg": 1,
                              "price": 2200,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "27 ratings",
                                  "ratingCountV2": "27"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332905",
                              "name": "Kuboos (1 Pc)",
                              "category": "Bread",
                              "description": "A delectable veg bread that promises a delightful burst of flavors with every bite.",
                              "imageId": "ypksezbzlz9chz7m6k0g",
                              "isVeg": 1,
                              "price": 1200,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "59 ratings",
                                  "ratingCountV2": "59"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Rice & Noodles",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332884",
                              "name": "Water (1 ltr)",
                              "category": "Rice & Noodles",
                              "description": "A flavorful and aromatic rice or noodles dish that is sure to satisfy your taste buds.",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 2000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "41 ratings",
                                  "ratingCountV2": "41"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332991",
                              "name": "Chicken Biryani",
                              "category": "Rice & Noodles",
                              "description": "1 Serve",
                              "imageId": "ylctmivzx4euwuyyrfy7",
                              "price": 21000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "446 ratings",
                                  "ratingCountV2": "446"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "83686969",
                              "name": "Mutton Biryani",
                              "category": "Rice & Noodles",
                              "description": "Aromatic rice and tender mutton cooked to perfection. Serves 1",
                              "price": 33000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "26 ratings",
                                  "ratingCountV2": "26"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332994",
                              "name": "Fish Biryani (Ayakora)",
                              "category": "Rice & Noodles",
                              "description": "Serves 1 | Ayakora.",
                              "price": 30000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "107 ratings",
                                  "ratingCountV2": "107"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332992",
                              "name": "Chicken 65 Biryani",
                              "category": "Rice & Noodles",
                              "description": "A flavorful and aromatic rice dish with tender chicken pieces. Serves 1-149",
                              "imageId": "yduetdncdznufzevujhn",
                              "price": 13000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226647",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708214",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 8000,
                                        "id": "33708215",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "521 ratings",
                                  "ratingCountV2": "521"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332995",
                              "name": "Prawns Biryani",
                              "category": "Rice & Noodles",
                              "description": "A flavorful and aromatic rice dish featuring succulent prawns.",
                              "price": 28000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "24 ratings",
                                  "ratingCountV2": "24"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "132278685",
                              "name": "Chicken 65 Biriyani",
                              "category": "Rice & Noodles",
                              "description": "A flavorful fusion of tender chicken and fragrant rice, bursting with aromatic spices and bursting with flavors.",
                              "price": 22000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "36700460",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Small",
                                        "default": 1,
                                        "id": "114351576",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Half",
                                        "price": 13000,
                                        "id": "114351577",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 23000,
                                        "id": "114351578",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332999",
                              "name": "Chicken Fried Rice",
                              "category": "Rice & Noodles",
                              "imageId": "kzactynqk0zo1nyi5cmd",
                              "price": 21000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "104 ratings",
                                  "ratingCountV2": "104"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "77497452",
                              "name": "Mixed Fried Rice",
                              "category": "Rice & Noodles",
                              "description": "Egg + chicken + prawns",
                              "imageId": "qhtfg9clq2hbkhtnmfdg",
                              "price": 24000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "20 ratings",
                                  "ratingCountV2": "20"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "108737228",
                              "name": "Chicken Biryani (1piece )",
                              "category": "Rice & Noodles",
                              "description": "A delectable and flavorful rice dish that tantalizes your taste buds with its succulent chicken.",
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "13 ratings",
                                  "ratingCountV2": "13"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332886",
                              "name": "Schechwan Chicken Fried Rice",
                              "category": "Rice & Noodles",
                              "description": "A flavorful fusion of succulent chicken, aromatic seasonings, and expertly tossed rice, creating a tantalizing symphony of flavors.",
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "25 ratings",
                                  "ratingCountV2": "25"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332864",
                              "name": "Chicken Noodles",
                              "category": "Rice & Noodles",
                              "description": "Tender chicken and flavorful noodles combine in this delectable rice and noodle dish.",
                              "imageId": "20e02a4f967646addd6d058177c2edac",
                              "price": 21000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.4",
                                  "ratingCount": "31 ratings",
                                  "ratingCountV2": "31"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "77497454",
                              "name": "Mixed Noodles",
                              "category": "Rice & Noodles",
                              "description": "Egg + chicken + prawns",
                              "price": 24000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "108737321",
                              "name": "Fish Biryani Ayakora (1 Piece )",
                              "category": "Rice & Noodles",
                              "description": "Aromatic rice combined with tender, flavorful fish creates a delectable dish perfect for any non-veg lover. Serves 1",
                              "price": 20000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "18 ratings",
                                  "ratingCountV2": "18"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332887",
                              "name": "Schechwan Chicken Noodles",
                              "category": "Rice & Noodles",
                              "description": "A tantalizing fusion of tender chicken and flavorful noodles, perfectly balanced with a hint of aromatic spices.",
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "9 ratings",
                                  "ratingCountV2": "9"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332866",
                              "name": "Egg Fried Rice",
                              "category": "Rice & Noodles",
                              "description": "A flavorful rice dish made with fluffy eggs and fragrant seasonings, offering a delightful culinary experience.",
                              "imageId": "ae1bj5jkjf4i6f2y6dm0",
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "EGG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "42 ratings",
                                  "ratingCountV2": "42"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332996",
                              "name": "Kada Biryani",
                              "category": "Rice & Noodles",
                              "description": "A flavorful and aromatic rice dish that is sure to satisfy the meat lover's craving.",
                              "price": 20000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "12 ratings",
                                  "ratingCountV2": "12"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332865",
                              "name": "Chicken Pulav",
                              "category": "Rice & Noodles",
                              "description": "A flavorsome blend of tender chicken and fragrant rice, sure to tantalize your taste buds.",
                              "price": 21000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332889",
                              "name": "Schechwan Egg Fried Rice",
                              "category": "Rice & Noodles",
                              "description": "Satisfyingly flavorful traditional fried rice with a hint of Szechwan influence and a delightful combination of textures.",
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "EGG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "3 ratings",
                                  "ratingCountV2": "3"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332868",
                              "name": "Egg Noodles",
                              "category": "Rice & Noodles",
                              "description": "A delectable and savory noodle dish featuring the richness of eggs, perfect for noodle enthusiasts.",
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "EGG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "13 ratings",
                                  "ratingCountV2": "13"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332869",
                              "name": "Veg Fried Rice",
                              "category": "Rice & Noodles",
                              "imageId": "oy6uahkuygdgrcwcwvzr",
                              "isVeg": 1,
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "114 ratings",
                                  "ratingCountV2": "114"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332896",
                              "name": "Schechwan Veg Noodles",
                              "category": "Rice & Noodles",
                              "isVeg": 1,
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "12 ratings",
                                  "ratingCountV2": "12"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332879",
                              "name": "Curd Rice",
                              "category": "Rice & Noodles",
                              "description": "Smooth and creamy medley of rice and fresh ingredients.",
                              "imageId": "c705cf1d95b3e3ce40fa3305ae2c1b88",
                              "isVeg": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "27 ratings",
                                  "ratingCountV2": "27"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332893",
                              "name": "Schechwan Veg Fried Rice",
                              "category": "Rice & Noodles",
                              "description": "A flavorful and aromatic rice dish inspired by the vibrant flavors of Szechuan cuisine.",
                              "isVeg": 1,
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "12 ratings",
                                  "ratingCountV2": "12"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332873",
                              "name": "Veg Pulav",
                              "category": "Rice & Noodles",
                              "description": "Serves 1 | [Veg preparation]",
                              "isVeg": 1,
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "23 ratings",
                                  "ratingCountV2": "23"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332871",
                              "name": "Veg Noodles",
                              "category": "Rice & Noodles",
                              "description": "A mouthwatering medley of vibrant vegetables tossed with delicate noodles, delivering a delightful symphony of flavors in every bite.",
                              "isVeg": 1,
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "22 ratings",
                                  "ratingCountV2": "22"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "108735911",
                              "name": "Beef Biryani (1 Piece )",
                              "category": "Rice & Noodles",
                              "price": 12000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "6 ratings",
                                  "ratingCountV2": "6"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332892",
                              "name": "Schechwan Egg Noodles",
                              "category": "Rice & Noodles",
                              "description": "Delicious egg noodles bursting with bold flavors and enticing aromas.",
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "EGG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332880",
                              "name": "Jeera Rice",
                              "category": "Rice & Noodles",
                              "description": "Delicately flavored rice infused with the aromatic essence of jeera, transporting you to a world of delectable flavors.",
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "9 ratings",
                                  "ratingCountV2": "9"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332998",
                              "name": "Ghee Rice",
                              "category": "Rice & Noodles",
                              "description": "A delectable vegetarian rice dish that captivates with its rich flavors and aromatic ghee-infused grains.",
                              "isVeg": 1,
                              "price": 6000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10226650",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Half",
                                        "default": 1,
                                        "id": "33708220",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 3000,
                                        "id": "33708221",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "63 ratings",
                                  "ratingCountV2": "63"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332882",
                              "name": "Mayonnaise",
                              "category": "Rice & Noodles",
                              "description": "A creamy and delectable addition to rice and noodles, perfect for enhancing the flavors of your meal.",
                              "imageId": "410081caae00b216239a944f4dd36009",
                              "isVeg": 1,
                              "price": 3000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "53 ratings",
                                  "ratingCountV2": "53"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Breakfast",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71127850",
                              "name": "Egg Curry",
                              "category": "Breakfast",
                              "description": "A flavorsome and comforting breakfast choice featuring wholesome eggs simmered in a rich and aromatic curry.",
                              "imageId": "bfqzditqijdsj2wheafe",
                              "inStock": 1,
                              "price": 5000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "EGG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "287 ratings",
                                  "ratingCountV2": "287"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71938440",
                              "name": "Veg Stew",
                              "category": "Breakfast",
                              "description": "A hearty breakfast option brimming with a perfect blend of flavors and textures.",
                              "imageId": "devc0whd5kfxirjd7jts",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 5000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "330 ratings",
                                  "ratingCountV2": "330"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332925",
                              "name": "Kadala Curry",
                              "category": "Breakfast",
                              "description": "A flavorful and hearty South Indian breakfast specialty that will leave you craving for more.",
                              "imageId": "b035bb68acddd25fcedd08ab5de9a321",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 5000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "122 ratings",
                                  "ratingCountV2": "122"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "140005078",
                              "name": "Prawns Varattiyath",
                              "category": "Breakfast",
                              "inStock": 1,
                              "price": 20000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "140005073",
                              "name": "Kadukka Fry ",
                              "category": "Breakfast",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "42185180",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Small",
                                        "default": 1,
                                        "id": "135039394",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Medium",
                                        "id": "135039395",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Large",
                                        "id": "135039396",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "140030029",
                              "name": "Oyster Fry",
                              "category": "Breakfast",
                              "description": "Muru - Neetu kakka",
                              "inStock": 1,
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "72025985",
                              "name": "Cheru Payar Curry",
                              "category": "Breakfast",
                              "description": "A delectable and flavorful breakfast curry featuring fragrant cheru payar.",
                              "isVeg": 1,
                              "price": 5000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "93 ratings",
                                  "ratingCountV2": "93"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75748695",
                              "name": "Edly  - Vada Sett",
                              "category": "Breakfast",
                              "description": "Serves 1 | Edly(3pcs) + 1vada + chatting and sambar",
                              "imageId": "vdpjesvsz9t0racumdqv",
                              "isVeg": 1,
                              "price": 7500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "55 ratings",
                                  "ratingCountV2": "55"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Fish",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332878",
                              "name": "Fish Mulakittathu (Ayakora)",
                              "category": "Fish",
                              "description": "A savory and flavorful fish dish with a rich and tangy sauce. Serves 1",
                              "inStock": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "118 ratings",
                                  "ratingCountV2": "118"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332883",
                              "name": "Ayila Mulakittathu",
                              "category": "Fish",
                              "description": "A flavorful and aromatic fish-based delicacy, bursting with distinct flavors that'll leave you craving for more.",
                              "imageId": "4595634dd01fb10a1630c4f9d23a5f3b",
                              "inStock": 1,
                              "price": 9500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "74 ratings",
                                  "ratingCountV2": "74"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332904",
                              "name": "Fish Moilee (Ayakora)",
                              "category": "Fish",
                              "description": "A flavorful and aromatic fish dish that showcases the perfect blend of ingredients, creating a delectable culinary experience.",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "16 ratings",
                                  "ratingCountV2": "16"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332872",
                              "name": "Prawns Masala",
                              "category": "Fish",
                              "description": "A delectable and flavorful dish featuring succulent prawns cooked in a rich masala, perfect for seafood lovers.",
                              "imageId": "c48709ac2c31dcb2643bcd1f5d7e3cb6",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "21 ratings",
                                  "ratingCountV2": "21"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332907",
                              "name": "Fish Masala (Ayakora)",
                              "category": "Fish",
                              "description": "A flavorful and aromatic fish curry that combines delicate fish with a medley of secret spices from Ayakora.",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332863",
                              "name": "Prawns Dry Fry",
                              "category": "Fish",
                              "description": "Deliciously seasoned prawns cooked to perfection, showcasing the rich flavors of the ocean.",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.9",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332867",
                              "name": "Prawns Onion Fry",
                              "category": "Fish",
                              "description": "Deliciously crispy and aromatic, this Fish dish is bursting with succulent prawns and caramelized onions.",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332911",
                              "name": "Chilly Fish (Ayakora)",
                              "category": "Fish",
                              "description": "A delectable fish dish bursting with flavors that will tantalize your taste buds.",
                              "price": 30000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70333002",
                              "name": "Koontal Onion Fry",
                              "category": "Fish",
                              "description": "Crispy fried fish with caramelized onions.",
                              "price": 27000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.3",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70333000",
                              "name": "Ayakora Fry",
                              "category": "Fish",
                              "description": "Crispy and flavorful fry made with tender fish pieces, sure to tantalize your taste buds.",
                              "imageId": "qphxsahokpxlod4zicfg",
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "98 ratings",
                                  "ratingCountV2": "98"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70333001",
                              "name": "Ayila Fry",
                              "category": "Fish",
                              "description": "Crispy and flavorful fish fry that will tantalize your taste buds.",
                              "imageId": "fynwlfq02tw9svsstf56",
                              "price": 9500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "57 ratings",
                                  "ratingCountV2": "57"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Malabar Special Combo",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75607045",
                              "name": "5 Nice Pathri + Chicken Curry [2pcs]",
                              "category": "Malabar Special Combo",
                              "description": "An irresistible Malabar combo featuring aromatic chicken curry and 5 delightful pathris. Serves 1",
                              "imageId": "mixacx83sifdjtx9muve",
                              "inStock": 1,
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "135 ratings",
                                  "ratingCountV2": "135"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75607021",
                              "name": "3 Kerala Paratha + Chicken Curry [ 2pcs ]",
                              "category": "Malabar Special Combo",
                              "description": "Experience mouth-watering Kerala Parathas and Malabar Chicken Curry",
                              "inStock": 1,
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "75 ratings",
                                  "ratingCountV2": "75"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75607042",
                              "name": "3 Wheat Paratha + Chicken Curry [2 Pcs]",
                              "category": "Malabar Special Combo",
                              "inStock": 1,
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "23 ratings",
                                  "ratingCountV2": "23"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75819467",
                              "name": "3 Parotta with Butter Chicken [2 Pieces)",
                              "category": "Malabar Special Combo",
                              "description": "Serves 1 | Indulge in combo featuring 3 Parotta with Butter Chicken [2 Pieces)",
                              "imageId": "zinoan2ksioydoczdgkw",
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "198 ratings",
                                  "ratingCountV2": "198"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75607043",
                              "name": "3 Chapathi + Chicken Curry [ 2 Pcs]",
                              "category": "Malabar Special Combo",
                              "imageId": "p1qnllufnyzbttbge58w",
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "18 ratings",
                                  "ratingCountV2": "18"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75819521",
                              "name": "5 Nice Pathri + Butter Chicken",
                              "category": "Malabar Special Combo",
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "32 ratings",
                                  "ratingCountV2": "32"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75819518",
                              "name": "3 Wheat Parotta with Butter Chicken [2 Pieces]",
                              "category": "Malabar Special Combo",
                              "description": "Serves 1",
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "30 ratings",
                                  "ratingCountV2": "30"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75819466",
                              "name": "3 Chapathi  + Butter Chicken",
                              "category": "Malabar Special Combo",
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Beef",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332968",
                              "name": "Beef Nadan Fry",
                              "category": "Beef",
                              "description": "Serves 1 | (Serves 1)",
                              "imageId": "q4gninylw2t03f9xto06",
                              "inStock": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "148 ratings",
                                  "ratingCountV2": "148"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332972",
                              "name": "Beef Varattiyathu",
                              "category": "Beef",
                              "description": "Succulent beef in a flavourful, aromatic and tender preparation. Serves 1-76",
                              "imageId": "r5yfjco2bmfqa9usd9p7",
                              "price": 23000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "60 ratings",
                                  "ratingCountV2": "60"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332973",
                              "name": "Beef Kondattom",
                              "category": "Beef",
                              "description": "Melt-in-your-mouth beef cooked to perfection, bursting with flavors that will leave your taste buds craving for more.",
                              "imageId": "zjftefpf2214f2pdjugy",
                              "price": 24000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.8",
                                  "ratingCount": "16 ratings",
                                  "ratingCountV2": "16"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332978",
                              "name": "Chilly Beef (Gravy)",
                              "category": "Beef",
                              "description": "A tantalizing beef dish infused with rich, flavorful gravy that will leave your taste buds yearning for more.",
                              "imageId": "y8hucltwyrcvdmwlrc6h",
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "14 ratings",
                                  "ratingCountV2": "14"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332977",
                              "name": "Beef Masala",
                              "category": "Beef",
                              "description": "An irresistibly flavorful beef dish bursting with rich and savory masala flavors.",
                              "imageId": "gtk3mznjrdeicwndxs4a",
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "45 ratings",
                                  "ratingCountV2": "45"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332975",
                              "name": "Pepper Beef",
                              "category": "Beef",
                              "description": "Tender and savory, this flavorful beef dish will tantalize your taste buds with its unique blend of freshness and savoriness.",
                              "imageId": "mu9obyhn7nbqlm5hrayq",
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "44 ratings",
                                  "ratingCountV2": "44"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332970",
                              "name": "Beef Dry Fry",
                              "category": "Beef",
                              "description": "Tender and flavorful beef with a crispy outer layer, perfect for meat lovers. Serves 1-56",
                              "imageId": "lhtkitbsyn81ccikkzpr",
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "152 ratings",
                                  "ratingCountV2": "152"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332980",
                              "name": "Chilly Beef Dry (Semi)",
                              "category": "Beef",
                              "description": "Tender beef marinated in flavorful spices, cooked to perfection, and served dry for an irresistible burst of rich, savory goodness.",
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.2",
                                  "ratingCount": "18 ratings",
                                  "ratingCountV2": "18"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Snacks",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71127818",
                              "name": "Pazam Pori",
                              "category": "Snacks",
                              "description": "A mouthwatering veg snack that combines crispiness and softness in one delectable bite.",
                              "imageId": "linpcsuo1hlujjfpf50f",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "114 ratings",
                                  "ratingCountV2": "114"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71127717",
                              "name": "Poricha Pathri",
                              "category": "Snacks",
                              "description": "Crispy and flavorful, this veg snack is a delectable treat for your taste buds.",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "75 ratings",
                                  "ratingCountV2": "75"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332952",
                              "name": "Bonda",
                              "category": "Snacks",
                              "description": "A tempting and flavorful vegetarian snack that will surely tantalize your taste buds.",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "42 ratings",
                                  "ratingCountV2": "42"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "86662312",
                              "name": "Uzhunnu Vada",
                              "category": "Snacks",
                              "description": "A crispy and savory South Indian delight, perfect for savoring during tea time or as a tasty snack.",
                              "imageId": "1b1217bb17e9394c3a09d9946cd4936a",
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "44 ratings",
                                  "ratingCountV2": "44"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "140755307",
                              "name": "Kappa Biriyani ( Beef )",
                              "category": "Snacks",
                              "price": 7500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136421544",
                              "name": "Egg Puffs",
                              "category": "Snacks",
                              "price": 2000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "77163246",
                              "name": "Chicken Cutlet",
                              "category": "Snacks",
                              "description": "A crispy and flavorful snack featuring tender chicken, perfect for a satisfying bite anytime.",
                              "imageId": "cv7ji4fx3r9zzrcm50rr",
                              "price": 1800,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "31 ratings",
                                  "ratingCountV2": "31"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136675744",
                              "name": "Bread Pocket",
                              "category": "Snacks",
                              "price": 2200,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136493443",
                              "name": "Kadukka Nirachath",
                              "category": "Snacks",
                              "isVeg": 1,
                              "price": 2600,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "77163247",
                              "name": "Chatti Pathiri[Sweet)",
                              "category": "Snacks",
                              "description": "Serves 1 | A delectable sweet treat filled with layers of eggs, perfect for snacking on anytime during the day.",
                              "imageId": "lie2mhuo3g5rzl9dvop7",
                              "price": 2700,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "EGG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "48 ratings",
                                  "ratingCountV2": "48"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "139860920",
                              "name": "Chicken pan roll",
                              "category": "Snacks",
                              "price": 2400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136421713",
                              "name": "Unnakkaya",
                              "category": "Snacks",
                              "isVeg": 1,
                              "price": 1900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136493472",
                              "name": "Kilikkood",
                              "category": "Snacks",
                              "isVeg": 1,
                              "price": 2500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332965",
                              "name": "Ila Ada",
                              "category": "Snacks",
                              "isVeg": 1,
                              "price": 1900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136421353",
                              "name": "Samoosa-veg",
                              "category": "Snacks",
                              "isVeg": 1,
                              "price": 1200,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "139508620",
                              "name": "Paripp Vada",
                              "category": "Snacks",
                              "isVeg": 1,
                              "price": 1400,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Iftar Specials",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "130496669",
                              "name": "Aloo Baaji",
                              "category": "Iftar Specials",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 5000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "130496608",
                              "name": "Dragen Chicken",
                              "category": "Iftar Specials",
                              "description": "A succulent and flavorful chicken dish, perfect for breaking your fast during Iftar.",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "130496657",
                              "name": "Beef Coconut Fry",
                              "category": "Iftar Specials",
                              "price": 21000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.3",
                                  "ratingCount": "3 ratings",
                                  "ratingCountV2": "3"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "130496623",
                              "name": "Orange Juice",
                              "category": "Iftar Specials",
                              "description": "A refreshing and invigorating drink perfect for breaking the fast, offering a burst of fruity zest and natural sweetness.",
                              "isVeg": 1,
                              "price": 9000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "130496621",
                              "name": "Musumbi Juice",
                              "category": "Iftar Specials",
                              "description": "A refreshing and zesty juice bursting with the vibrant flavors of musumbi fruit, perfect for breaking your fast.",
                              "isVeg": 1,
                              "price": 9000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "130496624",
                              "name": "Fresh Lime juice",
                              "category": "Iftar Specials",
                              "isVeg": 1,
                              "price": 4000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "130496664",
                              "name": "Mugulai Chicken",
                              "category": "Iftar Specials",
                              "description": "Experience the rich and aromatic flavors of this delectable Iftar Special, a tantalizing dish that perfectly blends delicate spices and tender chicken for an irresistible feast.",
                              "price": 32000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Dosas",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "77427630",
                              "name": "Masala Dosa",
                              "category": "Dosas",
                              "description": "A flavorful and aromatic South Indian specialty that promises a delightful culinary experience.",
                              "imageId": "accdf8vzjk6raeh1w0mj",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 7500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "80169542",
                                  "groupName": "Snacks",
                                  "choices": [
                                    {
                                      "id": "64751043",
                                      "name": "Uzhunnu Vada",
                                      "price": 1400,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "64751042",
                                      "name": "Pazam Pori",
                                      "price": 1400,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": -1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "126 ratings",
                                  "ratingCountV2": "126"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "77427643",
                              "name": "Ghee Roast",
                              "category": "Dosas",
                              "description": "Serves 1 | A scrumptious and flavorful dosa that is sure to tantalize your taste buds with its rich and aromatic ghee-infused goodness.",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 6500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "80169539",
                                  "groupName": "Snacks",
                                  "choices": [
                                    {
                                      "id": "64751043",
                                      "name": "Uzhunnu Vada",
                                      "price": 1400,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "64751042",
                                      "name": "Pazam Pori",
                                      "price": 1400,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": -1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "67 ratings",
                                  "ratingCountV2": "67"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Veg",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332937",
                              "name": "Paneer Butter Masala",
                              "category": "Veg",
                              "description": "A creamy, rich and flavorful Indian delicacy made with succulent paneer in a luscious buttery gravy.",
                              "imageId": "j5vpp9cydwbjgbkpvnps",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "170 ratings",
                                  "ratingCountV2": "170"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332945",
                              "name": "Chilly Paneer",
                              "category": "Veg",
                              "description": "Savor a tantalizing blend of flavors in this delectable vegetarian dish, bringing a fusion of Indian spices together with succulent paneer cubes.",
                              "imageId": "17a12a23ef07986d8c2967e96958a580",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332984",
                              "name": "Mushroom Masala",
                              "category": "Veg",
                              "description": "A flavorful medley of mushrooms cooked in a rich and aromatic blend of spices, creating a delightful vegetarian dish that is sure to satisfy.",
                              "imageId": "7df8ddae9959be6ad129174d2309b8e6",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "18 ratings",
                                  "ratingCountV2": "18"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332959",
                              "name": "Kadai Paneer",
                              "category": "Veg",
                              "description": "A delectable combination of succulent paneer and aromatic spices cooked to perfection.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "21 ratings",
                                  "ratingCountV2": "21"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332956",
                              "name": "Pepper Paneer",
                              "category": "Veg",
                              "description": "A delectable and flavorful vegetarian dish that combines the rich and creamy texture of paneer with the tantalizing taste of pepper.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "18 ratings",
                                  "ratingCountV2": "18"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332947",
                              "name": "Paneer 65",
                              "category": "Veg",
                              "description": "Crispy and flavorful, Paneer 65 is a delightful vegetarian dish that will tantalize your taste buds.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.5",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332986",
                              "name": "Mushroom Butter Masala",
                              "category": "Veg",
                              "description": "A luscious blend of sauteed mushrooms in a rich and creamy butter sauce, creating a tantalizing vegetarian treat.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332969",
                              "name": "Chilly Gobi",
                              "category": "Veg",
                              "description": "A tantalizing and flavorsome Indian-inspired dish that showcases the perfect blend of crisp cauliflower florets coated in a mouthwatering sauce.",
                              "imageId": "qljdnhpedtufko2kbd70",
                              "isVeg": 1,
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "30 ratings",
                                  "ratingCountV2": "30"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332940",
                              "name": "Paneer Manchurian",
                              "category": "Veg",
                              "description": "A delectable and savory Indo-Chinese delight, Paneer Manchurian is a flavorful vegetarian dish perfect for any occasion.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "11 ratings",
                                  "ratingCountV2": "11"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332985",
                              "name": "Mushroom Varattiyathu",
                              "category": "Veg",
                              "description": "A delectable and flavorful vegetarian mushroom delight, bursting with unique spices and textures.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.9",
                                  "ratingCount": "11 ratings",
                                  "ratingCountV2": "11"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332951",
                              "name": "Paneer Manchurian Dry",
                              "category": "Veg",
                              "description": "A delectable and flavorful blend of seasoned paneer cubes that are crispy on the outside and tender on the inside, all brought together with a tantalizing fusion of Indian and Chinese flavors.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.6",
                                  "ratingCount": "3 ratings",
                                  "ratingCountV2": "3"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332987",
                              "name": "Mushroom Manchurian",
                              "category": "Veg",
                              "description": "A delectable veg delight with succulent mushrooms in a tantalizing sauce.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "3 ratings",
                                  "ratingCountV2": "3"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "131053344",
                              "name": "Kadai Mushroom",
                              "category": "Veg",
                              "description": "A flavorful and aromatic mushroom dish cooked in a unique blend of fragrant spices.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332964",
                              "name": "Gobi Manchurian",
                              "category": "Veg",
                              "description": "1 Portion",
                              "imageId": "opqnmzwvounexizbdrga",
                              "isVeg": 1,
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "99 ratings",
                                  "ratingCountV2": "99"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332971",
                              "name": "Chilly Gobi Dry",
                              "category": "Veg",
                              "description": "Cauliflower florets coated in a flavorful blend, delivering a delightful and irresistible crunch.",
                              "isVeg": 1,
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "12 ratings",
                                  "ratingCountV2": "12"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332974",
                              "name": "Gobi 65",
                              "category": "Veg",
                              "description": "A delectable vegetarian dish packed with flavors and a crispy texture.",
                              "isVeg": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "26 ratings",
                                  "ratingCountV2": "26"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332967",
                              "name": "Gobi Masala",
                              "category": "Veg",
                              "imageId": "keplchi07a53ciutvr1l",
                              "isVeg": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "51 ratings",
                                  "ratingCountV2": "51"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332988",
                              "name": "Chilly Mushroom",
                              "category": "Veg",
                              "description": "A delectable mushroom delicacy in a flavorful sauce.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332989",
                              "name": "Pepper Mushroom",
                              "category": "Veg",
                              "description": "A delightful and flavorful combination of mushrooms and peppers, bursting with taste and texture.",
                              "isVeg": 1,
                              "price": 22500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "14 ratings",
                                  "ratingCountV2": "14"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332981",
                              "name": "Kadai Veg",
                              "category": "Veg",
                              "description": "A flavorsome and aromatic vegetarian delight cooked in a traditional style.",
                              "imageId": "ba20f839cee85702098a1659700bbbb6",
                              "isVeg": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.1",
                                  "ratingCount": "20 ratings",
                                  "ratingCountV2": "20"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332982",
                              "name": "Veg Malabari",
                              "category": "Veg",
                              "description": "A savory and aromatic Indian delight that brings together a perfect blend of flavors from the Malabar region.",
                              "isVeg": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "131162720",
                              "name": "Dragon Cauliflower",
                              "category": "Veg",
                              "description": "A tantalizing fusion of flavors that will transport your taste buds to new heights.",
                              "isVeg": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332979",
                              "name": "Mix Veg Kuruma",
                              "category": "Veg",
                              "description": "A delectable medley of vegetables cooked to perfection in a flavorful gravy.",
                              "isVeg": 1,
                              "price": 13000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "128 ratings",
                                  "ratingCountV2": "128"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332983",
                              "name": "Veg Jaipuri",
                              "category": "Veg",
                              "description": "A flavorful and aromatic dish that brings the vibrant essence of Jaipur to your plate.",
                              "isVeg": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332976",
                              "name": "Mix Veg Masala",
                              "category": "Veg",
                              "description": "A flavorful and aromatic medley of garden-fresh vegetables, expertly blended with a tantalizing array of Indian spices.",
                              "isVeg": 1,
                              "price": 13000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "14 ratings",
                                  "ratingCountV2": "14"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332990",
                              "name": "Tomato Fry",
                              "category": "Veg",
                              "description": "A savory and flavorsome vegetarian delight bursting with the delectable essence of tomatoes.",
                              "isVeg": 1,
                              "price": 8500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "46 ratings",
                                  "ratingCountV2": "46"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332932",
                              "name": "Green Peas Curry",
                              "category": "Veg",
                              "description": "A delectable, flavorful and vibrant curry that highlights the natural sweetness of green peas.",
                              "isVeg": 1,
                              "price": 5000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "66 ratings",
                                  "ratingCountV2": "66"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Beverages",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797031",
                              "name": "Falooda",
                              "category": "Beverages",
                              "description": "A tempting and refreshing dessert beverage that melds the flavors of sweet and creamy textures with a burst of fruity goodness.",
                              "isVeg": 1,
                              "price": 14000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.6",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797046",
                              "name": "Mango Juice",
                              "category": "Beverages",
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797040",
                              "name": "Watermelon Juice",
                              "category": "Beverages",
                              "description": "Refreshing and hydrating juice, perfect for quenching your thirst on a hot day.",
                              "isVeg": 1,
                              "price": 9000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797039",
                              "name": "Apple Juice",
                              "category": "Beverages",
                              "description": "Refreshing and naturally sweet, this vibrant drink captures the essence of ripe apples, making each sip a burst of pure fruity delight.",
                              "isVeg": 1,
                              "price": 12000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797045",
                              "name": "Pineapple Juice",
                              "category": "Beverages",
                              "description": "A refreshing tropical beverage bursting with the sweet and tangy flavors of fresh pineapple.",
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797036",
                              "name": "Sharjah Shake",
                              "category": "Beverages",
                              "description": "Indulge in a refreshing and luscious blend of ingredients masterfully crafted into a delightful veg shake.",
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797038",
                              "name": "Anar (pomegranate) Juice",
                              "category": "Beverages",
                              "description": "A refreshing and fruity beverage that captures the tangy and sweet essence of pomegranate, perfect for a refreshing drink.",
                              "isVeg": 1,
                              "price": 12000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "139637590",
                              "name": "Avacado shake",
                              "category": "Beverages",
                              "isVeg": 1,
                              "price": 12000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797044",
                              "name": "Grape Juice",
                              "category": "Beverages",
                              "description": "A delightfully refreshing beverage bursting with the sweet essence of succulent grapes.",
                              "isVeg": 1,
                              "price": 10000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "135676161",
                              "name": "Mango Shake ",
                              "category": "Beverages",
                              "description": "A refreshing tropical delight bursting with the sweet and luscious flavor of ripe mango.",
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797037",
                              "name": "Chikku Shake",
                              "category": "Beverages",
                              "description": "Indulge in a delightful and refreshing blend of flavors, perfect for those seeking a delectable veggie beverage.",
                              "isVeg": 1,
                              "price": 10900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "135676446",
                              "name": "Mango Shake",
                              "category": "Beverages",
                              "description": "A refreshing and luscious tropical delight that will transport you to paradise with every sip.",
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797033",
                              "name": "Pineapple Lime",
                              "category": "Beverages",
                              "description": "A refreshing tropical blend of pineapple and lime, bursting with natural flavors.",
                              "isVeg": 1,
                              "price": 4900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "15 ratings",
                                  "ratingCountV2": "15"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797034",
                              "name": "Mint Lime",
                              "category": "Beverages",
                              "description": "A refreshing blend of zesty lime and invigorating mint, this beverage is the perfect thirst-quencher for all your summer cravings.",
                              "isVeg": 1,
                              "price": 4500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "20 ratings",
                                  "ratingCountV2": "20"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "119797035",
                              "name": "Pappaya Shake",
                              "category": "Beverages",
                              "isVeg": 1,
                              "price": 12000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Soup",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332926",
                              "name": "Chicken Noodle Soup",
                              "category": "Soup",
                              "description": "A comforting Classic Chicken Noodle Soup, warm and flavorful, perfect for those craving a hearty and nourishing meal.",
                              "imageId": "33e45a810aefa52261f42790282127a6",
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332913",
                              "name": "Chicken Manchow Soup",
                              "category": "Soup",
                              "description": "Serves 1 | A flavorful and savory soup made with tender chicken and a medley of aromatic spices.",
                              "imageId": "0e737746319b5497e6f88b108dd8d43a",
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "9 ratings",
                                  "ratingCountV2": "9"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332920",
                              "name": "Hot & Sour Chicken Soup (400 Ml)",
                              "category": "Soup",
                              "description": "A tantalizing fusion of bold flavors in a delightful chicken soup.",
                              "imageId": "11fbb52d72e954d008230da8082accfb",
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "25 ratings",
                                  "ratingCountV2": "25"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332918",
                              "name": "Cream Of Chicken Soup",
                              "category": "Soup",
                              "description": "Silky and comforting, this cream of chicken soup is a bowlful of pure indulgence.",
                              "imageId": "40001bb5d6d7164ebcb6b848965d236d",
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.2",
                                  "ratingCount": "16 ratings",
                                  "ratingCountV2": "16"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332923",
                              "name": "Sweet Corn Chicken Soup (400 Ml)",
                              "category": "Soup",
                              "description": "A delightful and satisfying non-veg soup with a perfect blend of sweet corn and tender chicken.",
                              "imageId": "d196c7700a5d52aacd351de23c657162",
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "22 ratings",
                                  "ratingCountV2": "22"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332915",
                              "name": "Chicken Clear Soup",
                              "category": "Soup",
                              "description": "A comforting bowl of flavorful chicken clear soup, perfect for warming the soul and soothing the senses.",
                              "imageId": "e013d55dfc6544590cca1697541eafca",
                              "price": 13000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332928",
                              "name": "Sweet Corn Veg Soup",
                              "category": "Soup",
                              "description": "A delightful and comforting soup made with the freshest vegetables and sweet corn.",
                              "imageId": "0d67a6e134740db4d1c738b2d10c507c",
                              "isVeg": 1,
                              "price": 13000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.1",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332931",
                              "name": "Hot & Sour Veg Soup",
                              "category": "Soup",
                              "description": "An enticing blend of flavors and textures, this satisfying soup delivers a delectable balance of heat and tanginess.",
                              "imageId": "fcb8fcc4aa9cfe35d26df71f8118f8ee",
                              "isVeg": 1,
                              "price": 13000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332936",
                              "name": "Cream Of Mushroom Soup",
                              "category": "Soup",
                              "description": "A rich and velvety delight, this creamy soup is a comforting harmony of earthy flavors.",
                              "imageId": "b524d152f54acf731cd99774062a028e",
                              "isVeg": 1,
                              "price": 13000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "1.6",
                                  "ratingCount": "11 ratings",
                                  "ratingCountV2": "11"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332939",
                              "name": "Cream Of Tomato Soup",
                              "category": "Soup",
                              "description": "A luscious and velvety blend of ripe tomatoes, elevated to a creamy perfection, this soup is a comforting delight.",
                              "imageId": "2c073a160b07354361c9064c1991f523",
                              "isVeg": 1,
                              "price": 13000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.5",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "70332934",
                              "name": "Veg Clear Soup",
                              "category": "Soup",
                              "description": "A comforting and nourishing bowl of flavorful vegetable goodness.",
                              "imageId": "ae4e5ce942c905c83169073731258fac",
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Mutton",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82095497",
                              "name": "Mutton Kadai",
                              "category": "Mutton",
                              "description": "4 peace",
                              "price": 35000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82095500",
                              "name": "Mutton Rogan Josh",
                              "category": "Mutton",
                              "description": "4 peace -indian (gravy type )",
                              "price": 35000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "15 ratings",
                                  "ratingCountV2": "15"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82095495",
                              "name": "Mutton Pepper Fry [4 Pieces]",
                              "category": "Mutton",
                              "description": "Serves 1 | A flavorful delight of tender mutton pieces seared to perfection.",
                              "price": 35000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82095491",
                              "name": "Mutton Masala [4 Pieces)",
                              "category": "Mutton",
                              "description": "Serves 1 | A mouthwatering and succulent mutton dish bursting with aromatic flavors.",
                              "price": 35000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82095498",
                              "name": "Mutton Pepper Fry",
                              "category": "Mutton",
                              "description": "4 peace -semi gravy",
                              "price": 35000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.6",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Special Offer Combo",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82162769",
                              "name": "Ghee Rice with Chicken Curry [2 Pieces)",
                              "category": "Special Offer Combo",
                              "description": "Serves 1",
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "28 ratings",
                                  "ratingCountV2": "28"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82162770",
                              "name": "Ghee Rice + Butter Chicken",
                              "category": "Special Offer Combo",
                              "description": "2 pieces",
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "33 ratings",
                                  "ratingCountV2": "33"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75823856",
                              "name": "Putt ( 3pcs ) + Kada Dry Fry",
                              "category": "Special Offer Combo",
                              "description": "Grevy + salad",
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.2",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75823855",
                              "name": "Putt  (3pcs)  + Chicken Dry Fry ( C D F)",
                              "category": "Special Offer Combo",
                              "description": "Grevy + onion salad",
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "17 ratings",
                                  "ratingCountV2": "17"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "75823857",
                              "name": "3 Putt ( 3 Pcs ) + Beef Dry Fry ( B D F )",
                              "category": "Special Offer Combo",
                              "description": "Grevy + salad",
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.5",
                                  "ratingCount": "13 ratings",
                                  "ratingCountV2": "13"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Mandhi",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71934214",
                              "name": "Mandhi Rice",
                              "category": "Mandhi",
                              "description": "A flavor-packed Arabian specialty known for its aromatic rice and tender, succulent meat.",
                              "price": 15000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "10613974",
                                    "name": "Mandhi Rice",
                                    "variations": [
                                      {
                                        "name": "Quarter",
                                        "id": "34963386",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Half",
                                        "price": 11000,
                                        "id": "34963387",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 30000,
                                        "default": 1,
                                        "id": "34963388",
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "14 ratings",
                                  "ratingCountV2": "14"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "132220516",
                              "name": "Kuzhi Mandhi",
                              "category": "Mandhi",
                              "price": 24000,
                              "variants": {
                                "variantGroups": [
                                  {
                                    "groupId": "36633299",
                                    "name": "Quantity",
                                    "variations": [
                                      {
                                        "name": "Quarter",
                                        "default": 1,
                                        "id": "114055457",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Half",
                                        "price": 46000,
                                        "id": "114055458",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "name": "Full",
                                        "price": 79000,
                                        "id": "114055459",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Meals",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71934159",
                              "name": "Fish Curry Meals (ordinary)",
                              "category": "Meals",
                              "description": "Fish coconet gravi and veg curry sett",
                              "imageId": "u48e1wu5zlbkgvnaoi8l",
                              "price": 10000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "296 ratings",
                                  "ratingCountV2": "296"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "71938426",
                              "name": "Veg Meals (ordinary)",
                              "category": "Meals",
                              "description": "Serves 1 | Raice with veg curry sett",
                              "imageId": "8a994a3001c6b264fc02a53a927b47c8",
                              "isVeg": 1,
                              "price": 9500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG",
                                "portionSize": "Serves 1"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "104 ratings",
                                  "ratingCountV2": "104"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Broasted",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "132347501",
                              "name": "Charcoal chicken Shawarma Roll",
                              "category": "Broasted",
                              "description": "In Charcoal",
                              "price": 16900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      "type": "FSSAI",
                      "imageId": "fssai_final_edss9i",
                      "text": [
                        "License No. 11315011000487"
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      "name": "New Malabar Family Restaurant",
                      "area": "Bilathikkulam",
                      "completeAddress": "2/264-ABC, KARAPARAMBA P O,KOZHIKODE NORTH CIRCLE,KOZHIKODE-673010"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "isQCLink": false
  },
  "tid": "002f8ddb-c14c-402b-971f-212d4365e5f5",
  "sid": "e4yfc282-0c11-43da-aad5-3a5021c25c53",
  "deviceId": "d04114f8-d995-2ca0-e9b4-2a7dc0b43f1c",
  "csrfToken": "Er5r8Q2xbwwP-kYxylZ4NK9bYmp6bqJY2Ag3VxTw"
}
]