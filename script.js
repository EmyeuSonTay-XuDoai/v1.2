
// LẤY CÁC PHẦN TỬ
const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");


// HIỆU ỨNG HEADER KHI CUỘN
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        backToTop.classList.add("show");
    } else {
        header.classList.remove("scrolled");
        backToTop.classList.remove("show");
    }
});
 (() => {
  "use strict";

  const root = document.getElementById("mystery-quiz");
  if (!root || root.dataset.ready) return;
  root.dataset.ready = "1";

  const launch = root.querySelector("#mq-launch");
  const overlay = root.querySelector("#mq-overlay");
  const closeBtn = root.querySelector("#mq-close");

  const questionBox = root.querySelector("#mq-question-box");
  const questionText = root.querySelector("#mq-question");
  const answersBox = root.querySelector("#mq-answers");
  const feedback = root.querySelector("#mq-feedback");

  const progressText = root.querySelector("#mq-progress-text");
  const progressFill = root.querySelector("#mq-progress-fill");

  const fogPieces = [...root.querySelectorAll(".mq-fog-piece")];
  const finishBox = root.querySelector("#mq-finish");

  const questions = [
    {
      question: "Câu 1. Thành cổ Sơn Tây được xây dựng vào thời gian nào?",
      options: ["A. Năm 1802", "B. Năm 1882", "C. Năm 1884", "D. Năm 1994"],
      answer: 1
    },
    {
      question: "Câu 2. Nét nổi bật và độc đáo nhất của Thành cổ Sơn Tây là",
      options: ["A. Có hào nước sâu bao bọc xung quanh.", "B. Có 4 cửa thành, quay về 4 hướng Đông – Tây – Nam – Bắc.", "C. Xây bằng đá ong, theo kiểu kiến trúc quân sự vô-băng.", "D. Nơi nghỉ của vua mỗi khi đi tuần thú, Xuân thu nhị kỳ, các quan làm lễ tế."],
      answer: 2
    },
    {
      question: "Câu 3: Một hạng mục tiêu biểu trong Thành cổ Sơn Tây cao 18m, có 50 bậc đá xoáy ốc là",
      options: ["A. Kỳ Đài", "B. Vọng Cung", "C. Đoan Môn", " D. Cổng thành"],
      answer: 0
    },
    {
      question: "Câu 4. Thành cổ Sơn Tây được Nhà nước xếp hạng là Di tích lịch sử - kiến trúc quốc gia thời gian nào?",
      options: ["A. 1984", "B. 2007", "C. 2004", " D. 1994"],
      answer: 3
    }
  ];

  let current = 0;
  let opened = 0;
  let answered = false;

  function resetGame() {
    current = 0;
    opened = 0;
    answered = false;

    fogPieces.forEach(piece => {
      piece.classList.remove("mq-opened");
    });

    questionBox.hidden = false;
    finishBox.hidden = true;

    progressFill.style.width = "0%";
    feedback.textContent = "";
    feedback.className = "mq-feedback";

    renderQuestion();
  }

  function openPopup() {
    resetGame();
    overlay.hidden = false;
    closeBtn.focus();
  }

  function closePopup() {
    overlay.hidden = true;
    launch.focus();
  }

  function updateProgress() {
    progressText.textContent = `Đã trả lời: ${opened} / 4`;
    progressFill.style.width = `${opened * 25}%`;
  }

  function renderQuestion() {
    answered = false;
    feedback.textContent = "";
    feedback.className = "mq-feedback";
    answersBox.innerHTML = "";

    const item = questions[current];
    questionText.textContent = item.question;

    item.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mq-answer";
      btn.textContent = option;

      btn.addEventListener("click", () => {
        checkAnswer(index);
      });

      answersBox.appendChild(btn);
    });

    updateProgress();
  }

  function checkAnswer(selected) {
    if (answered) return;

    const correct = questions[current].answer;

    if (selected !== correct) {
      feedback.textContent = "❌ Chưa đúng! Hãy thử lại.";
      feedback.className = "mq-feedback mq-wrong";
      return;
    }

    answered = true;
    opened++;

    fogPieces[current].classList.add("mq-opened");

    feedback.textContent = "✅ Chính xác!";
    feedback.className = "mq-feedback mq-correct";

    answersBox.innerHTML = "";

    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "mq-answer";
    nextBtn.textContent = current === 3
      ? "Hoàn thành"
      : "Câu tiếp theo ➜";

    nextBtn.addEventListener("click", () => {
      current++;

      if (current === 4) {
        finishGame();
      } else {
        renderQuestion();
      }
    });

    answersBox.appendChild(nextBtn);

    updateProgress();
  }

  function finishGame() {
    questionBox.hidden = true;
    finishBox.hidden = false;
    progressText.textContent = "Đã trả lời: 4 / 4";
    progressFill.style.width = "100%";
  }

  launch.addEventListener("click", openPopup);
  closeBtn.addEventListener("click", closePopup);

  overlay.addEventListener("click", event => {
    if (event.target === overlay) {
      closePopup();
    }
  });

  document.addEventListener("keydown", event => {
    if (!overlay.hidden && event.key === "Escape") {
      closePopup();
    }
  });

  resetGame();

})();

