import { defineStore } from "pinia";

export const useWindowsStore = defineStore("windows", {
  state: () => ({
    // Height of Fullscreen Window
    // fullscreenWindowHeight: window.innerHeight + "px",

    activeWindow: "",

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2,

    windows: [
      {
        windowId: "BiographyWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Biography", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "bio", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "bio.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        ShowInGodotGrid : false,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },
      {
        windowId: "GodotContainer", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Godot Projects", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "GodotContainer", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "GodotLogo.png", // Window Icon Image
        altText: "Godot", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        ShowInGodotGrid : false,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },
      {
        windowId: "UnityContainer", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Unity Projects", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "UnityContainer", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "UnityLogo.png", // Window Icon Image
        altText: "Unity", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        ShowInGodotGrid : false,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },
      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Résumé", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "resume", // Window Content (used under slots)
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Résumé", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        ShowInGodotGrid : false,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },
      {
        windowId: "MailWindow",
        windowState: "close",
        displayName: "Mail",
        windowComponent: "mail",
        windowContent: "",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "mail.png",
        altText: "Mail",
        fullscreen: false,
        showInAppGrid: true,
        ShowInGodotGrid : false,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },
      {
        windowId: "StrayWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Stray's Night", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "StrayNight", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "folder.png", // Window Icon Image
        altText: "Stray's Night", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: false,
        ShowInGodotGrid : true,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },
      {
        windowId: "SkyhawkSquadron", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Skyhawk Squadron", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "SkyhawkSquadron", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "folder.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: false,
        ShowInGodotGrid : true,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },
      {
        windowId: "dual", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Dual Dye Dash", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "Dual", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "folder.png", // Window Icon Image
        altText: "Dual", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: false,
        ShowInGodotGrid : true,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },
      {
        windowId: "Rewind", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Rewind Robot", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "Rewind", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "folder.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: false,
        ShowInGodotGrid : true,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },

      {
        windowId: "Eye", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "An Eye For An Eye", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "Eye", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "folder.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: false,
        ShowInGodotGrid : true,
        ShowInUnityGrid : false,
        showInNavbar: true,
      },

      {
        windowId: "Rush", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Pack & Rush", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "Rush", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "folder.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: false,
        ShowInGodotGrid : false,
        ShowInUnityGrid : true,
        showInNavbar: true,
      },
      {
        windowId: "Vampy", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Vampy Valentine", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "Vampy", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "folder.png", // Window Icon Image
        altText: "Vampy", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: false,
        ShowInGodotGrid : false,
        ShowInUnityGrid : true,
        showInNavbar: true,
      },
      {
        windowId: "Paper", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Paper Man", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "Paper", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "45vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "folder.png", // Window Icon Image
        altText: "Paper", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: false,
        ShowInGodotGrid : false,
        ShowInUnityGrid : true,
        showInNavbar: true,
      },


    ],
  }),

  getters: {
    getFullscreenWindowHeight() {
      let height = "0px";
      if (typeof window !== "undefined") {
        height = window.innerHeight + "px";
      }
      return height;
    },
  },

  actions: {
        getWindowById(windowId) {
            return this.windows.find((window) => window.windowId === windowId)
        },

        getWindowFullscreen(windowId) {
            return this.windows.find((window) => window.windowId === windowId).fullscreen
        },

        getActiveWindow() {
            return this.activeWindow
        },

        setActiveWindow(windowId) {
            this.activeWindow = windowId
        },

        setFullscreen(payload) {
            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }
            const window = getArrItem();
            window.fullscreen = payload.fullscreen;
        },

        zIndexIncrement(windowId) {
            this.zIndex++
            if (document.getElementById(windowId)) {
                document.getElementById(windowId).style.zIndex = this.zIndex
            }
        },

        // Push Active Window
        pushActiveWindow(window) {
            this.activeWindows.push(window)
        },

        // Pop Active Window
        popActiveWindow(window) {
            const windowIndex = this.activeWindows.indexOf(window)
            if (windowIndex !== -1) {
                this.activeWindows.splice(windowIndex, 1)
            }
        },

        pushNewWindow(window) {
            this.windows.push(window)
        },

        setPhotoFolderContent(payload) {
            this.photoFolderContent = payload
        },

        setWindowState(payload) {
            // payload = {'windowState': 'open', 'windowId': 'WindowOne'}

            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }

            const window = getArrItem();

            let preventAppendingOpenWindow = false;
            if (window.windowState == "open" || window.windowState == "minimize") {
                preventAppendingOpenWindow = true;
            }

            if (payload.windowState == "open") {
                window.windowState = payload.windowState;
                setTimeout(() => {
                    this.zIndexIncrement(payload.windowId);
                }, 0);
                setTimeout(() => {
                    this.setActiveWindow(payload.windowId);
                }, 0);
                if (preventAppendingOpenWindow == false) {
                    this.pushActiveWindow(window);
                }
            } else if (payload.windowState == "close") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0);
                setTimeout(() => {
                    this.popActiveWindow(window);
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
            } else if (payload.windowState == "minimize") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
                
            } else {
                console.log("Error: windowState not found or invalid");
            }
        },
    }
});
