/* =============================================================
   SITE DATA — edit this section to update your site
   ============================================================= */

/* ---------- PROJECTS --------------------------------------- *
 * Fields:
 *   name    : display name
 *   repo    : "owner/repo" on GitHub (used for the stars badge)
 *   url     : full GitHub URL (link on the card)
 *   desc    : short description shown on the card
 *   tags    : small tag pills shown at the bottom of the card
 *   cat     : filter category — one of: dit | cuda | toolkit | research
 *   date    : "YYYY/MM" shown on the card
 * ------------------------------------------------------------- */
var PROJECTS = [

  /* ---- DiT & Inference ------------------------------------ */
  {
    name: "Cache-DiT",
    repo: "vipshop/cache-dit",
    url:  "https://github.com/vipshop/cache-dit",
    desc: "A PyTorch-native inference engine with hybrid cache acceleration and massive parallelism for Diffusion Transformers.",
    tags: ["DiT", "Cache", "Parallelism"],
    cat:  "dit",
    date: "2025/07"
  },
  {
    name: "DBCache — Dual Block Caching",
    repo: "vipshop/cache-dit",
    url:  "https://github.com/vipshop/cache-dit",
    desc: "Dual Block Caching for DiTs. Customisable compute-block configs enable a balanced trade-off between performance and precision.",
    tags: ["DiT", "Cache", "Parallelism"],
    cat:  "dit",
    date: "2025/07"
  },
  {
    name: "DBPrune — Dynamic Block Prune",
    repo: "vipshop/cache-dit",
    url:  "https://github.com/vipshop/cache-dit",
    desc: "Dynamic Block Prune algorithm based on Residual Caching for Diffusion Transformers.",
    tags: ["DiT", "Cache", "Parallelism"],
    cat:  "dit",
    date: "2025/07"
  },
  {
    name: "SCM — Steps Computation Mask",
    repo: "vipshop/cache-dit",
    url:  "https://github.com/vipshop/cache-dit",
    desc: "Steps Computation Mask with Dynamic Caching (DBCache) for Diffusion Transformers.",
    tags: ["DiT", "Cache", "Parallelism"],
    cat:  "dit",
    date: "2025/11"
  },
  {
    name: "UAA — Ulysses Anything Attention",
    repo: "vipshop/cache-dit",
    url:  "https://github.com/vipshop/cache-dit",
    desc: "A Ulysses Attention variant that supports arbitrary sequence lengths and arbitrary numbers of attention heads.",
    tags: ["DiT", "Cache", "Parallelism", "Attention"],
    cat:  "dit",
    date: "2025/11"
  },

  /* ---- CUDA & Kernels ------------------------------------- */
  {
    name: "LeetCUDA",
    repo: "xlite-dev/LeetCUDA",
    url:  "https://github.com/xlite-dev/LeetCUDA",
    desc: "Modern CUDA learning notes with PyTorch for beginners. 200+ CUDA kernels covering Tensor Cores, HGEMM, FlashAttention-2 MMA, and more.",
    tags: ["PyTorch", "CUDA", "C++"],
    cat:  "cuda",
    date: "2023/12"
  },
  {
    name: "FFPA — Split-D FlashAttention",
    repo: "xlite-dev/ffpa-attn",
    url:  "https://github.com/xlite-dev/ffpa-attn",
    desc: "Extend FlashAttention-2 with Split-D, ~O(1) SRAM complexity for large headdim. 1.8×–3× faster than SDPA EA.",
    tags: ["CUDA", "FlashAttention"],
    cat:  "cuda",
    date: "2024/10"
  },
  {
    name: "HGEMM",
    repo: "xlite-dev/HGEMM",
    url:  "https://github.com/xlite-dev/HGEMM",
    desc: "Write HGEMM from scratch using Tensor Cores with WMMA, MMA, and CuTe API to achieve peak GPU performance.",
    tags: ["CUDA", "Tensor Cores"],
    cat:  "cuda",
    date: "2024/03"
  },

  /* ---- AI Toolkits ---------------------------------------- */
  {
    name: "lite.ai.toolkit",
    repo: "xlite-dev/lite.ai.toolkit",
    url:  "https://github.com/xlite-dev/lite.ai.toolkit",
    desc: "A lite C++ AI toolkit with 100+ models (Det, Seg, SD, Face-Fusion, etc.) using MNN, ONNXRuntime, and TensorRT.",
    tags: ["C++", "ONNXRuntime", "MNN", "TensorRT"],
    cat:  "toolkit",
    date: "2022/01"
  },
  {
    name: "FastDeploy v1.0",
    repo: "PaddlePaddle/FastDeploy",
    url:  "https://github.com/PaddlePaddle/FastDeploy",
    desc: "Easy-to-use, high-performance AI model deployment toolkit for Cloud, Mobile and Edge. 160+ text and vision models.",
    tags: ["C++", "Python"],
    cat:  "toolkit",
    date: "2022/12"
  },
  {
    name: "torchlm",
    repo: "xlite-dev/torchlm",
    url:  "https://github.com/xlite-dev/torchlm",
    desc: "An easy-to-use PyTorch library for face landmark detection: training, evaluation, inference, and data augmentations.",
    tags: ["PyTorch", "Computer Vision"],
    cat:  "toolkit",
    date: "2022/03"
  },

  /* ---- Research Lists ------------------------------------- */
  {
    name: "Awesome-LLM-Inference",
    repo: "xlite-dev/Awesome-LLM-Inference",
    url:  "https://github.com/xlite-dev/Awesome-LLM-Inference",
    desc: "A curated list of awesome LLM/VLM inference papers with code. Covers quantisation, speculation, paged attention, and more.",
    tags: ["Research", "LLM"],
    cat:  "research",
    date: "2023/12"
  },
  {
    name: "Awesome-DiT-Inference",
    repo: "xlite-dev/Awesome-DiT-Inference",
    url:  "https://github.com/xlite-dev/Awesome-DiT-Inference",
    desc: "A curated list of awesome Diffusion Transformer inference papers with code. Caching, distillation, parallelism and quantisation.",
    tags: ["Research", "DiT"],
    cat:  "research",
    date: "2024/12"
  },
  {
    name: "lihang-notes",
    repo: "xlite-dev/lihang-notes",
    url:  "https://github.com/xlite-dev/lihang-notes",
    desc: "Study notes for Li Hang's Statistical Learning Methods — a 200-page PDF with step-by-step formula derivations and R implementations.",
    tags: ["R", "Statistics"],
    cat:  "research",
    date: "2017/09"
  }
];