/* =========================================
   1. DỮ LIỆU CÁC HẠNG MỤC DI SẢN
========================================= */

const heritageData = {

    /* -------------------------------------
       HẠNG MỤC 1:
       CỔNG THÀNH VÀ TƯỜNG ĐÁ ONG
    ------------------------------------- */

    congThanh: {

        title: "Cổng thành và tường đá ong",

        paragraphs: [

            `Thành Sơn Tây được triều Nguyễn xây dựng theo kiểu kiến trúc vô - băng (vauban), một dạng kiến trúc thành phòng thủ quân sự của Pháp cuối thế kỉ XVII. Thành có hình tứ giác, tường được xây bằng đá ong. Ở giữa tường được đắp đất, mặt tường thành rộng 3m, chân thành rộng 6m, trên mặt có các chòi canh. Thành có 4 cổng quay ra 4 hướng Nam - Bắc - Đông - Tây, tương ứng với các tên gọi Cửa Tiền, Cửa Hậu, Cửa Tả và Cửa Hữu. `,

            `Đặc biệt, hệ thống tường thành được xây dựng bằng đá ong – loại vật liệu đặc trưng của đất Xứ Đoài, cùng hào nước rộng bao quanh thành cổ đã tạo nên một công trình phòng thủ quân sự kiên cố, vững chắc và độc đáo dưới triều Nguyễn..`

        ],

        value: `Hệ thống cổng thành và tường
        đá ong phản ánh đặc điểm kiến trúc
        quân sự thời Nguyễn, đồng thời thể hiện
        sự sáng tạo trong việc sử dụng vật liệu
        địa phương.`,

        images: [

            {
                src: "images/im",
                caption: "Cổng Thành cổ Sơn Tây",
          
            },

            {
                src: "images/tuong-da-ong.jpg",
                caption: "Tường thành bằng đá ong",
                source: ""
            },

            {
                src: "images/cong-bac.jpg",
                caption: "Cổng Bắc Thành cổ Sơn Tây",
                source: ""
            }

        ]

    },


    /* -------------------------------------
       HẠNG MỤC 2: KỲ ĐÀI
    ------------------------------------- */

    kyDai: {

        title: "Kỳ đài",

        paragraphs: [

            `Nằm trên trục chính của Thành cổ Sơn Tây, Kỳ đài (cột cờ) là một trong những công trình kiến trúc quân sự tiêu biểu được xây dựng dưới triều Nguyễn.
Theo tư liệu lịch sử, Kỳ đài cao khoảng 18 m, có thân tháp hình bát giác, bên trong là hệ thống 50 bậc đá xoáy ốc dẫn lên đỉnh. Không chỉ là nơi treo cờ thể hiện uy quyền của triều đình, Kỳ đài còn giữ vai trò quan sát, canh phòng, bảo vệ tòa thành. Phía trước Kỳ đài là hai giếng ngọc ở hai bên, nơi bóng cột cờ in bóng xuống mặt nước, góp phần tạo nên không gian kiến trúc hài hoà, uy nghi và cổ kính.
Trải qua những biến động lịch sử, công trình xưa đã bị phá hủy nghiêm trọng. Kỳ đài ngày nay được phục dựng trong quá trình tu bổ Thành cổ giai đoạn 2004–2010, góp phần tái hiện diện mạo kiến trúc quân sự đặc sắc của di tích.
`,


        ],

        value: `Kỳ đài góp phần tái hiện không
        gian kiến trúc của tòa thành thời Nguyễn,
        đồng thời là địa điểm giáo dục truyền
        thống lịch sử cho thế hệ trẻ.`,

        images: [

            {
                src: "images/ky-dai.jpg",
                caption: "Kỳ đài Thành cổ Sơn Tây",
                source: ""
            },

            {
                src: "images/ky-dai-2.jpg",
                caption: "Một góc nhìn về Kỳ đài",
                source: ""
            }

        ]

    },


    /* -------------------------------------
       HẠNG MỤC 3: ĐOAN MÔN
    ------------------------------------- */

    doanMon: {

        title: "Đoan Môn",

        paragraphs: [

            `Nằm trên trục kiến trúc chính của Thành cổ Sơn Tây, đi qua Kỳ Đài sẽ đến Đoan môn, nổi bật với ba cửa ra vào, dẫn đến Vọng cung - không gian hành chính và nghi lễ quan trọng dưới triều Nguyễn.`,

            

        ],

        value: `Đoan Môn góp phần tái hiện
        diện mạo kiến trúc và không gian
        lịch sử của Thành cổ Sơn Tây.`,

        images: [

            {
                src: "images/doan-mon.jpg",
                caption: "Đoan Môn Thành cổ Sơn Tây",
                source: ""
            },

            {
                src: "images/doan-mon-2.jpg",
                caption: "Chi tiết kiến trúc Đoan Môn",
                source: ""
            }

        ]

    },


    /* -------------------------------------
       HẠNG MỤC 4: VỌNG CUNG
    ------------------------------------- */

    vongCung: {

        title: "Vọng Cung",

        paragraphs: [

            `Nằm ở khu vực trung tâm của Thành, Vọng cung là công trình kiến trúc quan trọng, mang đậm dấu ấn hành chính và nghi lễ dưới triều Nguyễn.
Vọng cung được xây dựng trên khu đất cao, có quy mô bề thế, hướng về phía Nam. Phía trước là khoảng sân rộng khi xưa được lát gạch Bát Tràng, bao quanh có tường thấp và bình phong trang trí. Đây từng là nơi nghỉ chân của nhà vua mỗi khi tuần thú ra và là nơi mỗi năm hai lần (xuân thu nhị kỳ), các quan lại tổ chức nghi lễ tế trời đất hoặc làm lễ bái vọng về Kinh đô mỗi khi tiếp nhận chiếu chỉ Vua ban, hoặc thực hiện các nghi lễ đột xuất khác do triều đình chiếu dụ.
Trải qua nhiều biến động thăng trầm của lịch sử, Vọng cung xưa đã không còn nguyên vẹn. Thực hiện chủ trường “tiêu thổ kháng chiến” của chính phủ trong cuộc kháng chiến chống Pháp, Vọng cung đã bị dỡ bỏ. Công trình hiện nay được phục dựng lại trên nền móng cũ đã góp phần tái hiện không gian kiến trúc và nghi lễ xưa của Thành.
Ngày nay, Vọng cung không chỉ gợi nhớ những nghi lễ trang nghiêm thuở trước mà còn giúp thế hệ hôm nay hiểu thêm về lịch sử, văn hóa và những giá trị cần được gìn giữ của vùng đất Xứ Đoài.
`,


        ],

        value: `Vọng Cung góp phần giúp thế hệ
        hôm nay hiểu thêm về đời sống chính trị,
        văn hóa và nghi lễ dưới thời Nguyễn.`,

        images: [

            {
                src: "images/vong-cung.jpg",
                caption: "Vọng Cung Thành cổ Sơn Tây",
                source: ""
            },

            {
                src: "images/vong-cung-2.jpg",
                caption: "Không gian kiến trúc Vọng Cung",
                source: ""
            }

        ]

    }

};


