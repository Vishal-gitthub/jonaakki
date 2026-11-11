import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Prod_1 from "/Products/Prod 1.jpg";
import Prod_2 from "/Products/Prod 2.jpg";
import Prod_3 from "/Products/Prod 3.jpg";
import Prod_4 from "/Products/Prod 4.jpg";
import vid from "/Video-132171.mp4";
import img_BS from "/Elegant Saree Portrait at Jewellery Stall.png";

import logo from "/logo.png";
import logo_white from "/logo-white.png";
import cat1 from "/redirects/necklace.jpg";
import cat2 from "/redirects/Earrings.png";
import cat3 from "/redirects/Bracelets.png";
import cat4 from "/redirects/rings.png";

import ig1 from "/1.mp4";
import ig2 from "/2.mp4";
import ig3 from "/3.mp4";
import ig4 from "/4.mp4";

const IMAGES = {
  hero: "https://picsum.photos/1920/1200?random=101",
  collectionEditorial: "https://picsum.photos/1100/900?random=102",
  categories: {
    necklaces: cat1,
    earrings: cat2,
    bracelets: cat3,
    rings: cat4,
  },
  products: [Prod_1, Prod_2, Prod_3, Prod_4],
  reels: [
    "https://picsum.photos/400/712?random=401",
    "https://picsum.photos/400/712?random=402",
    "https://picsum.photos/400/712?random=403",
    "https://picsum.photos/400/712?random=404",
  ],
  brandStory: img_BS,
  instagram: [ig1, ig2, ig3, ig4],
};
const products = [
  ["Bestseller Diamond Cut Choker", "₹1499"],
  ["Pure Brass Pearl & Brass Choker ", "₹2,999"],
  ["Pure Brass Triangle Choker ", "₹2,999"],
  ["Pure Brass Bracelet stack ", "₹1899"],
];
const categories = [
  ["NECKLACES", IMAGES.categories.necklaces],
  ["EARRINGS", IMAGES.categories.earrings],
  ["BRACELETS", IMAGES.categories.bracelets],
  ["RINGS", IMAGES.categories.rings],
];
const testimonials = [
  [
    "Such beautiful attention to detail. The necklace feels timeless and makes even the simplest outfit special.",
    "Ananya S.",
  ],
  [
    "The craftsmanship is stunning. Every piece feels thoughtfully selected, with a charm that is difficult to find elsewhere.",
    "Meera R.",
  ],
  [
    "Elegant, beautifully finished jewellery. I love how the designs bring together traditional character and modern styling.",
    "Priya K.",
  ],
  [
    "A wonderful experience from beginning to end. The jewellery feels special, personal and beautifully made.",
    "Ritika M.",
  ],
];

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 },
    );
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
const Icon = ({ children, className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);
const SearchIcon = () => (
  <Icon>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 4 4" />
  </Icon>
);
const BagIcon = () => (
  <Icon>
    <path d="M5.5 8.5h13l1 11h-15l1-11Z" />
    <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
  </Icon>
);
const UserIcon = () => (
  <Icon>
    <circle cx="12" cy="7.5" r="3.2" />
    <path d="M5.5 20c.5-3.5 2.8-5.3 6.5-5.3s6 1.8 6.5 5.3" />
  </Icon>
);

function Header() {
  const [menu, setMenu] = useState(false);
  const [panel, setPanel] = useState(null);
  useEffect(() => {
    document.body.style.overflow = menu || panel ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, panel]);
  const close = () => {
    setMenu(false);
    setPanel(null);
  };
  return (
    <>
      <div className="flex min-h-8 items-center justify-center bg-[#2D4B3E] px-4 py-2 text-center text-[9px] tracking-[.16em] text-white sm:text-[10px]">
        COMPLIMENTARY DOMESTIC SHIPPING ABOVE ₹2,500{" "}
        <span className="mx-2 text-[#C5A059]">|</span> INTERNATIONAL SHIPPING
        FROM ₹2,000
      </div>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="relative mx-auto grid h-[70px] max-w-[1600px] grid-cols-3 items-center px-4 md:h-[78px] md:px-8">
          <nav className="hidden gap-8 md:flex" aria-label="Main navigation">
            {[
              ["SHOP", "#necklaces"],
              ["ABOUT", "#story"],
              ["JOURNAL", "#world"],
            ].map(([n, h]) => (
              <a
                key={n}
                href={h}
                className="nav-link text-[10px] tracking-[.2em]"
              >
                {n}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenu(true)}
            className="justify-self-start md:hidden"
            aria-label="Open menu"
          >
            <Icon className="h-6 w-6">
              <path d="M3 7.5h18M3 16.5h18" />
            </Icon>
          </button>
          <a
            href="#top"
            className="font-display justify-self-center text-[25px] tracking-[.18em] md:text-[29px]"
          >
            <img className="w-40" src={logo} alt="" />
          </a>
          <div className="flex justify-self-end gap-3 md:gap-5">
            <button onClick={() => setPanel("search")} aria-label="Open search">
              <SearchIcon />
            </button>
            <button
              className="hidden md:block"
              aria-label="Account preview"
              onClick={() => setPanel("account")}
            >
              <UserIcon />
            </button>
            <button
              onClick={() => setPanel("bag")}
              aria-label="Open shopping bag"
              className="relative"
            >
              <BagIcon />
              <span className="absolute -right-1.5 -top-1.5 text-[8px]">0</span>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-[70] transition ${menu || panel ? "visible bg-black/35" : "invisible bg-transparent"}`}
        onClick={close}
      >
        {menu && (
          <aside
            className="h-full w-[84%] max-w-sm bg-[#FAF9F6] p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-12 flex items-center justify-between">
              <img src={logo} alt="" />
              <button
                onClick={close}
                className="text-2xl"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col">
              {[
                ["SHOP", "#necklaces"],
                ["ABOUT", "#story"],
                ["JOURNAL", "#world"],
              ].map(([n, h]) => (
                <a
                  key={n}
                  href={h}
                  onClick={close}
                  className="border-b border-black/10 py-5 text-xs tracking-[.2em]"
                >
                  {n}
                </a>
              ))}
            </nav>
            <p className="font-display mt-12 text-2xl italic text-[#2D4B3E]">
              Jewellery that carries a story.
            </p>
          </aside>
        )}
        {panel && (
          <aside
            className="absolute right-0 h-full w-[88%] max-w-md bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-6">
              <p className="text-[11px] tracking-[.2em]">
                {panel === "search"
                  ? "SEARCH"
                  : panel === "bag"
                    ? "YOUR BAG"
                    : "YOUR ACCOUNT"}
              </p>
              <button
                onClick={close}
                className="text-2xl"
                aria-label="Close panel"
              >
                ×
              </button>
            </div>
            {panel === "search" && (
              <div className="mt-10">
                <label htmlFor="site-search" className="sr-only">
                  Search
                </label>
                <input
                  id="site-search"
                  autoFocus
                  className="w-full border-b border-black py-3 text-sm outline-none"
                  placeholder="Search our collections"
                />
                <p className="mt-4 text-xs text-[#6B6B6B]">
                  Demo search — product results will be connected when the
                  catalogue is ready.
                </p>
              </div>
            )}
            {panel === "bag" && (
              <div className="flex h-2/3 flex-col items-center justify-center text-center">
                <BagIcon />
                <p className="font-display mt-5 text-2xl">Your bag is empty</p>
                <a
                  href="#necklaces"
                  onClick={close}
                  className="mt-6 border border-black px-7 py-3 text-[10px] tracking-[.18em]"
                >
                  EXPLORE JEWELLERY
                </a>
              </div>
            )}
            {panel === "account" && (
              <p className="mt-10 text-sm leading-7 text-[#6B6B6B]">
                Account services are not connected in this homepage preview.
              </p>
            )}
          </aside>
        )}
      </div>
    </>
  );
}
function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl px-5 text-center md:mb-14">
      {eyebrow && (
        <p className="mb-4 text-[9px] tracking-[.28em] text-[#2D4B3E]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[32px] leading-tight md:text-[40px]">
        {title}
      </h2>
      {copy && (
        <p className="mt-4 text-[13px] leading-6 text-[#6B6B6B] md:text-sm">
          {copy}
        </p>
      )}
    </div>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const subscribe = (e) => {
    e.preventDefault();
    setMessage(
      /^\S+@\S+\.\S+$/.test(email)
        ? "Thank you — this is a demo acknowledgement only."
        : "Please enter a valid email address.",
    );
  };
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#FAF9F6] text-[#1A1A1A]"
    >
      <Header />
      <main>
        <Hero />

        <section className="bg-[#2D4B3E] text-white">
          <div className="mx-auto grid max-w-7xl md:grid-cols-3">
            {[
              [
                "ETHICALLY HANDCRAFTED",
                "Curated with love and made by skilled Indian kaarigars.",
              ],
              [
                "HEIRLOOM QUALITY",
                "Thoughtfully selected jewellery designed to be treasured for years to come.",
              ],
              [
                "COMPLIMENTARY SHIPPING",
                "Free domestic shipping on orders above ₹2,500.",
              ],
            ].map(([t, c], i) => (
              <div
                key={t}
                className={`px-8 py-9 text-center md:my-7 md:py-4 ${i ? "border-t border-white/20 md:border-l md:border-t-0" : ""}`}
              >
                <h3 className="text-[10px] tracking-[.22em]">{t}</h3>
                <p className="mx-auto mt-3 max-w-xs text-[12px] leading-5 text-white/70">
                  {c}
                </p>
              </div>
            ))}
          </div>
        </section>
        <nav
          className="no-scrollbar flex overflow-x-auto border-b border-black/10 px-5 py-6 md:justify-center md:gap-10"
          aria-label="Jewellery categories"
        >
          {[
            "BEST SELLERS",
            "NECKLACES",
            "EARRINGS",
            "BRACELETS / BANGLES",
            "RINGS",
            "HATHPHOOL",
            "NOSE PINS",
          ].map((x) => (
            <a
              key={x}
              href="#necklaces"
              className="nav-link mr-8 shrink-0 text-[9px] tracking-[.19em] md:mr-0"
            >
              {x}
            </a>
          ))}
        </nav>
        <Reveal className="py-16 md:py-24">
          <section id="necklaces" className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              title="Elegant Necklace Collection"
              copy="Our most-loved pieces, thoughtfully curated for timeless elegance."
            />
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-6">
              {products.map(([name, price], i) => (
                <article key={name} className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-[#F2EDE4]">
                    <img
                      src={IMAGES.products[i]}
                      alt={name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-4 text-[12px] leading-5 md:text-[13px]">
                    {name}
                  </h3>
                  <p className="mt-1 text-[12px] text-[#6B6B6B]">{price}</p>
                </article>
              ))}
            </div>
            <div className="mt-11 text-center">
              <a
                className="nav-link text-[10px] tracking-[.2em]"
                href="#categories"
              >
                VIEW ALL NECKLACES
              </a>
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className="grid bg-[#F2EDE4] md:min-h-[660px] md:grid-cols-2">
            <div className="flex items-center px-7 py-16 md:px-[10vw] md:py-20">
              <div className="max-w-md">
                <p className="mb-5 text-[9px] tracking-[.27em] text-[#2D4B3E]">
                  A CELEBRATION OF HERITAGE
                </p>
                <h2 className="font-display text-[38px] leading-tight md:text-[48px]">
                  Adorned in Stories
                </h2>
                <p className="mt-7 text-[13px] leading-7 text-[#555]">
                  Some pieces are more than adornments. They hold memories,
                  celebrate individuality and connect us to the beauty of
                  traditions passed through generations.
                </p>
                <p className="mt-4 text-[13px] leading-7 text-[#555]">
                  Explore jewellery inspired by the richness of Indian
                  craftsmanship, thoughtfully curated for the way we live and
                  express ourselves today.
                </p>
                <a
                  href="#categories"
                  className="mt-8 inline-flex h-11 items-center border border-black px-7 text-[10px] tracking-[.18em] transition hover:bg-[#1A1A1A] hover:text-white"
                >
                  DISCOVER THE COLLECTION
                </a>
              </div>
            </div>
            <div className=" overflow-hidden md:h-auto">
              <video autoPlay loop muted className="w-full">
                <source src={vid} />
              </video>
            </div>
          </section>
        </Reveal>
        <Reveal className="pt-16 md:pt-24">
          <section id="categories">
            <SectionHeading
              title="Discover Your Adornment"
              copy="Find something that feels uniquely yours."
            />
            <div className="grid grid-cols-2 md:grid-cols-4">
              {categories.map(([name, img]) => (
                <a
                  href="#necklaces"
                  key={name}
                  className="group relative aspect-[3/4] overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`${name.toLowerCase()} collection`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition group-hover:from-black/70" />
                  <h3 className="font-display absolute bottom-6 left-5 text-xl tracking-[.08em] text-white md:bottom-8 md:left-8 md:text-2xl">
                    {name}
                  </h3>
                </a>
              ))}
            </div>
          </section>
        </Reveal>
        <Reveal className="py-16 md:py-24">
          <section className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              title="Watch & Buy"
              copy="Discover our world of adornment. Follow us on Instagram @jonaakki.india"
            />
            {/* <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
              {IMAGES.reels.map((img, i) => (
                <div
                  key={img}
                  className="group relative aspect-[9/16] overflow-hidden bg-[#F2EDE4]"
                >
                  <img
                    src={img}
                    alt={`JONAAKKI reel preview ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/20 backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-0.5 h-5 w-5 fill-white"
                      aria-hidden="true"
                    >
                      <path d="m8 5 11 7-11 7Z" />
                    </svg>
                  </span>
                </div>
              ))}
            </div> */}

            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              class="elfsight-app-2a595475-3118-4919-ae7d-ec5a924e78b7"
              data-elfsight-app-lazy
            ></div>
          </section>
        </Reveal>
        <Reveal>
          <section id="story" className="bg-[#F2EDE4] py-16 md:py-24">
            <div className="mx-auto grid items-center max-w-7xl gap-12 px-5 md:grid-cols-[.85fr_1.15fr] md:items-center md:gap-20 md:px-8">
              <div className=" overflow-hidden md:sticky md:top-28">
                <img
                  src={IMAGES.brandStory}
                  alt="The founder story behind JONAAKKI"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:py-5">
                <p className="mb-5 text-[9px] tracking-[.27em] text-[#2D4B3E]">
                  THE HEART OF JONAAKKI
                </p>
                <h2 className="font-display text-[36px] leading-tight md:text-[44px]">
                  The Story Behind JONAAKKI
                </h2>
                <div className="mt-8 space-y-5 text-[14px] leading-[1.85] text-[#3e3e3e]">
                  <p>
                    My love for jewellery began with a piece that was much more
                    than an ornament. It was a necklace and a pair of earrings
                    gifted to me by my mother’s friend, once cherished by her
                    late daughter. She passed them on to me with the hope that I
                    would treasure them just as much. And I did. They became my
                    most-loved pieces, accompanying me to almost every
                    celebration. Little did I know that this sentimental gift
                    would one day become the beginning of JONAAKKI.
                  </p>
                  <p>
                    I’ve always been drawn to handmade treasures rooted in
                    Indian heritage — pieces that tell stories through their
                    craftsmanship, uniqueness and even their imperfections.
                    Personally, my style has always been a reflection of this
                    love for all things rooted and timeless. Give me a white
                    chikankari kurta, a pair of Kolhapuri chappals and layers of
                    silver jewellery, and I feel most like myself. I have always
                    believed that the simplest of outfits can tell the most
                    beautiful stories when paired with the right accessories.
                  </p>
                  <p>
                    At JONAAKKI, we curate modern yet vintage-inspired designs,
                    drawing from the beauty of heirlooms and giving them a fresh
                    perspective while embracing the changing world of fashion.
                    My journey is as much about discovering rare, timeless
                    pieces as it is about building meaningful connections with
                    the kaarigars whose hands bring these creations to life.
                  </p>
                  <p>
                    Deeply rooted in tradition, I believe there is something
                    incredibly powerful about independent women embracing their
                    individuality effortlessly carrying their heritage in
                    sarees, handcrafted jewellery and their own unique stories.
                  </p>
                  <p className="font-display !mt-8 text-[21px] italic leading-[1.6] text-[#2D4B3E]">
                    For me, JONAAKKI is more than jewellery. It is about
                    preserving stories, celebrating craftsmanship and creating
                    pieces that, someday, become someone else’s cherished
                    heirlooms.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
        <Reveal className="bg-white py-16 md:py-24">
          <section>
            <SectionHeading
              title="Loved by Our Community"
              copy="Kind words from those who cherish JONAAKKI."
            />
            <div className="no-scrollbar mx-auto flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:px-8">
              {testimonials.map(([quote, name]) => (
                <article
                  key={name}
                  className="min-w-[84%] snap-start border border-black/10 bg-[#FAF9F6] p-7 sm:min-w-[48%] md:min-w-[31.5%] md:p-9"
                >
                  <div className="text-[12px] tracking-[.2em] text-[#C5A059]">
                    ★★★★★
                  </div>
                  <blockquote className="font-display mt-6 text-[18px] italic leading-7">
                    “{quote}”
                  </blockquote>
                  <p className="mt-7 text-[10px] tracking-[.18em] text-[#6B6B6B]">
                    — {name}
                  </p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-7xl px-5 text-[10px] text-[#6B6B6B] md:px-8">
              Illustrative review placeholders for design preview.
            </p>
          </section>
        </Reveal>
        <Reveal className="py-16 md:py-24">
          <section id="world">
            <SectionHeading
              title="A Glimpse Into Our World"
              copy="Every piece tells a story. Follow ours @jonaakki.india"
            />
            <div className="grid px-20 grid-cols-2 gap-5 md:grid-cols-4">
              {IMAGES.instagram.map((img) => (
                <div
                  key={img}
                  className="group aspect-auto overflow-hidden bg-[#F2EDE4]"
                >
                  <video autoPlay muted src={img}></video>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </main>
      <footer className="bg-[#1A1A1A] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4 md:gap-10">
            <div className="md:col-span-2 md:max-w-lg">
              <div className="font-display text-[30px] tracking-[.18em]">
                <img className="w-48" src={logo_white} alt="" />
              </div>
              <p className="mt-5 max-w-md text-[13px] leading-6 text-white/55">
                Curating modern yet vintage-inspired designs, drawing from the
                beauty of Indian heirlooms.
              </p>
              <h3 className="mt-10 text-[10px] tracking-[.22em]">
                JOIN OUR WORLD
              </h3>
              <p className="mt-3 text-[12px] text-white/55">
                Receive stories, collection updates and thoughtful inspiration.
              </p>
              <form
                onSubmit={subscribe}
                className="mt-5 flex max-w-md border-b border-white/40"
              >
                <label className="sr-only" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-white/40"
                  placeholder="Email Address"
                />
                <button className="text-[9px] tracking-[.2em]" type="submit">
                  SUBSCRIBE
                </button>
              </form>
              {message && (
                <p
                  aria-live="polite"
                  className="mt-3 text-[11px] text-white/55"
                >
                  {message}
                </p>
              )}
            </div>
            <FooterLinks
              title="HELP"
              links={[
                "Terms & Conditions",
                "Return & Exchange",
                "Shipping Policy",
                "Privacy Policy",
                "Jewellery Care",
              ]}
            />
            <FooterLinks
              title="COMPANY"
              links={["Home", "Latest Drops", "About Us", "Contact Us"]}
            />
          </div>
          <div className="mt-16 border-t border-white/15 pt-7 text-[10px] tracking-[.08em] text-white/40">
            © 2026 JONAAKKI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-[10px] tracking-[.22em]">{title}</h3>
      <ul className="mt-6 space-y-4">
        {links.map((x) => (
          <li key={x}>
            <a
              href={x === "Home" ? "#top" : "#"}
              className="text-[12px] text-white/55 transition hover:text-white"
            >
              {x}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
