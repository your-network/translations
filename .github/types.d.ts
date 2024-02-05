/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */

declare namespace Koine {
  interface Translations {
    "~": {
      account: {
        user: {
          profile: string;
          settings: {
            index: string;
            personal: string;
            notifications: string;
            preferences: string;
            security: string;
          };
        };
        company: {
          profile: string;
          settings: {
            index: string;
            personal: string;
            billing: string;
            payment: string;
            notifications: string;
          };
        };
      };
      auth: {
        "confirm-email": string;
        "password-forgot": string;
        "password-reset": string;
        signin: string;
        signup: string;
        "signup-contributor": string;
        "signup-extractor": string;
        "two-factor": string;
        verify: string;
      };
      community: {
        leaderboard: string;
        user: { "[id]": string };
        users: { index: string; "[userName]": string };
      };
      content: {
        about: string;
        "build-developers": string;
        "build-dapps-signup": string;
        "build-dapps-content-creation": string;
        "build-dapps-content-distribution": string;
        "build-dapps": string;
        "build-nodes": string;
        "build-use-cases": string;
        "community-governance": string;
        cookies: string;
        creator: string;
        extractor: string;
        intro: string;
        pricing: string;
        privacy: string;
        shops: string;
        showcase: string;
        terms: string;
        token: string;
      };
      dashboard: {
        chat: string;
        curate: string;
        "editor-product": { "[id]": string };
        manage: string;
        marketplace: string;
        "products-overview": string;
        statistics: string;
        user: string;
        wallet: string;
      };
      demo: { sdk: string };
      org: {
        dashboard: string;
        analytics: string;
        download: string;
        downloads: { index: string; "[id]": string };
        onboarding: string;
        pricing: string;
        stream: { customize: string; settings: string };
      };
      tools: {
        "feed-matcher": {
          index: string;
          "[spa]": string;
          shops: {
            index: string;
            "[id]": {
              index: string;
              source: {
                index: string;
                new: string;
                "[sourceId]": {
                  index: string;
                  edit: string;
                  mapFields: string;
                  mapAttributes: string;
                  mapAttributeGroups: string;
                  mapBrands: string;
                  mapCategories: string;
                };
              };
            };
          };
        };
      };
      www: {
        search: string;
        brand: { "[slug]": { "[id]": string } };
        brands: { index: string; "[id]": string };
        category: { "[slug]": { "[id]": string } };
        categories: { index: string; "[id]": string };
        "product-stable": { "[id]": string };
        product: {
          "[slug]": {
            "[id]": {
              index: string;
              revisions: { index: string; "[revisionId]": { index: string } };
            };
          };
        };
      };
    };
    _: {
      comingSoon: string;
      backToWiki: string;
      help: string;
      close: string;
      theme: { light: string; dark: string };
      buy: string;
      docx: {
        privacy: { title: string; close: string };
        terms: { title: string; close: string };
      };
    };
    Stats: {
      Brand: { label: string; value: string };
      Category: { label: string; value: string };
      Changeset: { label: string; value: string };
      Product: { label: string; value: string };
      UserContributor: { label: string; value: string };
    };
    Wysiwyg: {
      toolbar: {
        undo: string;
        redo: string;
        paragraph: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        ul: string;
        ol: string;
        bold: string;
        italic: string;
        underline: string;
      };
    };
    Select: {
      searchPlaceholder: string;
      noOptionsAvailale: string;
      allSelected: string;
      selected: string;
      results: string;
      noMoreResults: string;
      loading: string;
    };
    SelectDaterange: {
      labels: {
        thisYear: string;
        thisMonth: string;
        lastMonth: string;
        thisWeek: string;
        lastWeek: string;
        today: string;
      };
    };
    Restrict: {
      extractor: { title: string; subtitle: string; cta: string };
      contributor: { title: string; subtitle: string; cta: string };
      shop: { title: string; subtitle: string; cta: string };
      superAdmin: { title: string; subtitle: string; cta: string };
      back: string;
      backHome: string;
    };
    ReadMore: { expand: string; collapse: string };
    PromptImproveProducts: {
      title: string;
      usps: string[];
      cta: { demo: string; about: string };
    };
    PromptAuthDialogFooter: {
      title: string;
      text: string;
      text2: string;
      ctaSignup: string;
      ctaCreator: string;
    };
    Pagination: { summary: string };
    Header: {
      locales: string;
      solution: {
        label: string;
        shops: string;
        creators: string;
        start: string;
      };
      showcase: string;
      learn: string;
      pricing: string;
      token: string;
      signin: string;
      demo: string;
      start: string;
      my: {
        label: string;
        headline: string;
        dashboard: string;
        profile: string;
        settings: string;
        company: { fallback: string; profile: string; settings: string };
        notifications: string;
        help: string;
        logout: string;
      };
      community: {
        label: string;
        users: string;
        leaderboard: string;
        creator: string;
        governance: string;
      };
    };
    Info: {
      score: { title: string; text: string[] };
      dataExport: { title: string; text: string[] };
      matchRate: { title: string; text: string[] };
      points: { title: string; text: string[] };
    };
    FormsNewsletter: {
      labels: { terms: string };
      placeholders: { email: string };
      errors: { email: { email: string; required: string } };
      submit: string;
      ok: { title: string };
    };
    Footer: {
      description: string;
      copyright: string;
      blocks: {
        about: { title: string; links: { text: string; route: string }[] };
        business: { title: string; links: { text: string; route: string }[] };
        information: { title: string; links: { text: string; url: string }[] };
        communities: { title: string; links: { text: string; url: string }[] };
        others: { links: { text: string; route: string }[] };
      };
    };
    Empty: {
      actionsTitle: string;
      actionInfo: string;
      category: { title: string; text: string; actions: string[] };
      brand: { title: string; text: string; actions: string[] };
      search: { title: string; text: string; actions: string[] };
      bare: { title: string; text: string };
    };
    CookieBanner: { text: string; reject: string; accept: string };
    ContentTypesSectionsNav: {
      text: { label: string };
      prosCons: { label: string };
      image: { label: string };
      review: { label: string };
      specs: { label: string };
      video: { label: string };
      pdf: { label: string };
      news: { label: string };
      qa: { label: string };
    };
    ContentScore: {
      excellent: string;
      veryGood: string;
      good: string;
      basic: string;
      unknown: string;
    };
    ComingSoon: { title: string; text: string; back: string };
    CardHowTo: {
      pill: string;
      more: string;
      moreCta: string;
      moreCtaKb: string;
    };
    Breadcrumbs: { back: string; home: string };
    AuthFormSignupExtractor: { submit: string; ok: string; fail: string };
    AuthFormSignupContributor: { submit: string; ok: string; fail: string };
    AuthFormSignup: {
      subtitle: { Extractor: string; Contributor: string };
      switch: { Extractor: string; Contributor: string };
      labels: { terms: string };
      placeholders: {
        email: string;
        userName: string;
        displayName: string;
        password: string;
        language: string;
        organization: { name: string };
        website: string;
        phoneNumber: string;
      };
      errors: {
        email: { email: string; required: string };
        userName: { required: string; min: string; allowedChars: string };
        displayName: { required: string; noSymbols: string };
        terms: { oneOf: string };
        organization: { name: { required: string } };
        website: { required: string; url: string };
      };
      or: string;
      generatePassword: string;
      submit: string;
      ok: { title: string; text: string };
    };
    AuthFormLogin: {
      title: string;
      subtitle: string;
      continue: string;
      labels: { remember: string };
      placeholders: { userName: string; password: string };
      errors: {
        userName: { required: string; email: string };
        password: { required: string; wrong: string; generic: string };
      };
      submit: string;
      ok: string;
      fail: string;
      failUnverified: { title: string; text: string };
      okUnverified: { title: string; text: string };
      or: string;
      forgotPassword: string;
      back: string;
      backHome: string;
    };
    AppSectionProducts: {
      empty: {
        category: { title: string; text: string; actions: string[] };
        brand: { title: string; text: string; actions: string[] };
      };
    };
    AnnouncementLaunch: { title: string; playVideo: string; moreInfo: string };
    AlertEmailUnconfirmed: {
      title: string;
      text: string;
      okResend: { title: string; text: string };
    };
    "500": { seo: { title: string }; title: string; text: string; cta: string };
    "404": { seo: { title: string }; title: string; text: string; cta: string };
    $team: {
      core: { slug: string; name: string; sub: string }[];
      others: { slug: string; name: string; sub: string }[];
      advisors: { slug: string; name: string; sub: string }[];
    };
    $stories: {
      all: { text: string; author: { name: string; about: string } }[];
    };
    $pricing: {
      cta: { startToday: string; current: string };
      types: {
        beginner: {
          label: string;
          title: string;
          payoff: string;
          price: string;
          cta: string;
        };
        start: {
          label: string;
          title: string;
          payoff: string;
          price: string;
          cta: string;
        };
        optimize: {
          label: string;
          title: string;
          payoff: string;
          price: string;
          cta: string;
        };
        personalize: {
          label: string;
          title: string;
          payoff: string;
          price: string;
          cta: string;
        };
      };
      features: {
        SubscriptionBase: { title: string };
        FreeRequests: { title: string };
        PaidRequests: { title: string };
        SubscriptionRequests: { title: string };
        Content: { title: string };
        Language: string | { title: string };
        AllLanguages: { title: string };
        OneLanguage: { title: string };
        Brand: { title: string };
        AllBrands: string | { title: string };
        Implementation: { title: string };
        ConversionIntegration: { title: string };
        PerformanceOptimisation: { title: string };
        Support: { title: string };
        Personalisation: { title: string };
        AccountManager: { title: string };
        ProductFeed: { title: string };
        EnrichmentRequests: { title: string };
        ContentCustomization: { title: string };
        AudienceIntegration: { title: string };
        $requests: { title: string };
        $brands: { title: string; titleAll: string };
        $languages: { title: string; titleAll: string };
        $content: { title: string; "title+": string };
      };
      content: {
        and: string;
        types: {
          description: string;
          prosCons: string;
          image: string;
          review: string;
          specs: string;
          reasonsToBuy: string;
          video: string;
          pdf: string;
          news: string;
          qa: string;
          energy: string;
          title: string;
        };
      };
    };
    $locales: { en: string; nl: string; zh: string };
    $faq: { home: { question: string; answer: string }[] };
    "~www/~search": {
      seo: { title: string; description: string; keywords: string };
      title: {
        withQuery: string;
        allInCategory: string;
        allOfBrand: string;
        all: string;
      };
      back: string;
    };
    "~tools/~feed-matcher": {
      seo: { title: string; description: string; keywords: string };
      title: string;
      breadcrumbs: {
        shops: string;
        shop: string;
        shopSourceNew: string;
        shopSourceEdit: string;
        mapAttributes: string;
        mapAttributeGroups: string;
        mapBrands: string;
        mapCategories: string;
        mapFields: string;
      };
      mapTo: string;
      shops: {
        description: string;
        headings: {
          id: string;
          name: string;
          nrSources: string;
          created: string;
        };
        actions: { select: string };
        search: { empty: string };
      };
      sources: {
        headings: {
          id: string;
          name: string;
          locationType: string;
          fileType: string;
          created: string;
          status: string;
          statusFields: string;
          statusMapping: string;
        };
        actions: {
          mapFields: string;
          mapCategories: string;
          mapBrands: string;
          mapAttributeGroups: string;
          mapAttributes: string;
          addNew: string;
        };
        search: { empty: string };
      };
      sourceNew: { title: string };
      sourceEdit: { title: string };
      map: {
        changes: string;
        save: string;
        selectPlaceholder: string;
        mapped: string;
        reset: string;
      };
      mapFields: {
        viewExample: string;
        internalField: { placeholder: string };
        order: { placeholder: string };
      };
      stats: {
        attributeGroups: string;
        attributes: string;
        brands: string;
        categories: string;
        fields: string;
        products: string;
      };
      download: { success: string; fail: string; retry: string };
    };
    "~www/~product~revisions": {
      seo: {
        title: string;
        titleSingle: string;
        description: string;
        keywords: string;
      };
      title: string;
      titleSingle: string;
      nav: { close: string; prev: string; next: string; current: string };
      headings: {
        creator: string;
        date: string;
        type: string;
        recap: string;
        score: string;
      };
    };
    "~www/~product~revision": {
      seo: { title: string; description: string; keywords: string };
      title: string;
    };
    "~www/~product": {
      seo: { title: string; description: string; keywords: string };
      subtitle: {
        withCreators: string;
        withoutCreators: string;
        creators: string;
      };
      subheader: { create: string; extract: string };
      contributors: { creators: string; content: string; history: string };
      lightbox: { tabs: { image: string; video: string; review: string } };
      content: {
        loggedin: { title: string; create: string; extract: string };
        loggedout: { title: string; text: string; cta: string };
      };
      image: {
        label: string;
        cardCta: string;
        showAll: string;
        empty: { cta: string };
      };
      text: {
        label: string;
        cardCta: string;
        title: string;
        expand: string;
        empty: { paragraphs: string[] };
      };
      reasonsToBuy: { expand: string };
      prosCons: {
        label: string;
        cardCta: string;
        title: string;
        expand: string;
        empty: { text: string };
      };
      review: {
        label: string;
        cardCta: string;
        showAll: string;
        title: string;
        cta: string;
        approved: string;
        pending: string;
        empty: { title: string; cta: string };
      };
      popular: { hash: string; title: string; subtitle: string };
      specs: {
        label: string;
        cardCta: string;
        title: string;
        expand: string;
        genericGroup: string;
        expandSpecText: string;
        collapseSpecText: string;
        empty: { sampleAttr: string; cta: string };
      };
      qa: {
        label: string;
        cardCta: string;
        title: string;
        search: { placeholder: string; btn: string };
        show: { switch: string; answered: string; all: string; recap: string };
        empty: { text: string; cta: string };
      };
      video: {
        label: string;
        cardCta: string;
        title: string;
        showAll: string;
        empty: { cta: string };
      };
      pdf: {
        label: string;
        cardCta: string;
        title: string;
        info: { title: string; text: string };
        empty: { cta: string };
      };
      top: { hash: string; title: string; subtitle: string };
      news: {
        label: string;
        cardCta: string;
        title: string;
        info: { title: string; text: string };
        empty: { cta: string };
      };
      faq: { label: string; cardCta: string; title: string; subtitle: string };
      brand: {
        title: string;
        subtitle: string;
        stats: {
          items: string;
          owners: string;
          floorPrice: string;
          volumeTraded: string;
        };
        empty: { cta: string; paragraphs: string[] };
      };
    };
    "~www/~category": {
      seo: { title: string; description: string; keywords: string };
      browseAll: string;
      top: { title: string; subtitle: string };
      videos: { title: string };
      popular: { title: string; subtitle: string };
      news: { title: string; subtitle: string };
      faq: { title: string; subtitle: string };
    };
    "~www/~categories~single": {
      seo: { title: string; description: string; keywords: string };
      mobileBack: string;
      more: string;
      productsNr: string;
      categoriesNr: string;
      products: { hash: string; title: string; subtitle: string; cta: string };
    };
    "~www/~categories": {
      seo: { title: string };
      title: {
        all: string;
        initial: string;
        query: string;
        initialAndQuery: string;
      };
      subtitle: string;
      search: { placeholder: string; results: string };
      products: { hash: string; title: string; subtitle: string; cta: string };
    };
    "~www/~brands~single": {
      seo: { title: string; description: string; keywords: string };
      mobileBack: string;
      more: string;
      productsNr: string;
      categoriesNr: string;
      products: { hash: string; title: string; subtitle: string; cta: string };
    };
    "~www/~brands": {
      seo: { title: string };
      title: {
        all: string;
        initial: string;
        query: string;
        initialAndQuery: string;
      };
      subtitle: string;
      search: { placeholder: string; results: string };
      products: { hash: string; title: string; subtitle: string; cta: string };
    };
    "~www/~brand": {
      seo: { title: string; description: string; keywords: string };
      browseAll: string;
      top: { title: string; subtitle: string };
      videos: { title: string };
      popular: { title: string; subtitle: string };
      about: {
        title: string;
        stats: {
          items: string;
          owners: string;
          floorPrice: string;
          volumeTraded: string;
        };
        showMore: string;
      };
      news: { title: string; subtitle: string };
      faq: { title: string; subtitle: string };
    };
    "~www/_": { breadcrumbs: { brands: string; categories: string } };
    "~org/~stream~settings": {
      seo: { title: string; description: string; keywords: string };
      title: string;
      subtitle: string;
      setup: { title: string; text: string };
      settings: { title: string };
      snippet: { title: string };
      instructions: { title: string };
    };
    "~org/~pricing": {
      seo: { title: string; description: string; keywords: string };
      actionBar: string;
      title: string;
      subtitle: string;
      cards: { subscriptions: { title: string; subtitle: string } };
    };
    "~org/~stream~customize": {
      seo: { title: string; description: string; keywords: string };
      title: string;
      subtitle: string;
      preview: { title: string };
    };
    "~org/~onboarding": {
      seo: { title: string; description: string; keywords: string };
      actionBar: string;
      title: string;
    };
    "~org/~downloads": {
      seo: { title: string; description: string; keywords: string };
      title: string;
      actions: { new: string };
      promptToAction: { title: string; text: string; cta: string };
      sections: {
        requested: { title: string; empty: string };
        ready: { title: string; empty: string };
        archived: { title: string; empty: string; emptyLink: string };
      };
      headings: {
        date: string;
        name: string;
        products: string;
        match: string;
        price: string;
        status: string;
        actions: string;
      };
      mobile: { products: string; match: string };
    };
    "~org/~downloads~single": {
      seo: { title: string; description: string; keywords: string };
      title: string;
      actions: {
        delete: {
          btn: string;
          title: string;
          text: string;
          confirm: string;
          cancel: string;
        };
        download: string;
        buy: string;
        pay: string;
      };
      productsMatched: { cardTitle: string };
      matchRate: {
        cardTitle: string;
        title: string;
        text_all: string;
        text_some: string;
        "text_someTODO:add": string;
        chartTitle: string;
        matched: string;
        unmatched: string;
        cta: string;
      };
      contentScore: {
        title: string;
        text: string;
        chartTitle: string;
        chartByTypeTitle: string;
        labelByType: {
          text: string;
          specs: string;
          review: string;
          image: string;
          video: string;
          pdf: string;
          news: string;
          qa: string;
        };
      };
      averagePrice: {
        title: string;
        text: string;
        chartTitle: string;
        products: string;
      };
      score: {
        excellent: string;
        veryGood: string;
        good: string;
        basic: string;
      };
      searchProducts: string;
      empty: { title: string; text: string };
      headings: {
        name: string;
        id: string;
        category: string;
        brand: string;
        score: string;
      };
    };
    "~org/~download": {
      seo: { title: string; description: string; keywords: string };
      title: string;
      links: { knowledgeBase: string; template: string };
      upload: {
        title: string;
        text: string;
        headline: string;
        cta: string;
        info: string;
        requirementsTitle: string;
        requirements: string[];
        learnMore: string;
        next: string;
      };
      howTo: {
        title: string;
        text: string;
        step1: string;
        step2: string;
        step3: string;
      };
      compatibility: { text: string };
      ok: { title: string; text: string };
      fail: { text: string };
    };
    "~org/~analytics": {
      seo: { title: string; description: string; keywords: string };
      actionBar: string;
      title: string;
      subtitle: string;
      cards: {
        productsMatched: { title: string };
        matchRate: { title: string };
        requests: { title: string };
        costs: { title: string };
        requestsChart: { title: string };
      };
    };
    "~org/~dashboard": {
      seo: { title: string; description: string; keywords: string };
      actionBar: string;
      title: { first: string; usual: string };
      cards: {
        start: { title: string; text: string };
        video: { title: string; text: string };
        subscription: { title: string; text: string; free: string };
        help: { title: string; text: string; replayOnboarding: string };
        productsMatched: { title: string };
        matchRate: { title: string };
        requests: { title: string };
        costs: { title: string };
      };
    };
    "~org/ProductsStats": {
      empty: { title: string; text: string };
      noResults: { title: string; text: string };
      headings: {
        name: string;
        matchId: string;
        category: string;
        brand: string;
        requests: string;
      };
    };
    "~org/ChartRequests": {
      title: string;
      empty: { title: string; text: string };
      noResults: { title: string; text: string };
    };
    "~dashboard/~wallet": {
      seo: { title: string; description: string; keywords: string };
      title: string;
    };
    "~demo/~sdk": {
      seo: { title: string; description: string; keywords: string };
    };
    "~dashboard/~user": {
      seo: { title: string; description: string; keywords: string };
      actionBar: string;
      title: string;
      earnings: { title: string };
      points: { title: string };
      created: { title: string; cta: string; ctaEmpty: string; last: string };
      edited: { title: string; cta: string; ctaEmpty: string; last: string };
      profile: {
        cta: string;
        ctaPublic: string;
        bio: string;
        bioEmpty: string;
        bioEmptyCta: string;
        skills: string;
        skillsEmptyCta: string;
        languages: string;
        languagesEmptyCta: string;
      };
      products: {
        title: string;
        cta: string;
        search: { placeholder: string };
        btn: string;
      };
      brands: { title: string; cta: string; products: string };
      edits: { title: string; cta: string; ctaEmpty: string; empty: string };
      earningsChart: {
        title: string;
        filters: { thisYear: string };
        emptyTitle: string;
        emptyText: string;
      };
    };
    "~dashboard/~statistics": {
      seo: { title: string; description: string; keywords: string };
      title: string;
    };
    "~dashboard/~products-overview": {
      seo: { title: string; description: string; keywords: string };
      title: string;
      empty: { title: string; text: string };
      headings: {
        information: string;
        category: string;
        brand: string;
        score: string;
        action: string;
      };
      actions: { createContent: string; curate: string; open: string };
      create: string;
    };
    "~dashboard/~marketplace": {
      seo: { title: string; description: string; keywords: string };
      title: string;
    };
    "~dashboard/~manage": {
      seo: { title: string; description: string; keywords: string };
      title: string;
      promptToAction: { title: string; text: string; cta: string };
      empty: { title: string; text: string };
      filters: {
        category: string;
        brand: string;
        date: string;
        status: string;
        ownership: string;
      };
      headings: {
        information: string;
        type: string;
        date: string;
        status: string;
        ownership: string;
        earnings: string;
      };
      unavailableProduct: string;
      contentType: {
        text: string;
        specs: string;
        review: string;
        prosCons: string;
        image: string;
        video: string;
        pdf: string;
        news: string;
        qa: string;
      };
      entries: string;
    };
    "~dashboard/~editor-product": {
      seo: { title: string; description: string; keywords: string };
      loading: { actionBar: string; text: string };
      empty: { title: string; text: string; cta: string };
      welcome: { title: string; text: string; cta: string; ctaHref: string };
      nav: { products: string; locale: string; open: string; info: string };
      summary: {
        open: string;
        close: string;
        view: {
          changes: { title: string; count: string };
          errors: { title: string; count: string };
        };
        error: { title: string; cta: string };
        image: { name: string; added: string };
        pdf: { name: string; added: string };
        video: { name: string; added: string };
        review: { name: string; addedWithoutTitle: string };
        news: { name: string; added: string };
        qa: {
          name: string;
          answer: { name: string; inList: string };
          question: { name: string; inList: string };
        };
      };
      footer: {
        showChanges: string;
        "showChanges~mobile": string;
        hideChanges: string;
        publish: string;
      };
      sections: {
        text: { title: string; "title~mobile": string; tab: string };
        specs: { title: string; "title~mobile": string; tab: string };
        image: { title: string; "title~mobile": string; tab: string };
        video: { title: string; "title~mobile": string; tab: string };
        review: { title: string; "title~mobile": string; tab: string };
        qa: {
          title: string;
          "title~mobile": string;
          tab: string;
          ctaText: string;
          ctaAnswer: string;
          ctaAsk: string;
        };
        pdf: { title: string; "title~mobile": string; tab: string };
        news: { title: string; "title~mobile": string; tab: string };
      };
      fail: { title: string; text: string };
      ok: { title: string; text: string; cta: string };
    };
    "~dashboard/~curate": {
      seo: { title: string; description: string; keywords: string };
    };
    "~dashboard/~chat": {
      seo: { title: string; description: string; keywords: string };
    };
    "~dashboard/_": {
      dashboard: {
        user: string;
        "user~mobile": string;
        "products-overview": string;
        "products-overview~mobile": string;
        curate: string;
        "curate~mobile": string;
        manage: string;
        "manage~mobile": string;
        earn: string;
        "earn~mobile": string;
        marketplace: string;
        "marketplace~mobile": string;
        statistics: string;
        "statistics~mobile": string;
        wallet: string;
        "wallet~mobile": string;
        community: string;
        "community~mobile": string;
        chat: string;
        "chat~mobile": string;
      };
      admin: { tools: string; asCreator: string; asExtractor: string };
      community: { leaderboard: string; "leaderboard~mobile": string };
      account: {
        user: {
          profile: string;
          "profile~mobile": string;
          settings: { index: string; "index~mobile": string };
        };
        company: {
          profile: string;
          "profile~mobile": string;
          settings: { index: string; "index~mobile": string };
        };
      };
      org: {
        analytics: string;
        "analytics~mobile": string;
        dashboard: string;
        "dashboard~mobile": string;
        download: string;
        "download~mobile": string;
        downloads: { index: string; "index~mobile": string };
        pricing: string;
        "pricing~mobile": string;
        stream: {
          index: string;
          "index~mobile": string;
          customize: string;
          "customize~mobile": string;
          settings: string;
          "settings~mobile": string;
        };
      };
      tools: { "feed-matcher": { index: string; "index~mobile": string } };
    };
    "~content/~token": {
      seo: { title: string; description: string; keywords: string };
      cta: string;
      countdown: { d: string; h: string; m: string; s: string };
      intro: {
        title: string;
        text: string;
        asSeen: string;
        poweredBy: string;
        countdown: string;
        idoLaunch: string;
      };
      partners: { title: string };
      vision: {
        header: string;
        headline: string;
        title: string;
        text: string[];
      };
      product: {
        header: string;
        headline: string;
        title: string;
        text: string[];
      };
      products: {
        shopify: { title: string; text: string };
        sdk: { title: string; text: string };
        create: { title: string; text: string };
      };
      growth: { title: string; headline: string; text: string };
      tokenomics: {
        header: string;
        title: string;
        share: {
          preSeed: { title: string; text: string };
          seed: { title: string; text: string };
          publicSale: { title: string; text: string };
          team: { title: string; text: string };
          advisors: { title: string; text: string };
          network: { title: string; text: string };
          reserves: { title: string; text: string };
          liquidity: { title: string; text: string };
          marketing: { title: string; text: string };
        };
        utility: {
          headline: string;
          title: string;
          text: string;
          list: {
            earn: { title: string; text: string };
            pools: { title: string; text: string };
            staking: { title: string; text: string };
          };
        };
      };
      roadmap: { title: string; list: { title: string; actions: string[] }[] };
      team: { header: string; title: string };
      advisors: { title: string };
      faq: { header: string; title: string };
      join: { title: string; text: string };
      footer: {
        blocks: {
          tokens: { title: string; links: { text: string; url: string }[] };
          earn: { title: string; links: { text: string; route: string }[] };
          company: { title: string; links: { text: string; route: string }[] };
          communities: {
            title: string;
            links: { text: string; url: string }[];
          };
        };
      };
    };
    "~content/~terms": {
      seo: { title: string; description: string; keywords: string };
    };
    "~content/~showcase": {
      seo: { title: string; description: string; keywords: string };
      intro: { title: string; cta: string };
      ready: { title: string; cta: string };
      comparison: {
        before: string;
        after: string;
        description: { title: string; all: string };
        image: { all: string };
        prosCons: { title: string; all: string };
        reasonsToBuy: { all: string };
        review: { title: string };
      };
    };
    "~content/~privacy": {
      seo: { title: string; description: string; keywords: string };
    };
    "~content/~pricing": {
      seo: { title: string; description: string; keywords: string };
      intro: { title: string; text: string; usp: string[] };
      ready: { title: string; cta: string };
      faq: { title: string };
    };
    "~content/~shops": {
      seo: { title: string; description: string; keywords: string };
      intro: { headline: string; title: string; text: string; cta: string };
      why: { title: string };
      solutions: {
        title: string;
        problem: string;
        solution: string;
        list: { problem: string; solution: string }[];
      };
      contentTypes: { title: string };
      personalise: {
        headline: string;
        title: string;
        text: string;
        cta: string;
      };
      pricing: { title: string; subtitle: string };
      schedule: { anchor: string; title: string };
      partners: { headline: string; title: string; moreStories: string };
      faq: { title: string; faqs: { question: string; answer: string[] }[] };
      ready: { title: string; usps: string[]; cta: string };
    };
    "~content/~legacy": {
      seo: { title: string; description: string; keywords: string };
      intro: {
        hash: string;
        headline: string;
        paragraphs: string[];
        buyNow: string;
        poweredBy: string;
      };
      backed: { hash: string; title: string };
      known: { hash: string; headline: string };
      mission: {
        hash: string;
        title: string;
        headline: string;
        paragraphs: string[];
        cta: { text: string; url: string };
      };
      ready: { hash: string; headline: string };
      create: {
        hash: string;
        title: string;
        headline: string;
        paragraphs: string[];
        cta: { text: string; url: string };
      };
      stake: {
        hash: string;
        title: string;
        headline: string;
        paragraphs: string[];
        cta: { text: string; url: string };
      };
      team: { hash: string; headline: string };
      partners: { hash: string; headline: string };
      join: {
        hash: string;
        headline: string;
        cta: { text: string; url: string };
      };
    };
    "~content/~intro": {
      seo: { title: string; description: string; keywords: string };
      intro: {
        title: string;
        subtitle: string;
        highlights: string[];
        cta: string;
        switch: { physical: string; digital: string };
      };
      kpi: {
        conversion: { value: string; title: string };
        bounce: { value: string; title: string };
        time: { value: string; title: string };
      };
      engagement: { title: string; text: string; list: string[] };
      contentTypes: { title: string };
      integrations: {
        headline: string;
        title: string;
        custom: { text: string; cta: string };
      };
      shopify: { title: string; paragraphs: string[]; cta: string };
      personalise: {
        headline: string;
        title: string;
        text: string;
        cta: string;
        switch: { men: string; women: string };
      };
      faq: { title: string };
      ready: { title: string; cta: string };
    };
    "~content/~extractor": {
      seo: { title: string; description: string; keywords: string };
      intro: { title: string; paragraphs: string[]; cta: string };
      stats: {
        title: string;
        blocks: { subject: string; value: string; suffix: string }[];
      };
      meet: {
        title: string;
        paragraphs: string;
        cta: string;
        label: string;
        sublabel: string;
      };
      content: {};
      meet2: {
        title: string;
        paragraphs: string;
        cta: string;
        label: string;
        sublabel: string;
      };
      how: {
        title: string;
        subtitle: string;
        blocks: { title: string; text: string }[];
        cta: string;
      };
      faq: { title: string; faqs: { question: string; answer: string }[] };
    };
    "~content/~cookies": {
      seo: { title: string; description: string; keywords: string };
    };
    "~content/~creator": {
      seo: { title: string; description: string; keywords: string };
      cta: string;
      intro: { title: string; paragraphs: string[]; cta: string };
      stats: {
        title: string;
        blocks: { subject: string; value: string; suffix: string }[];
      };
      meet: { title: string; paragraphs: string[]; cta: string };
      content: { headline2: string };
      meet2: { title: string; paragraphs: string[]; cta: string };
      earn: { title: string; alt: string };
      faq: { title: string; faqs: { question: string; answer: string }[] };
      join: { title: string; cta: string; alt: string };
    };
    "~content/~community-governance": {
      seo: { title: string; description: string; keywords: string };
      hero: { title: string; paragraphs: string[] };
      intro: { title: string };
      block1: { title: string; paragraphs: string[]; alt: string };
      block2: { title: string; paragraphs: string[]; alt: string };
    };
    "~content/~build-use-cases": {
      seo: { title: string; description: string; keywords: string };
      hero: { title: string; paragraphs: string[] };
      intro: { title: string };
      block1: { title: string; paragraphs: string[]; alt: string };
      block2: { title: string; paragraphs: string[]; alt: string };
    };
    "~content/~build-nodes": {
      seo: { title: string; description: string; keywords: string };
      hero: { title: string; paragraphs: string[]; cta: string };
      intro: { title: string };
      block1: { title: string; paragraphs: string[]; alt: string };
      block2: { title: string; paragraphs: string[]; alt: string; cta: string };
    };
    "~content/~build-developers": {
      seo: { title: string; description: string; keywords: string };
      hero: { title: string; paragraphs: string[]; cta: string };
      intro: { title: string };
      block1: { title: string; paragraphs: string[]; alt: string };
      block2: { title: string; paragraphs: string[]; alt: string; cta: string };
    };
    "~content/~build-dapps-signup": {
      seo: { title: string; description: string; keywords: string };
      hero: { title: string; paragraphs: string[]; cta: string };
      intro: { title: string };
      block1: { title: string; paragraphs: string[]; alt: string; cta: string };
      block2: { title: string; paragraphs: string[]; alt: string };
    };
    "~content/~build-dapps-content-distribution": {
      seo: { title: string; description: string; keywords: string };
      hero: { title: string; paragraphs: string[]; cta: string };
      intro: { title: string };
      block1: { title: string; paragraphs: string[]; alt: string };
      block2: { title: string; paragraphs: string[]; alt: string; cta: string };
    };
    "~content/~build-dapps-content-creation": {
      seo: { title: string; description: string; keywords: string };
      hero: { title: string; paragraphs: string[]; cta: string };
      intro: { title: string };
      block1: { title: string; paragraphs: string[]; alt: string };
      block2: { title: string; paragraphs: string[]; alt: string; cta: string };
    };
    "~content/~build-dapps": {
      seo: { title: string; description: string; keywords: string };
      hero: { title: string; paragraphs: string[] };
      intro: { title: string };
      block1: { title: string; paragraphs: string[]; alt: string };
      block2: { title: string; paragraphs: string[]; alt: string };
      faq: { title: string; faqs: { question: string; answer: string }[] };
    };
    "~content/~about": {
      seo: { title: string; description: string; keywords: string };
      intro: { title: string; paragraphs: string[]; poweredBy: string };
      what: { title: string };
      mission: { title: string; paragraphs: string[] };
      team: { title: string };
      known: { title: string };
      why: { title: string; headings: string[]; rows: string[][] };
      create: { title: string; paragraphs: string[]; cta: string; alt: string };
      earn: { title: string; alt: string };
      content: {};
      join: { title: string; cta: string; alt: string };
    };
    "~content/BlockWhy": {
      conversion: { title: string; value: string };
      bounceRate: { title: string; value: string };
      timeOnPage: { title: string; value: string };
    };
    "~content/_": { switch: { men: string; women: string }; signup: string };
    "~content/BlockUsp": {
      title: string;
      subtitle: string;
      list: {
        conversion: { title: string; text: string };
        experience: { title: string; text: string };
        costs: { title: string; text: string };
      };
    };
    "~content/BlockContentTypes": {
      "*": {
        "product-images": string;
        "product-videos": string;
        "product-description": string;
        "product-pdf": string;
        "product-qa": string;
        "product-reviews": string;
        "product-pros-cons": string;
        "product-reasons-to-buy": string;
        "product-specifications": string;
      };
    };
    "~content/BlockContent": {
      "*": {
        title: string;
        headline: string;
        paragraphs: string[];
        headline2: string;
        types: {
          image: string;
          experience: string;
          video: string;
          faq: string;
          news: string;
        };
      };
    };
    "~content/BlockStartStreaming": {
      title: string;
      subtitle: string;
      steps: {
        "1": { title: string; text: string };
        "2": { title: string; text: string };
        "3": { title: string; text: string };
        "4": { title: string; text: string };
      };
      shopify: { switch: string; cta: string };
      sdk: { switch: string; cta: string };
    };
    "~community/~users~single": {
      seo: { title: string };
      mobileBack: string;
      tabs: { overview: string; activity: string };
      changeType: {
        plural: {
          all: string;
          text: string;
          review: string;
          image: string;
          video: string;
          pdf: string;
          news: string;
          qa: string;
        };
        singular: {
          all: string;
          text: string;
          review: string;
          image: string;
          video: string;
          pdf: string;
          news: string;
          qa: string;
        };
      };
      overview: {
        reputation: { title: string; text: string };
        skills: { title: string };
        contributions: { title: string; cta: string };
      };
      activity: {
        summary: { title: string; chart: { less: string; more: string } };
        list: {
          titleByType: string;
          titleAll: string;
          subtitle: string;
          entry: string;
          empty: string;
        };
      };
    };
    "~community/~leaderboard": {
      seo: { title: string };
      title: string;
      search: {
        title: string;
        query: string;
        intervalType: { w: string; m: string; q: string; y: string; a: string };
        noMatchFilters: string;
        noMatchQuery: string;
        empty: string;
      };
      headings: {
        user: string;
        rank: string;
        change: string;
        points: string;
        views: string;
      };
      userLinkTitle: string;
      pagination: string;
    };
    "~community/~users": {
      seo: { title: string };
      title: string;
      search: {
        query: string;
        sort: {
          label: string;
          ranking_desc: string;
          ranking: string;
          created_desc: string;
          created: string;
        };
        noMatchFilters: string;
        noMatchQuery: string;
        empty: string;
      };
      pagination: string;
    };
    "~auth/~verify": {
      seo: { title: string; description: string };
      title: string;
      subtitle: string;
      btnSignin: string;
      okResend: { title: string; text: string };
      resend: string;
    };
    "~community/_": {
      community: {
        label: string;
        leaderboard: string;
        "leaderboard~mobile": string;
        users: { index: string; "index~mobile": string };
      };
      content: { creator: string; "creator~mobile": string };
      www: {
        label: string;
        search: string;
        "search~mobile": string;
        categories: { index: string; "index~mobile": string };
        brands: { index: string; "index~mobile": string };
      };
    };
    "~auth/~two-factor": {
      seo: { title: string; description: string };
      title: string;
      subtitle: string;
    };
    "~auth/~signup": {
      seo: { title: string; description: string };
      title: string;
    };
    "~auth/~signup-extractor": {
      seo: { title: string; description: string };
      title: string;
      subtitle: string;
    };
    "~auth/~signup-contributor": {
      seo: { title: string; description: string };
      title: string;
      subtitle: string;
    };
    "~auth/~password-reset": {
      seo: { title: string; description: string };
      title: string;
      subtitle: string;
      backSignin: string;
    };
    "~auth/~signin": {
      seo: { title: string; description: string };
      title: string;
      subtitle: string;
    };
    "~auth/~password-forgot": {
      seo: { title: string; description: string };
      title: string;
      subtitle: string;
      backSignin: string;
    };
    "~auth/Password": {
      password: {
        placeholder: string;
        errors: { required: string; min: string; matches: string };
      };
    };
    "~auth/~confirm-email": {
      seo: { title: string; description: string };
      title: string;
      subtitle: string;
    };
    "~auth/FormTwoFactor": {
      labels: {};
      placeholders: {};
      errors: { twoFactorCode: { generic: string } };
      submit: string;
      ok: string;
      fail: string;
      or: string;
      haventReceived: string;
      resendCode: string;
    };
    "~auth/FormPasswordReset": {
      labels: {};
      placeholders: { password: string; passwordConfirm: string };
      errors: {
        password: { required: string };
        passwordConfirm: { match: string };
      };
      submit: string;
      ok: { title: string; text: string };
      fail: string;
      generate: string;
      resetting: string;
      fallback: string;
    };
    "~auth/FormPasswordForgot": {
      labels: {};
      placeholders: { email: string };
      errors: { email: { email: string; required: string } };
      submit: string;
      ok: { title: string; text: string };
      fail: string;
    };
    "~auth/FormConfirmEmail": {
      placeholders: { email: string };
      errors: {
        email: { email: string; required: string };
        pin: { generic: string };
      };
      submit: string;
      ok: { title: string; text: string };
      fail: string;
      okResend: { title: string; text: string };
      resend: string;
      confirming: string;
    };
    "~auth/AuthStatus": {
      alreadyAccount: string;
      noAccount: string;
      signUp: string;
      signIn: string;
      signedInAs: string;
      signedInAsCta: string;
    };
    "~account/~user~settings": {
      seo: { title: string; description: string };
      title: string;
      personal: { title: string; subtitle: string; cta: string };
      security: { title: string; subtitle: string; cta: string; desc: string };
      notifications: {
        title: string;
        subtitle: string;
        cta: string;
        desc: string;
      };
      preferences: {
        title: string;
        subtitle: string;
        cta: string;
        desc: string;
      };
      billing: { title: string };
      payment: { title: string };
    };
    "~account/~user~profile": {
      seo: { title: string; description: string };
      title: string;
      titles: {
        userName: { card: string };
        about: { card: string; dialog: string };
        languages: { card: string; dialog: string };
        skills: { card: string; dialog: string };
        socialLinks: { card: string; dialog: string };
        website: { card: string; dialog: string };
      };
    };
    "~account/~company~settings": {
      seo: { title: string; description: string };
      title: string;
      personal: { title: string; subtitle: string; cta: string };
      billing: { title: string; subtitle: string; cta: string };
      payment: { title: string; subtitle: string; cta: string };
      notifications: {
        title: string;
        subtitle: string;
        cta: string;
        desc: string;
      };
      security: { title: string };
      preferences: { title: string };
    };
    "~account/~company~profile": {
      seo: { title: string; description: string };
      title: string;
      titles: {
        name: { card: string; dialog: string };
        about: { card: string; dialog: string };
        industry: { card: string; dialog: string };
        socialLinks: { card: string; dialog: string };
        website: { card: string; dialog: string };
      };
    };
    "~account/_": {
      goToDashboard: string;
      seeProfile: string;
      org: { dashboard: string; "dashboard~mobile": string };
      dashboard: {
        user: string;
        "user~mobile": string;
        company: string;
        "company~mobile": string;
      };
      account: {
        user: {
          title: string;
          profile: string;
          "profile~mobile": string;
          settings: { index: string; "index~mobile": string };
        };
        company: {
          title: string;
          profile: string;
          "profile~mobile": string;
          api: string;
          "api~mobile": string;
          settings: { index: string; "index~mobile": string };
        };
      };
      help: string;
      "help~mobile": string;
      logout: string;
      "logout~mobile": string;
      Ad: { title: string; subtitle: string };
    };
    "~account/FormUserWebsite": {
      labels: { website: string };
      placeholders: { website: string };
      errors: { website: { url: string } };
      ok: string;
      fail: string;
    };
    "~account/FormUserSocials": {
      labels: { socialLinks: string };
      placeholders: { socialLinks_new: string };
      helpers: { socialLinks_new: string };
      errors: { socialLinks: { url: { url: string; matches: string } } };
      btnAdd: string;
      ok: string;
      fail: string;
    };
    "~account/FormUserSkills": {
      labels: { skills: string };
      placeholders: { skills: string };
      errors: {};
      ok: string;
      fail: string;
    };
    "~account/FormUserSecurity": {
      labels: {
        email: string;
        password: string;
        newPassword: string;
        newPasswordConfirm: string;
      };
      placeholders: { password: string };
      helpers: { password: string };
      errors: {};
      generatePassword: string;
      undoChangePassword: string;
      fail: string;
      okPassword: { title: string };
      okEmail: { title: string; text: string };
      okAll: { title: string; text: string };
    };
    "~account/FormUserPreferences": {
      labels: { darkMode: string };
      placeholders: {};
      errors: {};
      options: { darkMode: { true: string; false: string } };
      ok: string;
      fail: string;
    };
    "~account/FormUserPersonal": {
      labels: {
        displayName: string;
        address: {
          address: string;
          houseNumber: string;
          city: string;
          zipCode: string;
          country: string;
        };
        phoneNumber: string;
        dateOfBirth: string;
      };
      placeholders: {
        displayName: string;
        address: {
          address: string;
          houseNumber: string;
          city: string;
          zipCode: string;
          country: string;
        };
        phoneNumber: string;
        dateOfBirth: string;
      };
      errors: {
        displayName: { required: string };
        dateOfBirth: { "18+": string };
      };
      ok: string;
      fail: string;
    };
    "~account/FormUserNotifications": {
      labels: { notifications: { email: string } };
      placeholders: {};
      options: {
        notifications: { email: { label: string; value: boolean }[] };
      };
      errors: { notifications: { email: { required: string } } };
      ok: string;
      fail: string;
    };
    "~account/FormUserLanguages": {
      labels: {};
      placeholders: {};
      errors: {};
      ok: string;
      fail: string;
    };
    "~account/FormUserAbout": {
      labels: {};
      placeholders: { about: string };
      errors: {};
      charsLeft: string;
      ok: string;
      fail: string;
    };
    "~account/FormCompanySocials": {
      labels: { socialLinks: string };
      placeholders: { socialLinks_new: string };
      helpers: { socialLinks_new: string };
      errors: { socialLinks: { url: { url: string; matches: string } } };
      btnAdd: string;
      ok: string;
      fail: string;
    };
    "~account/FormCompanyWebsite": {
      labels: { website: string };
      placeholders: { website: string };
      errors: { website: { url: string } };
      ok: string;
      fail: string;
    };
    "~account/FormCompanyNotifications": {
      labels: { notifications: { email: string } };
      placeholders: {};
      options: {
        notifications: { email: { label: string; value: boolean }[] };
      };
      errors: { notifications: { email: { required: string } } };
      ok: string;
      fail: string;
    };
    "~account/FormCompanyPersonal": {
      labels: {
        name: string;
        registrationNumber: string;
        address: string;
        houseNumber: string;
        city: string;
        zipCode: string;
        country: string;
        phoneNumber: string;
      };
      placeholders: {
        name: string;
        registrationNumber: string;
        address: string;
        houseNumber: string;
        city: string;
        zipCode: string;
        country: string;
        phoneNumber: string;
      };
      errors: { name: { required: string } };
      ok: string;
      fail: string;
    };
    "~account/FormCompanyName": {
      labels: {};
      placeholders: {};
      errors: { name: { required: string } };
      ok: string;
      fail: string;
    };
    "~account/FormCompanyIndustries": {
      labels: { industries: string };
      placeholders: { industries: string };
      errors: {};
      ok: string;
      fail: string;
    };
    "~account/FormCompanyAbout": {
      labels: {};
      placeholders: { about: string };
      errors: { about: { max: string } };
      charsLeft: string;
      ok: string;
      fail: string;
    };
    "~account/AccountBtnSave": { text: string };
    "upload/_": {
      dragActive: string;
      remove: { title: string; text: string; confirm: string; cancel: string };
      errors: {
        unaccepted: string;
        upload: string;
        format: string;
        minSize: string;
        maxSize: string;
        minRes: string;
        maxRes: string;
        minWidth: string;
        minHeight: string;
        maxWidth: string;
        maxHeight: string;
      };
    };
    "stream/ShopifyOnboarding": {
      "0": { title: string; cta: string };
      "1": {
        title: string;
        cta: string;
        howTo: { title: string; actions: { "1": string; "2": string } };
        video: { title: string; text: string };
      };
      "2": { title: string; cta: string };
      title: string;
      text: string;
      back: string;
    };
    "stream/SdkOnboarding": {
      "0": { title: string; cta: string };
      "1": { title: string; cta: string };
      "2": {
        title: string;
        cta: string;
        card: { title: string; text: string; link: string };
        text: string;
        actions: {
          "1": { title: string; copy: string };
          "2": { title: string };
        };
      };
      title: string;
      text: string;
    };
    "stream/ShopifyApp": {
      nav: {
        loading: string;
        dashboard: string;
        stream: string;
        analytics: string;
        pricing: string;
        helpdesk: string;
        onboarding: string;
      };
      onboarding: {
        loading: {
          title: string;
          titleDone: string;
          text: string;
          textDone: string;
          images: string;
          videos: string;
          done: string;
        };
      };
      stream: {
        title: string;
        text: string;
        cardStream: { title: string; text: string; cta: string };
        contentBlocks: {
          implemented: string;
          unavailable: string;
          unimplemented: string;
          types: {
            description: string;
            prosCons: string;
            image: string;
            review: string;
            specs: string;
            reasonsToBuy: string;
            video: string;
            pdf: string;
            news: string;
            qa: string;
            energy: string;
            title: string;
          };
        };
        exclude: {
          title: string;
          select: string;
          deselect: string;
          excluded: string;
          submit: string;
        };
      };
      helpdesk: {
        title: string;
        video: { title: string; all: string };
        faq: {
          title: string;
          all: string;
          tabs: { generic: string; shopify: string };
        };
        list: { question: string; answer: string[] }[];
        listShopify: { question: string; answer: string[] }[];
      };
    };
    "stream/SdkEditorForm": {
      labels: {
        shop: { domain: string; name: string };
        sdk: {
          identifierField: string;
          settingsJson: string;
          language: string;
          active: string;
          version: string;
        };
      };
      placeholders: {
        shop: { domain: string; name: string };
        sdk: {
          identifierField: string;
          settingsJson: string;
          language: string;
          active: string;
          version: string;
        };
      };
      errors: {
        shop: { domain: { required: string }; name: { required: string } };
        sdk: { version: { required: string }; settingsJson: { comma: string } };
      };
      submit: string;
      ok: string;
      fail: string;
    };
    "stream/SdkEditor": {
      discard: {
        btn: string;
        title: string;
        text: string;
        confirm: string;
        cancel: string;
      };
      readOnly: string;
      footer: {
        showSnippet: string;
        "showSnippet~mobile": string;
        hideSnippet: string;
        publish: string;
      };
    };
    "stream/SaasFormCancel": {
      labels: { reason: string; text: string; password: string };
      placeholders: { reason: string };
      helpers: { password: string };
      submit: string;
      cancel: string;
      ok: string;
      fail: string;
    };
    "stream/SaasFormBilling": {
      labels: {
        billingEmail: string;
        vatNumber: string;
        street: string;
        houseNumber: string;
        city: string;
        zipCode: string;
        country: string;
      };
      placeholders: {
        billingEmail: string;
        vatNumber: string;
        street: string;
        houseNumber: string;
        city: string;
        zipCode: string;
        country: string;
      };
      errors: { billingEmail: { required: string } };
      ok: string;
      fail: string;
    };
    "stream/Saas": {
      info: { secure: string; powered: string };
      billing: { title: string; privacy: string; cta: string };
      summary: {
        title: string;
        subject: string;
        tax: string;
        total: string;
        cta: string;
        processing: string;
      };
      payment: {
        label: string;
        loading: string;
        processing: string;
        add: string;
        edit: string;
        methods: { card: string };
        ok: { title: string; text: string; textDialog: string; cta: string };
        fail: {
          title: string;
          text: string[];
          cta: string;
          ctaContact: string;
        };
      };
      downgrade: {
        prompt: {
          title: string;
          text: string[];
          ctaChat: string;
          ctaContinue: string;
        };
        feedback: { title: string };
        confirm: {
          title: string;
          text: string;
          alert: string;
          ok: string;
          cancel: string;
        };
      };
      sdk: {
        purchase: { title: string };
        summary: { title: string };
        result: {
          ok: { title: string; text: string[]; cta: string };
          fail: {
            title: string;
            text: string[];
            cta: string;
            ctaContact: string;
          };
        };
      };
    };
    "search/_": {
      query: { placeholder: string; submit: string };
      mobileFilters: { title: string; clear: string; apply: string };
    };
    "search/Suggest": {
      search: string;
      clear: string;
      placeholder: string;
      "placeholder~mobile": string;
      results: { loading: string; empty: string };
      tabs: { all: string; Brand: string; Category: string; Product: string };
      groups: { all: string; Category: string; Brand: string; Product: string };
    };
    "search/Filters": {
      show: string;
      "show~mobile": string;
      hide: string;
      sort: string;
      sortOptions: {
        Popularity: string;
        Popularity_desc: string;
        Rating: string;
        Rating_desc: string;
        Ranking: string;
        Ranking_desc: string;
        RecentlyAdded: string;
        RecentlyAdded_desc: string;
      };
      facetBrand: string;
      facetCategory: string;
      resetFilters: string;
      removeFilter: string;
      filters: { empty: string; loading: string; summaryEmpty: string };
      filter: string;
      searchClear: string;
      searchPlaceholder: string;
    };
    "lightbox/_": {
      close: string;
      tabs: {
        image: string;
        "image~mobile": string;
        video: string;
        "video~mobile": string;
        media: string;
        "media~mobile": string;
        review: string;
        "review~mobile": string;
      };
    };
    "editor/video": { cta: string; requirements: string[] };
    "editor/text": {
      labels: {
        identifier: string;
        categoryName: string;
        title: string;
        description: string;
      };
      placeholders: {};
      errors: {
        title: { required: string; noSymbols: string };
        description: { max: string };
      };
      helpers: { title: string };
      popovers: { identifier: string; categoryName: string };
    };
    "editor/specs": {
      required: string;
      optional: string;
      genericGroup: string;
      addAttributeInListHelper: string;
      readOnly: string;
    };
    "editor/qa": {
      tabs: { questions: string; answers: string };
      addQuestion: string;
      search: {
        questions: { placeholder: string; results: string };
        answers: { placeholder: string; results: string };
      };
      draft: {
        new: { question: string; answer: string };
        edit: { question: string; answer: string };
        info: string;
      };
    };
    "editor/pdf": { cta: string; requirements: string[] };
    "editor/news": {
      labels: { url: string };
      placeholders: { url: string };
      errors: {
        url: {
          required: string;
          url: string;
          duplicate: string;
          unprocessable: string;
        };
        image: { notFound: string };
      };
      btnAdd: string;
      dialog: { trigger: string; title: string };
    };
    "editor/image": { cta: string; requirements: string[] };
    "editor/_": {
      discard: {
        btn: string;
        title: string;
        text: string;
        confirm: string;
        cancel: string;
      };
      readOnly: string;
    };
    "editor/Review": {
      labels: {
        score: string;
        title: string;
        companyName: string;
        description: string;
        media: string;
        pros: string;
        cons: string;
      };
      placeholders: {
        title: string;
        companyName: string;
        description: string;
        pros: string;
        cons: string;
      };
      errors: {
        score: { min: string };
        title: { length: string };
        description: { length: string };
        pros: { length: string };
        cons: { length: string };
      };
      helpers: { title: string };
      media: {
        upload: string;
        or: string;
        addFromUrl: string;
        requirements: string;
      };
      ok: { title: string; text: string };
      fail: { title: string };
      clearRating: string;
      ctaText: string;
      ctaBtn: string;
      ctaClear: string;
      pending: string;
      approved: string;
      pendingMsg: string;
      approvedMsg: string;
      actions: {
        save: string;
        next: string;
        edit: string;
        preview: string;
        cancel: string;
        orSignIn: string;
      };
      dialog: {
        title: { add: string; edit: string; preview: string };
        preview: string;
        note: string;
      };
    };
    "editor/Question": {
      labels: {
        title: string;
        details: string;
        notification: string;
        email: string;
      };
      placeholders: { title: string; details: string };
      helpers: { title: string };
      errors: {
        title: { required: string; max: string };
        details: { max: string };
      };
      media: {
        upload: string;
        or: string;
        addFromUrl: string;
        requirements: string;
      };
      ok: { title: string; text: string };
      fail: { title: string };
      actions: {
        save: string;
        submit: string;
        edit: string;
        preview: string;
        cancel: string;
        enterQuestion: string;
        addPhotos: string;
        orSignIn: string;
      };
      dialog: {
        title: {
          ask: string;
          edit: string;
          preview: string;
          add: string;
          answer: string;
        };
        preview: string;
        note: string;
      };
    };
    "editor/Media": {
      requirementsTitle: string;
      ctaOrDrag: string;
      confirmDelete: {
        title: string;
        text: string;
        proceed: string;
        cancel: string;
      };
    };
    "editor/Answer": {
      labels: { answer: string };
      placeholders: { answer: string };
      errors: { answer: { required: string; max: string } };
      media: {
        upload: string;
        or: string;
        addFromUrl: string;
        requirements: string;
      };
      ok: { title: string; text: string };
      fail: { title: string };
      actions: { save: string; submit: string; edit: string; cancel: string };
      dialog: {
        title: { answer: string; edit: string; preview: string };
        pending: string;
      };
    };
    "datagrid/_": {
      show: string;
      hide: string;
      facets: {
        category: string;
        brand: string;
        score: string;
        contentType: string;
      };
    };
    "bodies/User": {
      memberFor: string;
      joined: string;
      level: string;
      top: string;
      contributionsOn: string;
      reputation: { level: string; ctaLearn: string; ctaLearnHref: string };
      levels: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
      };
      skills: {
        text: { full: string; short: string };
        image: { full: string; short: string };
        pdf: { full: string; short: string };
        qa: { full: string; short: string };
        review: { full: string; short: string };
        news: { full: string; short: string };
        video: { full: string; short: string };
      };
      card: {
        actions: { profile: string; contributions: string; chat: string };
      };
    };
    "bodies/SdkShopSourceForm": {
      labels: {
        name: string;
        locationTypeId: string;
        fileTypeId: string;
        ftpHost: string;
        ftpUser: string;
        ftpPassword: string;
        ftpFile: string;
        sourceUrl: string;
        fileDirectory: string;
        xmlNamespace: string;
        xmlProductPath: string;
        csvEncoding: string;
        csvSeperator: string;
        lang: string;
        fileGzipped: string;
        active: string;
      };
      placeholders: {
        name: string;
        locationTypeId: string;
        fileTypeId: string;
        lang: string;
      };
      errors: {};
      ok: { title: string };
      save: string;
      password: { change: string; undo: string };
    };
    "bodies/ReviewsStats": {
      error: string;
      count: string;
      scores: string;
      stars: string;
      empty: { title: string; cta: string };
    };
    "bodies/Review": {
      writtenBy: string;
      anonymous: string;
      expand: string;
      collapse: string;
      expandProsCons: string;
      report: string;
      ownStatus: { pending: string };
      edit: { open: string; editing: string; close: string };
    };
    "bodies/QnA": {
      prefix: {
        question: { short: string; full: string };
        answer: { short: string; full: string };
      };
      info: {
        own_question: string;
        question: string;
        own_answer: string;
        answer: string;
        answers: string;
        askedBy: string;
        anonymous: string;
      };
      ownStatus: {
        pending: { questions: string; question: string; answer: string };
      };
      actions: {
        answer: string;
        answerOwn: string;
        moreAnswers: string;
        edit: {
          question: { open: string; editing: string; close: string };
          answer: { open: string; editing: string; close: string };
        };
        remove: { question: string; answer: string };
      };
      search: {
        noMatchFilters: string;
        noMatchQuery: string;
        iAnswered: { label: string; all: string; iAnswered: string };
        iAsked: { label: string; all: string; iAsked: string };
        answered: {
          label: string;
          all: string;
          answered: string;
          unanswered: string;
        };
      };
      guidelines: {
        btn: string;
        title: string;
        intro: string;
        list: string[];
        avoid: { title: string; text: string };
      };
    };
    "bodies/NotificationType": {
      DataExportDownloadReady: { title: string; cta: string };
      DataExportReadyForPayment: { title: string; cta: string };
      FirstUserLogin: { title: string; cta: string };
      Unknown: { title: string; cta: string };
    };
    "bodies/Notification": {
      titleMany: string;
      titleSingle: string;
      badgeNew: string;
      markAllRead: string;
      markRead: string;
      empty: string;
      previous: string;
      loading: string;
      period: { today: string; yesterday: string; earlier: string };
      tabs: { all: string; unread: string };
    };
    "bodies/News": { publishedBy: string };
    "bodies/DataExportDownloadForm": {
      labels: { templateId: string; format: string };
      options: { format: { json: string; csv: string; xlsx: string } };
      placeholders: { templateId: string };
      helpers: { templateId: string };
      errors: {
        templateId: { required: string };
        format: { required: string };
      };
      submit: string;
      fail: string;
    };
    "bodies/DataExportDownloadDialog": {
      refresh: { alert: string; readMore: string; more: string; btn: string };
      download: { title: string; text: string; btn: string };
      downloaded: { link: string; title: string; text: string[]; btn: string };
    };
    "bodies/DataExport": {
      title: string;
      status: {
        processing: string;
        readyForPayment: string;
        ready: string;
        archived: string;
        cancelled: string;
      };
    };
    "bodies/Changeset": {
      status: { Approved: string; Pending: string; Declined: string };
      titles: {
        text: string;
        text_title: string;
        text_description: string;
        reasonToBuy: string;
        specs: string;
        review: string;
        prosCons: string;
        image: string;
        video: string;
        pdf: string;
        news: string;
        qa: string;
        question: string;
        answer: string;
        unsupported: string;
      };
      media: { media: string; image: string; video: string; pdf: string };
      labels: {
        text: {
          Title: string;
          Description: string;
          Value: string;
          Pros: string;
          Cons: string;
        };
        review: {
          Score: string;
          Title: string;
          Value: string;
          CompanyName: string;
          Pros: string;
          Cons: string;
          pro: string;
          con: string;
        };
        news: { Url: string };
        question: { Title: string; Details: string };
        answer: { Answer: string };
      };
      author: { anonymous: string };
      summary: {
        title_description: string;
        title_description_specs: string;
        review: string;
        news: string;
        question: string;
        answers: string;
        entries: string;
        unknown: string;
      };
      recap: {
        title: string;
        description: string;
        specs: string;
        image: string;
        video: string;
        pdf: string;
        review: string;
        news: string;
        qa: string;
        question: string;
        answer: string;
      };
      sentences: { done: string; doneAndTranslated: string };
      actions: {
        addition: { pastVerb: string; changes: string };
        removal: { pastVerb: string; changes: string };
        update: { pastVerb: string; changes: string };
        translation: { pastVerb: string; changes: string };
      };
      changes: string;
      and: string;
    };
    "stream/blocks/product": {
      ui: {
        loading: string;
        empty: { text: string; hide: string };
        error: { text: string; hide: string };
      };
      settings: { show_title: { label: string } };
    };
    "stream/blocks/product-videos": {
      meta: { name: string; shortName: string };
      ui: { title: string; more: string; less: string };
      settings: {};
    };
    "stream/blocks/product-specifications": {
      meta: { name: string; shortName: string };
      ui: { title: string; more: string; less: string };
      settings: {};
    };
    "stream/blocks/product-reviews": {
      meta: { name: string; shortName: string };
      ui: { title: string; writtenBy: string };
      settings: {
        perPage: { label: string; info: string };
        starColor: { label: string };
        summaryBg: { label: string };
        scoresLineBg: { label: string };
        scoresLineFg: { label: string; info: string };
        scoresLineHeight: { label: string };
        proIconColor: { label: string };
        conIconColor: { label: string };
      };
    };
    "stream/blocks/product-reasons-to-buy": {
      meta: { name: string; shortName: string };
      ui: { title: string; more: string; less: string };
      settings: { bg: { label: string } };
    };
    "stream/blocks/product-qa": {
      meta: { name: string; shortName: string };
      ui: {
        title: string;
        questionInfo: string;
        questionWhen: string;
        answerInfo: string;
        answerWhen: string;
        answerPre: string;
        noAnswers: string;
        loadMore: string;
      };
      settings: {
        questionsPerPage: { label: string; info: string };
        answersPerPage: { label: string; info: string };
        showAuthors: { label: string; info: string };
      };
    };
    "stream/blocks/product-pros-cons": {
      meta: { name: string; shortName: string };
      ui: { title: string };
      settings: {
        proIconColor: { label: string };
        conIconColor: { label: string };
      };
    };
    "stream/blocks/product-pdf": {
      meta: { name: string; shortName: string };
      ui: { title: string };
      settings: {};
    };
    "stream/blocks/product-images": {
      meta: { name: string; shortName: string };
      ui: { title: string; more: string; less: string };
      settings: {};
    };
    "stream/blocks/product-description": {
      meta: { name: string; shortName: string };
      ui: { title: string; more: string; less: string };
      settings: {
        lines: { label: string; info: string };
        font_size: { label: string; info: string };
        line_height: { label: string; info: string };
      };
    };
  }
}

