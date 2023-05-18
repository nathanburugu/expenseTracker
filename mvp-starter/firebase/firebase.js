/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfscbYhA63jVyNaLJF2dxLBrtpuZy2RuM",
  authDomain: "expensetracker-b5036.firebaseapp.com",
  projectId: "expensetracker-b5036",
  storageBucket: "expensetracker-b5036.appspot.com",
  messagingSenderId: "893743559382",
  appId: "1:893743559382:web:9d8220e469a043d7ad0f77",
  measurementId: "G-3S6640YV2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
