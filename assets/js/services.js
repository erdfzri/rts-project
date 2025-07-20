const services = {
    'video-editor': {
        title: 'Video Editor',
        icon: '<i class="fas fa-film"></i>',
        description: 'Jasa editing video profesional untuk konten sinematik, promosi, dan media sosial dengan color grading tingkat lanjut. Tim kami mengubah footage mentah Anda menjadi cerita visual yang menarik dan memperkuat branding Anda.',
        deliveryTime: '3–7 hari kerja',
        startingPrice: 'Mulai dari Rp300.000',
        popularity: 'Paling Diminati',
        features: [
            'Editing Sinematik',
            'Motion Graphics',
            'Color Grading',
            'Desain Suara',
            'Efek Visual',
            'Resolusi 4K',
            'Format Output Beragam',
            'Bantuan Storyboard'
        ],
        process: [
            { title: 'Diskusi & Perencanaan', description: 'Kami memahami kebutuhan video Anda, membuat konsep, dan menyusun rencana kerja yang tepat.' },
            { title: 'Proses Editing', description: 'Editing profesional dengan integrasi motion graphics, color grading, dan efek audio visual.' },
            { title: 'Revisi & Koreksi', description: 'Kami melakukan revisi berdasarkan masukan Anda hingga hasil sesuai ekspektasi.' },
            { title: 'Finalisasi & Pengiriman', description: 'Video final dikirim sesuai format yang Anda butuhkan.' }
        ],
        tools: [
            { name: 'Premiere Pro', icon: 'assets/img/tools/premiere.png' },
            { name: 'After Effects', icon: 'assets/img/tools/after-effects.png' },
            { name: 'DaVinci Resolve', icon: 'assets/img/tools/davinci.png' },
            { name: 'Final Cut Pro', icon: 'assets/img/tools/final-cut.png' },
            { name: 'Blender', icon: 'assets/img/tools/blender.png' }
        ],
        faqs: [
            { 
                question: 'Format video apa saja yang bisa digunakan?', 
                answer: 'Kami mendukung semua format utama seperti MP4, MOV, AVI, serta format profesional seperti ProRes dan DNxHD.' 
            },
            { 
                question: 'Berapa kali revisi yang didapat?', 
                answer: 'Kami menyediakan revisi tanpa batas hingga Anda puas dengan hasil akhir.' 
            },
            { 
                question: 'Apakah bisa mendapatkan file mentah proyek?', 
                answer: 'Ya, file proyek mentah dapat diberikan berdasarkan permintaan dengan biaya tambahan.' 
            }
        ],
        examples: [
            { 
                title: 'Aftermovie Festival Musik', 
                videoId: 'otHgbeBWizE', // Ganti dengan ID YouTube yang sebenarnya
                thumbnail: 'https://img.youtube.com/vi/otHgbeBWizE/maxresdefault.jpg'
            },
            { 
                title: 'Video Promosi Brand', 
                videoId: '8NSoyBWMvSQ',
                thumbnail: 'https://img.youtube.com/vi/8NSoyBWMvSQ/maxresdefault.jpg'
            },
            { 
                title: 'Film Perjalanan', 
                videoId: 'bXBn7v8OxPw',
                thumbnail: 'https://img.youtube.com/vi/bXBn7v8OxPw/maxresdefault.jpg'
            },
            { 
                title: 'Film Perjalanan', 
                videoId: 'dpa6LDiyQow',
                thumbnail: 'https://img.youtube.com/vi/dpa6LDiyQow/maxresdefault.jpg'
            }
        ]
    },
    'visual-artist': {
        title: 'Visual Artist',
        icon: '<i class="fas fa-paint-brush"></i>',
        description: 'Karya seni visual digital untuk berbagai kebutuhan—poster, ilustrasi, cover, media sosial, dan lainnya. Cocok untuk branding kreatif dan ekspresi artistik.',
        deliveryTime: '2–5 hari kerja',
        startingPrice: 'Mulai dari Rp500.000',
        popularity: 'Favorit Kreator',
        features: [
            'Ilustrasi Kustom',
            'Digital Painting',
            'Cover Album / Buku',
            'Desain Karakter',
            'Komposisi Warna Artistik',
            'Resolusi Tinggi',
            'File Siap Cetak',
            'Hak Penggunaan Komersial'
        ],
        process: [
            { title: 'Diskusi Konsep', description: 'Kami gali ide dan preferensi visual Anda untuk menyusun konsep awal.' },
            { title: 'Pembuatan Sketsa', description: 'Membuat draft ilustrasi awal sesuai gaya yang diinginkan.' },
            { title: 'Detail & Pewarnaan', description: 'Ilustrasi dipoles dengan warna dan detail yang menyatu.' },
            { title: 'Finalisasi', description: 'File akhir dikirim dalam format digital sesuai permintaan.' }
        ],
        tools: [
            { name: 'Procreate', icon: 'assets/img/tools/procreate.png' },
            { name: 'Photoshop', icon: '/img/photoshop.jpg' },
            { name: 'Illustrator', icon: 'assets/img/tools/illustrator.png' },
            { name: 'Krita', icon: 'assets/img/tools/krita.png' }
        ],
        faqs: [
            {
                question: 'Apakah bisa request gaya ilustrasi tertentu?',
                answer: 'Tentu! Anda bisa memberikan referensi atau menjelaskan gaya yang diinginkan.'
            },
            {
                question: 'Bisa digunakan untuk komersial?',
                answer: 'Ya, semua karya bisa digunakan untuk keperluan komersial sesuai kesepakatan.'
            },
            {
                question: 'Format file apa yang akan saya terima?',
                answer: 'Anda akan mendapatkan file dalam format PNG/JPEG dan juga file mentah seperti PSD jika diperlukan.'
            }
        ],
        examples: [
            {
                title: 'Ilustrasi Album Musik',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?...',
                link: 'all-work.html#visual1'
            },
            {
                title: 'Poster Film Independen',
                image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?...',
                link: 'all-work.html#visual2'
            },
            {
                title: 'Desain Karakter Fiksi',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?...',
                link: 'all-work.html#visual3'
            },
            {
                title: 'Desain Karakter Fiksi',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?...',
                link: 'all-work.html#visual3'
            }
        ]
    },
    'visual-jockey': {
        title: 'Visual Jockey (VJ)',
        icon: '<i class="fas fa-lightbulb"></i>',
        description: 'Live visual performance untuk acara, konser, dan klub dengan animasi serta efek real-time. Menyajikan pengalaman visual interaktif yang dinamis dan memukau.',
        deliveryTime: 'On-Demand / Booking Event',
        startingPrice: 'Mulai dari Rp2.000.000 per sesi',
        popularity: 'Top Performer Event',
        features: [
            'Mixing Visual Langsung',
            'Efek Real-Time',
            'Integrasi Musik',
            'Kontrol Resolusi Layar',
            'Loop & Sample Kustom',
            'Sinkronisasi Audio Visual',
            'Visual Interaktif',
            'Mapping Proyeksi'
        ],
        process: [
            { title: 'Konsultasi Event', description: 'Diskusi kebutuhan visual, lokasi acara, dan peralatan.' },
            { title: 'Setup & Integrasi', description: 'Integrasi peralatan VJ dengan sistem visual dan suara.' },
            { title: 'Live Performance', description: 'Visual real-time disesuaikan dengan alur acara dan musik.' },
            { title: 'Backup & Dokumentasi', description: 'Jika diperlukan, hasil pertunjukan dapat direkam dan didokumentasikan.' }
        ],
        tools: [
            { name: 'Resolume', icon: 'assets/img/tools/resolume.png' },
            { name: 'TouchDesigner', icon: 'assets/img/tools/touchdesigner.png' },
            { name: 'MadMapper', icon: 'assets/img/tools/madmapper.png' },
            { name: 'VDMX', icon: 'assets/img/tools/vdmx.png' }
        ],
        faqs: [
            {
                question: 'Apakah visual bisa disesuaikan dengan tema acara?',
                answer: 'Bisa, semua visual dapat disesuaikan berdasarkan mood, warna, dan irama acara Anda.'
            },
            {
                question: 'Apakah perlu membawa peralatan sendiri?',
                answer: 'Kami bisa menggunakan peralatan Anda atau menyediakan perangkat kami sendiri sesuai kesepakatan.'
            },
            {
                question: 'Bisa tampil di lebih dari satu sesi?',
                answer: 'Tentu, kami siap untuk multi-sesi dan event besar, tinggal koordinasikan waktu dan teknisnya.'
            }
        ],
        examples: [
            {
                title: 'VJ Konser Elektronik',
                image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?...',
                link: 'all-work.html#vj1'
            },
            {
                title: 'Visual untuk DJ Set',
                image: 'https://images.unsplash.com/photo-1498772776854-56d9b1cb0362?...',
                link: 'all-work.html#vj2'
            },
            {
                title: 'Live Mapping Stage',
                image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?...',
                link: 'all-work.html#vj3'
            },
             {
                title: 'Live Mapping Stage',
                image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?...',
                link: 'all-work.html#vj3'
            }
        ]
    },
    'ai-content': {
    title: 'Konten AI Kreatif',
    icon: '<i class="fas fa-robot"></i>',
    description: 'Layanan pembuatan konten berbasis kecerdasan buatan (AI) untuk artikel, caption media sosial, ide video, skrip, hingga konten visual. Cocok untuk pelaku bisnis, kreator, dan brand yang ingin efisiensi dalam produksi konten tanpa mengorbankan kualitas.',
    deliveryTime: '1–3 hari kerja',
    startingPrice: 'Mulai dari Rp300.000',
    popularity: 'Solusi Modern',
    features: [
        'Pembuatan Artikel Otomatis',
        'Caption Sosial Media Kreatif',
        'Skrip Video & Podcast',
        'Visual AI (Image Generation)',
        'Optimasi SEO',
        'Penulisan Multibahasa',
        'Gaya Penulisan yang Fleksibel',
        '100% Bisa Diedit Ulang'
    ],
    process: [
        { 
            title: 'Diskusi Kebutuhan', 
            description: 'Kami memahami target audiens, jenis konten yang diinginkan, dan tujuan utama konten Anda.' 
        },
        { 
            title: 'Produksi Konten AI', 
            description: 'Menggunakan teknologi AI seperti ChatGPT, GPT-4, DALL·E, dan lainnya untuk membuat konten berkualitas.' 
        },
        { 
            title: 'Revisi & Penyesuaian', 
            description: 'Kami sesuaikan gaya penulisan, tone, dan hasil konten sesuai masukan Anda.' 
        },
        { 
            title: 'Finalisasi & Pengiriman', 
            description: 'File akhir dikirim dalam format teks, PDF, atau sesuai permintaan Anda.' 
        }
    ],
    tools: [
        { name: 'ChatGPT', icon: 'assets/img/tools/chatgpt.png' },
        { name: 'DALL·E', icon: 'assets/img/tools/dalle.png' },
        { name: 'Grammarly', icon: 'assets/img/tools/grammarly.png' },
        { name: 'Notion AI', icon: 'assets/img/tools/notion.png' },
        { name: 'Copy.ai', icon: 'assets/img/tools/copyai.png' }
    ],
    faqs: [
        {
            question: 'Apakah hasil konten bisa diedit ulang?',
            answer: 'Tentu saja! Semua konten bisa Anda edit atau kembangkan lebih lanjut sesuai kebutuhan brand Anda.'
        },
        {
            question: 'Apakah konten bebas plagiarisme?',
            answer: 'Kami menggunakan AI dengan sistem pengecekan plagiarisme untuk memastikan konten bersih dan orisinal.'
        },
        {
            question: 'Apakah bisa request gaya bahasa tertentu?',
            answer: 'Bisa, kami mendukung penyesuaian gaya formal, santai, profesional, bahkan lucu dan santuy.'
        }
    ],
    examples: [
        {
            title: 'Ide Konten Instagram untuk Brand Fashion',
            image: 'https://images.unsplash.com/photo-1611262588024-d12430b989ad?auto=format&fit=crop&w=1200&q=80',
            link: 'all-work.html#ai1'
        },
        {
            title: 'Artikel SEO untuk Website Produk Digital',
            image: 'https://images.unsplash.com/photo-1519331379826-b2e2a7f74e26?auto=format&fit=crop&w=1200&q=80',
            link: 'all-work.html#ai2'
        },
        {
            title: 'Caption & Hashtag Media Sosial UMKM',
            image: 'https://images.unsplash.com/photo-1610397962084-d08ccf26b40e?auto=format&fit=crop&w=1200&q=80',
            link: 'all-work.html#ai3'
        },
         {
            title: 'Caption & Hashtag Media Sosial UMKM',
            image: 'https://images.unsplash.com/photo-1610397962084-d08ccf26b40e?auto=format&fit=crop&w=1200&q=80',
            link: 'all-work.html#ai3'
        }

    ]
}

    
}


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');
    
    if (serviceId && services[serviceId]) {
        const service = services[serviceId];
        
        // Set basic info
        document.title = `${service.title} | Vision Studio`;
        document.getElementById('service-title').textContent = service.title;
        document.getElementById('service-icon').innerHTML = service.icon;
        document.getElementById('service-description').textContent = service.description;
        document.getElementById('delivery-time').textContent = service.deliveryTime;
        document.getElementById('starting-price').textContent = service.startingPrice;
        document.getElementById('popularity').textContent = service.popularity;
        
        // Features
        const featuresList = document.getElementById('service-features-list');
        featuresList.innerHTML = '';
        service.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            featuresList.appendChild(li);
        });
        
        // Process
        const processSteps = document.getElementById('process-steps');
        processSteps.innerHTML = '';
        service.process.forEach((step, index) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'process-step';
            stepDiv.innerHTML = `
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h4>${step.title}</h4>
                    <p>${step.description}</p>
                </div>
            `;
            processSteps.appendChild(stepDiv);
        });
        
        // Tools
        const toolsGrid = document.getElementById('tools-grid');
        if (toolsGrid && service.tools) {
            toolsGrid.innerHTML = '';
            service.tools.forEach(tool => {
                const toolDiv = document.createElement('div');
                toolDiv.className = 'tool-item';
                toolDiv.innerHTML = `
                    <img src="${tool.icon}" alt="${tool.name}">
                    <p>${tool.name}</p>
                `;
                toolsGrid.appendChild(toolDiv);
            });
        }
        
        // FAQs
        const faqAccordion = document.getElementById('faq-accordion');
        if (faqAccordion && service.faqs) {
            faqAccordion.innerHTML = '';
            service.faqs.forEach(faq => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.innerHTML = `
                    <div class="faq-question">
                        <h4>${faq.question}</h4>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-inner">
                            <p>${faq.answer}</p>
                        </div>
                    </div>
                `;
                faqAccordion.appendChild(faqItem);

                // Accordion toggle
                const question = faqItem.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    faqItem.classList.toggle('active');
                });
            });
        }

        // Examples
        const examplesGrid = document.getElementById('examples-grid');
        if (examplesGrid && service.examples) {
            examplesGrid.innerHTML = '';
            service.examples.forEach(example => {
                const exampleDiv = document.createElement('div');
                exampleDiv.className = 'example-item';
                
                if (example.videoId) {
                    exampleDiv.innerHTML = `
                        <div class="video-container" data-video-id="${example.videoId}">
                            <img src="${example.thumbnail}" alt="${example.title}" class="video-thumbnail">
                            <div class="play-button"><i class="fas fa-play"></i></div>
                            <div class="example-overlay">
                                <h4>${example.title}</h4>
                            </div>
                        </div>
                    `;
                    
                    // Play YouTube video on click
                    exampleDiv.querySelector('.video-container').addEventListener('click', function() {
                        const videoId = this.getAttribute('data-video-id');
                        this.innerHTML = `
                            <iframe width="100%" height="100%" 
                                src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                                encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        `;
                    });

                } else {
                    exampleDiv.innerHTML = `
                        <a href="${example.link}">
                            <img src="${example.image}" alt="${example.title}">
                            <div class="example-overlay">
                                <h4>${example.title}</h4>
                            </div>
                        </a>
                    `;
                }

                examplesGrid.appendChild(exampleDiv);
            });
        }

        // Animate populated elements
        const animateElements = () => {
            const featureItems = document.querySelectorAll('.service-features li');
            featureItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });

            const processItems = document.querySelectorAll('.process-step');
            processItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.2 + 0.1}s`;
            });

            const toolItems = document.querySelectorAll('.tool-item');
            toolItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });

            const exampleItems = document.querySelectorAll('.example-item');
            exampleItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.2 + 0.1}s`;
            });

            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.2 + 0.1}s`;
            });

            // Refresh AOS
            setTimeout(() => {
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            }, 500);
        };

        setTimeout(animateElements, 300);
    }
});
