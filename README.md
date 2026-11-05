# Hindu Yuva Chetna Mahasabha (HYCM)

Hindu Yuva Chetna Mahasabha runs a small community and youth site. It has activity and news pages, a membership area plus an icon-driven donation route.

## Live Demo

Not deployed publicly. Start locally:

```bash
cd hycm
python3 -m http.server 8103 --directory .
# open http://localhost:8103/
```

## Screenshots

The site shown below was running during capture. Relative paths, file names carry the project slug:

| Desktop | Mobile |
|---|---|
| `screenshots/desktop/hycm-index-1440x900.png` | `screenshots/mobile/hycm-index-390x844.png` |

## About the Project

Hindu Yuva Chetna Mahasabha is a youth and community organisation. The site publishes its activities, news and membership details, with a donation link.

## Key Features


 - Homepage, About, Activities, News, Membership, Donate pages
 - News and event gallery with photographs
 - Membership and volunteer pages
 - Contact form and email route

## Technology Stack


HTML, CSS, JavaScript; PHP (email.php)

## Project Structure


 - index, about, activities, news, membership, donate, gallery, contact, team + css, images, js, email.php

## Installation and Setup


```bash

cd hycm

python3 -m http.server 8103 --directory .

# open http://localhost:8103/

```


## My Contribution


The site belongs to the organisation's office-bearers, and the owner carried out the build. I only handled preparation on this copy: verifying files, capturing screenshots and writing the documentation. Nothing was changed in the original.

## Responsive Design


Homepage and inner pages were captured at 1440x900 (desktop) and 390x844 (mobile) earlier this session.

## Security and Privacy


No API keys, tokens, private keys, database credentials, or SMTP credentials were found anywhere in the repository. Public contact details that sit on the live site belong to the organisation or its people and are not something to republish beyond the repo.

## Known Limitations


- The site is a static site and is not deployed online; it is served here for review.

## Future Improvements


- Serve the site from a public host and swap in a live demo link when one becomes available.

## License


No license was found in the source, so the code is not offered for reuse. Speak to the project owner before reusing it.
