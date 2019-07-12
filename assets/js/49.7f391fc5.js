(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{204:function(t,e,a){"use strict";a.r(e);var s=a(2),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tls","aria-hidden":"true"}},[t._v("#")]),t._v(" TLS")]),t._v(" "),a("p",[t._v("Since version 1.19, V2Ray introduced transport layer security (TLS) support. If you have not heard that before, you may want to Google it first. Otherwise, these articles are also good introductions:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Brief Intro to SSL/TLS protocol mechanism"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security",target:"_blank",rel:"noopener noreferrer"}},[t._v("(Wikipedia) Transport Layer Security"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"register-a-domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-a-domain","aria-hidden":"true"}},[t._v("#")]),t._v(" Register a domain")]),t._v(" "),a("p",[t._v("If you have already registered a domain name, you may skip this step.\nTLS requires a registered domain, either free or paid are available and usable, so feel free to use a free domain, while in general, a paid domain would be better than a free one. Let's just assume you know how to get a working domain. If not, just simply Google it. There are plenty of better and detailed tutorials out there.")]),t._v(" "),a("p",[a("strong",[t._v("Note that, you need to add an A record points to your server IP address, after you register domain.")])]),t._v(" "),a("p",[a("strong",[t._v("The following configuration example will assume the registered domain is "),a("code",[t._v("mydomian.me")]),t._v(". Remember to replace it with your own ones.")])]),t._v(" "),a("h2",{attrs:{id:"generate-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-certificate","aria-hidden":"true"}},[t._v("#")]),t._v(" Generate Certificate")]),t._v(" "),a("p",[t._v("TLS is a certificate authentication mechanism, so a certificate is required to enable TLS, and certificates could also be free or paid. In this document, a free certificate is used. The certificate authority is "),a("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),a("OutboundLink")],1),t._v(".\nThere are many ways to generate a certificate. The simpler method is used here: Using "),a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme.sh"),a("OutboundLink")],1),t._v(" bash script to generate a certificate. Some of instructions in this section are referred from "),a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme.sh README"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("There are two types of certificates, one is the ECC certificate (the built-in public key is the ECDSA public key), and the other one is the RSA certificate (the built-in RSA public key). In other words, ECCs of the same length are more secure than RSA, which means that with the same security, the ECC key length is much shorter than RSA (so encryption and decryption will be faster). However, the ECC certificate have worse compatibility compared with the RSA certificate, and it is not supported by Android 4.x and Windows XP. As long as your devices are not unearthed artifacts, you are highly recommended to use an ECC certificate.")]),t._v(" "),a("p",[t._v("Here are methods of generating both type of certificate. You can choose one of them based on your situation.")]),t._v(" "),a("p",[t._v("The certificate generation process is only needed to do on your server-side.")]),t._v(" "),a("h3",{attrs:{id:"install-acme-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-acme-sh","aria-hidden":"true"}},[t._v("#")]),t._v(" Install acme.sh")]),t._v(" "),a("p",[t._v("By running the following commands, "),a("code",[t._v("acme.sh")]),t._v(" will be installed into "),a("code",[t._v("~/.acme.sh")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl  https://get.acme.sh | sh\n\n% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                               Dload  Upload   Total   Spent    Left  Speed\n100   671  100   671    0     0    680      0 --:--:-- --:--:-- --:--:--   679\n% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                               Dload  Upload   Total   Spent    Left  Speed\n100  112k  100  112k    0     0   690k      0 --:--:-- --:--:-- --:--:--  693k\n[Fri 30 Dec 01:03:32 GMT 2016] Installing from online archive.\n[Fri 30 Dec 01:03:32 GMT 2016] Downloading https://github.com/Neilpang/acme.sh/archive/master.tar.gz\n[Fri 30 Dec 01:03:33 GMT 2016] Extracting master.tar.gz\n[Fri 30 Dec 01:03:33 GMT 2016] Installing to /home/user/.acme.sh\n[Fri 30 Dec 01:03:33 GMT 2016] Installed to /home/user/.acme.sh/acme.sh\n[Fri 30 Dec 01:03:33 GMT 2016] Installing alias to '/home/user/.profile'\n[Fri 30 Dec 01:03:33 GMT 2016] OK, Close and reopen your terminal to start using acme.sh\n[Fri 30 Dec 01:03:33 GMT 2016] Installing cron job\nno crontab for user\nno crontab for user\n[Fri 30 Dec 01:03:33 GMT 2016] Good, bash is found, so change the shebang to use bash as preferred.\n[Fri 30 Dec 01:03:33 GMT 2016] OK\n[Fri 30 Dec 01:03:33 GMT 2016] Install success!\n\n")])])]),a("p",[t._v("After installation finished, run "),a("code",[t._v("source ~/.bashrc")]),t._v(" to ensure the command is applied to your bash environment.")]),t._v(" "),a("p",[t._v("If errors prompted during installation, probably your system is missing components "),a("code",[t._v("acme.sh")]),t._v(" needed, and it is highly possible to be "),a("code",[t._v("netcat (nc)")]),t._v(". If so, you can use the following command to install it (Debian-like Distribution only):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo apt-get -y install netcat\n")])])]),a("h3",{attrs:{id:"generate-certificate-with-acme-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-certificate-with-acme-sh","aria-hidden":"true"}},[t._v("#")]),t._v(" Generate certificate with acme.sh")]),t._v(" "),a("h4",{attrs:{id:"generate-certificate-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-certificate-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Generate Certificate")]),t._v(" "),a("p",[t._v("To generate certificate, simply run the following command:")]),t._v(" "),a("p",[t._v("The following command will listen on port 80, so make sure it is not occupied by other processes.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo ~/.acme.sh/acme.sh --issue -d mydomain.me --standalone -k ec-256\n\n[Fri Dec 30 08:59:12 HKT 2016] Standalone mode.\n[Fri Dec 30 08:59:12 HKT 2016] Single domain='mydomain.me'\n[Fri Dec 30 08:59:12 HKT 2016] Getting domain auth token for each domain\n[Fri Dec 30 08:59:12 HKT 2016] Getting webroot for domain='mydomain.me'\n[Fri Dec 30 08:59:12 HKT 2016] _w='no'\n[Fri Dec 30 08:59:12 HKT 2016] Getting new-authz for domain='mydomain.me'\n[Fri Dec 30 08:59:14 HKT 2016] The new-authz request is ok.\n[Fri Dec 30 08:59:14 HKT 2016] mydomain.me is already verified, skip.\n[Fri Dec 30 08:59:14 HKT 2016] mydomain.me is already verified, skip http-01.\n[Fri Dec 30 08:59:14 HKT 2016] mydomain.me is already verified, skip http-01.\n[Fri Dec 30 08:59:14 HKT 2016] Verify finished, start to sign.\n[Fri Dec 30 08:59:16 HKT 2016] Cert success.\n-----BEGIN CERTIFICATE-----\nMIIEMTCCAxmgAwIBAgISA1+gJF5zwUDjNX/6Xzz5fo3lMA0GCSqGSIb3DQEBCwUA\nMEoxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MSMwIQYDVQQD\nExpMZXQncyBFbmNyeXB0IEF1dGhvcml0eSBYMzAeFw0xNjEyMjkyMzU5MDBaFw0x\nNzAzMjkyMzU5MDBaMBcxFTATBgNVBAMTDHdlYWtzYW5kLmNvbTBZMBMGByqGSM49\n****************************************************************\n4p40tm0aMB837XQ9jeAXvXulhVH/7/wWZ8/vkUUvuHSCYHagENiq/3DYj4a85Iw9\n+6u1r7atYHJ2VwqSamiyTGDQuhc5wdXIQxY/YQQqkAmn5tLsTZnnOavc4plANT40\nzweiG8vcIvMVnnkM0TSz8G1yzv1nOkruN3ozQkLMu6YS7lk/ENBN7DBtYVSmJeU2\nVAXE+zgRaP7JFOqK6DrOwhyE2LSgae83Wq/XgXxjfIo1Zmn2UmlE0sbdNKBasnf9\ngPUI45eltrjcv8FCSTOUcT7PWCa3\n-----END CERTIFICATE-----\n[Fri Dec 30 08:59:16 HKT 2016] Your cert is in  /root/.acme.sh/mydomain.me_ecc/mydomain.me.cer\n[Fri Dec 30 08:59:16 HKT 2016] Your cert key is in  /root/.acme.sh/mydomain.me_ecc/mydomain.me.key\n[Fri Dec 30 08:59:16 HKT 2016] The intermediate CA cert is in  /root/.acme.sh/mydomain.me_ecc/ca.cer\n[Fri Dec 30 08:59:16 HKT 2016] And the full chain certs is there:  /root/.acme.sh/mydomain.me_ecc/fullchain.cer\n")])])]),a("p",[a("code",[t._v("-k")]),t._v(" stands for private key length，whose value can be "),a("code",[t._v("ec-256")]),t._v(" , "),a("code",[t._v("ec-384")]),t._v(", "),a("code",[t._v("2048")]),t._v(", "),a("code",[t._v("3072")]),t._v(", "),a("code",[t._v("4096")]),t._v(", and "),a("code",[t._v("8192")]),t._v(". Those with "),a("code",[t._v("ec-")]),t._v(" prefix means you are generating an ECC certificate, others are RSA certificate. Speaking of security, 256-bit length ECC certificate has an equal security level of 3072-bit RSA certificate.")]),t._v(" "),a("h4",{attrs:{id:"renew-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renew-certificate","aria-hidden":"true"}},[t._v("#")]),t._v(" Renew Certificate")]),t._v(" "),a("p",[t._v("As the free Let's Encrypt certificate expires every 90 days, at least one renewal is required per 90 days. By default, acme.sh will set up an auto renewal which runs every 60 days. You can also renew certificates manually.")]),t._v(" "),a("p",[t._v("To manually renew an ECC certificate, run:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo ~/.acme.sh/acme.sh --renew -d mydomain.com --force --ecc\n")])])]),a("p",[t._v("For RSA certificates, run:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo ~/.acme.sh/acme.sh --renew -d mydomain.com --force\n")])])]),a("p",[t._v("** As we were generating certificates into "),a("code",[t._v("/etc/v2ray")]),t._v(" folder, you also need to copy the renewed certificate into /etc/v2ray. **")]),t._v(" "),a("h3",{attrs:{id:"install-certificate-and-private-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-certificate-and-private-key","aria-hidden":"true"}},[t._v("#")]),t._v(" Install Certificate and Private Key")]),t._v(" "),a("h4",{attrs:{id:"ecc-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecc-certificate","aria-hidden":"true"}},[t._v("#")]),t._v(" ECC Certificate")]),t._v(" "),a("p",[t._v("Place certificate and private key into "),a("code",[t._v("/etc/v2ray")]),t._v(" folder:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo ~/.acme.sh/acme.sh --installcert -d mydomain.me --fullchainpath /etc/v2ray/v2ray.crt --keypath /etc/v2ray/v2ray.key --ecc\n")])])]),a("h4",{attrs:{id:"rsa-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rsa-certificate","aria-hidden":"true"}},[t._v("#")]),t._v(" RSA Certificate")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo ~/.acme.sh/acme.sh --installcert -d mydomain.me --fullchainpath /etc/v2ray/v2ray.crt --keypath /etc/v2ray/v2ray.key\n")])])]),a("p",[t._v("** NOTE: DO NOT expose or leak your private key (v2ray.key file as above) in ANY circumstances to ANY person. If unfortunately you leaked it, you can use "),a("code",[t._v("acme.sh")]),t._v(" to revoke it, and generate a new certificate. Detailed instructions are documented in acme.sh's own tutorials. **")]),t._v(" "),a("h2",{attrs:{id:"configure-v2ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-v2ray","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure V2Ray")]),t._v(" "),a("h3",{attrs:{id:"server-side"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-side","aria-hidden":"true"}},[t._v("#")]),t._v(" Server-side")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// recommended port")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23ad6b10-8d1a-40f7-8ad0-e3e35cd38297"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set security to tls to enable tls feature")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tlsSettings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"certificates"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"certificateFile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/v2ray/v2ray.crt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// certificate file")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyFile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/v2ray/v2ray.key"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// corresponding private key file")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-side"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-side","aria-hidden":"true"}},[t._v("#")]),t._v(" Client-side")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"socks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sniffing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"destOverride"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noauth"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vnext"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mydomain.me"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tls needs domain, so fill in your own.")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23ad6b10-8d1a-40f7-8ad0-e3e35cd38297"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set security to tls to enable tls feature.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"verify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify","aria-hidden":"true"}},[t._v("#")]),t._v(" Verify")]),t._v(" "),a("p",[t._v("Usually, after doing above steps, V2Ray client already can connected to internet, which means the TLS configuration is working. However, with a reliable way to verify if it is enabled will make it more convinced.")]),t._v(" "),a("p",[t._v("** NOTE: Qualys SSL Labs's SSL Server Test runs check on port 443, so you have to configure your server's inbound port to 443. **")]),t._v(" "),a("p",[t._v("Open "),a("a",{attrs:{href:"https://www.ssllabs.com/ssltest/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qualys SSL Labs's SSL Server Test"),a("OutboundLink")],1),t._v(' and put in your domain in "Hostname" text box, then click submit. Result would prompt in minutes.\n'),a("img",{attrs:{src:"/resource/images/tls_test1.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/resource/images/tls_test2.png",alt:""}}),t._v("\nThis is an overall scoring to your TLS/SSL configuration, Here I got A, which is nice enough and proves our TLS is working fine.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/resource/images/tls_test3.png",alt:""}}),t._v("\nHere it is your certificate information. In this screenshot we can see it is valid through Dec 27, 2016 to Mar 27, 2017, and the encryption method used is 256-bit ECC certificate, which is signed by Let's Encrypt. Most importantly, "),a("code",[t._v("Trusted")]),t._v(" status is "),a("code",[t._v("Yes")]),t._v(", which means the certificate can be trusted.")]),t._v(" "),a("h2",{attrs:{id:"tip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tip","aria-hidden":"true"}},[t._v("#")]),t._v(" Tip")]),t._v(" "),a("p",[t._v("** V2Ray is using a REAL TLS implementation rather than cloaking or obfuscation, that's why it needs domain and certificate. Also, the Websocket is REAL as well, which we'll talk about later. **")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updates","aria-hidden":"true"}},[t._v("#")]),t._v(" Updates")]),t._v(" "),a("ul",[a("li",[t._v("2017-08-06 Added some tips.")]),t._v(" "),a("li",[t._v("2017-12-31 Typo fixed.")]),t._v(" "),a("li",[t._v("2018-04-05 Update")]),t._v(" "),a("li",[t._v("2018-11-17 Adapted for V4.0+")])])])},[],!1,null,null,null);e.default=n.exports}}]);