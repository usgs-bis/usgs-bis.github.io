(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(7),r=(n(0),n(120)),l={id:"pipeline_overview",title:"Pipeline Overview",sidebar_label:"Overview"},s={id:"pipeline_overview",title:"Pipeline Overview",description:"# Running external scripts in the pipeline",source:"@site/docs/pipeline_overview.md",permalink:"/pipeline_overview",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/pipeline_overview.md",sidebar_label:"Overview",sidebar:"someSidebar"},o=[{value:"Structure",id:"structure",children:[]},{value:"Method Signature for <code>process_nn(path, ch_ledger, send_final_result, send_to_stage, previous_stage_result)</code>",id:"method-signature-for-process_nnpath-ch_ledger-send_final_result-send_to_stage-previous_stage_result",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]}]},{value:"<code>ChangeLedger</code> Class",id:"changeledger-class",children:[{value:"<code>log_change_event(row_id, file_name, function_name, change_name, change_description, source, result)</code>",id:"log_change_eventrow_id-file_name-function_name-change_name-change_description-source-result",children:[]}]},{value:"<code>send_final_result(final_result)</code> Method",id:"send_final_resultfinal_result-method",children:[{value:"General Notes",id:"general-notes",children:[]}]},{value:"<code>send_to_stage(data, stage)</code> Method",id:"send_to_stagedata-stage-method",children:[]}],c={rightToc:o};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"running-external-scripts-in-the-pipeline"},"Running external scripts in the pipeline"),Object(r.b)("p",null,"(Documentation is in progress)"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"img/pipeline.png",alt:"Pipeline AWS Infrastructure"}))),Object(r.b)("h2",{id:"structure"},"Structure"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A pipeline processing package should have an entry file which we will infer the pipeline name from (ex. usnvc)."),Object(r.b)("li",{parentName:"ul"},"The package can implement any number of process methods, however, the developer should strive to use the minimum number required."),Object(r.b)("li",{parentName:"ul"},"The processing methods should be named ",Object(r.b)("inlineCode",{parentName:"li"},"process_1(...)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"process_2(...)"),", . . . , ",Object(r.b)("inlineCode",{parentName:"li"},"process_nn(...)")," ect."),Object(r.b)("li",{parentName:"ul"},"A process method must take less then 15 minutes to execute. If it takes more consider breaking the logic out into an additional step. "),Object(r.b)("li",{parentName:"ul"},"Total dependencies should be less then 250MB"),Object(r.b)("li",{parentName:"ul"},"Each process method has an identical signature described below.")),Object(r.b)("h2",{id:"method-signature-for-process_nnpath-ch_ledger-send_final_result-send_to_stage-previous_stage_result"},"Method Signature for ",Object(r.b)("inlineCode",{parentName:"h2"},"process_nn(path, ch_ledger, send_final_result, send_to_stage, previous_stage_result)")),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"path"),": The location of source data requested by this pipeline"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#changeledger-class"}),Object(r.b)("inlineCode",{parentName:"a"},"ch_ledger")),": An instance of the change leger class.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example: ",Object(r.b)("inlineCode",{parentName:"li"},'ch_ledger.log_change_event("field_id", "fieldChanger.py", "changeField", "Field Creation", "Creating feature_id field from REG_NUM", source_data, changed_data)')))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#send_final_resultfinal_result-method"}),Object(r.b)("inlineCode",{parentName:"a"},"send_final_result")),": Instance of a method that accepts a python object representation of a single row of completed, processed data",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example: ",Object(r.b)("inlineCode",{parentName:"li"},'send_final_result({"row_id": "1234", "data": { "foo": "bar"... } })')))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#send_to_stagedata-stage-method"}),Object(r.b)("inlineCode",{parentName:"a"},"send_to_stage")),": Instance of a method that accepts a python object representation of a single row of data that will be processed by the next stage and the integer stage to send it to. ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example: ",Object(r.b)("inlineCode",{parentName:"li"},'send_to_stage({"any": "data"}, 2)')))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"previous_stage_result"),": The python object from the previous stage provided by the developer when calling send_to_stage.")),Object(r.b)("h3",{id:"returns"},"Returns"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A single integer representing the number of rows manipulated by the method.")),Object(r.b)("h1",{id:"provided-methodsclasses"},"Provided Methods/Classes"),Object(r.b)("h2",{id:"changeledger-class"},Object(r.b)("inlineCode",{parentName:"h2"},"ChangeLedger")," Class"),Object(r.b)("h3",{id:"log_change_eventrow_id-file_name-function_name-change_name-change_description-source-result"},Object(r.b)("inlineCode",{parentName:"h3"},"log_change_event(row_id, file_name, function_name, change_name, change_description, source, result)")),Object(r.b)("h4",{id:"parameters-1"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"row_id")," (",Object(r.b)("inlineCode",{parentName:"li"},"string"),") the unique identifier for the row of data"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"file_name")," (",Object(r.b)("inlineCode",{parentName:"li"},"string"),") the name of the file making the change"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"function_name")," (",Object(r.b)("inlineCode",{parentName:"li"},"string"),") the name of the function making the change"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"change_name")," (",Object(r.b)("inlineCode",{parentName:"li"},"string"),") change name, should be short for searching against"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"change_description")," (",Object(r.b)("inlineCode",{parentName:"li"},"string"),") detailed descripition of the change"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"source")," (",Object(r.b)("inlineCode",{parentName:"li"},"object"),") data before the change, validated against a json schema if provided"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"result")," (",Object(r.b)("inlineCode",{parentName:"li"},"object"),") data after the change, validated against a json schema if provided")),Object(r.b)("h4",{id:"returns-1"},"Returns"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"None")," or json schema validation error"),Object(r.b)("h2",{id:"send_final_resultfinal_result-method"},Object(r.b)("inlineCode",{parentName:"h2"},"send_final_result(final_result)")," Method"),Object(r.b)("h3",{id:"general-notes"},"General Notes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It is the responsibility of the domain expert to verify the documents produced as it relates to the subject."),Object(r.b)("li",{parentName:"ul"},"We do validate that these documents are valid json in our ingestible schema.")),Object(r.b)("h4",{id:"parameters-2"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"final_result")," (",Object(r.b)("inlineCode",{parentName:"li"},"object"),") must meet the following json schema:  ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "definitions": {},\n    "$schema": "http://json-schema.org/draft-07/schema#",\n    "$id": "http://example.com/root.json",\n    "type": "object",\n    "required": ["data", "row_id"],\n    "properties": {\n        "data": {\n            "$id": "#/properties/data",\n            "type": "object",\n        },\n        "row_id": {\n            "$id": "#/properties/row_id",\n            "type": "string",\n            "default": "",\n            "examples": [""],\n            "pattern": "^(.*)$"\n        },\n        "geometry": {\n            "$id": "#/properties/geometry/properties/geometry",\n            "type": "object",\n            "required": ["type", "coordinates", "crs"],\n            "properties": {\n                "type": {\n                    "$id": "#/properties/geometry/properties/geometry/properties/type",\n                    "type": "string",\n                    "default": "",\n                    "examples": [""],\n                    "pattern": "^(.*)$"\n                },\n                "coordinates": {\n                    "$id": "#/properties/geometry/properties/geometry/properties/coordinates",\n                },\n                "crs": {\n                    "$id": "#/properties/crs",\n                    "type": "object",\n                    "title": "The Crs Schema",\n                    "required": [\n                        "type",\n                        "properties"\n                    ],\n                    "properties": {\n                        "type": {\n                            "$id": "#/properties/crs/properties/type",\n                            "type": "string",\n                            "title": "The Type Schema",\n                            "default": "",\n                            "examples": [\n                                "name"\n                            ],\n                            "pattern": "^(.*)$"\n                        },\n                        "properties": {\n                            "$id": "#/properties/crs/properties/properties",\n                            "type": "object",\n                            "title": "The Properties Schema",\n                            "required": [\n                                "name"\n                            ],\n                            "properties": {\n                                "name": {\n                                    "$id": "#/properties/crs/properties/properties/properties/name",\n                                    "type": "string",\n                                    "title": "The Name Schema",\n                                    "default": "",\n                                    "examples": [\n                                        "EPSG:3857"\n                                    ],\n                                    "pattern": "^(.*)$"\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"When a json schema is provided the ",Object(r.b)("inlineCode",{parentName:"em"},"data")," property must match that schema")),Object(r.b)("h4",{id:"returns-2"},"Returns"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"None")," or json schema validation error"),Object(r.b)("h2",{id:"send_to_stagedata-stage-method"},Object(r.b)("inlineCode",{parentName:"h2"},"send_to_stage(data, stage)")," Method"),Object(r.b)("h4",{id:"parameters-3"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data")," any type, this will be passed to the next stage"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stage")," not used currently")))}d.isMDXComponent=!0}}]);