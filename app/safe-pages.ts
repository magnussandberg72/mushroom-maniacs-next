// app/safe-pages.ts
import { infoRoutes } from "./config/infoStructure"

// Bas-säkra rutter (lägg dina övriga här)
const baseSafePages = [
  "/",
    "/donate",
      "/faith",
        "/projects",
        ];

        // Exportera en sammanslagen lista som faktiskt används
        export const safePages: readonly string[] = [
          ...baseSafePages,
            ...infoRoutes,
            ];

            // “Touch” så ingen aggressiv rensning av “oanvänt”
            void safePages.length;
//
// Path: app/safe-pages.ts
// Global components – skyddar globala komponenter från radering i V0
import SiteHeader from "@/components/SiteHeader"
import Footer from "@/components/Footer"
import BackButton from "@/components/BackButton"
//
void SiteHeader
void Footer
void BackButton
//
// =======================
// Hem & Test
// =======================

import "./page" // app/page.tsx (hem)
import "./testsida/page" // för testvisning

// =======================
// Kärnsidor
// =======================

import "./ai-room/page"
import "./resources/page"
import "./app-room/page"
import "./donate/page"
import "./church/page"
import "./events/page"
import "./help/page"
import "./testimonies/page"

// =======================
// Chatrum (alla aktiva)
// =======================

import "./chat/page"
import "./chat/admin/page"
import "./chat/ai-prat/page"
import "./chat/angest/page"
import "./chat/singel/page"
import "./chat/suggest/page"

// =======================
// AI-Rum Support
// =======================

import "./ai-room/support/page"

// =======================
// Extra sidor
// =======================

import "./privacy/page"
import "./license/page"
import "./diary/page"
import "./diary/loading"
import "./profile/page"
import "./westernwall/page"

// =======================
// DATA – så V0 ej tappar kopplingar
// =======================

import "../data/support"
import "../data/charity"

// =======================
// DONATE / CHARITY
// =======================

import "./donate/charity/page"
import "./donate/charity/[id]/page"

// =======================
// BAUTA – projektträd
// =======================

import "./bauta/page"
import "./bauta/[id]/page"

import "../data/bauta/index"
import "../data/bauta/bauta_1"
import "../data/bauta/bauta_2"
import "../data/bauta/bauta_3"
//
//
//
//
// info struktukturen
import "./admin/info/privacy/page"
import "./admin/info/license/page"
import "./admin/info/policy/page"
import "./admin/info/page"
import "./admin/page"