/* =========================================
   2. KHAI BÁO CÁC THÀNH PHẦN HTML
========================================= */

const textPanel =
    document.getElementById("textPanel");

const imagePanel =
    document.getElementById("imagePanel");

const heritageContent =
    document.getElementById("heritageContent");

const tabButtons =
    document.querySelectorAll(".tab-button");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const closeLightboxButton =
    document.getElementById("closeLightbox");


/* =========================================
   3. HÀM HIỂN THỊ NỘI DUNG LỊCH SỬ
========================================= */

function renderText(site) {

    // Xóa nội dung cũ
    textPanel.replaceChildren();

    // Tạo tiêu đề
    const heading = document.createElement("h2");

    heading.textContent = site.title;

    textPanel.appendChild(heading);


    // Tạo các đoạn văn
    site.paragraphs.forEach(paragraph => {

        const p = document.createElement("p");

        p.textContent = paragraph;

        textPanel.appendChild(p);

    });


    // Tạo khung giá trị di sản
    const valueBox = document.createElement("div");

    valueBox.className = "heritage-value";


    const valueTitle = document.createElement("h3");

    valueTitle.textContent = "Giá trị di sản";


    const valueText = document.createElement("p");

    valueText.textContent = site.value;


    valueBox.append(valueTitle, valueText);

    textPanel.appendChild(valueBox);

}


/* =========================================
   4. HÀM HIỂN THỊ HÌNH ẢNH
========================================= */

