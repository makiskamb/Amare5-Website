export type Lang = "en" | "gr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      villas: "Villas",
      architecture: "Architecture",
      experiences: "Experiences",
      dining: "Dining",
      gallery: "Gallery",
      contact: "Contact",
      bookNow: "Book Now",
      close: "Close",
    },
    hero: {
      location: "Thassos, Greece",
      tagline: "Five boutique villas embracing the sea, just steps from the beach",
      discover: "Discover",
    },
    about: {
      label: "Welcome to",
      title: "A Seaside Sanctuary",
      p1: "A complex of five boutique residences, ideally oriented to embrace the stunning sea views, just a few steps from the beach. Set on the hillside of Limenaria, they blend seamlessly with the natural landscape.",
      p2: "Designed to minimize their visual impact, the residences — with their stone-built walls and earthy tones — create an unbroken connection with the environment. Each villa features a private pool, outdoor lounge with wooden pergolas, and panoramic views, offering an unparalleled experience of serenity and luxury.",
      cta: "Explore the Villas",
    },
    accommodation: {
      label: "5 Boutique Villas",
      title1: "The Definition of Luxury",
      title2: "by the Sea",
    },
    architecture: {
      label: "Design Philosophy",
      title1: "Where Architecture",
      title2: "Meets Nature",
      body: "With a refined palette of stone, natural plaster, and wood, Amare5 expresses a deep connection between architecture and nature, redefining life by the sea.",
      materialsLabel: "Materials",
      materials: ["Natural Stone", "Local Wood", "Earth Plaster", "Handmade Details"],
    },
    dining: {
      label: "Culinary",
      title1: "Al Fresco",
      title2: "Dining",
      body: "Savor the flavors of the Mediterranean under wooden pergolas, surrounded by stone and nature. Fresh local ingredients, Thassos honey, handpicked herbs, and the finest olive oil create an unforgettable culinary journey steps from the Aegean.",
      breakfast: "Breakfast",
      dinner: "Dinner",
    },
    experiences: {
      label: "Live Your Story",
      title: "Experiences",
      items: [
        { title: "Beach & Sea", desc: "Crystal clear waters just steps away" },
        { title: "Private Pools", desc: "Each villa with its own infinity pool" },
        { title: "Nature Walks", desc: "Pine forests & coastal trails" },
        { title: "Local Cuisine", desc: "Thassos honey, olive oil & wine" },
      ],
      poolsCaption: "Private Pools & Sea Views",
      sunsetCaption: "Golden Hour at Limenaria",
    },
    gallery: {
      label: "Gallery",
      title: "Moments of Amare",
      slides: [
        "Five villas cascading toward the Aegean",
        "Beachfront cabanas and stone-built residences",
        "Sunken lounge with fire pit amid natural gardens",
        "Private infinity pools with panoramic sea views",
        "Al fresco dining under the wooden pergola",
      ],
    },
    footer: {
      stayInTouch: "Stay In Touch",
      emailPlaceholder: "Your email",
      subscribe: "Subscribe",
      locationLabel: "Location",
      locationLine1: "Limenaria, Thassos",
      locationLine2: "64002, Greece",
      contactLabel: "Contact",
      followUsLabel: "Follow Us",
      privacyPolicy: "Privacy Policy",
      cookiePolicy: "Cookie Policy",
      terms: "Terms & Conditions",
      copyright: "2026 © Amare5 Boutique Villas, Thassos. All rights reserved.",
    },
    villas: {
      thalassa: {
        name: "Villa Thalassa",
        slug: "thalassa",
        desc: "Private pool · Sea view · 85m²",
        tagline: "Where the sea meets your dreams",
        details:
          "Perched at the edge of the complex with uninterrupted views of the Aegean, Villa Thalassa is the ultimate expression of seaside luxury. Named after the ancient Greek goddess of the sea, this villa offers a seamless connection between indoor comfort and the endless blue horizon.",
        details2:
          "The open-plan living area flows out onto a generous terrace, where the infinity pool seems to merge with the Aegean below. Natural stone walls, bleached linen, and hand-carved wooden accents create an atmosphere of serene Mediterranean elegance.",
        features: [
          "85m² interior",
          "Private infinity pool",
          "Panoramic sea view",
          "King-size bedroom",
          "Outdoor dining terrace",
          "Stone-built bathroom",
        ],
      },
      petra: {
        name: "Villa Petra",
        slug: "petra",
        desc: "Private pool · Garden view · 78m²",
        tagline: "Stone, earth and the scent of pine",
        details:
          "Villa Petra takes its name from the local stone that defines its character. Nestled within a lush garden setting, it offers a sense of complete privacy and connection with the natural world. Smooth stone walls and terracotta floors create a warm, earthy atmosphere.",
        details2:
          "A winding garden path leads to the private pool terrace, shaded by a timber pergola draped in jasmine. The interior, with its earthen palette and artisan furnishings, feels like a secret haven carved from the hillside itself.",
        features: [
          "78m² interior",
          "Private pool",
          "Garden view",
          "King-size bedroom",
          "Shaded pergola terrace",
          "Outdoor shower",
        ],
      },
      elia: {
        name: "Villa Elia",
        slug: "elia",
        desc: "Private pool · Panoramic view · 92m²",
        tagline: "The grand panorama of the Aegean",
        details:
          "The largest of the five villas, Villa Elia — named after the ancient olive tree — commands a breathtaking 180° panoramic view of the sea and coastline. Its generous proportions and timeless design make it the perfect retreat for those seeking the pinnacle of Mediterranean luxury.",
        details2:
          "A wide, wrap-around terrace with an elongated infinity pool stretches across the full width of the villa, creating an uninterrupted dialogue between architecture and horizon. The indoor kitchen opens fully to the outdoor dining space, making every meal a celebration.",
        features: [
          "92m² interior",
          "Private infinity pool",
          "180° panoramic view",
          "King-size bedroom + daybed",
          "Wrap-around lounge terrace",
          "Outdoor kitchen & dining",
        ],
      },
      helios: {
        name: "Villa Helios",
        slug: "helios",
        desc: "Private pool · Sea view · 88m²",
        tagline: "Bathed in golden Mediterranean light",
        details:
          "Oriented to capture the first light of dawn and the golden hues of sunset, Villa Helios is a sun-drenched sanctuary. Named after the sun god of Greek mythology, it features floor-to-ceiling glass panels that flood the interior with natural light and frame the Aegean horizon.",
        details2:
          "The hammam bathroom, clad entirely in hand-polished Thasian marble, offers a spa-like retreat within the villa. A dedicated sunbathing deck extends from the pool, perfectly positioned to follow the arc of the sun throughout the day.",
        features: [
          "88m² interior",
          "Private pool",
          "Direct sea view",
          "King-size bedroom",
          "Sunbathing terrace",
          "Hammam bathroom",
        ],
      },
      selene: {
        name: "Villa Selene",
        slug: "selene",
        desc: "Private pool · Hillside view · 80m²",
        tagline: "Serenity under the stars",
        details:
          "Nestled into the hillside for maximum privacy, Villa Selene — the moon goddess — offers a mystical sense of seclusion. As the evening falls, the hillside comes alive with the scent of wild herbs and the soft glow of the stars above the Aegean.",
        details2:
          "The private fire pit terrace makes Villa Selene unique among the five. Designed for evenings under the canopy of stars, with a custom-built stone seating area and views that stretch far across the Aegean, it is an invitation to slow down and breathe.",
        features: [
          "80m² interior",
          "Private pool",
          "Hillside & sea view",
          "King-size bedroom",
          "Stargazing terrace",
          "Outdoor fire pit",
        ],
      },
    },
    pages: {
      villas: {
        heroTitle: "Our Villas",
        heroSubtitle: "Private Residences",
        intro:
          "Five meticulously designed boutique villas, each with its own character, private pool, and panoramic views. Choose your sanctuary.",
        bookVilla: "Book This Villa",
        viewAll: "All Villas",
        featuresLabel: "Features",
        exploreVilla: "Explore Villa",
      },
      architecture: {
        heroTitle: "Architecture",
        heroSubtitle: "Design Philosophy",
        intro:
          "At Amare5, architecture is an act of listening — to the landscape, to the light, to the rhythm of the sea.",
        sections: [
          {
            title: "Harmony with the Landscape",
            body: "Every element of Amare5's design was conceived to honour the natural beauty of Thassos. The villas cascade down the hillside like a natural extension of the terrain, their flat rooftops serving as elevated terraces that merge seamlessly with the sky. From the Aegean, they are almost invisible, absorbed into the hillside as if they had always been there.",
          },
          {
            title: "Materials & Craftsmanship",
            body: "Local stone harvested from the surrounding landscape, hand-applied earth plaster, and centuries-old woodworking techniques come together in a refined palette. Each surface tells a story of the island and its people — the warmth of the stone, the texture of the plaster, the grain of the wood. Every detail is considered, every finish is handmade.",
          },
          {
            title: "Indoor / Outdoor Living",
            body: "The boundary between interior and exterior dissolves at Amare5. Generous glass panels, pergola-shaded terraces, and seamlessly flowing levels blur the line between architecture and nature, making every room feel open to the world. The private pools are designed as extensions of the living space, not additions to it.",
          },
          {
            title: "Sustainability & Place",
            body: "Amare5 was built with a deep respect for Thassos and its ecosystem. Locally sourced materials, passive cooling design, and minimal site intervention ensure that the complex leaves the lightest possible footprint. The architecture does not compete with the landscape — it belongs to it.",
          },
        ],
        materialsTitle: "Materials",
        materials: [
          { name: "Natural Stone", desc: "Sourced from the surrounding Thassos hillside" },
          { name: "Earth Plaster", desc: "Hand-applied, natural pigment finish" },
          { name: "Local Timber", desc: "Pergolas, joinery and furnishings" },
          { name: "Thasian Marble", desc: "Bathrooms and pool surrounds" },
        ],
      },
      dining: {
        heroTitle: "Dining",
        heroSubtitle: "Culinary",
        intro:
          "A culinary journey rooted in the flavours of the Aegean, crafted with the finest local ingredients.",
        sections: [
          {
            title: "Breakfast by the Sea",
            body: "Begin each morning with a seasonal breakfast served on your private terrace. Freshly baked bread, local honey, Thassos olives, and cold-pressed olive oil, accompanied by the sound of the sea. Our breakfasts change with the seasons, reflecting what is freshest from the island's producers and growers.",
          },
          {
            title: "Al Fresco Dinners",
            body: "As the sun sets over the Aegean, our private dining experience comes to life under the wooden pergolas. A rotating menu inspired by the Mediterranean, featuring fresh fish from local fishermen, vine-ripened tomatoes, aromatic mountain herbs, and the finest Thassos olive oil. Dinner at Amare5 is not just a meal — it is a ritual.",
          },
          {
            title: "In-Villa Dining",
            body: "For a more intimate experience, our culinary team can bring the full Amare5 dining experience directly to your villa. From a romantic candlelit dinner to a family feast under the stars, every meal is a celebration of the Mediterranean table, prepared with passion and served with care.",
          },
        ],
        breakfastTime: "08:00 — 11:00",
        dinnerTime: "19:00 — 23:00",
        breakfast: "Breakfast",
        dinner: "Dinner",
        specialDietary: "Dietary requirements",
        specialDietaryNote: "We cater to all dietary requirements. Please inform us of any allergies or preferences at the time of booking.",
      },
      experiences: {
        heroTitle: "Experiences",
        heroSubtitle: "Live Your Story",
        intro:
          "Every moment at Amare5 is an opportunity to immerse yourself in the natural beauty, culture and flavours of Thassos.",
        items: [
          {
            title: "Private Beach Access",
            desc: "Just steps from the complex, the crystalline waters of the Aegean await. Enjoy complimentary sun beds and umbrellas on our private beach stretch, with towel service and cold drinks delivered throughout the day.",
          },
          {
            title: "Infinity Pool Retreats",
            desc: "Each villa features its own private infinity pool, designed to blend seamlessly with the sea horizon. Spend leisurely days under the Mediterranean sun, surrounded by the scent of pine and salt.",
          },
          {
            title: "Nature & Hiking",
            desc: "Thassos is crisscrossed with ancient paths through dense pine forests, past waterfalls, and along dramatic clifftops. Our concierge can arrange guided walks tailored to your pace and interest.",
          },
          {
            title: "Water Sports",
            desc: "From kayaking along the coastline to sailing at sunset, our water sports centre offers a full range of activities for every level of adventure — snorkelling, paddleboarding, and boat excursions to secluded coves.",
          },
          {
            title: "Local Wine & Spirits",
            desc: "Discover the unique flavours of Thassos through curated tastings of local wines, tsipouro, and honey spirits — all sourced from family producers on the island, guided by our sommelier.",
          },
          {
            title: "Spa & Wellness",
            desc: "Our in-villa spa treatments bring the healing traditions of the Mediterranean to your doorstep. From aromatic olive oil massages to hot stone therapy and hammam rituals, relaxation is elevated to an art.",
          },
        ],
      },
      gallery: {
        heroTitle: "Gallery",
        heroSubtitle: "Moments of Amare",
        intro: "A visual journey through the architecture, landscapes, and moments that define Amare5.",
      },
      contact: {
        heroTitle: "Contact",
        heroSubtitle: "Get In Touch",
        intro:
          "We'd love to welcome you to Amare5. Reach out to us for reservations, enquiries, or to simply learn more about life by the sea in Thassos.",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          dates: "Preferred Dates",
          guests: "Number of Guests",
          villaLabel: "Villa Preference",
          message: "Message",
          submit: "Send Enquiry",
          success: "Thank you for your enquiry. We will be in touch shortly.",
        },
        selectVilla: "Select a villa (optional)",
        orContact: "Or contact us directly",
        reachUs: "Reach Us",
        hours: "Office Hours",
        hoursValue: "Monday – Sunday, 09:00 – 20:00 (EEST)",
      },
    },
  },

  gr: {
    nav: {
      home: "Αρχική",
      villas: "Βίλες",
      architecture: "Αρχιτεκτονική",
      experiences: "Εμπειρίες",
      dining: "Γαστρονομία",
      gallery: "Γκαλερί",
      contact: "Επικοινωνία",
      bookNow: "Κράτηση",
      close: "Κλείσιμο",
    },
    hero: {
      location: "Θάσος, Ελλάδα",
      tagline: "Πέντε boutique βίλες που αγκαλιάζουν τη θάλασσα, λίγα βήματα από την παραλία",
      discover: "Ανακαλύψτε",
    },
    about: {
      label: "Καλωσήρθατε στο",
      title: "Ένα Καταφύγιο δίπλα στη Θάλασσα",
      p1: "Ένα σύμπλεγμα πέντε boutique κατοικιών, ιδανικά προσανατολισμένων για να αγκαλιάζουν την εκπληκτική θέα στη θάλασσα, λίγα μόλις βήματα από την παραλία. Χτισμένες στην πλαγιά της Λιμενάριας, εντάσσονται αρμονικά στο φυσικό τοπίο.",
      p2: "Σχεδιασμένες για να ελαχιστοποιούν την οπτική τους επίδραση, οι κατοικίες — με τους πέτρινους τοίχους και τις γήινες αποχρώσεις — δημιουργούν μια αδιάσπαστη σύνδεση με το περιβάλλον. Κάθε βίλα διαθέτει ιδιωτική πισίνα, υπαίθριο χώρο καθισμάτων με ξύλινες πέργκολες και πανοραμική θέα.",
      cta: "Εξερευνήστε τις Βίλες",
    },
    accommodation: {
      label: "5 Boutique Βίλες",
      title1: "Ο Ορισμός της Πολυτέλειας",
      title2: "δίπλα στη Θάλασσα",
    },
    architecture: {
      label: "Φιλοσοφία Σχεδιασμού",
      title1: "Όπου η Αρχιτεκτονική",
      title2: "Συναντά τη Φύση",
      body: "Με μια εκλεπτυσμένη παλέτα πέτρας, φυσικού σοβά και ξύλου, το Amare5 εκφράζει μια βαθιά σύνδεση μεταξύ αρχιτεκτονικής και φύσης, επαναπροσδιορίζοντας τη ζωή δίπλα στη θάλασσα.",
      materialsLabel: "Υλικά",
      materials: ["Φυσική Πέτρα", "Τοπικό Ξύλο", "Επίχρισμα Γης", "Χειροποίητες Λεπτομέρειες"],
    },
    dining: {
      label: "Γαστρονομία",
      title1: "Γεύματα στον",
      title2: "Ανοιχτό Αέρα",
      body: "Απολαύστε τις γεύσεις της Μεσογείου κάτω από ξύλινες πέργκολες, περιτριγυρισμένοι από πέτρα και φύση. Φρέσκα τοπικά υλικά, μέλι Θάσου, αρωματικά βότανα και εκλεκτό ελαιόλαδο δημιουργούν ένα αξέχαστο γαστρονομικό ταξίδι.",
      breakfast: "Πρωινό",
      dinner: "Δείπνο",
    },
    experiences: {
      label: "Ζήστε την Ιστορία σας",
      title: "Εμπειρίες",
      items: [
        { title: "Παραλία & Θάλασσα", desc: "Κρυστάλλινα νερά λίγα βήματα μακριά" },
        { title: "Ιδιωτικές Πισίνες", desc: "Κάθε βίλα με τη δική της πισίνα απείρου" },
        { title: "Βόλτες στη Φύση", desc: "Πευκοδάση & παράκτια μονοπάτια" },
        { title: "Τοπική Κουζίνα", desc: "Μέλι Θάσου, ελαιόλαδο & κρασί" },
      ],
      poolsCaption: "Ιδιωτικές Πισίνες & Θέα στη Θάλασσα",
      sunsetCaption: "Χρυσή Ώρα στη Λιμενάρια",
    },
    gallery: {
      label: "Γκαλερί",
      title: "Στιγμές Amare",
      slides: [
        "Πέντε βίλες που κατηφορίζουν προς το Αιγαίο",
        "Cabanas παραλίας και πέτρινες κατοικίες",
        "Βυθισμένος χώρος καθισμάτων με εστία",
        "Ιδιωτικές πισίνες απείρου με πανοραμική θέα",
        "Γεύμα στον ανοιχτό αέρα κάτω από πέργκολα",
      ],
    },
    footer: {
      stayInTouch: "Μείνετε σε Επαφή",
      emailPlaceholder: "Το email σας",
      subscribe: "Εγγραφή",
      locationLabel: "Τοποθεσία",
      locationLine1: "Λιμενάρια, Θάσος",
      locationLine2: "64002, Ελλάδα",
      contactLabel: "Επικοινωνία",
      followUsLabel: "Ακολουθήστε μας",
      privacyPolicy: "Πολιτική Απορρήτου",
      cookiePolicy: "Πολιτική Cookies",
      terms: "Όροι & Προϋποθέσεις",
      copyright: "2026 © Amare5 Boutique Villas, Θάσος. Με επιφύλαξη παντός δικαιώματος.",
    },
    villas: {
      thalassa: {
        name: "Βίλα Θάλασσα",
        slug: "thalassa",
        desc: "Ιδιωτική πισίνα · Θέα θάλασσα · 85τ.μ.",
        tagline: "Εκεί που η θάλασσα συναντά τα όνειρά σας",
        details:
          "Τοποθετημένη στην άκρη του συγκροτήματος με αδιάκοπη θέα στο Αιγαίο, η Βίλα Θάλασσα είναι η υπέρτατη έκφραση της παραθαλάσσιας πολυτέλειας. Η βίλα προσφέρει μια αδιάλειπτη σύνδεση μεταξύ εσωτερικής άνεσης και του ατελείωτου γαλάζιου ορίζοντα.",
        details2:
          "Ο ανοιχτός χώρος διαβίωσης ρέει στη βεράντα, όπου η πισίνα απείρου φαίνεται να συγχωνεύεται με το Αιγαίο. Τοίχοι από φυσική πέτρα, λευκό λινό και ξύλινες λεπτομέρειες δημιουργούν μια ατμόσφαιρα γαλήνιας μεσογειακής κομψότητας.",
        features: [
          "85τ.μ. εσωτερικός χώρος",
          "Ιδιωτική πισίνα απείρου",
          "Πανοραμική θέα θάλασσα",
          "King-size κρεβάτι",
          "Βεράντα τραπεζαρίας",
          "Πέτρινο μπάνιο",
        ],
      },
      petra: {
        name: "Βίλα Πέτρα",
        slug: "petra",
        desc: "Ιδιωτική πισίνα · Θέα κήπο · 78τ.μ.",
        tagline: "Πέτρα, χώμα και άρωμα πεύκου",
        details:
          "Η Βίλα Πέτρα παίρνει το όνομά της από την τοπική πέτρα που ορίζει τον χαρακτήρα της. Χωμένη σε ένα καταπράσινο κήπο, προσφέρει μια αίσθηση πλήρους ιδιωτικότητας και σύνδεσης με τη φύση.",
        details2:
          "Ένα μονοπάτι μέσα από τον κήπο οδηγεί στη βεράντα της ιδιωτικής πισίνας, σκιασμένη από μια πέργκολα γιασεμί. Το εσωτερικό, με τη γήινη παλέτα και τα χειροτεχνικά έπιπλα, μοιάζει με μυστικό καταφύγιο λαξευμένο στην πλαγιά.",
        features: [
          "78τ.μ. εσωτερικός χώρος",
          "Ιδιωτική πισίνα",
          "Θέα κήπο",
          "King-size κρεβάτι",
          "Σκιερή βεράντα πέργκολα",
          "Υπαίθριο ντους",
        ],
      },
      elia: {
        name: "Βίλα Ελιά",
        slug: "elia",
        desc: "Ιδιωτική πισίνα · Πανοραμική θέα · 92τ.μ.",
        tagline: "Το μεγάλο πανόραμα του Αιγαίου",
        details:
          "Η μεγαλύτερη από τις πέντε βίλες, η Βίλα Ελιά — που πήρε το όνομά της από το αρχαίο ελαιόδεντρο — έχει εκπληκτική πανοραμική θέα 180° στη θάλασσα και την ακτογραμμή. Οι μεγάλες διαστάσεις και ο διαχρονικός σχεδιασμός της την καθιστούν ιδανική καταφύγιο.",
        details2:
          "Μια φαρδιά βεράντα που αγκαλιάζει ολόκληρο το πλάτος της βίλας, με επιμήκη πισίνα απείρου, δημιουργεί έναν αδιάκοπο διάλογο μεταξύ αρχιτεκτονικής και ορίζοντα. Η εσωτερική κουζίνα ανοίγει πλήρως στον υπαίθριο χώρο φαγητού.",
        features: [
          "92τ.μ. εσωτερικός χώρος",
          "Ιδιωτική πισίνα απείρου",
          "Πανοραμική θέα 180°",
          "King-size κρεβάτι + daybed",
          "Βεράντα καθισμάτων",
          "Υπαίθρια κουζίνα & τραπεζαρία",
        ],
      },
      helios: {
        name: "Βίλα Ήλιος",
        slug: "helios",
        desc: "Ιδιωτική πισίνα · Θέα θάλασσα · 88τ.μ.",
        tagline: "Μπανθισμένη στο χρυσό μεσογειακό φως",
        details:
          "Προσανατολισμένη να αιχμαλωτίζει το πρώτο φως της αυγής και τις χρυσές αποχρώσεις του ηλιοβασιλέματος, η Βίλα Ήλιος είναι ένα ηλιόλουστο καταφύγιο. Διαθέτει γυάλινα πανέλα που πλημμυρίζουν τον εσωτερικό χώρο με φυσικό φως.",
        details2:
          "Το χαμάμ μπάνιο, ντυμένο ολόκληρο με γυαλισμένο μάρμαρο Θάσου, προσφέρει ένα spa εντός της βίλας. Μια αποκλειστική βεράντα ηλιοθεραπείας εκτείνεται από την πισίνα, τοποθετημένη ιδανικά για να ακολουθεί την τροχιά του ήλιου.",
        features: [
          "88τ.μ. εσωτερικός χώρος",
          "Ιδιωτική πισίνα",
          "Άμεση θέα θάλασσα",
          "King-size κρεβάτι",
          "Βεράντα ηλιοθεραπείας",
          "Χαμάμ μπάνιο",
        ],
      },
      selene: {
        name: "Βίλα Σελήνη",
        slug: "selene",
        desc: "Ιδιωτική πισίνα · Θέα λόφο · 80τ.μ.",
        tagline: "Γαλήνη κάτω από τα αστέρια",
        details:
          "Χωμένη στην πλαγιά για μέγιστη ιδιωτικότητα, η Βίλα Σελήνη — η θεά της σελήνης — προσφέρει μια μυστηριακή αίσθηση απομόνωσης. Καθώς πέφτει το βράδυ, η πλαγιά ζωντανεύει με το άρωμα αγριόχορτων και το απαλό φως των αστεριών.",
        details2:
          "Η ιδιωτική εστία στη βεράντα κάνει τη Βίλα Σελήνη μοναδική ανάμεσα στις πέντε. Σχεδιασμένη για βραδιές κάτω από τον ουρανό, με χειροποίητο πέτρινο χώρο καθισμάτων και θέα που εκτείνεται μακριά πάνω από το Αιγαίο.",
        features: [
          "80τ.μ. εσωτερικός χώρος",
          "Ιδιωτική πισίνα",
          "Θέα λόφου & θάλασσα",
          "King-size κρεβάτι",
          "Βεράντα αστροθέασης",
          "Υπαίθρια εστία",
        ],
      },
    },
    pages: {
      villas: {
        heroTitle: "Οι Βίλες μας",
        heroSubtitle: "Ιδιωτικές Κατοικίες",
        intro:
          "Πέντε με επιμέλεια σχεδιασμένες boutique βίλες, η καθεμία με τον δικό της χαρακτήρα, ιδιωτική πισίνα και πανοραμική θέα. Διαλέξτε το καταφύγιό σας.",
        bookVilla: "Κράτηση Βίλας",
        viewAll: "Όλες οι Βίλες",
        featuresLabel: "Χαρακτηριστικά",
        exploreVilla: "Εξερευνήστε τη Βίλα",
      },
      architecture: {
        heroTitle: "Αρχιτεκτονική",
        heroSubtitle: "Φιλοσοφία Σχεδιασμού",
        intro:
          "Στο Amare5, η αρχιτεκτονική είναι μια πράξη ακρόασης — του τοπίου, του φωτός, του ρυθμού της θάλασσας.",
        sections: [
          {
            title: "Αρμονία με το Τοπίο",
            body: "Κάθε στοιχείο του σχεδιασμού του Amare5 συνελήφθη για να τιμήσει τη φυσική ομορφιά της Θάσου. Οι βίλες κατηφορίζουν στην πλαγιά σαν φυσική προέκταση του εδάφους, με επίπεδες οροφές που λειτουργούν ως υπερυψωμένες βεράντες που συγχωνεύονται με τον ουρανό.",
          },
          {
            title: "Υλικά & Τεχνοτροπία",
            body: "Τοπική πέτρα από το περιβάλλον τοπίο, χειρόπλαστος επίχρισμα γης και αιωνόβιες ξυλουργικές τεχνικές ενώνονται σε μια εκλεπτυσμένη παλέτα. Κάθε επιφάνεια αφηγείται μια ιστορία του νησιού και των ανθρώπων του — η ζεστασιά της πέτρας, η υφή του σοβά, η ίνα του ξύλου.",
          },
          {
            title: "Εσωτερικός / Εξωτερικός Χώρος",
            body: "Τα όρια μεταξύ εσωτερικού και εξωτερικού χώρου εξαφανίζονται στο Amare5. Μεγάλα γυάλινα πανέλα, βεράντες με πέργκολα και ομαλά ροόμενα επίπεδα θολώνουν τη γραμμή μεταξύ αρχιτεκτονικής και φύσης.",
          },
          {
            title: "Βιωσιμότητα & Τόπος",
            body: "Το Amare5 χτίστηκε με βαθύ σεβασμό για τη Θάσο και το οικοσύστημά της. Τοπικά υλικά, παθητικός σχεδιασμός ψύξης και ελάχιστη παρέμβαση στο τοπίο εξασφαλίζουν το ελάχιστο δυνατό αποτύπωμα. Η αρχιτεκτονική δεν ανταγωνίζεται το τοπίο — ανήκει σε αυτό.",
          },
        ],
        materialsTitle: "Υλικά",
        materials: [
          { name: "Φυσική Πέτρα", desc: "Από τους γύρω λόφους της Θάσου" },
          { name: "Επίχρισμα Γης", desc: "Χειροποίητο, με φυσική χρωστική" },
          { name: "Τοπικό Ξύλο", desc: "Πέργκολες, ξυλουργική και έπιπλα" },
          { name: "Μάρμαρο Θάσου", desc: "Μπάνια και περιβάλλοντα πισίνας" },
        ],
      },
      dining: {
        heroTitle: "Γαστρονομία",
        heroSubtitle: "Γευστικές Απολαύσεις",
        intro:
          "Ένα γαστρονομικό ταξίδι ριζωμένο στις γεύσεις του Αιγαίου, φτιαγμένο με τα καλύτερα τοπικά υλικά.",
        sections: [
          {
            title: "Πρωινό δίπλα στη Θάλασσα",
            body: "Ξεκινήστε κάθε πρωί με ένα εποχιακό πρωινό σερβιρισμένο στη βεράντα σας. Φρεσκοψημένο ψωμί, τοπικό μέλι, ελιές Θάσου και κρύο ελαιόλαδο, συνοδεία του ήχου της θάλασσας. Τα πρωινά μας αλλάζουν με τις εποχές, αντικατοπτρίζοντας ό,τι είναι πιο φρέσκο.",
          },
          {
            title: "Γεύματα στον Ανοιχτό Αέρα",
            body: "Καθώς ο ήλιος δύει πάνω από το Αιγαίο, η εμπειρία του ιδιωτικού δείπνου ζωντανεύει κάτω από τις ξύλινες πέργκολες. Ένα εναλλασσόμενο μενού εμπνευσμένο από τη Μεσόγειο, με φρέσκο ψάρι από τοπικούς ψαράδες, ντομάτες και αρωματικά βότανα. Το δείπνο στο Amare5 δεν είναι απλώς γεύμα — είναι τελετουργικό.",
          },
          {
            title: "Δείπνο στη Βίλα",
            body: "Για μια πιο οικεία εμπειρία, η γαστρονομική μας ομάδα μπορεί να φέρει την πλήρη εμπειρία γεύματος Amare5 απευθείας στη βίλα σας. Από ένα ρομαντικό δείπνο με κεριά έως μια οικογενειακή γιορτή κάτω από τα αστέρια, κάθε γεύμα είναι μια γιορτή.",
          },
        ],
        breakfastTime: "08:00 — 11:00",
        dinnerTime: "19:00 — 23:00",
        breakfast: "Πρωινό",
        dinner: "Δείπνο",
        specialDietary: "Διατροφικές ανάγκες",
        specialDietaryNote: "Καλύπτουμε όλες τις διατροφικές ανάγκες. Παρακαλούμε ενημερώστε μας για τυχόν αλλεργίες κατά την κράτηση.",
      },
      experiences: {
        heroTitle: "Εμπειρίες",
        heroSubtitle: "Ζήστε την Ιστορία σας",
        intro:
          "Κάθε στιγμή στο Amare5 είναι μια ευκαιρία να βυθιστείτε στη φυσική ομορφιά, τον πολιτισμό και τις γεύσεις της Θάσου.",
        items: [
          {
            title: "Ιδιωτική Πρόσβαση στην Παραλία",
            desc: "Λίγα βήματα από το συγκρότημα, τα κρυστάλλινα νερά του Αιγαίου σας περιμένουν. Απολαύστε ξαπλώστρες και ομπρέλες στην ιδιωτική μας παραλία, με υπηρεσία πετσετών και ψυχρά ροφήματα.",
          },
          {
            title: "Πισίνες Απείρου",
            desc: "Κάθε βίλα διαθέτει τη δική της ιδιωτική πισίνα απείρου, σχεδιασμένη να συγχωνεύεται με τον ορίζοντα της θάλασσας. Περάστε ήρεμες μέρες κάτω από τον μεσογειακό ήλιο.",
          },
          {
            title: "Φύση & Πεζοπορία",
            desc: "Η Θάσος είναι γεμάτη αρχαία μονοπάτια μέσα από πυκνά πευκοδάση, δίπλα σε καταρράκτες και κατά μήκος εντυπωσιακών βραχοκρημνών. Το κονσιέρζ μας μπορεί να οργανώσει ξεναγούμενες βόλτες.",
          },
          {
            title: "Θαλάσσια Σπορ",
            desc: "Από καγιάκ κατά μήκος της ακτής έως ιστιοπλοΐα στο ηλιοβασίλεμα, το κέντρο θαλάσσιων σπορ μας προσφέρει πλήρη γκάμα δραστηριοτήτων — κατάδυση, paddleboard και εκδρομές με σκάφος.",
          },
          {
            title: "Τοπικά Κρασιά & Ποτά",
            desc: "Ανακαλύψτε τις μοναδικές γεύσεις της Θάσου μέσα από επιλεγμένες γευσιγνωσίες τοπικών κρασιών, τσίπουρου και μελιτιτών ποτών — όλα από οικογενειακούς παραγωγούς του νησιού.",
          },
          {
            title: "Σπα & Ευεξία",
            desc: "Οι θεραπείες σπα στη βίλα σας φέρνουν τις θεραπευτικές παραδόσεις της Μεσογείου στην πόρτα σας. Από μασάζ με ελαιόλαδο έως θεραπεία με ζεστές πέτρες και τελετουργίες χαμάμ.",
          },
        ],
      },
      gallery: {
        heroTitle: "Γκαλερί",
        heroSubtitle: "Στιγμές Amare",
        intro: "Ένα οπτικό ταξίδι μέσα από την αρχιτεκτονική, τα τοπία και τις στιγμές που ορίζουν το Amare5.",
      },
      contact: {
        heroTitle: "Επικοινωνία",
        heroSubtitle: "Επικοινωνήστε μαζί μας",
        intro:
          "Θα χαρούμε να σας καλωσορίσουμε στο Amare5. Επικοινωνήστε μαζί μας για κρατήσεις, πληροφορίες ή απλώς για να μάθετε περισσότερα για τη ζωή δίπλα στη θάλασσα στη Θάσο.",
        form: {
          name: "Ονοματεπώνυμο",
          email: "Διεύθυνση Email",
          phone: "Αριθμός Τηλεφώνου",
          dates: "Επιθυμητές Ημερομηνίες",
          guests: "Αριθμός Επισκεπτών",
          villaLabel: "Προτίμηση Βίλας",
          message: "Μήνυμα",
          submit: "Αποστολή Αιτήματος",
          success: "Ευχαριστούμε για το αίτημά σας. Θα επικοινωνήσουμε μαζί σας σύντομα.",
        },
        selectVilla: "Επιλέξτε βίλα (προαιρετικό)",
        orContact: "Ή επικοινωνήστε απευθείας",
        reachUs: "Βρείτε μας",
        hours: "Ώρες Γραφείου",
        hoursValue: "Δευτέρα – Κυριακή, 09:00 – 20:00 (EEST)",
      },
    },
  },
} as const;

export type Translations = typeof translations.en;
