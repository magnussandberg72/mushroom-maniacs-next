// app/config/infoStructure.ts

// Rutter som ska skyddas (lägg till fler vid behov)
export const infoRoutes = [
  "/admin/info",
    "/admin/info/privacy",
      "/admin/info/license",
        "/admin/info/policy",
        ] as const;

        // (valfritt) Mappningar till filvägar – praktiskt för dokumentation/validering
        export const infoPageFiles = [
          "./admin/info/page",
            "./admin/info/privacy/page",
              "./admin/info/license/page",
                "./admin/info/policy/page",
                ] as const;

                // Liten no-op för att markera filen som “använd” i bundlers/lint
                export const __INFO_TOUCH__ = infoRoutes.length + infoPageFiles.length;
                void __INFO_TOUCH__;