function renderImages(site) {

    // Xóa hình ảnh cũ
    imagePanel.replaceChildren();


    // Tạo từng ảnh trong danh sách
    site.images.forEach(image => {

        const card = document.createElement("figure");

        card.className = "image-card";


        // Nút nhấn phóng to hình ảnh
        const trigger = document.createElement("button");

        trigger.type = "button";

        trigger.className = "image-trigger";

        trigger.setAttribute(
            "aria-label",
            "Phóng to: " + image.caption
        );


        // Tạo hình ảnh
        const img = document.createElement("img");

        img.alt = image.caption;

        img.loading = "lazy";


        // Xử lý khi chưa có file ảnh
        img.addEventListener("error", () => {

            const placeholder =
                document.createElement("div");

            placeholder.className =
                "image-placeholder";


            const message =
                document.createElement("strong");

            message.textContent =
                "Chưa bổ sung hình ảnh";


            const filename =
                document.createElement("p");

            filename.textContent = image.src;


            placeholder.append(message, filename);

            trigger.replaceWith(placeholder);

        }, { once: true });


        // Mở ảnh phóng to khi nhấn
        trigger.addEventListener("click", () => {

            openLightbox(
                image.src,
                image.caption
            );

        });


        trigger.appendChild(img);


        // Tạo chú thích ảnh
        const caption =
            document.createElement("figcaption");

        caption.className = "image-caption";

        caption.textContent = image.caption;


        card.append(trigger, caption);


        // Hiển thị nguồn ảnh nếu có
        if (image.source) {

            const source =
                document.createElement("small");

            source.className = "image-source";

            source.textContent = image.source;

            card.appendChild(source);

        }


        imagePanel.appendChild(card);

        img.src = image.src;

    });

}


/* =========================================
   5. CẬP NHẬT TRẠNG THÁI MENU
========================================= */

function updateActiveTab(siteKey) {

    tabButtons.forEach(button => {

        const isActive =
            button.dataset.site === siteKey;

        button.classList.toggle(
            "active",
            isActive
        );

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );

    });

}


/* =========================================
   6. HÀM CHUYỂN ĐỔI HẠNG MỤC
========================================= */

function showSite(siteKey) {

    const site = heritageData[siteKey];

    if (!site) return;


    // Cập nhật cột nội dung
    renderText(site);


    // Cập nhật cột hình ảnh
    renderImages(site);


    // Đánh dấu nút đang được chọn
    updateActiveTab(siteKey);


    // Đưa từng thanh cuộn về đầu
    textPanel.scrollTop = 0;

    imagePanel.scrollTop = 0;


    // Tạo hiệu ứng chuyển nội dung
    heritageContent.classList.remove("fade-in");

    void heritageContent.offsetWidth;

    heritageContent.classList.add("fade-in");

}


/* =========================================
   7. XỬ LÝ SỰ KIỆN NHẤN MENU
========================================= */

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        showSite(button.dataset.site);

    });

});


/* =========================================
   8. CHỨC NĂNG PHÓNG TO HÌNH ẢNH
========================================= */

function openLightbox(src, caption) {

    lightboxImage.src = src;

    lightboxImage.alt = caption;

    lightboxCaption.textContent = caption;

    if (!lightbox.open) {

        lightbox.showModal();

    }

}


/* =========================================
   9. ĐÓNG KHUNG PHÓNG TO ẢNH
========================================= */

function closeLightbox() {

    if (lightbox.open) {

        lightbox.close();

    }

}


// Đóng bằng nút X
closeLightboxButton.addEventListener(
    "click",
    closeLightbox
);


// Đóng khi nhấn vào vùng bên ngoài
lightbox.addEventListener("click", event => {

    if (event.target !== lightbox) return;

    const rect = lightbox.getBoundingClientRect();

    const outside =

        event.clientX < rect.left ||

        event.clientX > rect.right ||

        event.clientY < rect.top ||

        event.clientY > rect.bottom;

    if (outside) {

        closeLightbox();

    }

});


/* =========================================
   10. HIỂN THỊ HẠNG MỤC MẶC ĐỊNH
========================================= */

showSite("congThanh");


// ACTIVE MENU KHI CUỘN TRANG
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// HIỆU ỨNG HIỆN NỘI DUNG KHI CUỘN
const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(
    ".intro-content, .architecture-card, .timeline-item, .visit-content"
).forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});

const feedbackBtn = document.getElementById("feedback-btn");
const feedbackPopup = document.getElementById("feedback-popup");
const feedbackClose = document.getElementById("feedback-close");

feedbackBtn.addEventListener("click", () => {
    feedbackPopup.style.display = "flex";
    document.body.style.overflow = "hidden";
});

function closeFeedback() {
    feedbackPopup.style.display = "none";
    document.body.style.overflow = "";
}

feedbackClose.addEventListener("click", closeFeedback);

feedbackPopup.addEventListener("click", (e) => {
    if (e.target === feedbackPopup) {
        closeFeedback();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeFeedback();
    }
});


// THÊM CSS CHO HIỆU ỨNG REVEAL
const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(revealStyle);
