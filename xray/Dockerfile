FROM teddysun/xray

RUN wget \
      https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geoip.dat && \
	mv geoip.dat /etc/xray/geoip.dat
RUN wget \
      https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geosite.dat && \
	mv geosite.dat /etc/xray/geosite.dat

COPY ./config.json /etc/xray/config.json
