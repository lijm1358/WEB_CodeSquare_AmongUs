(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),c=(t(0),t(84)),s={id:"openstack-api",title:"OpenStack API",description:"CodeSquare\ub294 \uad70 \ubcf5\ubb34\uc911\uc778 \uac1c\ubc1c\uc790\ub97c \uc704\ud55c \ud1b5\ud569 \uac1c\ubc1c \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."},o={unversionedId:"api/openstack-api",id:"api/openstack-api",isDocsHomePage:!1,title:"OpenStack API",description:"CodeSquare\ub294 \uad70 \ubcf5\ubb34\uc911\uc778 \uac1c\ubc1c\uc790\ub97c \uc704\ud55c \ud1b5\ud569 \uac1c\ubc1c \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4.",source:"@site/docs/api/openstack-api.md",slug:"/api/openstack-api",permalink:"/docs/api/openstack-api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/openstack-api.md",version:"current",sidebar:"api",previous:{title:"Virtual Machine",permalink:"/docs/api/backend/vm/vm"}},p=[{value:"Getting Started",id:"getting-started",children:[{value:"Obtaining an openstack api token",id:"obtaining-an-openstack-api-token",children:[]}]},{value:"User",id:"user",children:[{value:"User \ubaa9\ub85d",id:"user-\ubaa9\ub85d",children:[]},{value:"User \uc0dd\uc131",id:"user-\uc0dd\uc131",children:[]},{value:"User ID\ub97c \ud1b5\ud55c \uc870\ud68c",id:"user-id\ub97c-\ud1b5\ud55c-\uc870\ud68c",children:[]},{value:"User \ube44\ubc00\ubc88\ud638 \ubcc0\uacbd",id:"user-\ube44\ubc00\ubc88\ud638-\ubcc0\uacbd",children:[]},{value:"User \ud504\ub85c\uc81d\ud2b8 \ubc0f \uc5ed\ud560 \ubc30\uc815",id:"user-\ud504\ub85c\uc81d\ud2b8-\ubc0f-\uc5ed\ud560-\ubc30\uc815",children:[]},{value:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",children:[]}]},{value:"User VM \uc0dd\uc131",id:"user-vm-\uc0dd\uc131",children:[{value:"image \ubaa9\ub85d",id:"image-\ubaa9\ub85d",children:[]},{value:"flavor(\uc0ac\uc591) \ubaa9\ub85d",id:"flavor\uc0ac\uc591-\ubaa9\ub85d",children:[]},{value:"\ub124\ud2b8\uc6cc\ud06c \ubaa9\ub85d",id:"\ub124\ud2b8\uc6cc\ud06c-\ubaa9\ub85d",children:[]},{value:"\ubcf4\uc548 \uadf8\ub8f9 \ubaa9\ub85d",id:"\ubcf4\uc548-\uadf8\ub8f9-\ubaa9\ub85d",children:[]},{value:"VM \uc0dd\uc131",id:"vm-\uc0dd\uc131",children:[]}]},{value:"User VM \uad00\ub9ac",id:"user-vm-\uad00\ub9ac",children:[{value:"\uc778\uc2a4\ud134\uc2a4 \ubaa9\ub85d",id:"\uc778\uc2a4\ud134\uc2a4-\ubaa9\ub85d",children:[]},{value:"User VM status",id:"user-vm-status",children:[]},{value:"\ub124\ud2b8\uc6cc\ud06c \ud3ec\ud2b8 \ubaa9\ub85d",id:"\ub124\ud2b8\uc6cc\ud06c-\ud3ec\ud2b8-\ubaa9\ub85d",children:[]},{value:"floating/fixed ip \ubaa9\ub85d",id:"floatingfixed-ip-\ubaa9\ub85d",children:[]},{value:"\uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc720\ub3d9 ip \ud560\ub2f9",id:"\uc0dd\uc131\ub41c-\uc778\uc2a4\ud134\uc2a4\uc5d0-\uc720\ub3d9-ip-\ud560\ub2f9",children:[]}]},{value:"User VM \uc0ad\uc81c",id:"user-vm-\uc0ad\uc81c",children:[{value:"VM\uc5d0 \uc5f0\uacb0\ub418\uc5b4\uc788\ub294 \uc720\ub3d9 ip \ud574\uc81c \ubc0f \uc0ad\uc81c",id:"vm\uc5d0-\uc5f0\uacb0\ub418\uc5b4\uc788\ub294-\uc720\ub3d9-ip-\ud574\uc81c-\ubc0f-\uc0ad\uc81c",children:[]},{value:"vm \uc0ad\uc81c",id:"vm-\uc0ad\uc81c",children:[]}]}],i={rightToc:p};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"openstack VM \uc0dd\uc131\uc744 \uc704\ud55c api\uc785\ub2c8\ub2e4."),Object(c.b)("h2",{id:"getting-started"},"Getting Started"),Object(c.b)("h3",{id:"obtaining-an-openstack-api-token"},"Obtaining an openstack api token"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -i -H "Content-Type: application/json" \\\n-d \'\n{ "auth": {\n    "identity": {\n        "methods": ["password"],\n            "password": {\n                "user": {\n                    "name": "admin",\n                    "domain": { \n                        "id": "default" \n                       },\n                    "password": "password"\n                   }\n              }\n         },\n        "scope": {\n            "project": {\n                "name": "admin",\n                    "domain": { "id": "default" }\n              }\n         }\n    }\n}\' \\\n"http://stack.codesquare.space/identity/v3/auth/tokens" | grep X-Subject-Token\n')),Object(c.b)("p",null,"reference : ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openstack.org/api-ref/identity/v3/index.html?expanded=list-users-detail#users"}),"https://docs.openstack.org/api-ref/identity/v3/index.html?expanded=list-users-detail#users"),"\n\uc774\ud6c4 \ub098\uc624\ub294 $OS_TOKEN\uc740 \uc704\uc5d0\uc11c ",Object(c.b)("strong",{parentName:"p"},"X-Subject-Token")," \uac12\uc744 \uc800\uc7a5\ud55c \ubcc0\uc218\uc785\ub2c8\ub2e4."),Object(c.b)("h2",{id:"user"},"User"),Object(c.b)("h3",{id:"user-\ubaa9\ub85d"},"User \ubaa9\ub85d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s \\\n -H "X-Auth-Token: $OS_TOKEN" \\\n "http://stack.codesquare.space/identity/v3/users" | python -m json.tool\n')),Object(c.b)("h3",{id:"user-\uc0dd\uc131"},"User \uc0dd\uc131"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST \\\n -H "X-Auth-Token: $OS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'\n{"user": {\n    "default_project_id": [project_id],\n    "name": "newuser1234",\n    "password": "qwerty"\n    }\n}\' \\\n"http://stack.codesquare.space/identity/v3/users" | python -m json.tool\n')),Object(c.b)("p",null,"[project_id]"," \uc870\ud68c :"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n -H "X-Auth-Token: $OS_TOKEN" \\\n "http://stack.codesquare.space/identity/v3/projects" | python -m json.tool\n')),Object(c.b)("h3",{id:"user-id\ub97c-\ud1b5\ud55c-\uc870\ud68c"},"User ID\ub97c \ud1b5\ud55c \uc870\ud68c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s \\\n -H "X-Auth-Token: $OS_TOKEN" \\\n "http://stack.codesquare.space/identity/v3/users/267efb41d24746119e49dd64340f6d49" | python -m json.tool\n')),Object(c.b)("h3",{id:"user-\ube44\ubc00\ubc88\ud638-\ubcc0\uacbd"},"User \ube44\ubc00\ubc88\ud638 \ubcc0\uacbd"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s \\\n -H "X-Auth-Token: $OS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"user": {"password": "new_pw", "original_password": "original_pw"}}\' \\\n "http://stack.codesquare.space/identity/v3/users/[user_id]" | python -m json.tool\n')),Object(c.b)("h3",{id:"user-\ud504\ub85c\uc81d\ud2b8-\ubc0f-\uc5ed\ud560-\ubc30\uc815"},"User \ud504\ub85c\uc81d\ud2b8 \ubc0f \uc5ed\ud560 \ubc30\uc815"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s -X PUT \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space/identity/v3/projects/[project_id]/users/[user_id]/roles/[role_id]"\n')),Object(c.b)("p",null," ","[project id]","\ub294 \uc544\ub798\uc640 \uac19\uc740 \ubc29\ubc95\uc73c\ub85c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space/identity/v3/projects" | python -m json.tool\n')),Object(c.b)("p",null," ","[user_id]","\ub294 \uc544\ub798\uc640 \uac19\uc740 \ubc29\ubc95\uc73c\ub85c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space/identity/v3/roles" | python -m json.tool\n')),Object(c.b)("p",null," ","[role_id]","\ub294 \uc544\ub798\uc640 \uac19\uc740 \ubc29\ubc95\uc73c\ub85c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s \\\n-H "X-Auth-Token: $OS_TOKEN"  \\\n"http://stack.codesquare.space/identity/v3/roles" | python -m json.tool\n')),Object(c.b)("h3",{id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131"},"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -s \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n-H "Content-Type: application/json" \\\n-d \'{"project": {"name": "new1", "domain_id": "default"}}\' \\\n"http://stack.codesquare.space/identity/v3/projects" | python -m json.tool\n')),Object(c.b)("h2",{id:"user-vm-\uc0dd\uc131"},"User VM \uc0dd\uc131"),Object(c.b)("h3",{id:"image-\ubaa9\ub85d"},"image \ubaa9\ub85d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space/compute/v2.1/images" | python -m json.tool\n')),Object(c.b)("h3",{id:"flavor\uc0ac\uc591-\ubaa9\ub85d"},"flavor(\uc0ac\uc591) \ubaa9\ub85d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space/compute/v2.1/flavors" | python -m json.tool\n')),Object(c.b)("h3",{id:"\ub124\ud2b8\uc6cc\ud06c-\ubaa9\ub85d"},"\ub124\ud2b8\uc6cc\ud06c \ubaa9\ub85d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space:9999/v2.0/networks" | python -m json.tool\n')),Object(c.b)("h3",{id:"\ubcf4\uc548-\uadf8\ub8f9-\ubaa9\ub85d"},"\ubcf4\uc548 \uadf8\ub8f9 \ubaa9\ub85d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space:9999/v2.0/security-groups" | python -m json.tool\n')),Object(c.b)("h3",{id:"vm-\uc0dd\uc131"},"VM \uc0dd\uc131"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n-H "User-Agent: python-novaclient" \\\n-H "Content-Type:application/json" \\\n-H "Accept: application/json" \\\n-H "X-Auth-Token:$OS_TOKEN" \\\n-d \'\n{"server": {\n    "name":"test",\n    "imageRef":[image_id],\n    "flavorRef":[flavor_id],\n    "networks":[{"uuid":[network_id]}],\n    "security_groups": [{"name": [security_group_name]}],\n  "availability_zone": "nova:codesquare-devstack-compute2"\n    }\n}\' "http://stack.codesquare.space/compute/v2.1/servers"\n')),Object(c.b)("p",null,"\uc704\uc5d0\uc11c \uc5bb\uc740 \uc774\ubbf8\uc9c0 uuid(",Object(c.b)("inlineCode",{parentName:"p"},"[image_id]"),"), flavor id(",Object(c.b)("inlineCode",{parentName:"p"},"[flavor_id]"),") \ub124\ud2b8\uc6cc\ud06c uuid(",Object(c.b)("inlineCode",{parentName:"p"},"[network_id]"),"), \ubcf4\uc548 \uadf8\ub8f9 \uc774\ub984(",Object(c.b)("inlineCode",{parentName:"p"},"[security_group_name]"),")\uc744 \uc774\uc6a9\ud558\uc5ec \uc720\uc800 vm\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(c.b)("br",{parentName:"p"}),"\n","availability_zone\uc740 vm \uc5f0\uc0b0\uc744 \ub2f4\ub2f9\ud558\ub294 compute node\uc911 codesquare-devstack-compute2 \ub178\ub4dc\ub97c \uc0ac\uc6a9\ud558\uaca0\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4. "),Object(c.b)("h2",{id:"user-vm-\uad00\ub9ac"},"User VM \uad00\ub9ac"),Object(c.b)("h3",{id:"\uc778\uc2a4\ud134\uc2a4-\ubaa9\ub85d"},"\uc778\uc2a4\ud134\uc2a4 \ubaa9\ub85d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space/compute/v2.1/servers?all_tenants" | python -m json.tool\n')),Object(c.b)("p",null,"\uc138\ubd80\uc0ac\ud56d \ud655\uc778 \uc2dc\uc5d0\ub294 ",Object(c.b)("inlineCode",{parentName:"p"},"/servers/detail")," \uc744, \ud2b9\uc815 \uc720\uc800\uac00 \ub9cc\ub4e0 \uc778\uc2a4\ud134\uc2a4\ub9cc \ubcf4\ub824\uba74 url\ub05d \ubd80\ubd84\uc744 ",Object(c.b)("inlineCode",{parentName:"p"},"servers?all_tenants&user_id=[user_id]")," \ub85c \ud574\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4."),Object(c.b)("h3",{id:"user-vm-status"},"User VM status"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space/compute/v2.1/servers/[instance id]" | python -m json.tool\n')),Object(c.b)("p",null,"\uc704\uc758 \uc778\uc2a4\ud134\uc2a4 \ubaa9\ub85d\uc5d0\uc11c \ud655\uc778\ud55c instance id\ub97c \uc704 \uba85\ub839\uc5b4\uc758 ",Object(c.b)("inlineCode",{parentName:"p"},"[instance id]")," \ubd80\ubd84\uc5d0 \ub123\uace0 \uc2e4\ud589\ud558\uba74 \uc544\ub798\uc640 \uac19\uc740 response\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "server": {\n        "OS-DCF:diskConfig": "AUTO",\n        "OS-EXT-AZ:availability_zone": "nova",\n        "OS-EXT-SRV-ATTR:host": "codesquare-devstack-compute2",\n        "OS-EXT-SRV-ATTR:hypervisor_hostname": "codesquare-devstack-compute2",\n        "OS-EXT-SRV-ATTR:instance_name": "instance-00000005",\n        "OS-EXT-STS:power_state": 1,\n        "OS-EXT-STS:task_state": null,\n        "OS-EXT-STS:vm_state": "active",\n        "OS-SRV-USG:launched_at": "2020-10-16T06:26:08.000000",\n        "OS-SRV-USG:terminated_at": null,\n        "accessIPv4": "",\n        "accessIPv6": "",\n        "addresses": {\n            "private": [\n                {\n                    "OS-EXT-IPS-MAC:mac_addr": "fa:16:3e:9c:c3:19",\n                    "OS-EXT-IPS:type": "fixed",\n                    "addr": "fd07:2ead:dd0b:0:f816:3eff:fe9c:c319",\n                    "version": 6\n                },\n                {\n                    "OS-EXT-IPS-MAC:mac_addr": "fa:16:3e:9c:c3:19",\n                    "OS-EXT-IPS:type": "fixed",\n                    "addr": "10.0.0.28",\n                    "version": 4\n                },\n                {\n                    "OS-EXT-IPS-MAC:mac_addr": "fa:16:3e:9c:c3:19",\n                    "OS-EXT-IPS:type": "floating",\n                    "addr": "192.168.1.145",\n                    "version": 4\n                }\n            ]\n        },\n        "config_drive": "",\n        "created": "2020-10-16T06:26:03Z",\n        "flavor": {\n            "id": "42",\n            "links": [\n                {\n                    "href": "http://34.64.118.138/compute/flavors/42",\n                    "rel": "bookmark"\n                }\n            ]\n        },\n        "hostId": "92c073e37ee42a64987f4aaddb73d523f002658a39be9d5677693c9d",        "id": "43fd359d-1af1-47fa-b9d8-df7d9beba4e7",\n        "image": {\n            "id": "a0de3833-a8e9-4730-8094-ed55285520c6",\n            "links": [\n                {\n                    "href": "http://34.64.118.138/compute/images/a0de3833-a8e9-4730-8094-ed55285520c6",\n                    "rel": "bookmark"\n                }\n            ]\n        },\n        "key_name": "demo_key",\n        "links": [\n            {\n                "href": "http://34.64.118.138/compute/v2.1/servers/43fd359d-1af1-47fa-b9d8-df7d9beba4e7",\n                "rel": "self"\n            },\n            {\n                "href": "http://34.64.118.138/compute/servers/43fd359d-1af1-47fa-b9d8-df7d9beba4e7",\n                "rel": "bookmark"\n            }\n        ],\n        "metadata": {},\n        "name": "demo_cirros",\n        "os-extended-volumes:volumes_attached": [],\n        "progress": 0,\n        "security_groups": [\n            {\n                "name": "default"\n            }\n        ],\n        "status": "ACTIVE",\n        "tenant_id": "01f2a49eb6e94189b643e76fec5dda3b",\n        "updated": "2020-10-16T06:26:09Z",\n        "user_id": "1b8082a40c474a8387723bd1285f0525"\n    }\n}\n')),Object(c.b)("p",null,"\uc704\uc5d0\uc11c\ubd80\ud130 \ucc28\uadfc\ucc28\uadfc \ud544\uc694\ud55c \uc815\ubcf4\ub9cc \ubd80\uac00 \uc124\uba85 \ub4e4\uc5b4\uac11\ub2c8\ub2e4.\n",Object(c.b)("strong",{parentName:"p"},"Instance power state"),Object(c.b)("br",{parentName:"p"}),"\n",'"OS-EXT-STS:power_state": 1'),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"0: NOSTATE\n1: RUNNING\n3: PAUSED\n4: SHUTDOWN\n6: CRASHED\n7: SUSPENDED\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Instance booting info"),'\n"OS-SRV-USG:launched_at": "2020-10-16T06:26:08.000000"',Object(c.b)("br",{parentName:"p"}),"\n",'"OS-SRV-USG:terminated_at": null',Object(c.b)("br",{parentName:"p"}),"\n","\ub0a0\uc9dc \ubc0f \uc2dc\uac04 \ud3ec\ub9f7\uc740 ISO8601",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("inlineCode",{parentName:"p"},"CCYY-MM-DDThh:mm:ss\xb1hh:mm"),Object(c.b)("br",{parentName:"p"}),"\n","\uc544\uc9c1 instance\uac00 \uc885\ub8cc\ub418\uc9c0 \uc54a\uc558\uc73c\ubbc0\ub85c terminated at \uc740 null\ub85c \ub098\ud0c0\ub098\uace0 \uc788\uc2b5\ub2c8\ub2e4.",Object(c.b)("br",{parentName:"p"}),"\n","\ub9cc\uc57d date and time stamp\uc5d0 \xb1hh:mm\uac00 \ud3ec\ud568\ub41c\ub2e4\uba74, UTC\ub85c\ubd80\ud130\uc758 offset\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),Object(c.b)("h3",{id:"\ub124\ud2b8\uc6cc\ud06c-\ud3ec\ud2b8-\ubaa9\ub85d"},"\ub124\ud2b8\uc6cc\ud06c \ud3ec\ud2b8 \ubaa9\ub85d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n-H "X-Auth-Token: $OS_TOKEN" \\ \n"http://stack.codesquare.space:9999/v2.0/ports" | python -m json.tool\n')),Object(c.b)("h3",{id:"floatingfixed-ip-\ubaa9\ub85d"},"floating/fixed ip \ubaa9\ub85d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n"http://stack.codesquare.space:9999/v2.0/floatingips" | python -m json.tool\n')),Object(c.b)("h3",{id:"\uc0dd\uc131\ub41c-\uc778\uc2a4\ud134\uc2a4\uc5d0-\uc720\ub3d9-ip-\ud560\ub2f9"},"\uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc720\ub3d9 ip \ud560\ub2f9"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s \\\n -H "X-Auth-Token: $OS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'\n{"floatingip": {\n    "floating_network_id":[network_id],\n    "fixed_ip_address":[ip_address],\n    "port_id":[port_id]\n    }\n}\' "http://stack.codesquare.space:9999/v2.0/floatingips" | python -m json.tool\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"[network_id]"),"\ub294 \uc720\ub3d9 ip\ub97c \ud560\ub2f9\ubc1b\uc744 public \ub124\ud2b8\uc6cc\ud06c\uc758 id,",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("inlineCode",{parentName:"p"},"[ip_address]"),"\ub294 \uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4\uc5d0 \ud560\ub2f9\ub41c \uace0\uc815 ip,",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("inlineCode",{parentName:"p"},"[port_id]"),"\ub294 \uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4\uc5d0 \ud560\ub2f9\ub41c \uace0\uc815 ip\uc758 \ud3ec\ud2b8\uc785\ub2c8\ub2e4",Object(c.b)("br",{parentName:"p"}),"\n","\ub124\ud2b8\uc6cc\ud06c id\ub294 vm \uc0dd\uc131\uc2dc\uc5d0 \uc694\uccad\ud55c \ub124\ud2b8\uc6cc\ud06c \ubaa9\ub85d \uc911\uc5d0\uc11c, \uace0\uc815 ip \uc8fc\uc18c\ub294 \uc704\uc758 floating/fixed ip\ubaa9\ub85d \uc911\uc5d0\uc11c, \uace0\uc815 ip\uc758 \ud3ec\ud2b8\ub294 \uc704\uc758 \ub124\ud2b8\uc6cc\ud06c \ud3ec\ud2b8 \ubaa9\ub85d\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.    "),Object(c.b)("h2",{id:"user-vm-\uc0ad\uc81c"},"User VM \uc0ad\uc81c"),Object(c.b)("h3",{id:"vm\uc5d0-\uc5f0\uacb0\ub418\uc5b4\uc788\ub294-\uc720\ub3d9-ip-\ud574\uc81c-\ubc0f-\uc0ad\uc81c"},"VM\uc5d0 \uc5f0\uacb0\ub418\uc5b4\uc788\ub294 \uc720\ub3d9 ip \ud574\uc81c \ubc0f \uc0ad\uc81c"),Object(c.b)("p",null,"\ub2e8\uc21c\ud788 vm\ub9cc \uc0ad\uc81c\ud558\uba74 vm\uc5d0 \uc5f0\uacb0\ub418\uc5b4\uc788\ub294 \uc720\ub3d9 ip\ub294 \uc9c0\uc6cc\uc9c0\uc9c0 \uc54a\uace0 \ub2e4\ub978 vm\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \uc0c1\ud0dc\ub85c \ub0a8\uc544\uc788\uac8c \ub429\ub2c8\ub2e4. \uc774\ub97c \uc7ac\uc0ac\uc6a9\ud558\uae30\uc5d0\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc5f0\uacb0\ub418\uc5b4\uc788\ub358 \uc720\ub3d9 ip\uc758 \uc5f0\uacb0\uc744 \ud574\uc81c\ud55c \ub4a4, \uc0ad\uc81c\ud574\uc90d\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X DELETE \\\n-H "X-Auth-Token: $OS_TOKEN" \\\n-H "Accept: application/json" \\\n"http://stack.codesquare.space:9999/v2.0/floatingips/[floatingIp_id]" | python -m json.tool\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"[floatingIp_id]"),"\ub294 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc720\ub3d9 ip \ud560\ub2f9 \uc2dc \uc694\uccad\ud588\ub358 floating/fixed ip \ubaa9\ub85d\uc73c\ub85c\ubd80\ud130 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("h3",{id:"vm-\uc0ad\uc81c"},"vm \uc0ad\uc81c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X DELETE \\\n-H "X-Auth-Token:$OS_TOKEN" \\\n"http://stack.codesquare.space/compute/v2.1/servers/[Instance_Id]"\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"[Instance_Id]"),"\ub294 VM \uad00\ub9ac \ud56d\ubaa9\uc758 \uc778\uc2a4\ud134\uc2a4 \ubaa9\ub85d\uc73c\ub85c\ubd80\ud130 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},84:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),d=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=d(t),u=a,O=l["".concat(s,".").concat(u)]||l[u]||b[u]||c;return t?r.a.createElement(O,o(o({ref:n},i),{},{components:t})):r.a.createElement(O,o({ref:n},i))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,s=new Array(c);s[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<c;i++)s[i]=t[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);