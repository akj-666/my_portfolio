---

name: tailwind-theme-injector

description: Configures global Tailwind configurations and isolates the specific dark mode charcoal and Scarlet Red color mapping variables.

---

\# Tailwind Theme Injector Skill



\## Goal

Enforce a uniform visual hierarchy using a dark charcoal canvas background paired with precise, high-contrast text and Scarlet Red accents.



\## Design Token Rules

\- \*\*Background Layer:\*\* `bg-\[#0B0B0B]` or rich charcoal blacks (`bg-zinc-950`).

\- \*\*Primary Typography:\*\* Crisp off-whites (`text-zinc-100`) and pure whites (`text-white`) for readability.

\- \*\*Accent Mappings:\*\* Scarlet Red (`text-red-600` or custom high-chroma red `#FF0000`) is highly restricted. It should only be applied to:

&#x20; - Section index numbering strings (e.g., `01`, `02`, `03`).

&#x20; - Subtle key border outlines or horizontal line accents.

&#x20; - Interactive hover state glows or micro-dots.



\## Constraints

\- \*\*CRITICAL:\*\* Do not allow Scarlet Red to be used as the color for standard multiline body paragraphs or primary descriptions. 

\- Ensure all Tailwind classes scale perfectly on responsive layout breakpoints (`sm:`, `md:`, `lg:`).