/* ---------- PUBLICATIONS ----------------------------------- *
 * Fields: title, venue, date, type (e.g. "SCI")
 * ------------------------------------------------------------- */
var PUBLICATIONS = [
  {
    title: "Quantitative strategy for the Chinese commodity futures market based on a dynamic weighted money flow model",
    venue: "Physica A: Statistical Mechanics and its Applications",
    date:  "2018/08",
    type:  "SCI"
  },
  {
    title: "Numerical characteristics and parameter estimation of finite mixed generalized normal distribution",
    venue: "Communications in Statistics — Simulation and Computation",
    date:  "2020/01",
    type:  "SCI"
  }
];

/* ---------- FILTER CATEGORIES ------------------------------ *
 * label  : displayed on the filter button
 * value  : must match the "cat" field in PROJECTS (or "all")
 * ------------------------------------------------------------- */
var FILTER_CATS = [
  { label: "All",              value: "all"     },
  { label: "DiT & Inference",  value: "dit"     },
  { label: "CUDA & Kernels",   value: "cuda"    },
  { label: "AI Toolkits",      value: "toolkit" },
  { label: "Research Lists",   value: "research"}
];

/* =============================================================
   RENDERING — no need to edit below this line
   ============================================================= */

/* ---- Stars badge URL helper -------------------------------- */
function starsBadge(repo) {
  return "https://img.shields.io/github/stars/" + repo +
    "?style=flat-square&label=%E2%98%85&color=e3b341&labelColor=555555";
}

/* ---- Render projects --------------------------------------- */
function renderProjects() {
  var grid = document.getElementById("projects-grid");
  if (!grid) return;

  var html = "";
  PROJECTS.forEach(function (p) {
    var tagsHtml = p.tags.map(function (t) {
      return '<span class="tag">' + t + '</span>';
    }).join("");

    var starsHtml = p.repo
      ? '<a href="' + p.url + '" target="_blank" rel="noopener" tabindex="-1">' +
          '<img class="stars-badge" src="' + starsBadge(p.repo) + '" alt="' + p.repo + ' stars" />' +
        '</a>'
      : '<span class="stars-na">N/A</span>';

    html +=
      '<div class="project-card" data-cat="' + p.cat + '">' +
        '<div class="project-top">' +
          '<h3><a href="' + p.url + '" target="_blank" rel="noopener">' + p.name + '</a></h3>' +
          starsHtml +
        '</div>' +
        '<p>' + p.desc + '</p>' +
        '<div class="project-bottom">' +
          '<div class="tag-row">' + tagsHtml + '</div>' +
          '<span class="proj-date">' + p.date + '</span>' +
        '</div>' +
      '</div>';
  });
  grid.innerHTML = html;
}

/* ---- Render filter bar ------------------------------------ */
function renderFilters() {
  var bar = document.getElementById("filter-bar");
  if (!bar) return;

  var html = "";
  FILTER_CATS.forEach(function (c, i) {
    html +=
      '<button class="filter-btn' + (i === 0 ? " active" : "") + '" ' +
        'data-filter="' + c.value + '" ' +
        'role="tab" aria-selected="' + (i === 0) + '">' +
        c.label +
      '</button>';
  });
  bar.innerHTML = html;

  bar.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    var filter = btn.getAttribute("data-filter");

    bar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");

    document.querySelectorAll(".project-card").forEach(function (card) {
      var match = filter === "all" || card.getAttribute("data-cat") === filter;
      card.hidden = !match;
    });
  });
}

/* ---- Render publications ---------------------------------- */
function renderPublications() {
  var list = document.getElementById("pub-list");
  if (!list) return;

  var html = "";
  PUBLICATIONS.forEach(function (pub) {
    html +=
      '<div class="pub-card">' +
        '<span class="pub-type">' + pub.type + '</span>' +
        '<div class="pub-body">' +
          '<p class="pub-title">' + pub.title + '</p>' +
          '<p class="pub-venue"><em>' + pub.venue + '</em></p>' +
          '<p class="pub-meta">Accepted &nbsp;·&nbsp; ' + pub.date + '</p>' +
        '</div>' +
      '</div>';
  });
  list.innerHTML = html;
}

/* ---- Scroll: highlight active nav link -------------------- */
function initScrollSpy() {
  var sections = document.querySelectorAll("section[id]");
  var links    = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", function () {
    var y = window.pageYOffset + 80;
    sections.forEach(function (s) {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + s.id);
        });
      }
    });
  }, { passive: true });
}

/* ---- Fade-in on scroll ------------------------------------ */
function initFadeIn() {
  if (!("IntersectionObserver" in window)) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".project-card, .pub-card, .contact-link").forEach(function (el) {
    el.classList.add("fade-in");
    obs.observe(el);
  });
}

/* ---- Year in footer --------------------------------------- */
function setYear() {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---- Boot ------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  renderFilters();
  renderPublications();
  initScrollSpy();
  initFadeIn();
  setYear();
});
