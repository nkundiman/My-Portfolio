interface Props {
  name: string;
  subject: string;
  reply: string;
}

export default function ReplyTemplate({
  name,
  subject,
  reply,
}: Props) {
  return `
<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8" />

<title>AGRIC AI</title>

</head>

<body style="
margin:0;
padding:0;
background:#f3f4f6;
font-family:Arial,Helvetica,sans-serif;
">

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="padding:40px 0;"
>

<tr>

<td align="center">

<table
width="650"
cellpadding="0"
cellspacing="0"
style="
background:white;
border-radius:14px;
overflow:hidden;
box-shadow:0 10px 40px rgba(0,0,0,.08);
"
>

<!-- HERO -->

<tr>

<td
style="
background:#0F766E;
padding:45px;
color:white;
"
>

<h1
style="
margin:0;
font-size:34px;
font-weight:bold;
"
>
AGRIC AI
</h1>

<p
style="
margin-top:10px;
font-size:18px;
line-height:28px;
opacity:.95;
"
>
Artificial Intelligence for Smarter Agriculture
</p>

</td>

</tr>

<!-- BODY -->

<tr>

<td style="padding:45px;">

<p style="font-size:18px;">

Hello <strong>${name}</strong>,

</p>

<p
style="
font-size:16px;
line-height:30px;
color:#444;
"
>

Thank you for contacting <strong>AGRIC AI</strong> through our portfolio.

We truly appreciate your interest in our work and are grateful for your message.

</p>

<div
style="
margin:35px 0;
padding:25px;
background:#F0FDF4;
border-left:5px solid #16A34A;
border-radius:10px;
"
>

<h3
style="
margin-top:0;
color:#166534;
"
>

Subject

</h3>

<p
style="
font-size:16px;
margin-bottom:0;
color:#374151;
"
>

${subject}

</p>

</div>

<div
style="
background:#fafafa;
padding:25px;
border-radius:10px;
border:1px solid #eee;
"
>

${reply}

</div>

<p
style="
margin-top:40px;
font-size:16px;
line-height:30px;
color:#444;
"
>

If you have additional questions, simply reply to this email.

We are always happy to help.

</p>

<a
href="https://agric-ai.com"
style="
display:inline-block;
margin-top:20px;
padding:15px 30px;
background:#16A34A;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:bold;
"
>

Visit AGRIC AI

</a>

</td>

</tr>

<!-- FOOTER -->

<tr>

<td
style="
background:#111827;
padding:35px;
color:#d1d5db;
"
>

<h2
style="
margin-top:0;
color:white;
"
>

Augustin Nkundimana

</h2>

<p>

Founder & CEO

<br>

AGRIC AI

</p>

<p>

🌍 Kigali, Rwanda

<br>

📧 augunkundimana@gmail.com

<br>

🌐 https://agric-ai.com

</p>

<hr
style="
border:none;
border-top:1px solid #374151;
margin:25px 0;
"
/>

<p
style="
font-size:13px;
color:#9ca3af;
"
>

© 2026 AGRIC AI.

Empowering African Agriculture through Artificial Intelligence.

</p>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;
}