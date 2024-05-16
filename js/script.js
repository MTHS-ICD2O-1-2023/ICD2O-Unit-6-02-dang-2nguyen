// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function updateCookieCount() {
  if (localStorage.hits) {
  localStorage.hits = Number(localStorage.hits) + 1;
  }
  else {
    localStorage.hits = 0
  }
  document.getElementById("times").innerHTML = "Total click is:" + localStorage.hits
}