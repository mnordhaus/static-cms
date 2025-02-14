import type { LocalePhrasesRoot } from '../types';

const th: LocalePhrasesRoot = {
  auth: {
    login: 'เข้าสู่ระบบ',
    loggingIn: 'กำลังเข้าสู่ระบบ...',
    loginWithNetlifyIdentity: 'เข้าสู่ระบบด้วย Netlify Identity',
    loginWithBitbucket: 'เข้าสู่ระบบด้วย Bitbucket',
    loginWithGitHub: 'เข้าสู่ระบบด้วย GitHub',
    loginWithGitLab: 'เข้าสู่ระบบด้วย GitLab',
    loginWithGitea: 'เข้าสู่ระบบด้วย Gitea',
    errors: {
      email: 'ตรวจสอบให้แน่ใจว่าได้ใส่อีเมลล์แล้ว',
      password: 'โปรดใส่รหัสผ่านของคุณ',
      authTitle: undefined, // English translation: 'Error logging in'
      authBody: '%{details}',
      netlifyIdentityNotFound: undefined, // English translation: 'Netlify Identity plugin not found'
      identitySettings:
        'ไม่สามารถเข้าถึงการตั้งค่าส่วนตัว เมื่อใช้ git-gateway backend ตรวจสอบให้แน่ใจว่าได้เปิดใช้งานระบบยืนยันตัวตนและ Git Gateway.',
    },
  },
  app: {
    header: {
      content: 'เนื้อหา',
      media: 'มีเดีย',
      quickAdd: 'เพิ่มเนื้อหา อย่างเร็ว',
    },
    app: {
      errorHeader: 'เกิดข้อผิดพลาดในการโหลดการตั้งค่า CMS',
      configErrors: 'คอนฟิกมีข้อผิดพลาด',
      configNotFound: undefined, // English translation: 'Config not found'
      checkConfigYml: 'กรุณาตรวจสอบไฟล์ config.yml ของคุณ',
      loadingConfig: 'กำลังโหลดการตั้งค่า...',
      waitingBackend: 'กำลังรอการตอบกลับจาก backend...',
    },
    notFoundPage: {
      header: 'ไม่พบหน้านี้',
    },
  },
  collection: {
    sidebar: {
      collections: 'กลุ่ม',
      allCollections: 'ทุกกลุ่ม',
      searchAll: 'ค้นหาทั้งหมด',
      searchIn: 'ค้าหาใน',
    },
    collectionTop: {
      sortBy: 'จัดเรียงตาม',
      viewAs: 'ดูในฐานะ',
      newButton: 'สร้าง %{collectionLabel}',
      ascending: 'น้อยไปมาก',
      descending: 'มากไปน้อย',
      searchResults: 'ค้นหาผลลัพธ์สำหรับ "%{searchTerm}"',
      searchResultsInCollection: 'ค้นหาผลลัพธ์สำหรับ "%{searchTerm}" ใน %{collection}',
      filterBy: 'กรองตาม',
      groupBy: undefined, // English translation: 'Group by'
    },
    entries: {
      loadingEntries: 'กำลังโหลดเนิ้อหา...',
      cachingEntries: 'กำลังแคชข้อมูลเนื้อหา...',
      longerLoading: 'อาจจะโหลดนานหลายนาที',
      noEntries: 'ไม่มีเนื้อหา',
    },
    groups: {
      other: undefined, // English translation: 'Other'
      negateLabel: undefined, // English translation: 'Not %{label}'
    },
    table: {
      summary: undefined, // English translation: 'Summary'
      collection: undefined, // English translation: 'Collection'
    },
    defaultFields: {
      author: {
        label: 'ผู้เขียน',
      },
      updatedOn: {
        label: 'อัพเดตเมื่อ',
      },
    },
    notFound: undefined, // English translation: 'Collection not found'
  },
  editor: {
    editorControl: {
      field: {
        optional: 'ทางเลือก',
      },
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} ต้องระบุ',
        regexPattern: '%{fieldLabel} ไม่ตรงกับรูปแบบ: %{pattern}',
        processing: '%{fieldLabel} กำลังประมวลผล',
        range: '%{fieldLabel} ต้องอยู่ระหว่าง %{minValue} และ %{maxValue}',
        min: '%{fieldLabel} จะต้องมีค่าไม่ต่ำกว่า %{minValue}',
        max: '%{fieldLabel} จะต้องมีค่าไม่มากกว่า %{maxValue}',
        rangeCount: '%{fieldLabel} จะต้องอยู่ระหว่าง %{minCount} และ %{maxCount} รายการ',
        rangeCountExact: '%{fieldLabel} จะต้องมี %{count} รายการ',
        rangeMin: '%{fieldLabel} จะต้องมีไม่ต่ำกว่า %{minCount} รายการ',
        rangeMax: '%{fieldLabel} จะต้องมีไม่มากกว่า %{maxCount} รายการ',
        invalidPath: "'%{path}' พาทไม่ถูกต้อง",
        pathExists: "พาท '%{path}' มีอยู่แล้ว",
        invalidColor: undefined, // English translation: 'Color '%{color}' is invalid.'
        invalidHexCode: undefined, // English translation: 'Hex codes must start with a # sign.'
      },
      i18n: {
        writingInLocale: 'เขียนด้วยภาษา %{locale}',
      },
    },
    editor: {
      onLeavePage: 'คุณแน่ใจหรือว่าจะออกจากหน้านี้?',
      onDeleteWithUnsavedChangesTitle: undefined, // English translation: 'Delete this published entry?'
      onDeleteWithUnsavedChangesBody:
        'คุณแน่ใจหรือว่าจะต้องการลบการเผยแพร่เนื้อหานี้ รวมถึงการเปลี่ยนแปลงที่ยังไม่ได้บันทึก?',
      onDeletePublishedEntryTitle: undefined, // English translation: 'Delete this published entry?'
      onDeletePublishedEntryBody: 'คุณแน่ใจหรือว่าจะต้องการลบการเผยแพร่เนื้อหานี้?',
      loadingEntry: 'กำลังโหลดเนื้อหา...',
    },
    editorInterface: {
      sideBySideI18n: undefined, // English translation: 'I18n Side by Side'
      preview: undefined, // English translation: 'Preview'
      toggleI18n: undefined, // English translation: 'Toggle i18n'
      togglePreview: undefined, // English translation: 'Toggle preview'
      toggleScrollSync: undefined, // English translation: 'Sync scrolling'
    },
    editorToolbar: {
      publish: 'เผยแพร่',
      published: 'เผยแพร่แล้ว',
      duplicate: 'ทำซ้ำ',
      publishAndCreateNew: 'เผยแพร่ และ สร้างใหม่',
      publishAndDuplicate: 'เผยแพร่ และ ทำซ้ำ',
      deleteEntry: 'ลบเนื้อหา',
      publishNow: 'เผยแพร่ตอนนี้',
      discardChanges: undefined, // English translation: 'Discard changes'
      discardChangesTitle: undefined, // English translation: 'Discard changes'
      discardChangesBody: undefined, // English translation: 'Are you sure you want to discard the unsaved changed?'
    },
    editorWidgets: {
      markdown: {
        bold: undefined, // English translation: 'Bold'
        italic: undefined, // English translation: 'Italic'
        code: undefined, // English translation: 'Code'
        link: undefined, // English translation: 'Link'
        linkPrompt: undefined, // English translation: 'Enter the URL of the link'
        headings: undefined, // English translation: 'Headings'
        quote: undefined, // English translation: 'Quote'
        bulletedList: undefined, // English translation: 'Bulleted List'
        numberedList: undefined, // English translation: 'Numbered List'
        addComponent: undefined, // English translation: 'Add Component'
        richText: 'Rich Text',
        markdown: 'Markdown',
        type: undefined, // English translation: 'Type...'
      },
      image: {
        choose: 'เลือกรูปภาพ',
        chooseMultiple: undefined, // English translation: 'Choose images'
        chooseUrl: undefined, // English translation: 'Insert from URL'
        replaceUrl: undefined, // English translation: 'Replace with URL'
        promptUrl: undefined, // English translation: 'Enter the URL of the image'
        chooseDifferent: 'เลือกรูปภาพอื่น',
        addMore: undefined, // English translation: 'Add more images'
        remove: 'เอารูปภาพออก',
        removeAll: undefined, // English translation: 'Remove all images'
      },
      file: {
        choose: 'เลือกไฟล์',
        chooseUrl: undefined, // English translation: 'Insert from URL'
        chooseMultiple: undefined, // English translation: 'Choose files'
        replaceUrl: undefined, // English translation: 'Replace with URL'
        promptUrl: undefined, // English translation: 'Enter the URL of the file'
        chooseDifferent: 'เลือกไฟล์อื่น',
        addMore: undefined, // English translation: 'Add more files'
        remove: 'เอาไฟล์ออก',
        removeAll: undefined, // English translation: 'Remove all files'
      },
      folder: {
        choose: undefined, // English translation: 'Choose a folder'
        chooseUrl: undefined, // English translation: 'Insert folder path'
        chooseMultiple: undefined, // English translation: 'Choose folders'
        replaceUrl: undefined, // English translation: 'Replace with path'
        promptUrl: undefined, // English translation: 'Enter path of the folder'
        chooseDifferent: undefined, // English translation: 'Choose different folder'
        addMore: undefined, // English translation: 'Add more folders'
        remove: undefined, // English translation: 'Remove folder'
        removeAll: undefined, // English translation: 'Remove all folders'
      },
      unknownControl: {
        noControl: "ไม่มีการควบคุม widget '%{widget}'.",
      },
      unknownPreview: {
        noPreview: "ไม่มีตัวอย่างสำหรับ widget '%{widget}'.",
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6',
      },
      datetime: {
        now: 'เวลาตอนนี้',
        invalidDateTitle: undefined, // English translation: 'Invalid date'
        invalidDateBody: undefined, // English translation: 'The date you entered is invalid.'
      },
      list: {
        add: undefined, // English translation: 'Add %{item}'
        addType: undefined, // English translation: 'Add %{item}'
        noValue: undefined, // English translation: 'No value'
      },
      keyvalue: {
        key: undefined, // English translation: 'Key'
        value: undefined, // English translation: 'Value'
        uniqueKeys: undefined, // English translation: '%{keyLabel} must be unique'
      },
    },
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'ร่าง',
      copy: undefined, // English translation: 'Copy'
      copyUrl: undefined, // English translation: 'Copy URL'
      copyPath: undefined, // English translation: 'Copy Path'
      copyName: undefined, // English translation: 'Copy Name'
      copied: undefined, // English translation: 'Copied'
    },
    mediaLibrary: {
      onDeleteTitle: undefined, // English translation: 'Delete selected media?'
      onDeleteBody: 'คุณแน่ใจหรือว่าจะลบมีเดียที่ถูกเลือก?',
      fileTooLargeTitle: undefined, // English translation: 'File too large'
      fileTooLargeBody: 'ไฟล์ใหญ่เกินไป\n ค่าที่ตั้งไว้ไม่ยอมรับไฟล์ที่ใหญ่กว่า %{size} kB.',
      alreadyExistsTitle: undefined, // English translation: 'File already exists'
      alreadyExistsBody: undefined, // English translation: '%{filename} already exists. Do you want to replace it?'
    },
    mediaLibraryModal: {
      loading: 'กำลังโหลด...',
      noResults: 'ไม่มีผลลัพธ์',
      noAssetsFound: 'ไม่พบข้อมูล',
      noImagesFound: 'ไม่พบรูปภาพ',
      images: 'รูปภาพ',
      mediaAssets: 'ข้อมูลมีเดีย',
      search: 'ค้นหา...',
      uploading: 'กำลังอัปโหลด...',
      upload: 'อัปโหลด',
      download: 'ดาวน์โหลด',
      deleting: 'กำลังลบ...',
      deleteSelected: 'ลบข้อมูลที่เลือก',
      chooseSelected: 'เลือกข้อมูลที่ถูกเลือก',
      dropImages: undefined, // English translation: 'Drop images to upload'
      dropFiles: undefined, // English translation: 'Drop files to upload'
    },
    folderSupport: {
      newFolder: undefined, // English translation: 'New folder'
      createNewFolder: undefined, // English translation: 'Create new folder'
      enterFolderName: undefined, // English translation: 'Enter folder name...'
      home: undefined, // English translation: 'Home'
      up: undefined, // English translation: 'Up'
      upToFolder: undefined, // English translation: 'Up to %{folder}'
    },
  },
  ui: {
    common: {
      yes: undefined, // English translation: 'Yes'
      no: undefined, // English translation: 'No'
      okay: undefined, // English translation: 'OK'
    },
    default: {
      goBackToSite: 'กลับไปยังเว็บไซต์',
    },
    localBackup: {
      hasLocalBackup: undefined, // English translation: 'Has local backup'
    },
    errorBoundary: {
      title: 'มีข้อผิดพลาด',
      details: 'มีข้อผิดพลาดเกิดขึ้น',
      reportIt: 'แจ้งข้อผิดพลาดบน GitHub',
      detailsHeading: 'รายละเอียด',
      privacyWarning:
        'การแจ้งปัญหาจะเติมข้อมูลล่วงหน้าด้วยข้อความแสดงข้อผิดพลาดและข้อมูลการดีบัก\nโปรดตรวจสอบข้อมูลว่าถูกต้องและลบข้อมูลที่สำคัญหากมีอยู่',
      recoveredEntry: {
        heading: 'เอกสารถูกกู้คืน',
        warning: 'โปรด คัดลอก/วาง ที่ใดที่หนึ่งก่อนจะทำอย่างอื่น!',
        copyButtonLabel: 'คัดลอกไปที่คลิปบอร์ด',
      },
    },
    settingsDropdown: {
      darkMode: undefined, // English translation: 'Dark Mode'
      logOut: 'ออกจากระบบ',
    },
    toast: {
      onFailToLoadEntries: 'ล้มเหลวในการโหลดเนื้อหา: %{details}',
      onFailToPersist: 'ล้มเหลวในการยืนยันเนื้อหา: %{details}',
      onFailToPersistMedia: undefined, // English translation: 'Failed to persist media: %{details}'
      onFailToDelete: 'ล้มเหลวในการลบเนื้อหา: %{details}',
      onFailToDeleteMedia: undefined, // English translation: 'Failed to delete media: %{details}'
      onFailToUpdateStatus: 'ล้มเหลวในการอัปเดตสถานะ: %{details}',
      missingRequiredField: 'คุณไม่ได้ใส่ข้อมูลในช่องที่ต้องการ กรุณาใส่ข้อมูลก่อนบันทึก',
      entrySaved: 'เนื้อหาถูกบันทึก',
      entryPublished: 'เนื้อหาถูกเผยแพร่',
      onFailToPublishEntry: 'ล้มเหลวในการเผยแพร่เนื้อหา: %{details}',
      entryUpdated: 'สถานะเนื้อหาถูกอัปเดต',
      onFailToAuth: '%{details}',
      onLoggedOut: 'คุณได้ออกจากระบบ โปรดสำรองข้อมูลแล้วเข้าสู่ระบบอีกครั้ง',
      onBackendDown: 'บริการแบ็กเอนด์เกิดการขัดข้อง ดู %{details} สำหรับข้อมูลเพิ่มเติม',
    },
  },
};

export default th;
