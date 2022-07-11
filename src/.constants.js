module.exports = Object.freeze({
    TOKEN: '850652041:AAGQaSvbmswdBuy-QHjYbHWz4Ucu7mLUbwk',
    ARIA_SECRET: '1',
    ARIA_PORT: 8210,
    ARIA_DOWNLOAD_LOCATION: '/app/down',
    ARIA_DOWNLOAD_LOCATION_ROOT: '/app', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
    ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
    ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
    GDRIVE_PARENT_DIR_ID: 'root',
    SUDO_USERS: [374920359,602293934],	// Telegram user IDs. These users can use the bot in any chat.
    AUTHORIZED_CHATS: [],	// Telegram chat IDs. Anyone in these chats can use the bot.
    STATUS_UPDATE_INTERVAL_MS: 10000, 
    IS_TEAM_DRIVE: false,// A smaller number will update faster, but might cause rate limiting
    DRIVE_FILE_PRIVATE: {
        ENABLED: false,
        EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
      },
      DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
        enabled: false,   // Set this to true to use the notify functionality
        host: 'hostname.domain',
        port: 80,
        path: '/botNotify'
      },
      COMMANDS_USE_BOT_NAME: {
        ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
        NAME: "@nameOf_bot"
      },
  });
