cd /app
chmod +x mysed
./mysed replace -o ==foVH2IHmswBf177fFZ33fhuizIOFruh3dHFD== -n $PRO_BASE_URL
./mysed replace -o ==foVH2IHeofDf249MAPAIHOUTAIUPLOADfND3== -n $PRO_BASE_UPLOAD
./mysed replace -o ==prVH2IHeofDf249APPAIHOUTAPROCESSfND3== -n $PRO_BASE_PROCESS
./mysed replace -o ==foSW2OtdwfDf249MAPAPPAIH5BASEURLTD5== -n $PRO_H5_BASE_URL
./mysed replace -o ==foDZ2OtdwfDf33MINIAPPAIH5BASEURLTD5== -n $PRO_MINI_BASE_URL
./mysed replace -o ==foSW55tdwfDf249DOWNLOADAPPBASEURLTD5== -n $PRO_APP_ID
nginx -g 'daemon off;'
