package com.greatway.model;

import java.math.BigInteger;

/**
 * 焊工
 * @author gpyf16
 *
 */
public class Welder {
	private BigInteger id;
	private String welderno;
	private String name;
	
	public BigInteger getId() {
		return id;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public String getWelderno() {
		return welderno;
	}
	public void setWelderno(String welderno) {
		this.welderno = welderno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
