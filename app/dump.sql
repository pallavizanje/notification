;             
CREATE USER IF NOT EXISTS "SA" SALT '8e5087a64d612f05' HASH '82479fce42c9956e9ba0d4a1e5f7db74f1f4864d599ab251e76a301e97b57187' ADMIN;         
CREATE SEQUENCE "PUBLIC"."SYSTEM_SEQUENCE_2AD5CF75_FBD4_424C_8AA8_AE055751F591" START WITH 4 BELONGS_TO_TABLE;
CREATE CACHED TABLE "PUBLIC"."TBL_INVITES"(
    "INVITE_ID" BIGINT DEFAULT NEXT VALUE FOR "PUBLIC"."SYSTEM_SEQUENCE_2AD5CF75_FBD4_424C_8AA8_AE055751F591" NOT NULL NULL_TO_DEFAULT SEQUENCE "PUBLIC"."SYSTEM_SEQUENCE_2AD5CF75_FBD4_424C_8AA8_AE055751F591",
    "INVITE" VARCHAR(255),
    "CREATED_AT" DATE,
    "SENDER_ID" VARCHAR(255),
    "SIG_ID" VARCHAR(255),
    "STATUS" BOOLEAN,
    "USER_ID" VARCHAR(255),
    "VECTOR" VARCHAR(255)
);               
ALTER TABLE "PUBLIC"."TBL_INVITES" ADD CONSTRAINT "PUBLIC"."CONSTRAINT_6" PRIMARY KEY("INVITE_ID");           
-- 3 +/- SELECT COUNT(*) FROM PUBLIC.TBL_INVITES;             
INSERT INTO "PUBLIC"."TBL_INVITES" VALUES
(1, 'The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\nPlease follow this link to open Situation Room: http://www.crestdatasys.com', DATE '2021-05-02', 'andrew', '92394', TRUE, '1', 'Twitter'),
(2, 'The Owner has invited you to join Situation 49120 [No access to AWS account]\nPlease follow this link to open Situation Room: http://www.crestdatasys.com', DATE '2021-05-02', 'andrew', '49120', FALSE, '1', 'Internal'),
(3, 'The Owner has invited you to join Situation 49120 [No access to AWS account]\nPlease follow this link to open Situation Room: http://www.crestdatasys.com', DATE '2021-05-03', 'mike', '10293', FALSE, '2', 'Email');         
